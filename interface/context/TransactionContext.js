import { ApiPromise, WsProvider } from "@polkadot/api";
import React, { useState, useEffect } from "react";

export const TransactionContext = React.createContext();

let pjs;

if (typeof window !== "undefined") {
  pjs = window.injectedWeb3;
}
const WS_PROVIDER = "wss://rpc.shibuya.astar.network";
const DAPP_NAME = "Shiden DEX";
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [api, setapi] = useState();
  const [amount, setAmount] = useState();
  const [signer, setSigner] = useState();
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const connectWallet = async () => {
    try {
      if (!pjs) return alert("Please install polkadot-js ");
      const { web3Enable, web3Accounts, web3FromSource } = await import(
        "@polkadot/extension-dapp"
      );
      const extensions = await web3Enable(DAPP_NAME);
      if (extensions.length === 0) {
        // no extension installed, or the user did not accept the authorization
        // in this case we should inform the use and give a link to the extension
        return;
      }
      const provider = new WsProvider(WS_PROVIDER);

      const api = await ApiPromise.create({ provider });
      setapi(api);
      const allaccounts = await web3Accounts();
      const account = allaccounts[0];
      setCurrentAccount(account);
      const injector = await web3FromSource(account.meta.source);

      setSigner(injector);
      if (!pjs) return alert("Please install polkadot-js ");
    } catch (error) {
      console.error(error);
    }
  };
  const checkIfWalletIsConnected = async () => {
    try {
      const { web3Enable, web3Accounts, web3FromSource } = await import(
        "@polkadot/extension-dapp"
      );
      const extensions = await web3Enable(DAPP_NAME);
      if (extensions.length === 0) {
        return;
      }
      const allaccounts = await web3Accounts();
      if (allaccounts.length) {
        setCurrentAccount(allaccounts[0]);
      }
      const provider = new WsProvider(WS_PROVIDER);
      const api = await ApiPromise.create({ provider });
      setapi(api);
      const account = allaccounts[0];
      setCurrentAccount(account);
      const injector = await web3FromSource(account.meta.source);
      setSigner(injector);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        api,
        handleChange,
        amount,
        signer,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
