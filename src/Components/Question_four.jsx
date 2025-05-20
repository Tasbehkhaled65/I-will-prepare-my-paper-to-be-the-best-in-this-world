import React, { useContext } from 'react'
import logo from '../assets/WhatsApp_Image_2025-03-06_at_02.43.51_836acc1b-removebg-preview.png'
import Button from './Button'
import { IoIosLock } from "react-icons/io";
import { Darkmood } from '../pages/Home'

export default function Question_four() {
  const { darkMode } = useContext(Darkmood)

  return (
    <div className={`p-[100px] xs:p-[50px] xs:w-[270px] flex items-center flex-col gap-[20px] ${
      darkMode ? 'bg-gray-800' : ''
    }`}>
        <div>
        <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>Card Number</p>
        <div className='relative'>
          <input
          placeholder='2412 - 7152 - 3412 - 3456'
          className={`border-[1px] ${
            darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
          } w-[354px] xs:w-[250px] pl-[50px] h-[57px] rounded-xl outline-none text-lg`}
          type="text" />

          <img src={logo} alt="" className='w-[36px] top-[18px] absolute h-[24px]' />
        </div>
        </div>

        <div className='flex w-full xs:justify-center xs:gap-[60px] justify-between items-center'>
        <div>
            <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>Cvv</p>
            <input
            placeholder='327'
            type='text'
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
        </div>

        <div className='flex flex-col items-center'>
         <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>Expiary Date</p>
          <div className='flex gap-[5px]'>
          <input
            placeholder='09'
            type='text'
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
             <p className={`text-2xl ${darkMode ? 'text-gray-300' : ''}`}>/</p>
             <input
            placeholder='09'
            type='text'
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
          </div>
        </div>
        </div>

        <div>
        <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>Password</p>
        <div className='relative'>
          <input
          className={`border-[1px] xs:w-[250px] pl-[30px] ${
            darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
          } w-[354px] h-[57px] rounded-xl flex text-lg items-center gap-[10px]`}
          placeholder='*********'
          type="password"/>
          <IoIosLock className={`text-2xl left-1 top-[13px] absolute ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}/>
        </div>
        </div>
        <div className='xs:w-[270px]'>
          <Button/>
        </div>
    </div>
  )
}