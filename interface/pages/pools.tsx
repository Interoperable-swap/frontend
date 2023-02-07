import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen from-gray-900 to-gray-600 bg-gradient-to-r text-white select-none flex flex-col justify-between	`,
}
const Pools: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <Footer />
    </div>
  )
}
export default Pools
