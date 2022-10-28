/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/farming_contract';
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farming::withdraw", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId, amount, to], __options);
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farming::add", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [allocPoint, lpToken, rewarder], __options);
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farming::pendingArsw", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId, user], __options);
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farming::deposit", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId, amount, to], __options);
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farming::harvest", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId, to], __options);
	}

	/**
	* getLpToken
	*
	* @param { (number | string | BN) } poolId,
	*/
	"getLpToken" (
		poolId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farmingGetters::getLpToken", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId], __options);
	}

	/**
	* getPoolInfos
	*
	* @param { (number | string | BN) } poolId,
	*/
	"getPoolInfos" (
		poolId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farmingGetters::getPoolInfos", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId], __options);
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farmingGetters::getUserInfo", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [poolId, user], __options);
	}

	/**
	* poolLength
	*
	*/
	"poolLength" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "farmingGetters::poolLength", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "farming_contract");
		}, [], __options);
	}

}