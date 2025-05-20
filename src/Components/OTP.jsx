// // import React, { useState, useEffect } from "react";
// // import "./styles.css";
// // import { useNavigate } from "react-router-dom";
// // import ottpImage from "../assets/ottp.png";
// // import otpImage from "../assets/otp.png";
// // import loginImage from "../assets/image.png";

// // const OTP = () => {
// //     const navigate = useNavigate(); 
// //         const handleVerify = () => {
// //           navigate("/changepass"); 
// //         };
// //   const [time, setTime] = useState(90);

// //   useEffect(() => {
// //     if (time === 0) return;
// //     const interval = setInterval(() => {
// //       setTime((prev) => prev - 1);
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, [time]);

// //   const minutes = Math.floor(time / 60);
// //   const seconds = time % 60;
// //   const [otp, setOtp] = useState(["", "", "", ""]);
// //   const handleChange = (e, index) => {
// //     const value = e.target.value;
// //     if (/[^0-9]/.test(value)) return;
// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);

// //     if (value && index < otp.length - 1) {
// //       document.getElementById(`otp-input-${index + 1}`).focus();
// //     }
// //   };
// //   return (
// //     <div className="container">
// //       <div className="form">
// //         <img
// //           src={loginImage}
// //           alt="Login Illustration"
// //           className="hidden lg:flex lg:w-1/2 h-full w-full h-full object-cover"
// //         />
// //         <form className="form-section">
// //           <p className="new__title">OTP Verification</p>
// //           <p className="otp-container">We've sent a code to Example@gmail.com</p>
// //           <img
// //             src={otpImage}
// //             alt="Logo"
// //             className="logo_img"
// //           />
// //           <div className="otp-inputs">
// //             {otp.map((digit, index) => (
// //               <input
// //                 key={index}
// //                 type="text"
// //                 id={`otp-input-${index}`}
// //                 value={digit}
// //                 onChange={(e) => handleChange(e, index)}
// //                 maxLength="1"
// //                 className="otp-input"
// //               />
// //             ))}
// //           </div>
// //           <div className="otp-new">
// //             <p>Resend Code to</p>
// //             <div className="otp-time">
// //               {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
// //             </div>
// //           </div>
// //           <button type="button" className="btn1" onClick={handleVerify}>
// //             Verify
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };
// // export default OTP;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import ottpImage from "../assets/ottp.png";
import otpImage from "../assets/otp.png";
import loginImage from "../assets/image.png";

const OTP = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [time, setTime] = useState(90);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleVerify = () => {
    navigate("/changepass");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#181929] text-gray-100' : 'bg-[#F1F0FE] text-gray-800'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Image Section - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 h-full">
          <img 
            src={loginImage} 
            alt="Login Illustration" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full min-h-[80vh] py-20 lg:py-20 lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-[#262832]' : 'bg-[#F1F0FE]'}`}>
            {/* OTP Image */}
            <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              OTP Verification
            </h2>

            {/* Subtitle */}
            <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We've sent a code to Example@gmail.com
            </p>
            <div className="flex justify-center mb-6">
              <img 
                src={otpImage} 
                alt="OTP Verification" 
                className=" object-contain"
              />
            </div>

            {/* Title */}
           
            {/* Subtitle */}
            <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              OTP Code
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-self-center mb-8 space-x-7">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-input-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  maxLength="1"
                  className={`w-10 h-12 text-2xl text-center rounded-lg border-2  ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white focus:border-[#7B61FF]' : 'bg-white border-gray-300 focus:border-[#7B61FF]'} focus:outline-none`}
                />
              ))}
            </div>

            {/* Resend Code */}
            <div className={`flex justify-center items-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="mr-12">Resend Code to</p>
              <div className={`font-medium ${time > 0 ? (darkMode ? 'text-gray-400' : 'text-gray-600') : 'text-[#7B61FF] cursor-pointer'}`}>
                {time > 0 ? (
                  `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
                ) : (
                  <span onClick={() => setTime(90)}>Resend Now</span>
                )}
              </div>
            </div>

            {/* Verify Button */}
            <button
              type="button"
              onClick={handleVerify}
              className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;



// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FiSun, FiMoon } from "react-icons/fi";
// import otpImage from "../assets/otp.png";
// import loginImage from "../assets/image.png";

// const OTP = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [time, setTime] = useState(90);
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Extract email from location state or use a default
//   useEffect(() => {
//     if (location.state?.email) {
//       setEmail(location.state.email);
//     } else {
//       // You might want to handle this case differently
//       setEmail("example@gmail.com");
//     }
//   }, [location]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   useEffect(() => {
//     if (time === 0) return;
//     const interval = setInterval(() => {
//       setTime((prev) => prev - 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [time]);

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (/[^0-9]/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     }
//   };

//   const handleResend = async () => {
//     if (time > 0) return;
    
//     try {
//       setLoading(true);
//       const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/forget-password`, {
//         method: "POST",
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setTime(90); // Reset timer
//         setError("");
//       } else {
//         setError(data.message || "Failed to resend OTP");
//       }
//     } catch (err) {
//       setError("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerify = async () => {
//     const otpCode = otp.join("");
//     if (otpCode.length !== 4) {
//       setError("Please enter a valid 4-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/validate-otp`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           otp: otpCode,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // OTP validated successfully, navigate to reset password page
//         navigate("/changepass", { state: { email } });
//       } else {
//         setError(data.message || "Invalid OTP. Please try again.");
//       }
//     } catch (err) {
//       setError("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-[#181929] text-gray-100' : 'bg-[#F1F0FE] text-gray-800'}`}>
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
//       >
//         {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//       </button>

//       <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
//         {/* Image Section - Hidden on mobile */}
//         <div className="hidden lg:flex lg:w-1/2 h-full">
//           <img 
//             src={loginImage} 
//             alt="Login Illustration" 
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full min-h-[80vh] py-20 lg:py-20 lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
//           <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-[#262832]' : 'bg-[#F1F0FE]'}`}>
//             {/* OTP Image */}
//             <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
//               OTP Verification
//             </h2>

//             {/* Subtitle */}
//             <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               We've sent a code to {email}
//             </p>
//             <div className="flex justify-center mb-6">
//               <img 
//                 src={otpImage} 
//                 alt="OTP Verification" 
//                 className="object-contain"
//               />
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className={`mb-4 p-2 rounded text-center ${darkMode ? 'bg-red-900 text-red-100' : 'bg-red-100 text-red-800'}`}>
//                 {error}
//               </div>
//             )}

//             {/* OTP Inputs */}
//             <div className="flex justify-center mb-8 space-x-4">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   id={`otp-input-${index}`}
//                   value={digit}
//                   onChange={(e) => handleChange(e, index)}
//                   maxLength="1"
//                   className={`w-12 h-16 text-2xl text-center rounded-lg border-2 ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white focus:border-[#7B61FF]' : 'bg-white border-gray-300 focus:border-[#7B61FF]'} focus:outline-none`}
//                   disabled={loading}
//                 />
//               ))}
//             </div>

//             {/* Resend Code */}
//             <div className={`flex justify-center items-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               <p className="mr-2">Resend Code in</p>
//               <div 
//                 className={`font-medium ${time > 0 ? (darkMode ? 'text-gray-400' : 'text-gray-600') : 'text-[#7B61FF] cursor-pointer'}`}
//                 onClick={handleResend}
//               >
//                 {time > 0 ? (
//                   `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
//                 ) : (
//                   <span className="hover:underline">Resend Now</span>
//                 )}
//               </div>
//             </div>

//             {/* Verify Button */}
//             <button
//               type="button"
//               onClick={handleVerify}
//               disabled={loading}
//               className={`w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
//             >
//               {loading ? 'Verifying...' : 'Verify'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTP;