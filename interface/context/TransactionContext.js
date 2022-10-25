import React ,{ useState,useEffect} from 'react'
//import { ApiPromise, WsProvider } from '@polkadot/api';
//import dynamic from 'next/dynamic'
//const web3Accounts = dynamic(() => import('@polkadot/extension-dapp'), { ssr: false })
//const web3Enable = dynamic(() => import('@polkadot/extension-dapp'), { ssr: false })

export const TransactionContext = React.createContext()

let pjs

if (typeof window !== 'undefined') {
  pjs = window.injectedWeb3
}
const WS_PROVIDER = 'ws://127.0.0.1:9944'
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
			const allaccounts = await web3Accounts();
			const account = allAccounts[0];
			setCurrentAccount(account)
			const injector = await web3FromSource(account.meta.source);

		  if (!pjs) return alert('Please install polkadot-js ')
		} catch (error) {
			console.error(error)
		  }
	}
  const checkIfWalletIsConnected = async () => {
    try {
		const { web3Enable ,web3Accounts } = await import("@polkadot/extension-dapp");

		const extensions = await web3Enable(DAPP_NAME);
		if (extensions.length === 0) {
			// no extension installed, or the user did not accept the authorization
			// in this case we should inform the use and give a link to the extension
			return;
		}
	  const allaccounts = await web3Accounts();

      if (allaccounts.length) {
        setCurrentAccount(allaccounts[0])
		console.log('wallet is already connected!')
      }
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