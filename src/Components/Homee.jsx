import React, { useContext } from "react";
import homeImage from "../assets/image 1.png"; 
import { Darkmood } from "../pages/Home";

const Home = () => {
  const {darkMode} = useContext(Darkmood)
  return (
    <section id="Home" className={` flex  
       flex-col md:flex-row  pr-[20px]
      items-center justify-between 
      ${darkMode ? ' bg-gray-900 ' : ''}
    `}>

      

    {/* <div className=" w-full flex justify-start ">
    <img src={homeImage} alt="Train Booking" className="max-w-full h-auto ml-0 left-0 bg-gradient-to-r" />
   </div> */}


<div className="w-full flex justify-end relative">
  <div className="relative w-full">
    <img 
      src={homeImage} 
      alt="Train Booking" 
      className="max-w-full h-auto mr-0" 
      style={{ 
        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0))',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0))'
      }}
    />
  </div>
</div>

   <div className={`home__content w-full md:w-1/2 text-center md:text-right p-4 ${
      darkMode ? '' : ''
    }`}>
      <h1 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        طريقة <span style={{ color: '#7367F0' }}>سريعة وسهلة</span> لحجز
      </h1>
      <h1 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        مكانك في <span style={{ color: '#7367F0' }}>القطار</span>
      </h1>
      <p className={`mt-4 text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
        خطط بذكاء وسافر بشكل أفضل. سكه تجعل شبكة
      </p>
      <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
        .القطارات في مصر بين يديك
      </p>
    </div>
    </section>
    
  );
};

export default Home;
