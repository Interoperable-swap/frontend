import React, { useState } from 'react'
import Card from './positons/Card'
import PositionList from './positons/PositionList'
import Empty_position from './positons/EmptyPosition'
const PositonList = () => {
  const [positon, setPosition] = useState(false)
  return (
    <div>
      <Card
        button={
          <button className='bg-blue-500 text-white py-2 px-4 rounded-full' onClick={() => setPosition(!positon)}>
            New Position
          </button>
        }
      >
        {positon ? (
          <div>
            <PositionList
              token0_symbol={'/assets/usdt.svg'}
              token1_symbol={'/assets/astar.png'}
              token0={'USDT'}
              token1={'ASTR'}
              rangerow={'0.05'}
              rangehigh={'0.06'}
            />
            <PositionList
              token0_symbol={'/assets/usdt.svg'}
              token1_symbol={'/assets/uniswap.png'}
              token0={'USDT'}
              token1={'UNI'}
              rangerow={'5.6'}
              rangehigh={'6.4'}
            />
            <PositionList
              token0_symbol={'/assets/uniswap.png'}
              token1_symbol={'/assets/astar.png'}
              token0={'UNI'}
              token1={'ASTR'}
              rangerow={'10.0'}
              rangehigh={'12.3'}
            />
          </div>
        ) : (
          <Empty_position />
        )}
      </Card>
    </div>
  )
}

export default PositonList