import React, { useContext, useState } from 'react'
import { cards_boket } from '../assets/assets';
import { HistoryContext, languageContext } from '../pages/Home';

export default function Cards() {
  const [active, setActive] = useState(0);
  const { setHistory } = useContext(HistoryContext);
  const { language } = useContext(languageContext); 

  return (
    <>
      {cards_boket.map((el, index) => {
        return (
          <div
            key={el.id}
            onClick={() => {
              setActive(index);
              setHistory(el.DayNumber + el.month.en); 
            }}
            className={` 
              shadow-lg shadow-gray-500 flex cursor-pointer rounded-lg
              justify-center pl-[10px] flex-col
              ${active === index ? 'bg-[#7367F0] w-[71px] h-[70px]' : 'bg-[#D4D0FA] w-[86px] h-[74px]'}
            `}
          >
            <p className='text-sm text-white'>
              {el.DayName[language]}
            </p>
            <p className='text-sm text-white'>
              <span className='text-lg font-semibold'>{el.DayNumber} </span>
              {el.month[language]}
            </p>
          </div>
        )
      })}
    </>
  )
}
