import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='background flex flex-col justify-center items-center w-full overflow-hidden  '>
      <h1 className='text-center  border p-5 m-3 bg-white w-[90%] text-[35px]  '> RANDOM GIF GENERATOR</h1>
      <Random/>
      <Tag/>
    </div>
  )
}

export default App