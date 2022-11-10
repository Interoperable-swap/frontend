import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
};

const AccountList = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className={style.wrapper}>
      {currentAccount ? (
        <div className={style.content}>
          <div className={style.buttonTextContainer}>
            Connected Address : {currentAccount.address}
          </div>
        </div>
      ) : (
        <h1>Wallet is not connected</h1>
      )}
    </div>
  );
};
export default AccountList;
