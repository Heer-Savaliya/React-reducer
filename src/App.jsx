import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions';

const App = () => {
  const myState = useSelector((state)=> state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex items-center justify-center h-[100dvh] flex-col gap-6'>
        <h1 className='text-gray-500 text-5xl font-semibold font-serif'>Increment/Decrement counter</h1>
        <h4 className='text-gray-500 text-lg font-semibold italic lowercase'>Using React and Redux</h4>

        <div className=''>
          <a title='Decrement' className='font-bold text-xl cursor-pointer bg-gray-300 px-6 py-4 rounded-l-lg hover:bg-gray-500 hover:text-white' onClick={()=>dispatch(decNumber())}><span>-</span></a>
          <input className='bg-white font-bold w-[50%] text-center p-2 mx-5 text-gray-500' type="text" name='quantity'  value={myState} />
          <a title='Increment' className='font-bold text-xl cursor-pointer bg-gray-300 px-6 py-4 rounded-r-lg hover:bg-gray-500 hover:text-white' onClick={()=>dispatch(incNumber(5))}><span>+</span></a> 
        </div>
      </div>
    </>
  )
}

export default App
