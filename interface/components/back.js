import React from 'react'
import { useHistory } from 'react-router-dom'

const GoBackButton = () => {
  const history = useHistory()

  return (
    <button
      className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'
      onClick={() => history.goBack()}
    >
      Go back
    </button>
  )
}

export default GoBackButton
