import React, { useContext } from 'react'
import { PiClockCountdownLight } from "react-icons/pi";
import { LuBusFront } from "react-icons/lu";
import { FaTrainSubway } from "react-icons/fa6";
import From_to from './From_to';
import { Darkmood } from '../pages/Home';

export default function Question_one() {
  const { darkMode } = useContext(Darkmood);
  
  return (
    <div className={`p-5 w-[500px] xs:w-[270px] gap-[20px] flex flex-col items-center ${
      darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'
    }`}>
      <From_to/>

      <div className='flex xs:gap-[3px] gap-[32px]'>
        <div className={`w-[97px] flex items-center justify-center h-[48px] rounded-md gap-[15px] ${
          darkMode ? 'bg-gray-700' : 'bg-[#DED9FF]'
        }`}>
          <p>14:02</p>
          <PiClockCountdownLight className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-white'
          }`} />
        </div>
        <div className={`w-[97px] flex items-center justify-center h-[48px] rounded-md gap-[5px] ${
          darkMode ? 'bg-gray-700' : 'bg-[#DED9FF]'
        }`}>
          <p>19</p>
          <p>sep</p>
        </div>
        
        <div className={`w-[97px] h-[48px] flex items-center justify-center rounded-md gap-[15px] ${
          darkMode ? 'bg-gray-700' : 'bg-[#DED9FF]'
        }`}>
          <div className='relative flex items-center justify-center right-2'>
            <div className={`flex justify-center items-center size-[32px] rounded-full ${
              darkMode ? 'bg-gray-600' : 'bg-[#7367F0]'
            }`}>
              <LuBusFront className='text-white'/>
            </div>
            <div className={`flex justify-center absolute left-[20px] items-center size-[32px] rounded-full ${
              darkMode ? 'bg-gray-600' : 'bg-[#7367F0]'
            }`}>
              <FaTrainSubway className='text-white'/>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-[50px]'>
        <div className='flex flex-col w-full xs:gap-[15px] gap-[10px]'>
          <h1 className='font-bold text-xl'>Air-conditioned Train</h1>
          <div className='flex flex-col xs:gap-[10px]'>
            <div className='flex xs:justify-center xs:gap-[30px] font-semibold justify-between'>
              <p>First Class Air-conditioned</p>
              <p>145 EGP</p>
            </div>
            <div className='flex font-semibold justify-between'>
              <p>Second Class Air-conditioned</p>
              <p>90 EGP</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-[10px]'>
          <h1 className='font-bold text-xl'>Normal Train</h1>
          <div className='flex flex-col xs:gap-[10px]'>
            <div className='flex xs:gap-[20px] xs:justify-center font-semibold justify-between'>
              <p>First Class Air-conditioned</p>
              <p>145 EGP</p>
            </div>
            <div className='flex font-semibold justify-between'>
              <p>Second Class Air-conditioned</p>
              <p>90 EGP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}