import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/Sekka logo.png'
import logo1 from '../assets/WhatsApp_Image_2025-03-07_at_03.40.46_97a1ec4c-removebg-preview.png'
import Button from './Button'
import { FaCheck } from "react-icons/fa";
import { FaTrainTram } from "react-icons/fa6";
import { Darkmood } from '../pages/Home'

export default function Question_five() {
  const { darkMode } = useContext(Darkmood)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 2,
    seconds: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
       
        seconds -= 1;
        
        
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        
        
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        
      
        if (hours < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex xs:w-[270px] xs:flex-col xs:gap-[55px] xs:items-center relative w-full gap-[40px] p-[20px] ${
      darkMode ? 'bg-gray-800' : ''
    }`}>
      <div className='flex xs:h-[400px] h-[555px] w-[275px] items-center flex-col justify-between'>
        <div className='flex flex-col gap-[30px] items-center'>
          <img src={logo} alt="logo" />
          <div className={`flex items-center justify-center size-[103px] rounded-full ${
            darkMode ? 'bg-purple-600' : 'bg-[#7367F0]'
          }`}>
            <FaCheck className='text-4xl text-white' />
          </div>
          <p className={`text-lg font-semibold ${
            darkMode ? 'text-purple-400' : 'text-[#7367F0]'
          }`}>
            تم شراء التذكرة بنجاح
          </p>
        </div>
        <Button/>
      </div>
      
      <div className={`${
        darkMode ? 'bg-gray-600' : 'bg-gray-300'
      } xs:hidden absolute left-[42%] top-[60px] w-[0.8px] h-[478px]`}></div>

      <div className={`w-[382px] xs:w-[300px] rounded-2xl flex gap-[50px] ${
        darkMode ? 'bg-gray-700 shadow-gray-800' : 'bg-white shadow-xl'
      } p-[20px] flex-col items-center ${
        darkMode ? 'text-gray-100' : 'text-[#393343]'
      }`}>
        <div className='flex w-full xs:justify-center xs:gap-[50px] items-center justify-between'>
          <div className='flex items-end xs:h-[50px] gap-[10px]'>
            <p className='text-3xl'>14:02</p>
            <p className='text-xs font-normal'>at 23m</p>
          </div>
          <div className={`${
            darkMode ? 'bg-purple-600' : 'bg-[#7367F0]'
          } shadow cursor-pointer rounded-xl p-[10px] xs:gap-0 xs:text-center ${
            darkMode ? 'text-gray-100' : 'text-gray-50'
          } flex items-center gap-[10px]`}>
            <p className='text-sm xs:text-xs'>درجة اولي مكيف</p>
            <FaTrainTram />
          </div>
        </div>

        <div className={`flex border-b-2 p-[20px] border-dashed w-full ${
          darkMode ? 'border-purple-500' : 'border-blue-600'
        } relative flex-col`}>
          <div className='flex text-2xl justify-between'>
            <p>Cairo</p>
            <p>Alexandria</p>
          </div>
        </div>
        
        <img src={logo1} className='size-[230px]' />
        
        <div className={`flex justify-center gap-[40px] text-sm w-full ${
      darkMode ? 'text-gray-300' : 'text-[#393343]'
    }`}>
      <p>It expires in</p>
      <p>{timeLeft.hours} h. {timeLeft.minutes} min. {timeLeft.seconds} sec.</p>
    </div>
      </div>
    </div>
  )
}