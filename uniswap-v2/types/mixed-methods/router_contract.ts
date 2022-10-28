/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/router_contract';
import type * as ReturnTypes from '../types-returns/router_contract';
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
	* factory
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"factory" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "router::factory", [], __options, (result) => { return handleReturnType(result, getTypeDescription(0, 'router_contract')); });
	}

	/**
	* removeLiquidityNative
	*
	* @param { ArgumentTypes.AccountId } token,
	* @param { (string | number | BN) } liquidity,
	* @param { (string | number | BN) } amountTokenMin,
	* @param { (string | number | BN) } amountNativeMin,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"removeLiquidityNative" (
		token: ArgumentTypes.AccountId,
		liquidity: (string | number | BN),
		amountTokenMin: (string | number | BN),
		amountNativeMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::removeLiquidityNative", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [token, liquidity, amountTokenMin, amountNativeMin, to, deadline], __options);
	}

	/**
	* swapExactTokensForNative
	*
	* @param { (string | number | BN) } amountIn,
	* @param { (string | number | BN) } amountOutMin,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"swapExactTokensForNative" (
		amountIn: (string | number | BN),
		amountOutMin: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::swapExactTokensForNative", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [amountIn, amountOutMin, path, to, deadline], __options);
	}

	/**
	* swapTokensForExactNative
	*
	* @param { (string | number | BN) } amountOut,
	* @param { (string | number | BN) } amountInMax,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"swapTokensForExactNative" (
		amountOut: (string | number | BN),
		amountInMax: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::swapTokensForExactNative", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [amountOut, amountInMax, path, to, deadline], __options);
	}

	/**
	* addLiquidity
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	* @param { (string | number | BN) } amountADesired,
	* @param { (string | number | BN) } amountBDesired,
	* @param { (string | number | BN) } amountAMin,
	* @param { (string | number | BN) } amountBMin,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"addLiquidity" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		amountADesired: (string | number | BN),
		amountBDesired: (string | number | BN),
		amountAMin: (string | number | BN),
		amountBMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::addLiquidity", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline], __options);
	}

	/**
	* removeLiquidity
	*
	* @param { ArgumentTypes.AccountId } tokenA,
	* @param { ArgumentTypes.AccountId } tokenB,
	* @param { (string | number | BN) } liquidity,
	* @param { (string | number | BN) } amountAMin,
	* @param { (string | number | BN) } amountBMin,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"removeLiquidity" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		liquidity: (string | number | BN),
		amountAMin: (string | number | BN),
		amountBMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::removeLiquidity", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline], __options);
	}

	/**
	* swapExactTokensForTokens
	*
	* @param { (string | number | BN) } amountIn,
	* @param { (string | number | BN) } amountOutMin,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"swapExactTokensForTokens" (
		amountIn: (string | number | BN),
		amountOutMin: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::swapExactTokensForTokens", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [amountIn, amountOutMin, path, to, deadline], __options);
	}

	/**
	* swapTokensForExactTokens
	*
	* @param { (string | number | BN) } amountOut,
	* @param { (string | number | BN) } amountInMax,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"swapTokensForExactTokens" (
		amountOut: (string | number | BN),
		amountInMax: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::swapTokensForExactTokens", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [amountOut, amountInMax, path, to, deadline], __options);
	}

	/**
	* addLiquidityNative
	*
	* @param { ArgumentTypes.AccountId } token,
	* @param { (string | number | BN) } amountTokenDesired,
	* @param { (string | number | BN) } amountTokenMin,
	* @param { (string | number | BN) } amountNativeMin,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"addLiquidityNative" (
		token: ArgumentTypes.AccountId,
		amountTokenDesired: (string | number | BN),
		amountTokenMin: (string | number | BN),
		amountNativeMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::addLiquidityNative", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [token, amountTokenDesired, amountTokenMin, amountNativeMin, to, deadline], __options);
	}

	/**
	* wnative
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"wnative" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "router::wnative", [], __options, (result) => { return handleReturnType(result, getTypeDescription(0, 'router_contract')); });
	}

	/**
	* getAmountOut
	*
	* @param { (string | number | BN) } amountIn,
	* @param { (string | number | BN) } reserveIn,
	* @param { (string | number | BN) } reserveOut,
	* @returns { ReturnNumber }
	*/
	"getAmountOut" (
		amountIn: (string | number | BN),
		reserveIn: (string | number | BN),
		reserveOut: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountOut", [amountIn, reserveIn, reserveOut], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* quote
	*
	* @param { (string | number | BN) } amountA,
	* @param { (string | number | BN) } reserveA,
	* @param { (string | number | BN) } reserveB,
	* @returns { ReturnNumber }
	*/
	"quote" (
		amountA: (string | number | BN),
		reserveA: (string | number | BN),
		reserveB: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::quote", [amountA, reserveA, reserveB], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getAmountsIn
	*
	* @param { (string | number | BN) } amountOut,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @returns { Array<ReturnNumber> }
	*/
	"getAmountsIn" (
		amountOut: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		__options: GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountsIn", [amountOut, path], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

	/**
	* swapExactNativeForTokens
	*
	* @param { (string | number | BN) } amountOutMin,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"swapExactNativeForTokens" (
		amountOutMin: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::swapExactNativeForTokens", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [amountOutMin, path, to, deadline], __options);
	}

	/**
	* getAmountIn
	*
	* @param { (string | number | BN) } amountOut,
	* @param { (string | number | BN) } reserveIn,
	* @param { (string | number | BN) } reserveOut,
	* @returns { ReturnNumber }
	*/
	"getAmountIn" (
		amountOut: (string | number | BN),
		reserveIn: (string | number | BN),
		reserveOut: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountIn", [amountOut, reserveIn, reserveOut], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* getAmountsOut
	*
	* @param { (string | number | BN) } amountIn,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @returns { Array<ReturnNumber> }
	*/
	"getAmountsOut" (
		amountIn: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		__options: GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountsOut", [amountIn, path], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

	/**
	* swapNativeForExactTokens
	*
	* @param { (string | number | BN) } amountOut,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { void }
	*/
	"swapNativeForExactTokens" (
		amountOut: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "router::swapNativeForExactTokens", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "router_contract");
		}, [amountOut, path, to, deadline], __options);
	}

}