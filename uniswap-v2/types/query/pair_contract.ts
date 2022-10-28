/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/pair_contract';
import type * as ReturnTypes from '../types-returns/pair_contract';
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
	* approve
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } value,
	* @returns { null }
	*/
	"approve" (
		spender: ArgumentTypes.AccountId,
		value: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::approve", [spender, value], __options );
	}

	/**
	* totalSupply
	*
	* @returns { ReturnNumber }
	*/
	"totalSupply" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::totalSupply", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	* @returns { null }
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::transfer", [to, value, data], __options );
	}

	/**
	* increaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	* @returns { null }
	*/
	"increaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::increaseAllowance", [spender, deltaValue], __options );
	}

	/**
	* decreaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	* @returns { null }
	*/
	"decreaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::decreaseAllowance", [spender, deltaValue], __options );
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { ReturnNumber }
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::balanceOf", [owner], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* transferFrom
	*
	* @param { ArgumentTypes.AccountId } from,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	* @returns { null }
	*/
	"transferFrom" (
		from: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp22::transferFrom", [from, to, value, data], __options );
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp22::allowance", [owner, spender], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* owner
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"owner" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options , (result) => { return handleReturnType(result, getTypeDescription(2, 'pair_contract')); });
	}

	/**
	* renounceOwnership
	*
	* @returns { null }
	*/
	"renounceOwnership" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "ownable::renounceOwnership", [], __options );
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	* @returns { null }
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "ownable::transferOwnership", [newOwner], __options );
	}

	/**
	* sync
	*
	* @returns { null }
	*/
	"sync" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "pair::sync", [], __options );
	}

	/**
	* burn
	*
	* @param { ArgumentTypes.AccountId } to,
	* @returns { [ReturnNumber, ReturnNumber] }
	*/
	"burn" (
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber] > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "pair::burn", [to], __options , (result) => { return handleReturnType(result, getTypeDescription(27, 'pair_contract')); });
	}

	/**
	* getToken1
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"getToken1" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::getToken1", [], __options , (result) => { return handleReturnType(result, getTypeDescription(2, 'pair_contract')); });
	}

	/**
	* price0CumulativeLast
	*
	* @returns { ReturnTypes.WrappedU256 }
	*/
	"price0CumulativeLast" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.WrappedU256 > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::price0CumulativeLast", [], __options , (result) => { return handleReturnType(result, getTypeDescription(13, 'pair_contract')); });
	}

	/**
	* getReserves
	*
	* @returns { [ReturnNumber, ReturnNumber, number] }
	*/
	"getReserves" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< [ReturnNumber, ReturnNumber, number] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::getReserves", [], __options , (result) => { return handleReturnType(result, getTypeDescription(29, 'pair_contract')); });
	}

	/**
	* getToken0
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"getToken0" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::getToken0", [], __options , (result) => { return handleReturnType(result, getTypeDescription(2, 'pair_contract')); });
	}

	/**
	* price1CumulativeLast
	*
	* @returns { ReturnTypes.WrappedU256 }
	*/
	"price1CumulativeLast" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.WrappedU256 > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "pair::price1CumulativeLast", [], __options , (result) => { return handleReturnType(result, getTypeDescription(13, 'pair_contract')); });
	}

	/**
	* skim
	*
	* @param { ArgumentTypes.AccountId } to,
	* @returns { null }
	*/
	"skim" (
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "pair::skim", [to], __options );
	}

	/**
	* swap
	*
	* @param { (string | number | BN) } amount0Out,
	* @param { (string | number | BN) } amount1Out,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { null }
	*/
	"swap" (
		amount0Out: (string | number | BN),
		amount1Out: (string | number | BN),
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "pair::swap", [amount0Out, amount1Out, to], __options );
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @returns { ReturnNumber }
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "pair::mint", [to], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* initialize
	*
	* @param { ArgumentTypes.AccountId } token0,
	* @param { ArgumentTypes.AccountId } token1,
	* @returns { null }
	*/
	"initialize" (
		token0: ArgumentTypes.AccountId,
		token1: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< null > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "pair::initialize", [token0, token1], __options );
	}

}