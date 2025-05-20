import React, { useContext, useState } from 'react'
import From_to from './From_to'
import Cards from './Cards'
import CardTime from './CardTime'
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaTrainSubway } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import List_Choice from './List_Choice';
import { Darkmood, HistoryContext, TextContext, TimeContext } from '../pages/Home';

export default function Question_tow() {
    const [value, setValue] = useState(1)
    const [showList, setShowList] = useState(false)
    const { text} = useContext(TextContext) 
    const { darkMode } = useContext(Darkmood) 
    const {time} = useContext(TimeContext)
    const {history} = useContext(HistoryContext)
    return (
        <div className={`flex flex-col xs:w-[270px] gap-[50px] items-center w-full ${
            darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'
        }`}>
            <From_to />

            <div>
                <div className="overflow-x-auto xs:w-[300px] p-[20px] w-[587px] scrollbar-none">
                    <div className="flex w-[800px] gap-[20px] items-center">
                        <Cards />
                    </div>
                </div>
                <div className="overflow-x-auto p-[20px] xs:w-[300px] w-[587px] scrollbar-none">
                    <div className="flex w-[800px] gap-[20px] items-center">
                        <CardTime/>
                    </div>
                </div>
            </div>

            <div className='flex xs:flex-col xs:items-end w-full gap-[20px]'>
                <div className={`w-[104.09px] xs:justify-center xs:gap-[10px] xs:w-fit flex items-center justify-between rounded-lg h-[49.88px] pr-[10px] pl-[10px] ${
                    darkMode ? 'bg-gray-700' : 'bg-[#D4D0FA]'
                }`}>
                    <p className={darkMode ? 'text-gray-100' : 'text-purple-900'}>{time}</p>
                    <RxCounterClockwiseClock className={darkMode ? 'text-gray-300' : 'text-white'} />
                </div>
                <div className={`w-[135.9px] flex items-center xs:justify-center xs:gap-[10px] xs:w-fit rounded-lg h-[49.88px] justify-between pr-[10px] pl-[10px] ${
                    darkMode ? 'bg-gray-700' : 'bg-[#D4D0FA]'
                }`}>
                    <p className={darkMode ? 'text-gray-100' : 'text-purple-900'}>{history}</p>
                    <RxCounterClockwiseClock className={darkMode ? 'text-gray-300' : 'text-white'} />
                </div>
                <div className={`w-[135.9px] flex items-center rounded-lg h-[49.88px] xs:justify-center xs:gap-[10px] xs:w-fit justify-between pr-[10px] pl-[10px] ${
                    darkMode ? 'bg-gray-700' : 'bg-[#D4D0FA]'
                }`}>
                    <div
                        onClick={() => setValue(value - 1)}
                        className={`size-[30px] border-gray-400 border-[1px] text-5xl flex items-center justify-center cursor-pointer shadow-md pb-2 rounded ${
                            darkMode ? 'bg-gray-600 text-gray-100' : 'bg-white text-purple-900'
                        }`}
                    >
                        -
                    </div>
                    <p className={`font-semibold text-xl ${darkMode ? 'text-gray-100' : ''}`}>{value}</p>
                    <div
                        onClick={() => setValue(value + 1)}
                        className={`size-[30px] border-gray-400 border-[1px] text-3xl flex items-center justify-center cursor-pointer shadow-md pb-1 rounded ${
                            darkMode ? 'bg-gray-600 text-white' : 'bg-purple-500 text-white'
                        }`}
                    >
                        +
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[20px] items-center w-full'>
                <p className={`text-2xl xs:pr-0 pr-[70px] font-semibold self-end ${
                    darkMode ? 'text-purple-400' : 'text-[#7367F0]'
                }`}>
                    الدرجة
                </p>
                <div
                    onClick={() => setShowList(!showList)}
                    className={`flex flex-row-reverse relative justify-between items-center rounded-xl xs:w-[300px] w-[419px] h-[45px] pr-[10px] pl-[10px] cursor-pointer ${
                        darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-150'
                    } border-[0.5px]`}
                >
                    <div className='flex gap-[10px]'>
                        <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-200'}`}>
                            {text}
                        </p>
                        <div className={`size-[30px] rounded-full flex items-center justify-center ${
                            darkMode ? 'bg-purple-600' : 'bg-[#7367F0]'
                        }`}>
                            <FaTrainSubway className='text-white' />
                        </div>
                    </div>
                    <IoIosArrowDown className={darkMode ? 'text-purple-400' : 'text-[#7367F0]'} />

                    {showList && (
                        <div className={`absolute w-full inset-0 rounded-xl font-semibold z-10 ${
                            darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-400'
                        } border mt-[50px] shadow-lg`}
                        >
                            <List_Choice
                                header={'أولى مميز'}
                                li={['عادي', 'أولى مميز', 'ثاني مميز']}
                                darkMode={darkMode}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}