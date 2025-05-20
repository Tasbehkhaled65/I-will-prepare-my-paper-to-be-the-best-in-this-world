import React, { createContext, useState } from "react";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navpar from "../Components/Navpar";
import Curds from "../Components/Curds";
import Booking from "../Components/Booking";
import Steps from "../Components/Steps";
import Settings from "../Components/Settings";
import Homee from "../Components/Homee";
import Search from "../Components/Search";
import About from "../Components/About";
import Login from "../Components/Login";
import Register from "../Components/Register";
import OTP from '../Components/OTP';
import Sitting_part_two from "../Components/Sitting_part_two";
import ChangePass from "../Components/ChangePass";
import ForgetPassword from "../Components/ForgetPassword";


export const Showcontext = createContext();
export const Countercontext = createContext();
export const ActiveContext = createContext();
export const Show_DivContext = createContext();
export const TextContext = createContext();
export const Darkmood = createContext()
export const show_Div_Sitting_context = createContext()
export const TimeContext = createContext()
export const HistoryContext = createContext()

export default function Home() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const [counter, setCounter] = useState(0);
  const [show_Div, setShow_Div] = useState(0);
  const [darkMode, setDarkMode] = useState(false); 
  const [text, setText] = useState('اولى مميز'); 
  const [show_Div_Sitting , setShow_Div_Sitting] = useState(false)
  const [language, setLanguage] = useState('ar');
  const [time, setTime] = useState('14:02');
  const [history, setHistory] = useState('19 sep');
  return (
    
   
      <Showcontext.Provider value={{ show, setShow }}>
        <Countercontext.Provider value={{ counter, setCounter }}>
          <ActiveContext.Provider value={{ active, setActive }}>
            <Show_DivContext.Provider value={{ show_Div, setShow_Div }}>
            <Darkmood.Provider value={{ darkMode, setDarkMode }}>
            <TextContext.Provider value={{ text, setText }}>
            <show_Div_Sitting_context.Provider value={{ show_Div_Sitting , setShow_Div_Sitting}}>
            <TimeContext.Provider value={{time, setTime}}>
            <HistoryContext.Provider value={{history, setHistory}}>
    <div
      className={`flex relative flex-col 
         items-center gap-[50px] 
         w-full ${darkMode ? "bg-gray-900" :'bg-white'} 
         transition-colors
          duration-300 `}
    >
         
            <div className="w-full ">
            <Routes>
             <Route path="/" element={ <Navpar/>}/>
             <Route path="/settings" element={ <Navpar/>}/>
            </Routes>
             
              {
             show_Div_Sitting && 
             <div
              onClick={() => setShow_Div_Sitting(false)}
             className='bg-black z-40 absolute inset-0 bg-opacity-50  '>
             <div className='absolute xs:right-[20px] xs:top-[100px]  border border-gray-50 rounded-2xl top-[120px] right-[70px] bg-white shadow-lg'>
                <Sitting_part_two/>
                <div className={`absolute  top-[-80px]
                 right-[10px] w-[64.45px] h-[138.45px]
                  border-l-[30px] border-l-transparent 
                  border-r-[30px] border-r-transparent 
                  border-b-[80px]  ${darkMode ? 'border-gray-800' : 'border-white'}`}>
                </div>
              </div>
             </div>
            }

              <Routes>
                <Route path="/" element={
                  <>
                  <Homee />
                  <Search />
                  </>

                  
                } />
              </Routes>
              </div>

       
            
              
            <Routes>
              <Route path="/" element={
            <div
               id='Booking-us'
            className="justify-center   xs:p-0 gap-[10px] flex flex-wrap mb-0">
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                <Curds />
                {show && (
                  <div className="absolute inset-0   w-full   bg-black  bg-opacity-50 flex justify-center   z-50">
                    <div className="absolute top-[30%]">
                      <Steps />
                    </div>
                  
                  </div>
                )}
            </div>
              }
               />
            </Routes>


            <Routes>
             <Route path="/" element={
                  <>
                  <About />
                  <Booking />
                  </>
              }
               />
            </Routes>
         

              <Routes>
                <Route path="/settings" element={<Settings />} />
              </Routes>
           
              </div>
              
          
                <Routes>
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Register" element={<Register/>} />
                  <Route path="/ForgetPassword" element={<ForgetPassword/>} />
                  <Route path="/ChangePass" element={<ChangePass/>} />
                  <Route path="/OTP" element={<OTP/>} />
                </Routes>
          
                          

  
            </HistoryContext.Provider>
            </TimeContext.Provider>
            </show_Div_Sitting_context.Provider>
            </TextContext.Provider>
            </Darkmood.Provider>
            </Show_DivContext.Provider>
          </ActiveContext.Provider>
        </Countercontext.Provider>
      </Showcontext.Provider>
   
  );
}
