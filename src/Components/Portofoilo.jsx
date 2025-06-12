import React, { useContext } from 'react';
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
import { Darkmood, languageContext } from '../pages/Home';

export default function Portofoilo() {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  const texts = {
    en: {
      emailLabel: "Email",
      emailPlaceholder: "Tasbehkhaled@gmail.com",
      nameLabel: "Full Name",
      namePlaceholder: "Tasbeh khaled",
      saveBtn: "Save"
    },
    ar: {
      emailLabel: "البريد الالكتروني",
      emailPlaceholder: "Tasbehkhaled@gmail.com",
      nameLabel: "الاسم كامل",
      namePlaceholder: " تسبيح خالد",
      saveBtn: "حفظ"
    }
  };

  const t = texts[language] || texts.en;
  const isArabic = language === 'ar';

  return (
    <div className={`shadow w-full sm:w-[450px]  ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
      p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}
   
    >
      <div className='bg-yellow-500 rounded-full'>
        <img src={logo} className='size-[125px]' />
      </div>
      
      <div className={`flex  gap-[20px] w-full justify-center`}>
        <div className={`flex flex-col gap-[2px]  ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
          <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>
            {t.emailLabel}
          </p>
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
              w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
              ${isArabic ? 'text-end' : 'text-start'}`}
          />
        </div>

        <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
          <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>
            {t.nameLabel}
          </p>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
              w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
              ${isArabic ? 'text-end' : 'text-start'}`}
          />
        </div>
      </div>

      <div className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
        h-[50.1px] xs:w-[200px] w-[350px] text-white
        flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}>
        {t.saveBtn}
      </div>
    </div>
  )
}
