import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import loginImage from "../assets/image.png";
import logoImage from "../assets/Sekka Logo.png";
import { languageContext } from "../pages/Home";

const ForgetPassword = () => {
  const { language } = useContext(languageContext);
  const [darkMode, setDarkMode] = React.useState(false);
  const navigate = useNavigate();

 
  const texts = {
    en: {
      title: "Forget Password",
      emailPlaceholder: "Email",
      verifyButton: "Verify Email",
      loginText: "Do you know, account?",
      loginLink: "Login",
    },
    ar: {
      title: "نسيت كلمة المرور",
      emailPlaceholder: "البريد الإلكتروني",
      verifyButton: "تحقق من البريد",
      loginText: "هل لديك حساب؟",
      loginLink: "تسجيل الدخول",
    },
  };


  const t = language === "ar" ? texts.ar : texts.en;

  const handleVerify = () => {
    navigate("/otp");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#181929] text-gray-100" : "bg-[#F1F0FE] text-gray-800"
      }`}
    >
  
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">

        <div className="hidden lg:flex lg:w-1/2 h-full">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div
            className={`w-full min-h-[80vh] py-20 lg:py-20 max-w-md p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-[#262832]" : "bg-[#F1F0FE]"
            }`}
          >
     
            <div className="flex justify-center mb-8">
              <img src={logoImage} alt="Logo" className="h-24 object-contain" />
            </div>

          
            <h2
              className={`text-3xl font-bold mb-8 text-center ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {t.title}
            </h2>

         
            <div className="mb-6 relative">
              <div className="relative">
                <input
                  type="email"
                  id="Email"
                  className={`w-full p-4 pl-12 rounded-lg border ${
                    darkMode
                      ? "bg-[#2E2F3E] border-[#2E2F3E] text-white"
                      : "bg-white border-gray-300"
                  }`}
                  placeholder={t.emailPlaceholder}
                  required
                />
                <span
                  className={`absolute left-4 top-4 ${
                    darkMode ? "text-[#A392BE]" : "text-[#7B61FF]"
                  }`}
                >
              
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

      
            <button
              type="button"
              onClick={handleVerify}
              className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md mb-6"
            >
              {t.verifyButton}
            </button>

            <p className={`text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {t.loginText}{" "}
              <Link
                to="/login"
                className="text-[#7B61FF] hover:text-[#6a50e6] font-medium underline"
              >
                {t.loginLink}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
