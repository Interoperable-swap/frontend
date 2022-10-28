import type * as EventTypes from '../event-types/pair_contract';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import {getEventTypeDescription} from "../shared/utils";
import {handleEventReturn} from "@supercolony/typechain-types";

export default class EventsClass {
	private __nativeContract : ContractPromise;
	private __api : ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		api : ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__api = api;
	}

	public subscribeOnMintEvent(callback : (event : EventTypes.Mint) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Mint', 'pair_contract')) as EventTypes.Mint);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Mint');
	}

	public subscribeOnBurnEvent(callback : (event : EventTypes.Burn) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Burn', 'pair_contract')) as EventTypes.Burn);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Burn');
	}

	public subscribeOnSwapEvent(callback : (event : EventTypes.Swap) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Swap', 'pair_contract')) as EventTypes.Swap);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Swap');
	}

	public subscribeOnSyncEvent(callback : (event : EventTypes.Sync) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Sync', 'pair_contract')) as EventTypes.Sync);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Sync');
	}

	public subscribeOnTransferEvent(callback : (event : EventTypes.Transfer) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			let _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Transfer', 'pair_contract')) as EventTypes.Transfer);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Transfer');
	}


	private __subscribeOnEvent(
		callback : (args: any[], event: any) => void,
		filter : (eventName: string) => boolean = () => true
	) {
		// @ts-ignore
		return this.__api.query.system.events((events) => {
			events.forEach((record: any) => {
				const { event } = record;

				if (event.method == 'ContractEmitted') {
					const [address, data] = record.event.data;

					if (address.toString() === this.__nativeContract.address.toString()) {
						const {args, event} = this.__nativeContract.abi.decodeEvent(data);

						if (filter(event.identifier.toString()))
							callback(args, event);
					}
				}
			});
		});
	}

}