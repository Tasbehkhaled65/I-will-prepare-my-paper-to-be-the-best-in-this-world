import React, { useContext, useState } from 'react'
import { Darkmood, TimeContext } from '../pages/Home'
import { time_boket } from '../assets/assets'

export default function CardTime() {
   const [active , setActive] = useState(0)
 const { darkMode } = useContext(Darkmood) 
 const {setTime} = useContext(TimeContext)
  return (
    <>
    {
      time_boket.map((el,index)=>{
        return(
            <div
            onClick={()=>{
              console.log(el.Time);
              
              setActive(index);
              setTime(el.Time)
            }}
            key={el.id}
            className={` 
                shadow-lg shadow-gray-500 flex cursor-pointer  rounded-lg
              justify-center  ${darkMode ? "#4F46E5" : "#7367F0"} w-[63px] h-[34px] pl-[10px]  flex-col
                ${active === index ? 'bg-[#7367F0]' : 'bg-[#D4D0FA]'}
              `}
              >
                  <p className='text-sm text-white'>{el.Time}</p>
                
              </div>

        )
      })

    }
    </>
  )
}
