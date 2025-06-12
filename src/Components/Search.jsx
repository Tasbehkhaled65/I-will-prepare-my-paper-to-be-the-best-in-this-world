import { useState, useContext } from "react";
import pinIcon from '../assets/pin.png';
import calenderIcon from '../assets/calendar.png';
import trainIcon from '../assets/railway.png';
import clockIcon from '../assets/clock.png';
import { Darkmood, languageContext } from "../pages/Home";

const Search = () => {
  const [time, setTime] = useState("19:17");
  const [date, setDate] = useState("2023-12-02");
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  // النصوص متعددة اللغات
  const texts = {
    class: {
      en: "Class",
      ar: "الدرجة"
    },
    to: {
      en: "To",
      ar: "إلى"
    },
    from: {
      en: "From",
      ar: "من"
    },
    enterLocation: {
      en: "Enter location",
      ar: "أدخل الموقع"
    },
    enterYourLocation: {
      en: "Enter your location",
      ar: "أدخل موقعك"
    },
    searchButton: {
      en: "Search for schedule",
      ar: "إبحث عن الميعاد"
    },
    classOptions: {
      firstClass: {
        en: "First Class",
        ar: "أول مميز"
      },
      secondClass: {
        en: "Second Class",
        ar: "ثاني مميز"
      },
      regular: {
        en: "Regular",
        ar: "عادي"
      }
    }
  };

  return (
    <section
      className={`flex flex-col items-center p-6 sm:p-10 bg-[#B9B3FA]`}
      id="TimeTable"
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
    >
      <div className="flex  justify-center gap-4 w-full max-w-6xl">

        {/* الدرجة */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {texts.class[language]}
          </label>
          <div className="relative">
            <select className="bg-white/20 text-white p-2 rounded-md w-full appearance-none">
              <option className="bg-[#938bdf] text-white">{texts.classOptions.firstClass[language]}</option>
              <option className="bg-[#938bdf] text-white">{texts.classOptions.secondClass[language]}</option>
              <option className="bg-[#938bdf] text-white">{texts.classOptions.regular[language]}</option>
            </select>
            <img
              src={trainIcon}
              alt="Train"
              className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-6 h-6`}
            />
          </div>
        </div>

        {/* إلى */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {texts.to[language]}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={texts.enterLocation[language]}
              className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
            />
            <img
              src={pinIcon}
              alt="Location"
              className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
            />
          </div>
        </div>

        {/* من */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[300px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {texts.from[language]}
          </label>
          <div className="flex  sm:flex-row gap-2">
            {/* الوقت */}
            <div className="relative w-full sm:w-auto">
              <input
                placeholder={time}
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={clockIcon}
                alt="Clock"
                className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
              />
            </div>

            {/* التاريخ */}
            <div className="relative w-full sm:w-auto">
              <input
                placeholder={date}
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={calenderIcon}
                alt="Calendar"
                className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
              />
            </div>

            {/* الموقع */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder={texts.enterYourLocation[language]}
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={pinIcon}
                alt="Pin"
                className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
              />
            </div>
          </div>
        </div>

      </div>

      <button className="mt-6 bg-white text-[#7367F0] px-6 py-2 rounded-lg shadow-md hover:bg-[#7367F0] hover:text-white transition-all duration-300">
        {texts.searchButton[language]}
      </button>
    </section>
  );
};

export default Search;