import React ,{ useState,useEffect} from 'react'
import { web3Accounts,web3Enable  } from '@polkadot/extension-dapp'
export const TransactionContext = React.createContext()

let pjs

if (typeof window !== 'undefined') {
  pjs = window.injectedWeb3
  console.log('polkadot-js is Installed!');
}
 export const TransactionProvider = ({children}) => {
	const [currentAccount, setCurrentAccount] = useState()

	useEffect(() => {
		checkIfWalletIsConnected()
	},[])

	const connectWallet = async () => {
		try {
			const extensions = await web3Enable('my cool dapp');
			if (extensions.length === 0) {
				// no extension installed, or the user did not accept the authorization
				// in this case we should inform the use and give a link to the extension
				return;
			}
			const allaccounts = await web3Accounts();
			setCurrentAccount(allaccounts[0])
		  //if (!pjs) return alert('Please install polkadot-js ')
		} catch (error) {
			console.error(error)
			//throw new Error('No ethereum object.')
		  }
	}
  const checkIfWalletIsConnected = async () => {
    try {
      if (!pjs) return alert('Please install polkadot-js')

      if (allaccounts.length) {
		const allaccounts = await web3Accounts();
        setCurrentAccount(allaccounts[0])
		console.log('wallet is already connected!')
      }
    } catch (error) {
      console.error(error)
      //throw new Error('No ethereum object.')
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