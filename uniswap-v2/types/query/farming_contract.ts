/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/farming_contract';
import type * as ReturnTypes from '../types-returns/farming_contract';
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
	* withdraw
	*
	* @param { (number | string | BN) } poolId,
	* @param { (string | number | BN) } amount,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { null }
	*/
	"withdraw" (
		poolId: (number | string | BN),
		amount: (string | number | BN),
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "farming::withdraw", [poolId, amount, to], __options );
	}

	/**
	* add
	*
	* @param { (number | string | BN) } allocPoint,
	* @param { ArgumentTypes.AccountId } lpToken,
	* @param { ArgumentTypes.AccountId | null } rewarder,
	* @returns { null }
	*/
	"add" (
		allocPoint: (number | string | BN),
		lpToken: ArgumentTypes.AccountId,
		rewarder: ArgumentTypes.AccountId | null,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "farming::add", [allocPoint, lpToken, rewarder], __options );
	}

	/**
	* pendingArsw
	*
	* @param { (number | string | BN) } poolId,
	* @param { ArgumentTypes.AccountId } user,
	* @returns { ReturnNumber }
	*/
	"pendingArsw" (
		poolId: (number | string | BN),
		user: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "farming::pendingArsw", [poolId, user], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* deposit
	*
	* @param { (number | string | BN) } poolId,
	* @param { (string | number | BN) } amount,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { null }
	*/
	"deposit" (
		poolId: (number | string | BN),
		amount: (string | number | BN),
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "farming::deposit", [poolId, amount, to], __options );
	}

	/**
	* harvest
	*
	* @param { (number | string | BN) } poolId,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { null }
	*/
	"harvest" (
		poolId: (number | string | BN),
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "farming::harvest", [poolId, to], __options );
	}

	/**
	* getLpToken
	*
	* @param { (number | string | BN) } poolId,
	* @returns { ReturnTypes.AccountId | null }
	*/
	"getLpToken" (
		poolId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "farmingGetters::getLpToken", [poolId], __options , (result) => { return handleReturnType(result, getTypeDescription(20, 'farming_contract')); });
	}

	/**
	* getPoolInfos
	*
	* @param { (number | string | BN) } poolId,
	* @returns { ReturnTypes.Pool | null }
	*/
	"getPoolInfos" (
		poolId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Pool | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "farmingGetters::getPoolInfos", [poolId], __options , (result) => { return handleReturnType(result, getTypeDescription(22, 'farming_contract')); });
	}

	/**
	* getUserInfo
	*
	* @param { (number | string | BN) } poolId,
	* @param { ArgumentTypes.AccountId } user,
	* @returns { [ReturnNumber, ReturnNumber] | null }
	*/
	"getUserInfo" (
		poolId: (number | string | BN),
		user: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber] | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "farmingGetters::getUserInfo", [poolId, user], __options , (result) => { return handleReturnType(result, getTypeDescription(23, 'farming_contract')); });
	}

	/**
	* poolLength
	*
	* @returns { number }
	*/
	"poolLength" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "farmingGetters::poolLength", [], __options );
	}

}