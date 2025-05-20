import React, { useContext } from 'react'
import logo from '../assets/snapedit_1740958952578-removebg-preview.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Showcontext } from '../pages/Home';
import Booking from './Booking';
export default function Curds() {

    const { setShow}= useContext(Showcontext)
  return (
    
        <div className='relative'>
         <img src={logo}  className='w-[400px]' alt="" />
         <div className='absolute  flex-row-reverse justify-end
          p-[10px] pt-[15px] xs:pt-[10px] flex  gap-[50px]
          items-center inset-0'>
            <div className='flex flex-col self-start'>

            <div className='flex 
             gap-[100px] xs:gap-[90px]
             w-[61.91217803955078] h-[18.441925048828125] '>
                <div className='flex items-end flex-col'>
                <p className='text-[25.29px] 
                 font-Almarai font-bold xs:text-[20px]
                  text-[#564DB4] '>14:31</p>
                <p className='font-Almarai font-normal text-[14px]
                text-[#9D9D9D] xs:text-[10px]'>
                    الوصول
                </p>
                <p className='font-Almarai font-bold text-[16.86px]
                text-[#404040] xs:text-[13px]'>
                    الاقصر
                </p>
                </div>

                <div className='flex items-end flex-col'>
                <p className='text-[25.29px] 
                 font-Almarai font-bold
                  text-[#564DB4] xs:text-[20px]'>14:05</p>
                  <p className='font-Almarai font-normal text-[14px]
                text-[#9D9D9D] xs:text-[10px]'>
                    ميعاد التحرك
                </p>
                <p className='font-Almarai font-bold text-[16.86px]
                text-[#404040] xs:text-[13px]'>
                    الاسكندريه
                </p>
                </div>
            </div>


            <div className='flex flex-col xs:gap-2 xs:pt-1 gap-[10px] xs:items-start items-end pt-[10px]'>
                <div className='flex justify-between xs:gap-[25px] xs:justify-start   w-[248px]
                h-[12px]'>
                <p className='font-Almarai font-bold text-[12px]'>
                    150جنية
                </p>
                <p className='font-Almarai 
                font-normal text-[12px]
                text-[#000000]'>
                    الدرجة الثانيه مكيفة الهواء
                </p>

                </div>
                <div className='flex justify-between w-[248px]
                h-[12px] xs:gap-[25px] xs:justify-start'>
                <p className='font-Almarai font-bold text-[12px]'>
                    150جنية
                </p>
                <p className='font-Almarai 
                font-normal text-[12px]
                text-[#000000]'>
                    الدرجة الاولى مكيفة الهواء
                </p>

                </div>
                <div className='flex justify-between w-[248px]
                h-[12px] xs:gap-[25px] xs:justify-start'>
                <p className='font-Almarai font-bold text-[12px]'>
                    150جنية
                </p>
                <p className='font-Almarai 
                font-normal text-[12px]
                text-[#000000]'>
                    الدرجة الاولى    مكيفة الهواء
                </p>

                </div>
            </div>
            </div>

           
           
            <div 
              onClick={()=>{
                setShow(true)
            }}
            className='flex items-center
            p-[15.43px] xs:h-[90%] h-[152.8px] w-[44.963172912597656] 
            rounded-[16.86px] justify-center cursor-pointer bg-[#7367F0]'>
            <FaArrowLeftLong
            className='text-white' />
            </div>
         </div>
        </div>
    
  );
};
// export default Curds;