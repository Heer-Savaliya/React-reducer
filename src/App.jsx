import React from 'react'

const App = () => {
  return (
    <>
      <div className='flex items-center justify-center h-[100dvh] flex-col gap-6'>
        <h1 className='text-gray-500 text-5xl font-semibold font-serif'>Increment/Decrement counter</h1>
        <h4 className='text-gray-500 text-lg font-semibold italic lowercase'>Using React and Redux</h4>

        <div className='bg-gray-300 px-7 py-2 text-center'>
          <a title='Decrement' className='font-bold text-xl'><span>-</span></a>
          <input className='bg-white font-bold w-[50px] text-center p-3 mx-7 text-gray-500' type="text" name='quantity' value='0' />
          <a title='Increment' className='font-bold text-xl'><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App
