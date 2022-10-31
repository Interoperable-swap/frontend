import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai'
import astar from '../assets/astar.png'
import Shiden from '../assets/Shiden.png'
//import { Abi, ContractPromise } from '@polkadot/api-contract'
//import { ROUTER_ABI, ROUTER_ADDRESS } from '../abi/router'
import Button from './Button'
import { TransactionContext } from '../context/TransactionContext'
import React, { useContext } from "react"

const style = {
	wrapper: `w-screen flex items-center justify-center mt-14`,
	content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
	formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
	transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
	transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
	currencySelector: `flex w-1/4`,
	currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
	currencySelectorIcon: `flex items-center`,
	currencySelectorTicker: `mx-2`,
	currencySelectorArrow: `text-lg`,
	plusIcon: `flex items-center justify-center`,
	confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}
const Liquidity = () => {
	const { currentAccount, api, handleChange, amount } = useContext(TransactionContext);
	const add_liquidity = async () => {
		//const contract = new ContractPromise(api, ROUTER_ABI, ROUTER_ADDRESS);
		console.log('amount:', amount);
		const recipient = '5Fn1QwMgoNtskdvnB34McbvKtEjF9ww5CWRbiN31mK5qqMEF' //dev1
		const { web3FromSource } = await import('@polkadot/extension-dapp')
		const account = currentAccount
		const injector = await web3FromSource(account.meta.source);
		const transferExtrinsic = api.tx.balances.transfer(recipient, amount)
		transferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
			if (status.isInBlock) {
				console.log(`Completed at block hash #${status.asInBlock.toString()}`);
			} else {
				console.log(`Current status: ${status.type}`);
			}
		})

	}
	const approve = async() => {

	}
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.formHeader}>
					<div>Add Liquidity</div>
					<div>
						<RiSettings3Fill />
					</div>
				</div>
				<div className={style.transferPropContainer}>
					<input
						type='text'
						className={style.transferPropInput}
						placeholder='0.0'
						pattern='^[0-9]*[.,]?[0-9]*$'
						onChange={e => handleChange(e, 'amount')}
					/>
					<div className={style.currencySelector}>
						<div className={style.currencySelectorContent}>
							<div className={style.currencySelectorIcon}>
								<Image src={Shiden} alt='shiden' height={20} width={20} />
							</div>
							<div className={style.currencySelectorTicker}>SDN</div>
							<AiOutlineDown className={style.currencySelectorArrow} />
						</div>
					</div>
				</div>
				<div className={style.plusIcon}>
					<AiOutlinePlus
						size={42}
					/>
				</div>

				<div className={style.transferPropContainer}>
					<input
						type='text'
						className={style.transferPropInput}
						placeholder='0.0'
						pattern='^[0-9]*[.,]?[0-9]*$'
						onChange={e => handleChange(e, 'amount')}
					/>
					<div className={style.currencySelector}>
						<div className={style.currencySelectorContent}>
							<div className={style.currencySelectorIcon}>
								<Image src={astar} alt='astar logo' height={20} width={20} />
							</div>
							<div className={style.currencySelectorTicker}>SBY</div>
							<AiOutlineDown className={style.currencySelectorArrow} />
						</div>
					</div>
				</div>
				<div onClick={() => add_liquidity()}>
					<Button title='Add liquidity' />
				</div>
			</div>
		</div>
	)
}
export default Liquidity