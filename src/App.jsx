import React from 'react'

const App = () => {
  return (
    <>
      <div>
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div>
          <a title='Decrement'><span>-</span></a>
          <input type="text" name='quantity' value='0' />
          <a title='Increment'><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App
