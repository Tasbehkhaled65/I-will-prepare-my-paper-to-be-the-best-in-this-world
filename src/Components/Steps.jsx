import React, { useContext } from 'react'
import { Countercontext, Darkmood, Showcontext } from '../pages/Home'
import { TbXboxXFilled } from "react-icons/tb";
import Question_one from './Question_one'
import Button from './Button'
import Question_tow from './Question_tow'
import Question_three from './Question_three'
import Question_four from './Question_four'
import Question_five from './Question_five'

export default function Steps() {
  const {counter , setCounter} = useContext(Countercontext)
  const {setShow} =  useContext(Showcontext)
  const { darkMode } = useContext(Darkmood);
  return (
   
    

    <div className={`p-[20px] 
    rounded-[50px]  flex flex-col items-center
      shadow-md relative  gap-[50px]
    ${darkMode ? 'bg-gray-800' : 'bg-white'}
    `}>
        <TbXboxXFilled
        onClick={()=>{
          setShow(false)
          setCounter(0)
        }}
          className='absolute text-5xl
         text-gray-300 hover:text-blue-500
         duration-300 xs:right-[-10px] xs:top-[-40px]
        top-[-40px]  right-[-40px]
         cursor-pointer' />
        {
          counter === 0 ?
          <Question_one/>
         :
          counter === 1 ?
          <Question_tow/>
         :
          counter === 2 ?
          <Question_three/>
         :
          counter === 3 ?
          <Question_four/>
         :
          <Question_five/>
        }
        {
       counter < 2 && 
       <Button />
        }
    </div>
  
  
  )
}
