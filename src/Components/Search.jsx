// import { useState } from "react";
// import pinIcon from '../assets/pin.png';
// import calenderIcon from '../assets/calendar.png'
// import trainIcon from '../assets/railway.png'
// import clockIcon from '../assets/clock.png'
// import { Darkmood } from "../pages/Home";
// import { useContext } from "react";

// const Search = () => {
//   const [time, setTime] = useState("19:17");
//   const [date, setDate] = useState("2023-12-02");
//    const {darkMode} = useContext(Darkmood)

//   return (
//     <section
//       className={`flex flex-col items-center p-10  bg-[#B9B3FA] `}
//       id="TimeTable"
//     >
//       <div className="flex gap-4 flex-wrap justify-center ">


//         <div className="flex flex-col text-white p-4 rounded-2xl  shadow-lg min-w-[220px] bg-[#7367F0]">
//           <label className="mb-2 text-right font-semibold">الدرجة</label>
//           <div className="relative">
//           <select className="bg-white/20 text-white p-2 rounded-md w-full appearance-none">
//             <option className="bg-[#938bdf] text-white">أول مميز</option>
//             <option className="bg-[#938bdf] text-white">ثاني مميز</option>
//             <option className="bg-[#938bdf] text-white">عادي</option>
//           </select>
//           <img
//               src={trainIcon}
//               alt="Location"
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 w-7 h-7"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col text-white p-4 rounded-2xl bg-[#7367F0] shadow-lg min-w-[220px]">
//           <label className="mb-2 text-right font-semibold">إلى</label>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="أدخل الموقع"
//               className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
//             />
            
//             <img
//               src={pinIcon}
//               alt="Location"
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col text-white p-4 rounded-2xl bg-[#7367F0] shadow-lg min-w-[300px]">
//           <label className="mb-2 text-right font-semibold">من</label>
//           <div className="flex items-center gap-2">
//             <div className="relative">
//               <input
//                 placeholder="7:17 Pm"
//                 className="bg-white/20 p-2 rounded-md text-white placeholder-white"
//               />
//               <img
//               src={clockIcon}
//               alt="Location"
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
//             />
//             </div>
//             <div className="relative">
//               <input
//                 placeholder="1/5/2025"
//                 className="bg-white/20 p-2 rounded-md text-white placeholder-white"
//               />
//              <img
//               src={calenderIcon}
//               alt="Location"
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
//             />
//             </div>
//             <div className="relative flex-grow">
//               <input
//                 type="text"
//                 placeholder="أدخل موقعك"
//                 className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
//               />
//               <img
//               src={pinIcon}
//               alt="Location"
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
//             />
//             </div>
//           </div>
//         </div>
//       </div>
//         <button className="mt-6 bg-white text-[#7367F0] px-6 py-2 rounded-lg shadow-md ">
//           إبحث عن الميعاد
//         </button>
//     </section>
//   );
// };

// export default Search;
import { useState, useContext } from "react";
import pinIcon from '../assets/pin.png';
import calenderIcon from '../assets/calendar.png';
import trainIcon from '../assets/railway.png';
import clockIcon from '../assets/clock.png';
import { Darkmood } from "../pages/Home";

const Search = () => {
  const [time, setTime] = useState("19:17");
  const [date, setDate] = useState("2023-12-02");
  const { darkMode } = useContext(Darkmood);

  return (
    <section
      className={`flex flex-col items-center p-6 sm:p-10 bg-[#B9B3FA]`}
      id="TimeTable"
    >
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl">

        {/* الدرجة */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className="mb-2 text-right font-semibold">الدرجة</label>
          <div className="relative">
            <select className="bg-white/20 text-white p-2 rounded-md w-full appearance-none">
              <option className="bg-[#938bdf] text-white">أول مميز</option>
              <option className="bg-[#938bdf] text-white">ثاني مميز</option>
              <option className="bg-[#938bdf] text-white">عادي</option>
            </select>
            <img
              src={trainIcon}
              alt="Train"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
        </div>

        {/* إلى */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className="mb-2 text-right font-semibold">إلى</label>
          <div className="relative">
            <input
              type="text"
              placeholder="أدخل الموقع"
              className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
            />
            <img
              src={pinIcon}
              alt="Location"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>

        {/* من */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[300px] sm:w-auto">
          <label className="mb-2 text-right font-semibold">من</label>
          <div className="flex flex-col sm:flex-row gap-2">
            {/* الوقت */}
            <div className="relative w-full sm:w-auto">
              <input
                placeholder="7:17 PM"
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={clockIcon}
                alt="Clock"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            {/* التاريخ */}
            <div className="relative w-full sm:w-auto">
              <input
                placeholder="1/5/2025"
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={calenderIcon}
                alt="Calendar"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            {/* الموقع */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="أدخل موقعك"
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={pinIcon}
                alt="Pin"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
          </div>
        </div>

      </div>

      <button className="mt-6 bg-white text-[#7367F0] px-6 py-2 rounded-lg shadow-md hover:bg-[#7367F0] hover:text-white transition-all duration-300">
        إبحث عن الميعاد
      </button>
    </section>
  );
};

export default Search;
