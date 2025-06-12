import React, { useContext } from 'react';
import { Darkmood, languageContext } from '../pages/Home';

export default function Privacy() {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  const texts = {
    ar: {
      title: 'سياسة الخصوصية:',
      content: `اكتشف خيارات تأجير السيارات في مصر مع تأجير السيارات. اختر من بين مجموعة من خيارات السيارات والخاصة المحلية لتناسب احتياجاتك وتفضيلاتك. نحن نلتزم بحماية خصوصيتك وتأمين بياناتك الشخصية أثناء استخدام خدماتنا.`
    },
    en: {
      title: 'Privacy Policy:',
      content: `Discover car rental options in Egypt with Car Rental. Choose from a wide range of local and special cars that fit your needs and preferences. We are committed to protecting your privacy and securing your personal data while using our services.`
    }
  };

  const t = texts[language] || texts.en;
  const isArabic = language === 'ar';

  return (
    <div
      className={`flex flex-col h-fit items-end gap-[20px] rounded-xl border p-[20px]
        ${darkMode ? 'bg-gray-800 text-white border-gray-600 shadow-black' : 'bg-white text-black border-gray-200 shadow-gray-300'} shadow-xl`}
     
    >
      <p className='text-xl font-semibold'>{t.title}</p>

      <p className='text-wrap font-normal xs:text-xs text-justify'>
        {t.content}
      </p>
    </div>
  );
}
