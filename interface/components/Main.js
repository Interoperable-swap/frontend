//TODO: GET SWAPPRICE
//TODO: quote function
//TODO: APPROVE WAITING STATE
//TODO: SELECT TOKEN
//TODO: FIX SETUP

import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { IoSwapVertical } from 'react-icons/io5'
import astar from '../assets/astar.png'
import shiden from '../assets/Shiden.png'
import uniswap from '../assets/uniswap.png'
import { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { TransactionContext } from '../context/TransactionContext'
import { ContractPromise } from '@polkadot/api-contract'
import { BN } from 'bn.js'
import { encodeAddress } from '@polkadot/keyring'
import { router_address, address0, address1, address2 } from '../util/RouterUtil'
//abi
import PAIR_CONTRACT from '../contract/abi/pair'
import FACTORY_CONTRACT from '../contract/abi/factory'
import { PSP22_ABI } from '../contract/abi/psp22'
import { WNATIVE_ABI } from '../contract/abi/wnative'
import ROUTER_CONTRACT from '../contract/abi/router'

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
}
const Decimal = 18
const ONE = new BN(10).pow(new BN(Decimal))
const zeroAddress = encodeAddress('0x0000000000000000000000000000000000000000000000000000000000000000')
//const gasLimit = 18750000000;
const gasLimit = 100000000000
const storageDepositLimit = null
const fee_to_setter = 'ZebrEKmacXyyTxcfLWUeG5byHSN8AdpDhvjx5Esdg5oR7yR' //dev1 account
// uni1<>wsby pair bL7zEmpzvxdhNdxHLYibQBWk24r1LRUuPtdpXNCbRzLgM1Q

const Main = () => {
  const [showList, setShowList] = useState(false)
  const [Currency2, setCurrency2] = useState(false)
  const { currentAccount, api, signer } = useContext(TransactionContext)
  const [Token1Contract, setToken1Contract] = useState(undefined)
  const [token2Contract, setToken2Contract] = useState(undefined)
  const [UniI1Balance, settoken1balance] = useState('')
  const [UniI2Balance, settoken2balance] = useState('')
  const [inputAmount1, setInputAmount1] = useState(0)
  const [inputAmount2, setInputAmount2] = useState(0)
  const handleInput1 = (e) => {
    setInputAmount1(e.target.value)
  }
  const handleInput2 = (e) => {
    setInputAmount2(e.target.value)
  }

  //TODO : fix setup error
  useEffect(() => {
    const setup = async () => {
      //initialize contracts
      const getToken1Contract = new ContractPromise(api, PSP22_ABI, address0)
      const getToken2Contract = new ContractPromise(api, WNATIVE_ABI, address2)
      setToken1Contract(getToken1Contract)
      setToken2Contract(getToken2Contract)
      const token1balance = await getToken1Contract.query['psp22::balanceOf'](
        currentAccount.address,
        { gasLimit: gasLimit },
        currentAccount.address,
      )
      if (token1balance.result.isOk) {
        settoken1balance(token1balance.output.toString()) //TODO: FIX DECIMAL / 10 ** Decimal
      } else {
        console.error('Error', result.asErr)
      }
      const token2balance = await getToken2Contract.query['psp22::balanceOf'](
        currentAccount.address,
        { gasLimit: gasLimit },
        currentAccount.address,
      )
      if (token2balance.result.isOk) {
        // output the return value
        settoken2balance(token2balance.output.toString()) //TODO FIX DECIMAL / 10 ** Decimal
      } else {
        console.error('Error', result.asErr)
      }
    }
    setup()
  }, [api, currentAccount])

  const transfer = async () => {
    const data = ''
    await Token1Contract.tx['psp22::transfer'](
      {
        gasLimit,
        storageDepositLimit,
      },
      'ZebrEKmacXyyTxcfLWUeG5byHSN8AdpDhvjx5Esdg5oR7yR',
      inputAmount2,
      data,
    ).signAndSend(currentAccount.address, { signer: signer.signer }, ({ status }) => {
      if (status.isInBlock) {
        console.log(`Completed at block hash #${status.asInBlock.toString()}`)
      } else {
        console.log(`Current status: ${status.type}`)
      }
    })
  }

  const runswap = async () => {
    const deadline = '111111111111111111'
    const router = new ContractPromise(api, ROUTER_CONTRACT, router_address)
    await router.tx['router::swapExactTokensForTokens'](
      { gasLimit, storageDepositLimit },
      inputAmount1,
      100,
      [Token1Contract.address, token2Contract.address], //path [input, output]
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
          <div>Swap</div>
          <div onClick={() => transfer()}>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={(e) => handleInput1(e, 'input1amount')}
          />
          <div className={style.currencySelector}>
            <button className={style.currencySelectorContent} onClick={() => setShowList((prevState) => !prevState)}>
              <div className={style.currencySelectorIcon}>
                <Image src={astar} alt='astar' height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>WSBY</div>
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
        <div className={style.swapIcon}>
          <IoSwapVertical size={42} />
        </div>
        <div className={style.transferPropContainer}>
          <input
            type='text'
            className={style.transferPropInput}
            placeholder='0.0'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={(e) => handleInput2(e, 'input2amount')}
          />
          <div className={style.currencySelector}>
            <button className={style.currencySelectorContent} onClick={() => setCurrency2((prevState) => !prevState)}>
              <div className={style.currencySelectorIcon}>
                <Image src={uniswap} alt='uniswap' height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>UNI</div>
              {Currency2 ? (
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
        <div onClick={() => runswap()}>
          <Button title='swap' />
        </div>
      </div>
    </div>
  )
}
export default Main
