import React from 'react'
import Button from './Button'
import logo from '../assets/Sekka Logo.png'
import logo1 from '../assets/WhatsApp_Image_2025-03-06_at_01.40.08_46add58a-removebg-preview.png'
import logo2 from '../assets/WhatsApp_Image_2025-03-06_at_01.41.53_fb3296b9-removebg-preview.png'
import logo3 from '../assets/WhatsApp_Image_2025-03-06_at_01.42.19_a918c74f-removebg-preview.png'
export default function Question_three() {
  return (
    <div className='flex xs:w-[270px] relative w-full xs:flex-col xs:items-center gap-[80px] p-[20px]'>
      <div className='flex h-[555px] xs:h-[325px] xs:w-[200px] w-[275px] items-center flex-col justify-between'>
        <div className='flex flex-col gap-[30px] items-center'>
      <img src={logo} alt="logo" />
      <p className=' text-lg font-semibold text-gray-500'>
        اختر مقعدك 
      </p>
      <div className='flex xs:justify-center xs:gap-[20px] w-[249px] justify-between'>
        <div className='flex flex-col items-center'>
          <img src={logo3} className='w-[38px] h-[27px]' />
          <p className='text-xs text-gray-400'>تم الحجز</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={logo1} className='w-[38px] h-[27px]' />
          <p className='text-xs text-gray-400'> متاح  </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={logo2} className='w-[38px] h-[27px]' />
          <p className='text-xs text-gray-400'>تم الاختيار</p>
        </div>
      </div>

        </div>
      <Button/>
      </div>

      <div className='bg-gray-300 xs:hidden absolute left-[40%] top-[60px] w-[0.8px] h-[478px]'></div>
     
     <div className='flex xs:w-[270px] flex-col w-[430px] border border-gray-300 
     rounded-3xl p-[20px] gap-[20px]  items-center'>
        <h1 className='font-normal text-xl'>Economy Class</h1>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col items-center gap-[10px]'>
          <p className='text-xl'>A</p>
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />

          </div>
          <div className='flex flex-col items-center gap-[10px]'>
          <p className='text-xl'>B</p>
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />

          </div>
          <div className='flex flex-col pt-[44px] items-center gap-[12px]'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
         

          </div>
          <div className='flex flex-col items-center gap-[10px]'>
          <p className='text-xl'>C</p>
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />

          </div>
          <div className='flex flex-col items-center gap-[10px]'>
          <p className='text-xl'>D</p>
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo3} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo2} className='w-[38px] h-[27px]' />
          <img src={logo1} className='w-[38px] h-[27px]' />

          </div>
       
        </div>
     </div>
    </div>
  )
}
