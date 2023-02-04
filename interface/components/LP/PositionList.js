import React from 'react'
import Image from 'next/image'

const PositionList = ({ token0_symbol, token1_symbol, token0, token1, rangerow, rangehigh }) => (
  <div className='bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 text-white m-4'>
    <div className='font-medium text-left d-flex'>
      <span>
        <Image src={token0_symbol} alt='token0' width={16} height={16} />
      </span>
      <span className='mr-2'>
        <Image src={token1_symbol} alt='token1' width={16} height={16} />
      </span>
      {token0} / {token1}
    </div>
    <div className='font-medium text-left '>
      Min : {rangerow} {token0} per {token1} ↔︎ Max : {rangehigh} {token0} per {token1}
    </div>
  </div>
)

export default PositionList
