import React, { useContext } from "react"
import Identicon from '@polkadot/react-identicon'
//import {TransactionContext } from '../context/TransactionContext'

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  currencySelector: `flex w-1/4`,
  buttonTextContainer: `h-8 flex items-center`,
}
const AccountList = () => {
	const { connectWallet, currentAccount } = useContext(TransactionContext)
	console.log(currentAccount,connectWallet);

	return (
	  <div className={style.wrapper}>
		{currentAccount ? (
			<div>
			<div>Accounts</div>
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
				<div className={style.buttonTextContainer}>{currentAccount.address}</div>
			</div>
			) : (
			<h1>Wallet is not connected</h1>
		  	)}
	  </div>
	)
  }
export default AccountList