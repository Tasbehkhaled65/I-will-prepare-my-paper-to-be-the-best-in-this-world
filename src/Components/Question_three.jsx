import React, { useContext } from 'react'
import Button from './Button'
import logo from '../assets/Sekka Logo.png'
import logo1 from '../assets/WhatsApp_Image_2025-03-06_at_01.40.08_46add58a-removebg-preview.png' // متاح
import logo2 from '../assets/WhatsApp_Image_2025-03-06_at_01.41.53_fb3296b9-removebg-preview.png' // تم الاختيار
import logo3 from '../assets/WhatsApp_Image_2025-03-06_at_01.42.19_a918c74f-removebg-preview.png' // تم الحجز
import { languageContext } from '../pages/Home'

export default function Question_three() {
  const { language } = useContext(languageContext)
  const currentLang = language || 'en'  // الافتراضية إنجليزي

  const translations = {
    en: {
      chooseSeat: "Choose your seat",
      reserved: "Reserved",
      available: "Available",
      selected: "Selected",
      class: "Economy Class",
      rows: ["A", "B", "C", "D"],
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    },
    ar: {
      chooseSeat: "اختر مقعدك",
      reserved: "تم الحجز",
      available: "متاح",
      selected: "تم الاختيار",
      class: "الدرجة الاقتصادية",
      rows: ["أ", "ب", "ج", "د"],
      numbers: ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
    }
  }

  const t = translations[currentLang]

  return (
    <div className='flex xs:w-[270px] relative w-full xs:flex-col xs:items-center gap-[80px] p-[20px]'>
      <div className='flex h-[555px] xs:h-[325px] xs:w-[200px] w-[275px] items-center flex-col justify-between'>
        <div className='flex flex-col gap-[30px] items-center'>
          <img src={logo} alt="logo" />
          <p className='text-lg font-semibold text-gray-500'>{t.chooseSeat}</p>
          <div className='flex xs:justify-center xs:gap-[20px] w-[249px] justify-between'>
            <div className='flex flex-col items-center'>
              <img src={logo3} className='w-[38px] h-[27px]' />
              <p className='text-xs text-gray-400'>{t.reserved}</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={logo1} className='w-[38px] h-[27px]' />
              <p className='text-xs text-gray-400'>{t.available}</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={logo2} className='w-[38px] h-[27px]' />
              <p className='text-xs text-gray-400'>{t.selected}</p>
            </div>
          </div>
        </div>
        <Button />
      </div>

      <div className='bg-gray-300 xs:hidden absolute left-[40%] top-[60px] w-[0.8px] h-[478px]'></div>

      <div className='flex xs:w-[270px] flex-col w-[430px] border border-gray-300 rounded-3xl p-[20px] gap-[20px] items-center'>
        <h1 className='font-normal text-xl'>{t.class}</h1>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col items-center gap-[10px]'>
            <p className='text-xl'>{t.rows[0]}</p>
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
            <p className='text-xl'>{t.rows[1]}</p>
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
            {t.numbers.map((num, idx) => (
              <p key={idx}>{num}</p>
            ))}
          </div>

          <div className='flex flex-col items-center gap-[10px]'>
            <p className='text-xl'>{t.rows[2]}</p>
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
            <p className='text-xl'>{t.rows[3]}</p>
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
