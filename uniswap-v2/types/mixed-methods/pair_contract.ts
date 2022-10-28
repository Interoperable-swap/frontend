/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/pair_contract';
import type * as ReturnTypes from '../types-returns/pair_contract';
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
	* approve
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } value,
	* @returns { void }
	*/
	"approve" (
		spender: ArgumentTypes.AccountId,
		value: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::approve", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [spender, value], __options);
	}

	/**
	* totalSupply
	*
	* @returns { ReturnNumber }
	*/
	"totalSupply" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::totalSupply", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	* @returns { void }
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [to, value, data], __options);
	}

	/**
	* increaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	* @returns { void }
	*/
	"increaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::increaseAllowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [spender, deltaValue], __options);
	}

	/**
	* decreaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	* @returns { void }
	*/
	"decreaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::decreaseAllowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [spender, deltaValue], __options);
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { ReturnNumber }
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::balanceOf", [owner], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* transferFrom
	*
	* @param { ArgumentTypes.AccountId } from,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	* @returns { void }
	*/
	"transferFrom" (
		from: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transferFrom", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [from, to, value, data], __options);
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } spender,
	* @returns { ReturnNumber }
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		spender: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::allowance", [owner, spender], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* owner
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"owner" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return handleReturnType(result, getTypeDescription(2, 'pair_contract')); });
	}

	/**
	* renounceOwnership
	*
	* @returns { void }
	*/
	"renounceOwnership" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [], __options);
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	* @returns { void }
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [newOwner], __options);
	}

	/**
	* sync
	*
	* @returns { void }
	*/
	"sync" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pair::sync", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [], __options);
	}

	/**
	* burn
	*
	* @param { ArgumentTypes.AccountId } to,
	* @returns { void }
	*/
	"burn" (
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pair::burn", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [to], __options);
	}

	/**
	* getToken1
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"getToken1" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::getToken1", [], __options, (result) => { return handleReturnType(result, getTypeDescription(2, 'pair_contract')); });
	}

	/**
	* price0CumulativeLast
	*
	* @returns { ReturnTypes.WrappedU256 }
	*/
	"price0CumulativeLast" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.WrappedU256 > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::price0CumulativeLast", [], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'pair_contract')); });
	}

	/**
	* getReserves
	*
	* @returns { [ReturnNumber, ReturnNumber, number] }
	*/
	"getReserves" (
		__options: GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber, number] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::getReserves", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'pair_contract')); });
	}

	/**
	* getToken0
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"getToken0" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::getToken0", [], __options, (result) => { return handleReturnType(result, getTypeDescription(2, 'pair_contract')); });
	}

	/**
	* price1CumulativeLast
	*
	* @returns { ReturnTypes.WrappedU256 }
	*/
	"price1CumulativeLast" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.WrappedU256 > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::price1CumulativeLast", [], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'pair_contract')); });
	}

	/**
	* skim
	*
	* @param { ArgumentTypes.AccountId } to,
	* @returns { void }
	*/
	"skim" (
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pair::skim", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [to], __options);
	}

	/**
	* swap
	*
	* @param { (string | number | BN) } amount0Out,
	* @param { (string | number | BN) } amount1Out,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { void }
	*/
	"swap" (
		amount0Out: (string | number | BN),
		amount1Out: (string | number | BN),
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pair::swap", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [amount0Out, amount1Out, to], __options);
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @returns { void }
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pair::mint", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [to], __options);
	}

	/**
	* initialize
	*
	* @param { ArgumentTypes.AccountId } token0,
	* @param { ArgumentTypes.AccountId } token1,
	* @returns { void }
	*/
	"initialize" (
		token0: ArgumentTypes.AccountId,
		token1: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pair::initialize", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "pair_contract");
		}, [token0, token1], __options);
	}

}