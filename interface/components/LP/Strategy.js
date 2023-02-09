import react from 'react'
import SelectStrategy from './SelectStrategy'
import NumberSelector from './SelectAmount'
import Link from 'next/link'

const Strategy = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto mb-5'>
        <button className='bg-gray-700 hover:bg-gray-500 text-white font-normal py-2 px-4 rounded-xl'>
          <Link href={'/pools'}>Go back</Link>
        </button>
      </div>
      <div className='w-4/5 mx-auto rounded-2xl shadow-md bg-gray-800 border flex p-5'>
        <div className='m-5'>
          <SelectStrategy
            title={'pro'}
            description={
              'This strategy is designed for experienced traders who are familiar with the risks of impermanent loss. It is recommended to use this strategy if you are comfortable with the risks of impermanent loss.'
            }
          />
          <SelectStrategy
            title={'normal'}
            description={
              'This strategy is designed for traders who are familiar with the risks of impermanent loss. It is recommended to use this strategy if you are comfortable with the risks of impermanent loss.'
            }
          />
          <SelectStrategy
            title={'Custom'}
            description={
              'This strategy is designed for traders who are familiar with the risks of impermanent loss. It is recommended to use this strategy if you are comfortable with the risks of impermanent loss.'
            }
          />
        </div>
        <div className='flex w-max mx-auto mb-3 cursor-pointer'>
          <div className='m-4'>
            <h2 className='font-medium'>Min price</h2>
            <NumberSelector defaultNumber={1600} defaultIncrement={1} />
          </div>
          <div className='m-4'>
            <h2 className='font-medium '>Max price</h2>
            <NumberSelector defaultNumber={1680} defaultIncrement={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Strategy
