import React, { useContext } from 'react'
import { Countercontext } from '../pages/Home'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

export default function Button() {
    const {counter , setCounter}= useContext(Countercontext) 
  return (
    <div
    onClick={()=>{setCounter(counter+1)}}
     className='bg-[#7367F0] 
    h-[56.1px] text-white
     flex justify-center
      items-center shadow-lg cursor-pointer
    rounded-xl'>
        {
           counter === 0 ?
           <p className='w-[251.41px] text-center'>Book Tickett</p> 
           :
           
            counter === 1 ?
            <p className='w-[251.41px] text-center'>Book Tickett</p>
           :
            counter === 2 ?
            <div className=' flex items-center justify-center text-center w-[251.41px] flex-row-reverse gap-[50px]'>
                <p  >المواصلة للدفع</p>
                <FaLongArrowAltLeft className='text-2xl ' />
            </div>
           :
            counter === 3 ?
                <p className='font-semibold w-[360px] text-center'>Pay Now</p>
           :
          
            <div className='flex w-[275px] h-[71px] justify-center items-center gap-[10px]'>
                <p className='font-semibold'>تحميل التذكرة</p>
                <FaFileArrowDown className='text-xl'/>
            </div>
           
        }
    </div>
  )
}
 