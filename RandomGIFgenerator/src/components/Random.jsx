
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

 const { gif ,loading , fatchData} = useGif();
  return (
    <div className='bg-orange-400 rounded-md w-[70%]   place-item-center flex flex-col justify-center items-center m-5 p-5 border-solid border-black'>
        <h2 className=' text-neutral-300  m-3 p-3 text-[30px] text-center'> Randon MEME !</h2>
        {
       
          loading ? <Spinner/> :  <img src={gif} alt='gifimage' width={250} height={200} />
        }
        <button className='bg-white flex justify-center items-center text-[30px] rounded-md m-3 py-3 px-12'
        onClick={() => fatchData()}> Generate </button>
    </div>
  )
}

export default Random
