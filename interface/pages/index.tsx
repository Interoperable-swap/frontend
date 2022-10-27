import React, { useContext, useEffect ,useState} from "react"
import type { NextPage } from 'next'
import Liquidity from '../components/AddLiquidity'
import AccountList from '../components/AccountList'
import Main from '../components/Main'
import Image from "next/image"
import {FiArrowUpRight} from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import Shiden from '../assets/Shiden.png'
import uniswap from '../assets/uniswap.png'
import { TransactionContext } from '../context/TransactionContext'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
const Identicon = dynamic(() => import('@polkadot/react-identicon'), { ssr: false });


const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
  headwrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Home: NextPage = () => {  
  const [selectedNav, setSelectedNav] = useState('swap')
  const { connectWallet, currentAccount} = useContext(TransactionContext)

  return (
    <div className={style.wrapper}>
<div className = {style.headwrapper}>
		<div className = {style.headerLogo}>
			<Image src = {uniswap} alt= "Uniswap" height = {40} width = {40}/>
		</div>
		<div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>
          <div
            onClick={() => setSelectedNav('account')}
            className={`${style.navItem} ${
              selectedNav === 'account' && style.activeNavItem
            }`}
          >
            Account
          </div>
          <a
            href='https://portal.astar.network/#/shiden/'
            target='_blank'
            rel='noreferrer'
          >
            <div className={style.navItem}>
              Portal <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
	  
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={Shiden} alt='shiden' height={20} width={20} />
          </div>
          <p>Shiden</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        {currentAccount ? (
          <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
          <Identicon
            value={currentAccount.address}
            size={20}
            theme={'polkadot'}
        />
          </div>
          <div className={style.buttonTextContainer}>{currentAccount.meta.name}</div>
          </div>
          ) : (
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
        
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>

      {selectedNav == 'swap' &&(
        <Main />
      )}
      {selectedNav == 'pool' &&(
        <Liquidity />
      )}
      {selectedNav == 'account' &&(
        <AccountList/>
      )}
      <Footer />
    </div>
  )
}

export default Home