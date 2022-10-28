import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type AccountId = string | number[]

export type Key = string | number[]

export type Pool = {
	accArswPerShare: ReturnNumber,
	lastRewardBlock: number,
	allocPoint: number
}

export interface FarmingError {
	ownableError ? : OwnableError,
	psp22Error ? : PSP22Error,
	duplicateLpToken ? : null,
	poolNotFound1 ? : null,
	poolNotFound2 ? : null,
	poolNotFound3 ? : null,
	userNotFound ? : null,
	zeroWithdrawal ? : null,
	lpTokenNotFound ? : null,
	lpSupplyIsZero ? : null,
	blockNumberLowerThanOriginBlock ? : null,
	subUnderflow1 ? : null,
	subUnderflow2 ? : null,
	addOverflow1 ? : null,
	addOverflow2 ? : null,
	addOverflow3 ? : null
}

export class FarmingErrorBuilder {
	static OwnableError(value: OwnableError): FarmingError {
		return {
			ownableError: value,
		};
	}
	static PSP22Error(value: PSP22Error): FarmingError {
		return {
			psp22Error: value,
		};
	}
	static DuplicateLPToken(): FarmingError {
		return {
			duplicateLpToken: null,
		};
	}
	static PoolNotFound1(): FarmingError {
		return {
			poolNotFound1: null,
		};
	}
	static PoolNotFound2(): FarmingError {
		return {
			poolNotFound2: null,
		};
	}
	static PoolNotFound3(): FarmingError {
		return {
			poolNotFound3: null,
		};
	}
	static UserNotFound(): FarmingError {
		return {
			userNotFound: null,
		};
	}
	static ZeroWithdrawal(): FarmingError {
		return {
			zeroWithdrawal: null,
		};
	}
	static LpTokenNotFound(): FarmingError {
		return {
			lpTokenNotFound: null,
		};
	}
	static LpSupplyIsZero(): FarmingError {
		return {
			lpSupplyIsZero: null,
		};
	}
	static BlockNumberLowerThanOriginBlock(): FarmingError {
		return {
			blockNumberLowerThanOriginBlock: null,
		};
	}
	static SubUnderflow1(): FarmingError {
		return {
			subUnderflow1: null,
		};
	}
	static SubUnderflow2(): FarmingError {
		return {
			subUnderflow2: null,
		};
	}
	static AddOverflow1(): FarmingError {
		return {
			addOverflow1: null,
		};
	}
	static AddOverflow2(): FarmingError {
		return {
			addOverflow2: null,
		};
	}
	static AddOverflow3(): FarmingError {
		return {
			addOverflow3: null,
		};
	}
}

export enum OwnableError {
	callerIsNotOwner,
	newOwnerIsZero
}

export interface PSP22Error {
	custom ? : string,
	insufficientBalance ? : null,
	insufficientAllowance ? : null,
	zeroRecipientAddress ? : null,
	zeroSenderAddress ? : null,
	safeTransferCheckFailed ? : string
}

export class PSP22ErrorBuilder {
	static Custom(value: string): PSP22Error {
		return {
			custom: value,
		};
	}
	static InsufficientBalance(): PSP22Error {
		return {
			insufficientBalance: null,
		};
	}
	static InsufficientAllowance(): PSP22Error {
		return {
			insufficientAllowance: null,
		};
	}
	static ZeroRecipientAddress(): PSP22Error {
		return {
			zeroRecipientAddress: null,
		};
	}
	static ZeroSenderAddress(): PSP22Error {
		return {
			zeroSenderAddress: null,
		};
	}
	static SafeTransferCheckFailed(value: string): PSP22Error {
		return {
			safeTransferCheckFailed: value,
		};
	}
}

