/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/factory_contract';
import type * as ReturnTypes from '../types-returns/factory_contract';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* setFeeToSetter
	*
	* @param { ArgumentTypes.AccountId } feeToSetter,
	* @returns { void }
	*/
	"setFeeToSetter" (
		feeToSetter: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::setFeeToSetter", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [feeToSetter], __options);
	}

	/**
	* allPairsLength
	*
	* @returns { number }
	*/
	"allPairsLength" (
		__options: GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::allPairsLength", [], __options);
	}

	/**
	* pairContractCodeHash
	*
	* @returns { ReturnTypes.Hash }
	*/
	"pairContractCodeHash" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Hash > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::pairContractCodeHash", [], __options, (result) => { return handleReturnType(result, getTypeDescription(8, 'factory_contract')); });
	}

	/**
	* createPair
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	* @returns { void }
	*/
	"createPair" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::createPair", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [tokenA, tokenB], __options);
	}

	/**
	* setFeeTo
	*
	* @param { ArgumentTypes.AccountId } feeTo,
	* @returns { void }
	*/
	"setFeeTo" (
		feeTo: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::setFeeTo", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [feeTo], __options);
	}

	/**
	* feeTo
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"feeTo" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::feeTo", [], __options, (result) => { return handleReturnType(result, getTypeDescription(0, 'factory_contract')); });
	}

	/**
	* getPair
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	* @returns { ReturnTypes.AccountId | null }
	*/
	"getPair" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::getPair", [tokenA, tokenB], __options, (result) => { return handleReturnType(result, getTypeDescription(20, 'factory_contract')); });
	}

	/**
	* feeToSetter
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"feeToSetter" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::feeToSetter", [], __options, (result) => { return handleReturnType(result, getTypeDescription(0, 'factory_contract')); });
	}

	/**
	* allPairs
	*
	* @param { (number | string | BN) } pid,
	* @returns { ReturnTypes.AccountId | null }
	*/
	"allPairs" (
		pid: (number | string | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::allPairs", [pid], __options, (result) => { return handleReturnType(result, getTypeDescription(20, 'factory_contract')); });
	}

}