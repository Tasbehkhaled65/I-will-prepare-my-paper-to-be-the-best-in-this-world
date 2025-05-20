import React, { useContext } from 'react'
import logo from '../assets/snapedit_1740958952578-removebg-preview.png'
import { Showcontext } from '../pages/Home'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Card_Booket() {
     const { setShow}= useContext(Showcontext)
  return (
     <div className='relative '>
             <img src={logo} className='w-[228px] h-[151px]' />
             <div className='absolute  flex-row-reverse justify-end
              p-[10px] pt-[15px] flex xs:gap-[0px] gap-[10px]
              items-center inset-0
             '>
                <div className='flex gap-[20px] flex-col  self-start'>
    
                <div className='flex 
                 gap-[50px] xs:gap-[55px]
                 w-[61.91217803955078]
                  h-[18.441925048828125] '>
                    <div className='flex items-end flex-col'>
                    <p className='text-lg 
                     font-Almarai font-bold
                      text-[#564DB4] xs:text-sm '>
                        14:31
                      </p>
                    <p className='font-Almarai font-normal text-[10px]
                    text-[#9D9D9D]'>
                        الوصول
                    </p>
                    <p className='font-Almarai font-bold text-[16.86px]
                    text-[#404040] xs:text-sm'>
                        الاقصر
                    </p>
                    </div>
    
                    <div className='flex items-end flex-col'>
                    <p className='text-lg 
                     font-Almarai font-bold
                      text-[#564DB4]  xs:text-sm'>14:05</p>
                      <p className='font-Almarai font-normal text-[10px]
                    text-[#9D9D9D]'>
                        ميعاد التحرك
                    </p>
                    <p className='font-Almarai font-bold text-[16.86px]
                    text-[#404040] xs:text-sm'>
                        الاسكندريه
                    </p>
                    </div>
                </div>
    
    
                
                  
                
                    <div className='flex  xs:justify-center xs:gap-[2px] justify-between w-[100%]
                    h-[12px]'>
                    <p className='font-Almarai font-bold text-[12px]'>
                        150جنية
                    </p>
                    <p className='font-Almarai 
                    font-normal text-[12px]
                    text-[#000000] 
                     xs:text-wrap  xs:text-center xs:w-[100px]
                      xs:text-[10px]'>
                        الدرجة الاولى    مكيفة الهواء
                    </p>
    
                    </div>
              
                </div>
    
               
               <div className='xs:pr-2 h-full'>

                <div 
                  onClick={()=>{
                    setShow(true)
                }}
                className='flex items-center
                p-[8.43px] h-[98%] w-[44.963172912597656] 
                rounded-[16.86px] justify-center cursor-pointer bg-[#7367F0]'>
                <FaArrowLeftLong
                className='text-white' />
                </div>
               </div>
               
             </div>
            </div>
        
  )
}
