import React, { useContext, useEffect } from "react"
import { TransactionContext } from '../context/TransactionContext'
import dynamic from 'next/dynamic'
const Identicon = dynamic(() => import('@polkadot/react-identicon'), { ssr: false });
const { ApiPromise, WsProvider } = require('@polkadot/api');

const style = {
	wrapper: `w-screen flex items-center justify-center mt-14`,
	content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
	title: 'px-2 flex items-center justify-between font-semibold text-xl',
	currencySelector: `h-8 flex items-center`,
	buttonTextContainer: `h-8 flex items-center font-semibold text-l`,
}

const AccountList = () => {
	const { currentAccount, api } = useContext(TransactionContext)

	const gasLimit = 3000n * 1000000n;
	useEffect(() => {
		main()
	}, [])

	const main = async () => {
	}
	return (
		<div className={style.wrapper}>
			{currentAccount ? (
				<div className={style.content}>
					<h2 className={style.title}>Account</h2>
					<div className={style.currencySelector}>
						<div>
							<Identicon
								value={currentAccount.address}
								size={32}
								theme={'polkadot'}
							/>
						</div>
						<div className={style.buttonTextContainer}>{currentAccount.meta.name}</div>
					</div>
					<div className={style.buttonTextContainer}>Address : {currentAccount.address}</div>
				</div>
			) : (
				<h1>Wallet is not connected</h1>
			)}
		</div>
	)
}
export default AccountList