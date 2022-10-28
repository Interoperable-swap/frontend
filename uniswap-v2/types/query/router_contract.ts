/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/router_contract';
import type * as ReturnTypes from '../types-returns/router_contract';
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
	* factory
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"factory" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "router::factory", [], __options , (result) => { return handleReturnType(result, getTypeDescription(0, 'router_contract')); });
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
	* @returns { [ReturnNumber, ReturnNumber] }
	*/
	"removeLiquidityNative" (
		token: ArgumentTypes.AccountId,
		liquidity: (string | number | BN),
		amountTokenMin: (string | number | BN),
		amountNativeMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber] > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::removeLiquidityNative", [token, liquidity, amountTokenMin, amountNativeMin, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(6, 'router_contract')); });
	}

	/**
	* swapExactTokensForNative
	*
	* @param { (string | number | BN) } amountIn,
	* @param { (string | number | BN) } amountOutMin,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { Array<ReturnNumber> }
	*/
	"swapExactTokensForNative" (
		amountIn: (string | number | BN),
		amountOutMin: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::swapExactTokensForNative", [amountIn, amountOutMin, path, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

	/**
	* swapTokensForExactNative
	*
	* @param { (string | number | BN) } amountOut,
	* @param { (string | number | BN) } amountInMax,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { Array<ReturnNumber> }
	*/
	"swapTokensForExactNative" (
		amountOut: (string | number | BN),
		amountInMax: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::swapTokensForExactNative", [amountOut, amountInMax, path, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
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
	* @returns { [ReturnNumber, ReturnNumber, ReturnNumber] }
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber, ReturnNumber] > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::addLiquidity", [tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(21, 'router_contract')); });
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
	* @returns { [ReturnNumber, ReturnNumber] }
	*/
	"removeLiquidity" (
		tokenA: ArgumentTypes.AccountId,
		tokenB: ArgumentTypes.AccountId,
		liquidity: (string | number | BN),
		amountAMin: (string | number | BN),
		amountBMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber] > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::removeLiquidity", [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(6, 'router_contract')); });
	}

	/**
	* swapExactTokensForTokens
	*
	* @param { (string | number | BN) } amountIn,
	* @param { (string | number | BN) } amountOutMin,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { Array<ReturnNumber> }
	*/
	"swapExactTokensForTokens" (
		amountIn: (string | number | BN),
		amountOutMin: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::swapExactTokensForTokens", [amountIn, amountOutMin, path, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

	/**
	* swapTokensForExactTokens
	*
	* @param { (string | number | BN) } amountOut,
	* @param { (string | number | BN) } amountInMax,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { Array<ReturnNumber> }
	*/
	"swapTokensForExactTokens" (
		amountOut: (string | number | BN),
		amountInMax: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::swapTokensForExactTokens", [amountOut, amountInMax, path, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
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
	* @returns { [ReturnNumber, ReturnNumber, ReturnNumber] }
	*/
	"addLiquidityNative" (
		token: ArgumentTypes.AccountId,
		amountTokenDesired: (string | number | BN),
		amountTokenMin: (string | number | BN),
		amountNativeMin: (string | number | BN),
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber, ReturnNumber] > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::addLiquidityNative", [token, amountTokenDesired, amountTokenMin, amountNativeMin, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(21, 'router_contract')); });
	}

	/**
	* wnative
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"wnative" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "router::wnative", [], __options , (result) => { return handleReturnType(result, getTypeDescription(0, 'router_contract')); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountOut", [amountIn, reserveIn, reserveOut], __options , (result) => { return new ReturnNumber(result as (number | string)); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::quote", [amountA, reserveA, reserveB], __options , (result) => { return new ReturnNumber(result as (number | string)); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountsIn", [amountOut, path], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

	/**
	* swapExactNativeForTokens
	*
	* @param { (string | number | BN) } amountOutMin,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { Array<ReturnNumber> }
	*/
	"swapExactNativeForTokens" (
		amountOutMin: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::swapExactNativeForTokens", [amountOutMin, path, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountIn", [amountOut, reserveIn, reserveOut], __options , (result) => { return new ReturnNumber(result as (number | string)); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::getAmountsOut", [amountIn, path], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

	/**
	* swapNativeForExactTokens
	*
	* @param { (string | number | BN) } amountOut,
	* @param { Array<ArgumentTypes.AccountId> } path,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } deadline,
	* @returns { Array<ReturnNumber> }
	*/
	"swapNativeForExactTokens" (
		amountOut: (string | number | BN),
		path: Array<ArgumentTypes.AccountId>,
		to: ArgumentTypes.AccountId,
		deadline: (number | string | BN),
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Array<ReturnNumber> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "router::swapNativeForExactTokens", [amountOut, path, to, deadline], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'router_contract')); });
	}

}