import React, { useContext } from 'react'
import logo from '../assets/Capture.png'
import logo1 from '../assets/WhatsApp_Image_2025-03-07_at_03.40.46_97a1ec4c-removebg-preview.png'
import { FaFileArrowDown } from "react-icons/fa6";
import { FaTrainTram } from "react-icons/fa6";
import { Show_DivContext, Darkmood } from '../pages/Home';

export default function Cancel_Boket() {
    const {setShow_Div} = useContext(Show_DivContext)
    const {darkMode} = useContext(Darkmood)
    
  return (
      <div className={`flex xs:flex-col xs:items-center relative w-full gap-[40px] p-[20px] ${darkMode ? 'bg-gray-900' : ''}`}>
              <div className={`flex xs:h-[350px] h-[555px] w-[275px] items-center flex-col justify-between ${darkMode ? 'text-white' : ''}`}>
                <div className='flex flex-col gap-[30px] items-center'>
                <img src={logo} alt="logo" />
                <p className='text-lg font-semibold'>
                يمكنك الغاء الحجز فتره يومين لباقي
                </p>
                </div>
                <div className='flex flex-col gap-[10px]'>    
                <div className='
                bg-[#7367F0] 
                h-[56.1px] text-white
                flex justify-center
                items-center shadow-lg cursor-pointer
                rounded-xl
                 w-[275px] gap-[10px] hover:bg-[#5d52d6] transition-colors'>
                <p className='font-semibold'>تحميل التذكرة</p>
                <FaFileArrowDown className='text-xl'/>
                </div>
                
                <div
                onClick={()=>{
                     setShow_Div(1)
                }}
                className='
                h-[56.1px] text-red-500
                flex justify-center
                items-center shadow-lg 
                cursor-pointer
                rounded-xl border border-red-500
                w-[275px] gap-[10px] hover:bg-red-50 dark:hover:bg-gray-700 transition-colors'>
                    <p className='font-semibold'>الغاء التذكره  </p>
                </div>

                </div>

              </div>
              <div className={`bg-gray-300 xs:hidden absolute left-[42%] top-[60px] w-[0.8px] h-[478px] ${darkMode ? 'bg-gray-600' : ''}`}></div>
    
              <div className={`w-[382px] xs:w-[300px] rounded-2xl flex gap-[50px] shadow-xl p-[20px] flex-col items-center ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#393343]'
              }`}>
                  <div className='flex w-full items-center justify-between'>
                    <div className='flex items-end gap-[10px]'>
                      <p className='text-3xl'>14:02</p>
                      <p className='text-xs font-normal'>at 23m</p>
                    </div>
                    <div className={`bg-[#7367F0] shadow cursor-pointer rounded-xl p-[10px] flex items-center gap-[10px] ${
                        darkMode ? 'text-gray-100' : 'text-gray-50'
                    }`}>
                      <p className='text-sm xs:text-xs'>درجة اولي مكيف</p>
                      <FaTrainTram className='' />
                    </div>
                  </div>
    
                  <div className={`flex border-b-2 p-[20px] border-dashed w-full relative flex-col ${
                      darkMode ? 'border-blue-400' : 'border-blue-600'
                  }`}>
                    <div className='flex text-2xl justify-between'>
                      <p>Cairo</p>
                      <p>Alexandria</p>
                    </div>
                    <div className='flex justify-between'>
                     
                    </div>
                  </div>
                  <img src={logo1} className='size-[230px]' />
                  <div className={`flex justify-center gap-[40px] text-sm w-full ${
                      darkMode ? 'text-gray-300' : 'text-[#393343]'
                  }`}>
                    <p>It expires in</p>
                    <p>23 h. 02min. 10sec.</p>
                  </div>
              </div>
      </div>
  )
}