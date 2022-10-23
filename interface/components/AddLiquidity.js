import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import astar from '../assets/astar.png'
import Shiden from '../assets/Shiden.png'
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Abi, ContractPromise } from '@polkadot/api-contract'
import {ROUTER_ABI, ROUTER_ADDRESS} from '../abi/router'

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
  confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}
const Liquidity = () => {

	const add_liquidigy = async () => {
	//connect local node
	const provider = new WsProvider('ws://127.0.0.1:9944'); 
    //create instance
	const api = await ApiPromise.create({ provider });
	const contract = new ContractPromise(api, ROUTER_ABI, ROUTER_ADDRESS);
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
			  onChange={e => handleChange(e, 'amount')}
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
		  
		{/*add plus Icon */}		  
		  <div className={style.transferPropContainer}>
			<input
			  type='text'
			  className={style.transferPropInput}
			  placeholder='0.0'
			  pattern='^[0-9]*[.,]?[0-9]*$'
			  onChange={e => handleChange(e, 'amount')}
			/>
			<div className={style.currencySelector}>
			  <div className={style.currencySelectorContent}>
				<div className={style.currencySelectorIcon}>
				  <Image src={astar} alt='astar logo' height={20} width={20} />
				</div>
				<div className={style.currencySelectorTicker}>ASTR</div>
				<AiOutlineDown className={style.currencySelectorArrow} />
			  </div>
			</div>
		  </div>
		  <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
			Confirm
		  </div>
		</div>

	  </div>
	)
  }
export default Liquidity