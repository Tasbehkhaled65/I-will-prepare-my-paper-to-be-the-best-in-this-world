import React, { useContext } from 'react'
import { Darkmood } from '../pages/Home'

export default function From_to() {
  const { darkMode } = useContext(Darkmood)

  return (
    <div className='flex gap-[15px]'>
      <div className='flex font-normal flex-col items-center'>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>from</p>
        <p className={darkMode ? 'text-white' : ''}>Cairo</p>
      </div>
      <div className='flex items-center'>
        <div className={`${darkMode ? 'bg-gray-300' : 'bg-black'} size-2 rounded-full`}></div>
        <div className={`${darkMode ? 'bg-gray-300' : 'bg-black'} w-[103px] h-[2px] rounded-full`}></div>
        <div className={`${darkMode ? 'bg-gray-300' : 'bg-black'} size-2 rounded-full`}></div>
      </div>
      <div className='flex font-normal flex-col items-center'>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>To</p>
        <p className={darkMode ? 'text-white' : ''}>Alexandria</p>
      </div>
    </div>
  )
}