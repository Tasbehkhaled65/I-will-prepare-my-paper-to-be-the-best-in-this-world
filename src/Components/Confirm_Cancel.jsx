import React, { useContext, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Show_DivContext, Darkmood } from '../pages/Home';
import List_Choice from './List_Choice';

export default function Confirm_Cancel() {
   const [show_Choise, setShow_Choise] = useState(false)
   const {darkMode} = useContext(Darkmood)
   
  return (
    <div className={`   h-[568px] 
    flex pb-[20px] flex-col items-center gap-[10px] justify-between 
    ${darkMode ? 'bg-gray-800 text-white' : 'text-[#393343]'} font-semibold`}>
      
        <div className='flex  p-[30px]  flex-col items-center gap-[30px] w-full'>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-lg self-end'>سبب الغاء الحجز</p>
              <div 
                onClick={()=>{
                    setShow_Choise(!show_Choise)
                }}
            className={`flex  relative border ${darkMode ? 'border-gray-600' : 'border-gray-200'}
            w-[327px] xs:w-[270px] h-[60px] justify-between p-[10px] 
            ${darkMode ? 'bg-gray-700 text-gray-200' : 'text-[#374957]'}
            rounded-xl gap-[10px] cursor-pointer items-center`}>
          
                <MdOutlineKeyboardArrowDown className={`${darkMode ? 'text-gray-300' : ''}`} />
                <p className='text-sm'>حدد السبب</p>
                <div     
                className={`absolute w-full inset-0 rounded-xl 
                ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-white'} 
                ${show_Choise ? 'animate__bounceInDown animate__animated z-10' : 'hidden'}`}>
                  <List_Choice
                  header={'حدد السبب'}
                  li={[
                    ' Emergency family circumstances',
                    'Sudden change in travel plans',
                    'Personal reasons or unforeseen circumstances',
                    ' Health emergency or illness',
                    ' Work obligations or new commitments',
                    ' Financial issues or insufficient budget for travel',
                  ]}
                  />      
                </div>
          </div>
          </div>
        
        <div className='flex flex-col gap-[10px]'>
          <p className='text-lg self-end'>تعليقات</p>
            <div 
          className={`flex border ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200'}
          w-[327px] xs:w-[270px] h-[106px] justify-end p-[10px] 
          ${darkMode ? 'text-gray-300' : 'text-[#393343]'}
          rounded-xl gap-[10px]`}>
              <p className='text-xs'>اكتب السبب هنا</p>
          </div>
        </div>

        </div>

        <div  
                className={`h-[56.1px] ${
                  darkMode ? 'text-red-400 border-red-400 hover:bg-gray-700' 
                  : 'text-red-500 border-red-500 hover:bg-red-50'
                }
                flex justify-center items-center shadow-lg 
                cursor-pointer rounded-xl border
                w-[275px] gap-[10px] transition-colors`}>
                    <p className='font-semibold'>الغاء التذكره </p>
        </div>
    </div>
  )
}