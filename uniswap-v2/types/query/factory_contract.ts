/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/factory_contract';
import type * as ReturnTypes from '../types-returns/factory_contract';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* setFeeToSetter
	*
	* @param { ArgumentTypes.AccountId } feeToSetter,
	* @returns { null }
	*/
	"setFeeToSetter" (
		feeToSetter: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "factory::setFeeToSetter", [feeToSetter], __options );
	}

	/**
	* allPairsLength
	*
	* @returns { number }
	*/
	"allPairsLength" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::allPairsLength", [], __options );
	}

	/**
	* pairContractCodeHash
	*
	* @returns { ReturnTypes.Hash }
	*/
	"pairContractCodeHash" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Hash > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::pairContractCodeHash", [], __options , (result) => { return handleReturnType(result, getTypeDescription(8, 'factory_contract')); });
	}

	/**
	* createPair
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	* @returns { ReturnTypes.AccountId }
	*/
	"createPair" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "factory::createPair", [tokenA, tokenB], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'factory_contract')); });
	}

	/**
	* setFeeTo
	*
	* @param { ArgumentTypes.AccountId } feeTo,
	* @returns { null }
	*/
	"setFeeTo" (
		feeTo: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "factory::setFeeTo", [feeTo], __options );
	}

	/**
	* feeTo
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"feeTo" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::feeTo", [], __options , (result) => { return handleReturnType(result, getTypeDescription(0, 'factory_contract')); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::getPair", [tokenA, tokenB], __options , (result) => { return handleReturnType(result, getTypeDescription(20, 'factory_contract')); });
	}

	/**
	* feeToSetter
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"feeToSetter" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::feeToSetter", [], __options , (result) => { return handleReturnType(result, getTypeDescription(0, 'factory_contract')); });
	}

	/**
	* allPairs
	*
	* @param { (number | string | BN) } pid,
	* @returns { ReturnTypes.AccountId | null }
	*/
	"allPairs" (
		pid: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "factory::allPairs", [pid], __options , (result) => { return handleReturnType(result, getTypeDescription(20, 'factory_contract')); });
	}

}