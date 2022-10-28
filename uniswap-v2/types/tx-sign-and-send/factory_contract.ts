/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/factory_contract';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* setFeeToSetter
	*
	* @param { ArgumentTypes.AccountId } feeToSetter,
	*/
	"setFeeToSetter" (
		feeToSetter: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::setFeeToSetter", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [feeToSetter], __options);
	}

	/**
	* allPairsLength
	*
	*/
	"allPairsLength" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::allPairsLength", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [], __options);
	}

	/**
	* pairContractCodeHash
	*
	*/
	"pairContractCodeHash" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::pairContractCodeHash", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [], __options);
	}

	/**
	* createPair
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	*/
	"createPair" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::createPair", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [tokenA, tokenB], __options);
	}

	/**
	* setFeeTo
	*
	* @param { ArgumentTypes.AccountId } feeTo,
	*/
	"setFeeTo" (
		feeTo: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::setFeeTo", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [feeTo], __options);
	}

	/**
	* feeTo
	*
	*/
	"feeTo" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::feeTo", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [], __options);
	}

	/**
	* getPair
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	*/
	"getPair" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::getPair", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [tokenA, tokenB], __options);
	}

	/**
	* feeToSetter
	*
	*/
	"feeToSetter" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::feeToSetter", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [], __options);
	}

	/**
	* allPairs
	*
	* @param { (number | string | BN) } pid,
	*/
	"allPairs" (
		pid: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "factory::allPairs", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "factory_contract");
		}, [pid], __options);
	}

}