/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/farming_contract';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * withdraw
	 *
	 * @param { (number | string | BN) } poolId,
	 * @param { (string | number | BN) } amount,
	 * @param { ArgumentTypes.AccountId } to,
	*/
	"withdraw" (
		poolId: (number | string | BN),
		amount: (string | number | BN),
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farming::withdraw", [poolId, amount, to], __options);
	}

	/**
	 * add
	 *
	 * @param { (number | string | BN) } allocPoint,
	 * @param { ArgumentTypes.AccountId } lpToken,
	 * @param { ArgumentTypes.AccountId | null } rewarder,
	*/
	"add" (
		allocPoint: (number | string | BN),
		lpToken: ArgumentTypes.AccountId,
		rewarder: ArgumentTypes.AccountId | null,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farming::add", [allocPoint, lpToken, rewarder], __options);
	}

	/**
	 * pendingArsw
	 *
	 * @param { (number | string | BN) } poolId,
	 * @param { ArgumentTypes.AccountId } user,
	*/
	"pendingArsw" (
		poolId: (number | string | BN),
		user: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farming::pendingArsw", [poolId, user], __options);
	}

	/**
	 * deposit
	 *
	 * @param { (number | string | BN) } poolId,
	 * @param { (string | number | BN) } amount,
	 * @param { ArgumentTypes.AccountId } to,
	*/
	"deposit" (
		poolId: (number | string | BN),
		amount: (string | number | BN),
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farming::deposit", [poolId, amount, to], __options);
	}

	/**
	 * harvest
	 *
	 * @param { (number | string | BN) } poolId,
	 * @param { ArgumentTypes.AccountId } to,
	*/
	"harvest" (
		poolId: (number | string | BN),
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farming::harvest", [poolId, to], __options);
	}

	/**
	 * getLpToken
	 *
	 * @param { (number | string | BN) } poolId,
	*/
	"getLpToken" (
		poolId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farmingGetters::getLpToken", [poolId], __options);
	}

	/**
	 * getPoolInfos
	 *
	 * @param { (number | string | BN) } poolId,
	*/
	"getPoolInfos" (
		poolId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farmingGetters::getPoolInfos", [poolId], __options);
	}

	/**
	 * getUserInfo
	 *
	 * @param { (number | string | BN) } poolId,
	 * @param { ArgumentTypes.AccountId } user,
	*/
	"getUserInfo" (
		poolId: (number | string | BN),
		user: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farmingGetters::getUserInfo", [poolId, user], __options);
	}

	/**
	 * poolLength
	 *
	*/
	"poolLength" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "farmingGetters::poolLength", [], __options);
	}

}