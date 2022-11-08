import Image from "next/image";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { IoSwapVertical } from "react-icons/io5";
import astar from "../assets/astar.png";
import shiden from "../assets/Shiden.png";
import usdt from "../assets/usdt.svg";
import { useContext, useState } from "react";
import Button from "./Button";
import { TransactionContext } from "../context/TransactionContext";
import { CodePromise, ContractPromise } from "@polkadot/api-contract";
import { BN } from "bn.js";
//abi
import PAIR_CONTRACT from "../contract/abi/pair";
import FACTORY_CONTRACT from "../contract/abi/factory";
import { PSP22_ABI } from "../contract/abi/psp22";
//wasm
import FACTORY_WASM from "../contract/wasm/factory_wasm";
import PAIR_WASM from "../contract/wasm/pair_wasm";
import PSP22_WASM from "../contract/wasm/psp22_wasm";
const ONE = new BN(10).pow(new BN(18));

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  swapIcon: `flex items-center justify-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
};

const MINIMUM_LIQUIDITY = 1000;

const Main = () => {
  const [showList, setShowList] = useState(false);
  const { currentAccount, api, handleChange, amount, signer } =
    useContext(TransactionContext);
  const setup = async () => {
    const gasLimit = 18750000000;
    const storageDepositLimit = null;
    const MINIMUM_LIQUIDITY = 1000;
    const target = "5CM4ecNF7j8f4t26UGEmbcDKoVHtD8BZZMYVDMq68ATKcX3y";
    const erc20address = "XtfjrZygSXHbEonF2ddsduN9L1JySsSTJNJtW3XLp6UnjK7";
    //get wasm
    const pair_wasm = PAIR_WASM.source.wasm;
    const factory_wasm = FACTORY_WASM.source.wasm;
    const fee_to_setter = "ZebrEKmacXyyTxcfLWUeG5byHSN8AdpDhvjx5Esdg5oR7yR"; //dev1 account
    //initialize pair contract
    const pair = new CodePromise(api, PAIR_CONTRACT, pair_wasm);
    const create_pair = pair.tx.new({ gasLimit, storageDepositLimit });
    create_pair.signAndSend(
      currentAccount.address,
      { signer: signer.signer },
      ({ contract, status }) => {
        if (status.isInBlock) {
          let address = contract.address.toString();
          console.log(
            `Completed at block hash #${status.asInBlock.toString()}`
          );
          console.log(`Contract is deployed: #${address}`);
        } else {
          console.log(`Current status: ${status.type}`);
        }
      }
    );
    // pair address WtpRP8WkUwv5VVjDk2hjsSrCCr8wiRXGGxtf8qL4BKwixgE
    const pair_code_hash = PAIR_CONTRACT.source.hash;
    const factory = new CodePromise(api, FACTORY_CONTRACT, factory_wasm);
    const create_factory = factory.tx.new(
      { gasLimit, storageDepositLimit },
      fee_to_setter,
      pair_code_hash
    );
    //initialize factory contract
    //deploy new factory contract
  };
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, "amount")}
          />
          <div className={style.currencySelector}>
            <button
              className={style.currencySelectorContent}
              onClick={() => setShowList((prevState) => !prevState)}
            >
              <div className={style.currencySelectorIcon}>
                <Image src={shiden} alt="shiden" height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>SDN</div>
              {showList ? (
                <AiOutlineUp className={style.currencySelectorArrow} />
              ) : (
                <AiOutlineDown className={style.currencySelectorArrow} />
              )}
            </button>
          </div>
        </div>
        <div className={style.swapIcon}>
          <IoSwapVertical size={42} />
        </div>

        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, "amount")}
          />
          <div className={style.currencySelector}>
            <button className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={usdt} alt="USDT" height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>USDT</div>
              {showList ? (
                <AiOutlineUp className={style.currencySelectorArrow} />
              ) : (
                <AiOutlineDown className={style.currencySelectorArrow} />
              )}
            </button>
          </div>
        </div>
        <div onClick={() => swap()}>
          <Button title="swap" />
        </div>
      </div>
    </div>
  );
};
export default Main;
