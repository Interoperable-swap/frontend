import React from 'react'
import { WalletSelect } from '@talismn/connect-components';
//TODO
const ConnectWallet = () => {
	return (
		<WalletSelect
			// [Required] The dapp name
			dappName="My First Dapp"

			// Use if the dapp is controlling the modal toggle.
			open={false}

			// The component that opens the WalletSelect Modal
			triggerComponent={
				<button
					// `onClick` is optional here
					onClick={(wallets) => {
						// Do stuff with the supported wallets
					}}
				>
					Connect to wallet
				</button>
			}

			// Override the default header
			header={''}

			// Override the default footer
			footer={''}

			// If `showAccountsList={true}`, then account selection modal will show up after selecting the a wallet. Default is `false`.
			showAccountsList={false}

			// Callback when the WalletSelect Modal is opened
			onWalletConnectOpen={(wallets) => { }}

			// Callback when the WalletSelect Modal is closed
			onWalletConnectClose={() => { }}

			// Callback when a wallet is selected on the WalletSelect Modal
			onWalletSelected={(wallet) => { }}
			// Callback when the subscribed acounts for a selected wallet are updated
			onUpdatedAccounts={(accounts) => { }}
			// Callback when an account is seleced on the WalletSelect Account Modal. Only relevant when `showAccountsList=true`
			onAccountSelected={(account) => { }}
			// Callback when an error occurs. Aso clears the error on Modal actions:
			// `onWalletConnectOpen`, `onWalletSelected`, `onAccountSelected` and `onWalletConnectClose`,
			onError={(error) => { }}
		/>
	)
}

export default ConnectWallet