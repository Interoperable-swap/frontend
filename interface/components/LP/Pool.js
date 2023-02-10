import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Pool = (props) => {
  const { token0_symbol, token1_symbol, token0, token1, TVL, DVL, APY, Fee } = props

  return (
    <Link href={'/addliquidity'}>
      <div className='bg-gray-800  hover:bg-gray-700 p-5 rounded-2xl shadow-lg border border-gray-700 text-white cursor-pointer mb-4'>
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
            <span className='ml-4'>{TVL} K</span>
          </div>
          <div className='w-1/5 py-3'>
            <span className='ml-4'>${DVL} K</span>
          </div>
          <div className='w-1/5 py-3'>
            <span className='ml-4'>${Fee} K</span>
          </div>
          <div className='w-1/5 py-3'>
            <span className='ml-4'>${APY} %</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Pool
