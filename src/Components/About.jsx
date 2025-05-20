import { useContext } from "react";
import aboutImg from "../assets/About.png";
import { Darkmood } from "../pages/Home";

const About = () => {
  const { darkMode } = useContext(Darkmood);

  return (
    <section
      id="About"
      className={`flex items-center justify-center min-h-screen px-5 py-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl">
      
        <div>
          <img
            src={aboutImg}
            alt="معلومات عنا"
            className={`rounded-lg shadow-lg ${
              darkMode ? 'shadow-purple-500/20' : 'shadow-gray-400'
            }`}
          />
        </div>

        {/* نص */}
        <div className="text-center md:text-right">
          <h1 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-purple-400' : 'text-purple-600'
          }`}>
            معلومات عنا
          </h1>
          <p className={`leading-loose ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            طريقة سريعة وسهلة لحجز مكانك في القطار طريقة سريعة وسهلة لحجز <br />
            مكانك في القطار طريقة سريعة وسهلة لحجز مكانك في القطار
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;