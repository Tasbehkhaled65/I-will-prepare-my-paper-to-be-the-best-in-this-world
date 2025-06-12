import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Show_DivContext, Darkmood, languageContext, Showcontext, TextContext } from '../pages/Home';
import List_Choice from './List_Choice';

export default function Confirm_Cancel() {
  const [show_Choice, setShow_Choice] = useState(false);
  const [comments, setComments] = useState('');
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);
  const {setShow} = useContext(Showcontext)
  const {text , setText} = useContext(TextContext)
  const {setShow_Div} = useContext(Show_DivContext)
  const isArabic = language === 'ar';


  const texts = {
    ar: {
      reasonLabel: 'سبب الغاء الحجز',
      selectReason: 'حدد السبب',
      commentsLabel: 'تعليقات',
      commentsPlaceholder: 'اكتب السبب هنا',
      cancelTicket: 'الغاء التذكره',
      reasonsList: [
        'ظروف عائلية طارئة',
        'تغيير مفاجئ في خطط السفر',
        'أسباب شخصية أو ظروف غير متوقعة',
        'حالة طبية طارئة أو مرض',
        'التزامات عمل أو مواعيد جديدة',
        'مشاكل مالية أو ميزانية غير كافية للسفر',
      ],
    },
    en: {
      reasonLabel: 'Reason for Cancellation',
      selectReason: 'Select Reason',
      commentsLabel: 'Comments',
      commentsPlaceholder: 'Write your reason here',
      cancelTicket: 'Cancel Ticket',
      reasonsList: [
        'Emergency family circumstances',
        'Sudden change in travel plans',
        'Personal reasons or unforeseen circumstances',
        'Health emergency or illness',
        'Work obligations or new commitments',
        'Financial issues or insufficient budget for travel',
      ],
    },
  };
  useEffect(()=>{
    if(language === 'ar'){
      setText(texts.ar.selectReason);
    }else{

      setText( texts.en.selectReason);
    }
  },[language, setText]);
  const t = texts[language] || texts.en;


  return (
    <div
      className={`h-[568px] w-full   flex pb-[20px] flex-col items-center gap-[10px] justify-between font-semibold ${
        darkMode ? 'bg-gray-800 text-white' : 'text-[#393343]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className='flex p-[30px] flex-col items-center gap-[30px] w-full'>

        <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
          <p className='text-lg self-end'>{t.reasonLabel}</p>

          <div
            onClick={() => setShow_Choice(!show_Choice)}
            className={`flex relative border ${
              darkMode ? 'border-gray-600' : 'border-gray-200'
            } h-[60px] justify-between p-[10px] ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'text-[#374957]'
            } rounded-xl gap-[10px] cursor-pointer items-center`}
          >
            <MdOutlineKeyboardArrowDown className={darkMode ? 'text-gray-300' : ''} />
            <p className='text-sm'>
              {text}
            </p>

            <div
              className={`absolute w-full inset-0 rounded-xl ${
                darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-white'
              } ${show_Choice ? 'animate__bounceInDown animate__animated z-10' : 'hidden'}`}
            >
              <List_Choice
                header={t.selectReason}
                li={t.reasonsList}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
          <p className='text-lg self-end'>{t.commentsLabel}</p>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder={t.commentsPlaceholder}
            className={`w-full h-[106px] p-[10px] rounded-xl border ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-200 bg-white text-[#393343]'
            } resize-none focus:outline-none`}
          />
        </div>

      </div>

      <button
      onClick={()=>{
                  setShow(false)
                  setShow_Div(0)
                }}
        className={`h-[56.1px] w-[90%]  flex justify-center items-center shadow-lg rounded-xl border cursor-pointer transition-colors ${
          darkMode
            ? 'text-red-400 border-red-400 hover:bg-gray-700'
            : 'text-red-500 border-red-500 hover:bg-red-50'
        }`}
      >
        <p className='font-semibold'>{t.cancelTicket}</p>
      </button>
    </div>
  );
}
