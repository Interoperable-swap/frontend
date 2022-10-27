import { ApiPromise, WsProvider } from '@polkadot/api'
import React ,{ useState,useEffect} from 'react'

export const TransactionContext = React.createContext()

let pjs

if (typeof window !== 'undefined') {
  pjs = window.injectedWeb3
}
const WS_PROVIDER = 'wss://shibuya.public.blastapi.io'
const DAPP_NAME = 'Shiden DEX'
 export const TransactionProvider = ({children}) => {
	const [currentAccount, setCurrentAccount] = useState()

	useEffect(() => {
		checkIfWalletIsConnected()
	},[])

	const connectWallet = async () => {
		try {
			if (!pjs) return alert('Please install polkadot-js ')
			const { web3Enable,web3Accounts, web3FromSource } = await import("@polkadot/extension-dapp");
			const extensions = await web3Enable(DAPP_NAME);
			if (extensions.length === 0) {
				// no extension installed, or the user did not accept the authorization
				// in this case we should inform the use and give a link to the extension
				return;
			}
			const provider = new WsProvider(WS_PROVIDER);
			// Create the API and wait until ready
			const api = await ApiPromise.create({ provider });
			const allaccounts = await web3Accounts();
			const account = allaccounts[0];
			setCurrentAccount(account)
		  if (!pjs) return alert('Please install polkadot-js ')
		} catch (error) {
			console.error(error)
		  }
	}
  const checkIfWalletIsConnected = async () => {
    try {
		const { web3Enable ,web3Accounts,web3FromSource } = await import("@polkadot/extension-dapp");
		const extensions = await web3Enable(DAPP_NAME);
		if (extensions.length === 0) {
			// no extension installed, or the user did not accept the authorization
			// in this case we should inform the use and give a link to the extension
			return;
		}
		const allaccounts = await web3Accounts();
		if (allaccounts.length) {
			setCurrentAccount(allaccounts[0])
		}
		const provider = new WsProvider(WS_PROVIDER);
		// Create the API and wait until ready
		const api = await ApiPromise.create({ provider });
		const account = allaccounts[0];
		setCurrentAccount(account)
		const transferExtrinsic = api.tx.balances.transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 12345)
		const injector = await web3FromSource(account.meta.source);
		transferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
			if (status.isInBlock) {
				console.log(`Completed at block hash #${status.asInBlock.toString()}`);
			} else {
				console.log(`Current status: ${status.type}`);
			}})
    } catch (error) {
      console.error(error)
    }
  }
	return(
		<TransactionContext.Provider
			value= {{
				currentAccount,
				connectWallet,
			}}>
			{children}
		</TransactionContext.Provider>
	 )
 
}