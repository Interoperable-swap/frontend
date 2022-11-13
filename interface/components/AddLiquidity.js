import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai'
import astar from '../assets/astar.png'
import Shiden from '../assets/Shiden.png'
import Button from './Button'
import { TransactionContext } from '../context/TransactionContext'

import ROUTER_CONTRACT from '../contract/abi/router'
import { ContractPromise } from '@polkadot/api-contract'
import { PSP22_ABI } from '../contract/abi/psp22'
import { WNATIVE_ABI } from '../contract/abi/wnative'
import { factory_address, router_address, pair_address, address0, address1, address2, ONE } from '../util/RouterUtil'
import { BN } from 'bn.js'
const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  plusIcon: `flex items-center justify-center`,
  confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}
const Liquidity = () => {
  const { currentAccount, api, signer } = useContext(TransactionContext)
  const handleInput1 = (e) => {
    setInputAmount1(e.target.value)
  }
  const handleInput2 = (e) => {
    setInputAmount2(e.target.value)
  }
  const [Token1Contract, setToken1Contract] = useState(undefined)
  const [token2Contract, setToken2Contract] = useState(undefined)

  const [inputAmount1, setInputAmount1] = useState('')
  const [inputAmount2, setInputAmount2] = useState('')

  const gasLimit = 100000000000
  const storageDepositLimit = null
  const data = ''
  const add_liquidity = async () => {
    const getToken1Contract = new ContractPromise(api, PSP22_ABI, address0)
    const getToken2Contract = new ContractPromise(api, WNATIVE_ABI, address2)
    //TODO:approve
    /**
		 await getToken1Contract.tx["psp22::approve"](
      {
        gasLimit,
        storageDepositLimit,
      },
      router_address,
      inputAmount1
    ).signAndSend(
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
		await getToken2Contract.tx["psp22::approve"](
      {
        gasLimit,
        storageDepositLimit,
      },
      router_address,
      inputAmount2
    ).signAndSend(
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
		 */
    //add liquidity via router
    const router = new ContractPromise(api, ROUTER_CONTRACT, router_address)
    const deadline = '111111111111111111'
    await router.tx['router::addLiquidity'](
      { gasLimit, storageDepositLimit },
      getToken1Contract.address,
      getToken2Contract.address,
      inputAmount1,
      inputAmount2,
      0,
      0,
      currentAccount.address,
      deadline,
    ).signAndSend(currentAccount.address, { signer: signer.signer }, ({ status }) => {
      if (status.isInBlock) {
        console.log(`Completed at block hash #${status.asInBlock.toString()}`)
      } else {
        console.log(`Current status: ${status.type}`)
      }
    })
  }
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Add Liquidity</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={(e) => handleInput1(e, 'inputAmount1')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={Shiden} alt='shiden' height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>SDN</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div className={style.plusIcon}>
          <AiOutlinePlus size={42} />
        </div>

        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={(e) => handleInput2(e, 'InputAmount2')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={astar} alt='astar logo' height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>SBY</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div onClick={() => add_liquidity()}>
          <Button title='Add liquidity' />
        </div>
      </div>
    </div>
  )
}
export default Liquidity
