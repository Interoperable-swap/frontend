import Image from "next/image";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { IoSwapVertical } from "react-icons/io5";
import astar from "../assets/astar.png";
import shiden from "../assets/Shiden.png";
import usdt from "../assets/usdt.svg";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { TransactionContext } from "../context/TransactionContext";
import { ContractPromise } from "@polkadot/api-contract";
import { BN } from "bn.js";
import { encodeAddress } from "@polkadot/keyring";

//abi
import PAIR_CONTRACT from "../contract/abi/pair";
import FACTORY_CONTRACT from "../contract/abi/factory";
import { PSP22_ABI } from "../contract/abi/psp22";
//wasm
import FACTORY_WASM from "../contract/wasm/factory_wasm";
import PAIR_WASM from "../contract/wasm/pair_wasm";
import PSP22_WASM from "../contract/wasm/psp22_wasm";

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
  copyarea: `flex cursor-pointer`,
};
const ONE = new BN(10).pow(new BN(18));
const zeroAddress = encodeAddress(
  "0x0000000000000000000000000000000000000000000000000000000000000000"
);
const MINIMUM_LIQUIDITY = 1000;
const gasLimit = 18750000000;
const storageDepositLimit = null;
const options = { gasLimit, storageDepositLimit };

const factory_address = "aiPpAoWnzUuEXuQD8M75F42tgcaQ9MY6kbNqXxP8raYa73p";
const router_address = "b7Vz6KZCVFrD6CpMxXohe5cKu2Zst71m13ruxv5jdJsxKoA"; // fee_to_setter = dev1
const pair_address = "b4WSUKQu6Evooh4Rtz6s9LhLWs7XHpqCx2wsfmsP2uFWkUe";
const pair_code_hash = PAIR_CONTRACT.source.hash;
//UNI1
const name0 = "Wrapped Ether1";
const symbol0 = "UNI1";
const address0 = "aDGRyf3Q8jGYRisf3Aydt87ccongLCgdobaSiXJkW7Z2zrh";
//UNI2
const name1 = "Uniswap Token2";
const symbol1 = "UNI2";
const address1 = "aL3VQDDaMU38RYk9njg3RPz8Qzx2hDCA526GE6cvWZek4b5";

//get wasm
const pair_wasm = PAIR_WASM.source.wasm;
const factory_wasm = FACTORY_WASM.source.wasm;
const fee_to_setter = "ZebrEKmacXyyTxcfLWUeG5byHSN8AdpDhvjx5Esdg5oR7yR"; //dev1 account

const Main = () => {
  const [showList, setShowList] = useState(false);
  const { currentAccount, api, handleChange, amount, signer } =
    useContext(TransactionContext);
  const [Uni1Contract, setUni1Contract] = useState(undefined);
  const [Uni2Contract, setUni2Contract] = useState(undefined);
  const [UniI1Balance, setUni1Balance] = useState("");
  const [UniI2Balance, setUni2Balance] = useState("");

  //1. setup
  const setup = async () => {
    //initialize contracts
    const getUNI1Contract = new ContractPromise(api, PSP22_ABI, address0);
    const getUNI2Contract = new ContractPromise(api, PSP22_ABI, address1);
    const factory = new ContractPromise(api, FACTORY_CONTRACT, factory_address);
    const uni1balance = await getUNI1Contract.query["psp22::balanceOf"](
      currentAccount.address,
      { gasLimit: gasLimit },
      currentAccount.address
    );
    if (uni1balance.result.isOk) {
      setUni1Balance(uni1balance.output.toString());
    } else {
      console.error("Error", result.asErr);
    }

    const uni2balance = await getUNI2Contract.query["psp22::balanceOf"](
      currentAccount.address,
      { gasLimit: gasLimit },
      currentAccount.address
    );
    if (uni2balance.result.isOk) {
      // output the return value
      setUni2Balance(uni2balance.output.toString());
    } else {
      console.error("Error", result.asErr);
    }
    const approveUni1 = await getUNI1Contract.tx["psp22::approve"](
      currentAccount.address,
      router_address,
      amount
    );
    approveUni1.signAndSend(
      currentAccount.address,
      { signer: signer.signer },
      ({ status }) => {
        if (status.isInBlock) {
          console.log(
            `Completed at block hash #${status.asInBlock.toString()}`
          );
        } else {
          console.log(`Current status: ${status.type}`);
        }
      }
    );
    const pair = await factory.query["factory::createPair"](
      currentAccount,
      address0,
      address1,
      { gasLimit: gasLimit }
    );
    pair.signAndSend(
      currentAccount.address,
      { signer: signer.signer },
      ({ status }) => {
        if (status.isInBlock) {
          console.log(
            `Completed at block hash #${status.asInBlock.toString()}`
          );
        } else {
          console.log(`Current status: ${status.type}`);
        }
      }
    );
  };

  //2.create pair
  const setupPair = async () => {};

  //3.execute swap
  /**
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
		 */
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
        {UniI1Balance ? (
          <div>
            <div className={style.copyarea}>Balance :{UniI1Balance}</div>
          </div>
        ) : (
          <div className={style.copyarea}>Balance :0</div>
        )}
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
        {UniI2Balance ? (
          <div>
            <div className={style.copyarea}>Balance :{UniI2Balance}</div>
          </div>
        ) : (
          <div className={style.copyarea}>Balance :0</div>
        )}
        <div onClick={() => setup()}>
          <Button title="swap" />
        </div>
      </div>
    </div>
  );
};
export default Main;
