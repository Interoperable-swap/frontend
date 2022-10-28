/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/factory_contract';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * setFeeToSetter
	 *
	 * @param { ArgumentTypes.AccountId } feeToSetter,
	*/
	"setFeeToSetter" (
		feeToSetter: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::setFeeToSetter", [feeToSetter], __options);
	}

	/**
	 * allPairsLength
	 *
	*/
	"allPairsLength" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::allPairsLength", [], __options);
	}

	/**
	 * pairContractCodeHash
	 *
	*/
	"pairContractCodeHash" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::pairContractCodeHash", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::createPair", [tokenA, tokenB], __options);
	}

	/**
	 * setFeeTo
	 *
	 * @param { ArgumentTypes.AccountId } feeTo,
	*/
	"setFeeTo" (
		feeTo: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::setFeeTo", [feeTo], __options);
	}

	/**
	 * feeTo
	 *
	*/
	"feeTo" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::feeTo", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::getPair", [tokenA, tokenB], __options);
	}

	/**
	 * feeToSetter
	 *
	*/
	"feeToSetter" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::feeToSetter", [], __options);
	}

	/**
	 * allPairs
	 *
	 * @param { (number | string | BN) } pid,
	*/
	"allPairs" (
		pid: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "factory::allPairs", [pid], __options);
	}

}