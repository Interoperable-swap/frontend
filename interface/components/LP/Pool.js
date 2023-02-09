import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Pool = ({ token0_symbol, token1_symbol, token0, token1, TVL, DVL, APY }) => (
  <div className='bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-700 text-white mb-4'>
    <div className='flex font-medium'>
      <div className='w-1/5 py-3'>
        <span className='mr-2'>
          <Image src={token0_symbol} alt='token0' width={14} height={14} />
          <Image src={token1_symbol} alt='token1' width={14} height={14} />
        </span>
        <span>
          {token0} / {token1}
        </span>
      </div>
      <div className='w-1/5 py-3'>
        <span className='ml-4'>{TVL} %</span>
      </div>
      <div className='w-1/5 py-3'>
        <span className='ml-4'>${DVL} K</span>
      </div>
      <div className='w-1/5 py-3'>
        <span className='ml-4'>${APY} K</span>
      </div>
      <Link href={'/addliquidity'}>
        <div className='w-1/5 '>
          <button className='cursor-pointer hover:bg-blue-600 bg-blue-500 w-36 h-12 text-white py-2 px-4 rounded-xl '>
            Deposit
          </button>
        </div>
      </Link>
    </div>
  </div>
)

export default Pool
