import React, { useContext } from 'react';
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
import { Darkmood } from '../pages/Home';

export default function Portofoilo() {
  const { darkMode } = useContext(Darkmood);

  return (
   
    <div className={`shadow   ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
      p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}
    >
      <div className='bg-yellow-500 rounded-full'>
        <img src={logo} className='size-[125px]' />
      </div>
      
      <div className='flex xs:flex-col gap-[20px]'>
     
        <div className='flex flex-col gap-[2px] items-end'>
          <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>البريد الالكتروني</p>
          <input
          type="email"
          placeholder="Tasbehkhaled@gmail.com"
          className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
            w-[342px] xs:w-[200px] h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold text-end`}
        />

        </div>
        
       
        <div className='flex flex-col gap-[2px] items-end'>
          <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>الاسم كامل</p>
          <input
          type="email"
          placeholder="Tasbeh khaled"
          className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
            w-[342px] xs:w-[200px] h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold text-end`}
        />

        </div>
      </div>
      
   
      <div className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
        h-[50.1px] xs:w-[200px] w-[350px] text-white
        flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}>
        حفظ
      </div>
    </div>


  )
}