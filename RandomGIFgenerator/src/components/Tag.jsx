import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner';

const Tag = () => {
   const [tag ,setTag] = useState('car');
  const { gif ,loading, fatchData} = useGif();
  return (
    <div className='bg-green-400 w-[70%]  place-item-center flex flex-col justify-center items-center  m-5 p-5 border-solid border-black'>
    <h2 className=' text-black-300  m-3 p-3 text-[30px] text-center'> Randon {tag} MEME !</h2>
    {
   
      loading ? <Spinner/> :  <img src={gif} alt='gifimage' width={250} height={200} />
    }
    <input onChange={(e) =>setTag( e.target.value) } value={tag}
    className='w-10/12 text-lg py-2 rounded-lg mb-1 mt-2 border text-center'/>

    <button className='bg-white flex justify-center  rounded-md  items-center text-[30px] m-3 py-3 px-12'
    onClick={() => fatchData(tag)}> Generate </button>
</div>
  )
}

export default Tag