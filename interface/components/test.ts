import { encodeAddress } from '@polkadot/keyring';
import BN from 'bn.js';
import Factory_factory from '../types/constructors/factory_contract';
import Pair_factory from '../types/constructors/pair_contract';
import Token_factory from '../types/constructors/psp22_token';
import Wnative_factory from '../types/constructors/wnative_contract';
import Router_factory from '../types/constructors/router_contract';
import Factory from '../types/contracts/factory_contract';
import Pair from '../types/contracts/pair_contract';
import Token from '../types/contracts/psp22_token';
import Wnative from '../types/contracts/wnative_contract';
import Router from '../types/contracts/router_contract';
import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { KeyringPair } from '@polkadot/keyring/types';
import { AccountId, Hash } from '../types/types-arguments/factory_contract';
import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react';
const zeroAddress = encodeAddress(
	'0x0000000000000000000000000000000000000000000000000000000000000000',
);

const MINIMUM_LIQUIDITY = 1000;

// Create a new instance of contract
const { api } = useContext(TransactionContext)
// Create a keyring instance
const keyring = new Keyring({ type: 'sr25519' });

let pairFactory: Pair_factory;
let factoryFactory: Factory_factory;
let routerFactory: Router_factory;
let tokenFactory: Token_factory;
let wnativeFactory: Wnative_factory;
//let api: ApiPromise;
let deployer: KeyringPair;
let wallet: KeyringPair;
// const alice = keyring.addFromUri('//Alice//stash');
// const bob = keyring.addFromUri('//Bob//stash');

let pairHash: Hash;
let factory: Factory;
let router: Router;
let [token1, token2]: Token[] = [];
let wnative: Wnative;

//setup psp22contract
async function setupPsp22(): Promise<void> {
	tokenFactory = new Token_factory(api, deployer);
	const totalSupply = new BN(10000000);

	//create new token. tokenaddress = token contract address
	const tokenAaddress = (await tokenFactory.new(totalSupply)).address;
	const tokenBaddress = (await tokenFactory.new(totalSupply)).address;
	const [token1Address, token2Address] =
		tokenAaddress > tokenBaddress
			? [tokenBaddress, tokenAaddress]
			: [tokenAaddress, tokenBaddress];
	token1 = new Token(token1Address, deployer, api);
	token2 = new Token(token2Address, deployer, api);
}

async function setupRouter(): Promise<void> {
	wnativeFactory = new Wnative_factory(api, deployer);
	wnative = new Wnative((await wnativeFactory.new()).address, deployer, api);
	routerFactory = new Router_factory(api, deployer);
	router = new Router(
		(
			await routerFactory.new(factory.address, wnative.address, pairHash)
		).address,
		deployer,
		api,
	);
}
//

