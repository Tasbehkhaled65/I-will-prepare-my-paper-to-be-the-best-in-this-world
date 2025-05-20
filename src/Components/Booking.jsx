import React, { useContext } from 'react'
import { IoTicket } from "react-icons/io5";
import { Darkmood } from '../pages/Home';
import logo1 from '../assets/icons8-verified-badge-48.png'
import logo2 from '../assets/icons8-flash-on-50.png'
import logo3 from '../assets/plane.png'


export default function Booking() {
  const { darkMode } = useContext(Darkmood);

  return (
    <div
      id="Contact-us"
      className='w-full flex items-center pt-[100px]  relative gap-[350px]  flex-col'
    >
      <div
        className={`xs:pt-[10px] relative flex justify-center self-center pt-[300px] h-[180px] w-full rounded-t-full 
          ${darkMode ? 'bg-gray-800' : 'bg-[#CECAFA]'}`}
      >

<div className="absolute xs:h-[180px] h-[280px] xs:top-[-80px] top-[-100px] xs:w-[99%] w-[90%] 
  rounded-lg bg-gradient-to-br  from-[#45278F] to-[#7367F0]
  text-white flex items-center  justify-center">

              <div className="flex justify-between xs:pr-[10px] xs:pl-1 pl-[20px] gap-10 xs:justify-center xs:gap-0 items-center   w-full">
          
                    <div className='w-full relative'>

                    <div className=" flex    xs:w-[250px]  gap-[200px] justify-center xs:gap-2  ">
                      <h1 className="text-3xl xs:text-sm text-white font-bold  leading-tight">
                        Ordering <br />
                        tickets is no <br />
                        longer <span className="text-white">difficult</span>
                      </h1>
                      <p className="text-sm xs:leading-[10px] xs:text-[7px] self-end pt-[80px] xs:pt-[35px]  w-[200px] xs:w-[120px]  text-white/90">
                        Ordering tickets is no longer difficult. A seamless,
                        hassle_free process awaits, ensuring convenience and
                        swift transactions.
                      </p>
                    </div>

                    <div className='absolute xs:left-[80px] xs:top-[-10px] left-[320px] rotate-6 top-[-40px] '>
                      <img src={logo3} className='w-[350px] xs:w-[100px] ' />
                    </div>
                    </div>

                    <div className='flex items-center xs:gap-2 xs:pr-0  gap-8 pr-[100px]'>
                  
                    <div className=" h-[200px] xs:h-[120px]   relative border-dashed border-2 border-white/50">
                  
                    <div className={`absolute  ${darkMode? 'bg-gray-900' : 'bg-white'} xs:-top-[70px] -top-[130px]  left-1/2 -translate-x-1/2 size-[105px] xs:size-[50px]   rounded-full`}></div>
                    
                   
                    <div className={`absolute  ${darkMode? 'bg-gray-800' : 'bg-[#CECAFA]'} xs:-bottom-[70px] -bottom-[130px] left-1/2 -translate-x-1/2 size-[105px] xs:size-[50px]   rounded-full`}></div>
                    </div>

                      <div className="flex   xs:w-[95px] w-[200px]   flex-col gap-6">
                        <div className="flex xs:gap-2 items-center gap-4">
                        
                         <img src={logo1} className='xs:w-[20px] w-[35px]' />
                      
                          <p className="text-lg text xs:text-xs">Guarented</p>
                        </div>
                        <div className="flex xs:gap-2 items-center gap-4">
                          
                          <IoTicket className='text-4xl xs:text-2xl rotate-[20deg] text-white' />
                   
                          <p className="text-lg text xs:text-xs">Easy Booking</p>
                        </div>
                        <div className="flex xs:gap-2 items-center gap-4">
                        <img src={logo2} className='xs:w-[15px] w-[30px]' />
                          <p className="text-lg text xs:text-xs">Fast Processing</p>
                        </div>
                      </div>

                    </div>
              </div>
              
        </div>


      </div>


    </div>
  )
}
