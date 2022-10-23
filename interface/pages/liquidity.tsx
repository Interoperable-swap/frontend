import type { NextPage } from 'next'
import AddLiquidity from '../components/AddLiquidity'
import Header from '../components/Header'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

const liquidity: NextPage = ()  => {
  return (
    <div className={style.wrapper}>
      <Header />
      <AddLiquidity />
      <a href='https://github.com/tnkshuuhei'>github</a>
    </div>
  )
}

export default liquidity