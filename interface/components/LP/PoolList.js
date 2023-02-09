import React from 'react'
import Pool from './Pool'
const PoolList = () => {
  return (
    <div>
      <Pool
        token0_symbol={'/assets/usdt.svg'}
        token1_symbol={'/assets/astar.png'}
        token0={'USDT'}
        token1={'ASTR'}
        APY={'64.50'}
        TVL={'123.50'}
        DVL={'34.50'}
      />
      <Pool
        token0_symbol={'/assets/usdt.svg'}
        token1_symbol={'/assets/uniswap.png'}
        token0={'USDT'}
        token1={'UNI'}
        APY={'64.50'}
        TVL={'123.50'}
        DVL={'34.50'}
      />
      <Pool
        token0_symbol={'/assets/uniswap.png'}
        token1_symbol={'/assets/astar.png'}
        token0={'UNI'}
        token1={'ASTR'}
        APY={'64.50'}
        TVL={'123.50'}
        DVL={'34.50'}
      />
    </div>
  )
}

export default PoolList
