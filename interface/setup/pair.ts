import { CodePromise, ContractPromise } from "@polkadot/api-contract";
import { BN } from "bn.js";
import { useContext } from "react";
import PAIR_CONTRACT from '../contract/abi/pair'
import FACTORY_CONTRACT from '../contract/abi/factory'
import { TransactionContext } from "../context/TransactionContext";
import FACTORY_WASM from "../contract/wasm/factory_wasm";
import PAIR_WASM from "../contract/wasm/pair_wasm";

const ONE = new BN(10).pow(new BN(18))

const setup_pair = async () => {
  //setup token address
  const tokenA = ''
  const tokenB = ''

  const gasLimit = 18750000000;
  const storageDepositLimit = null
  const { api, currentAccount } = useContext(TransactionContext)
  const MINIMUM_LIQUIDITY = 1000
  //get wasm
  const pair_wasm = PAIR_WASM.source.wasm
  const factory_wasm = FACTORY_WASM.source.wasm
  const fee_to_setter = 'ZebrEKmacXyyTxcfLWUeG5byHSN8AdpDhvjx5Esdg5oR7yR'//dev1
  //initialize pair contract
  const pair = new CodePromise(api, PAIR_CONTRACT, pair_wasm);
  //deploy new pair contract
  const pair_contract = pair.tx.new({ gasLimit, storageDepositLimit })
  const pair_code_hash = PAIR_CONTRACT.source.hash
  //initialize factory contract
  const factory = new CodePromise(api, FACTORY_CONTRACT, factory_wasm);
  //deploy new factory contract
  const factory_contract = factory.tx.new({ gasLimit, storageDepositLimit }, fee_to_setter, pair_code_hash)
  //await factory_contract.factory.tx["factory::createPair"](tokenA, tokenB)

}

export default setup_pair;