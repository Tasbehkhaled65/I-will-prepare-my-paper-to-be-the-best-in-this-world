
// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import { TbXboxXFilled } from "react-icons/tb";
// import loginIllustration from "../assets/login1.png";
// import sekkaLogo from "../assets/Sekka Logo.png";
// import googleLogo from "../assets/google.png";
// import { FiSun, FiMoon } from "react-icons/fi";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
//       <div className="flex h-screen">
//         {/* صورة الجانب - تأخذ نصف الصفحة */}
//         <div className="hidden lg:flex w-1/2 h-full ">
//           <img 
//             src={loginIllustration} 
//             alt="Login Illustration" 
//             className="  w-full h-full object-cover" 
//           />
//         </div>

//         {/* قسم الفورم - يأخذ نصف الصفحة */}
//         <div className="w-full lg:w-1/2 flex flex-col p-8 ">
//           {/* اللوجو في الأعلى */}
//           <div className="flex justify-center mb-12">
//             <img 
//               src={sekkaLogo} 
//               alt="Seeka Logo" 
//               className="h-28 object-contain" 
//             />
//           </div>

//           {/* الفورم */}
//           <div className={`w-full max-w-md mx-auto p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//             <h2 className="text-4xl font-Poppins mb-8 text-left">Login</h2>
            
//             {/* Email field */}
//             <div className="relative mb-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//                 required
//               />
//               <span className="absolute left-3 top-3.5 text-[#7B61FF]">
//                 <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="#7B61FF"></path>
//                   <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="#7B61FF"></path>
//                 </svg>
//               </span>
//             </div>

//             {/* Password field */}
//             <div className="relative mb-2">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Password"
//                 className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//                 required
//               />
//               <span className="absolute left-3 top-3.5 text-[#7B61FF]">
//                 <svg width="16" height="18" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
//                   <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
//                 </svg>
//               </span>
//               <span
//                 className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>

//             {/* Remember me و Forgot password في نفس السطر */}
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                   className="h-4 w-4 rounded border-[#7B61FF] text-[#7B61FF] focus:ring-[#7B61FF] mr-2"
//                 />
//                 <label htmlFor="rememberMe" className="text-sm text-[#A4A4A4] dark:text-[#A4A4A4]">
//                   Remember me
//                 </label>
//               </div>
//               <a 
//                 href="./forgetpassword" 
//                 className="text-sm text-[#A4A4A4] hover:text-[#7B61FF] hover:underline"
//               >
//                 Forgot Your Password?
//               </a>
//             </div>

//             {/* Login button */}
//             <button
//               type="submit"
//               className="w-full bg-[#7B61FF] hover:bg-[#7B61FF] text-white py-3 px-4 rounded transition duration-200 mb-4"
//             >
//               Login
//             </button>

//             {/* Register link */}
//             <p className="text-center text-sm">
//               Don't have an account?{" "}
//               <a href="./register" className="text-[#7B61FF] hover:underline font-medium">
//                 Register
//               </a>
//             </p>

//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="mx-4 text-sm text-gray-500">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             {/* Google login button */}
//             <button
//               type="button"
//               className={`w-full py-2 px-4 rounded border flex items-center justify-center space-x-2 ${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
//             >
//               <img src={googleLogo} alt="Google logo" className="h-5 w-5" />
//               <span>Google</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Dark mode toggle */}
//       .<button
//       onClick={() => setDarkMode(!darkMode)}
//       className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
//     >
//       {darkMode ? (
//           <FiSun className="text-white-300 text-xl" />
//         ) : (
//           <FiMoon className="text-gray-800 text-xl" />
//         )}
//     </button>
       
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import loginIllustration from "../assets/login1.png";
// import sekkaLogo from "../assets/Sekka Logo.png";
// import googleLogo from "../assets/google.png";
// import { FiSun, FiMoon } from "react-icons/fi";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // Prepare form data as shown in Postman
//       const jsonData = {
//       email: formData.email,
//       password: formData.password
//       };


//       // Make API call
//      const response = await axios.post(
//   `${process.env.REACT_APP_API_BASE_URL}/login`,
//   jsonData,
//   {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
// );


    

//       // Handle successful login
//       if (response.data.code === "success") {
//         // Store token and user data
//         const { token, user_data } = response.data.data;
//         localStorage.setItem('authToken', token);
//         localStorage.setItem('userData', JSON.stringify(user_data));
        
//         // Redirect based on user role or to home page
//         navigate('/');
//       } else {
//         setError(response.data.message || "Login failed");
//       }
//     } catch (err) {
//       // Handle validation errors from API
//       if (err.response && err.response.status === 422) {
//         const errorData = err.response.data;
//         if (errorData.errors && errorData.errors.email) {
//           setError(errorData.errors.email[0]);
//         } else if (errorData.errors && errorData.errors.errors) {
//           setError(errorData.errors.errors[0]);
//         } else {
//           setError("Invalid credentials");
//         }
//       } else {
//         setError("An error occurred. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
//       <div className="flex h-screen">
//         {/* Left side image */}
//         <div className="hidden lg:flex w-1/2 h-full">
//           <img 
//             src={loginIllustration} 
//             alt="Login Illustration" 
//             className="w-full h-full object-cover" 
//           />
//         </div>

//         {/* Form section */}
//         <div className="w-full lg:w-1/2 flex flex-col p-8">
//           {/* Logo */}
//           <div className="flex justify-center mb-12">
//             <img 
//               src={sekkaLogo} 
//               alt="Seeka Logo" 
//               className="h-28 object-contain" 
//             />
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className={`w-full max-w-md mx-auto p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//             <h2 className="text-4xl font-Poppins mb-8 text-left">Login</h2>
            
//             {/* Error message */}
//             {error && (
//               <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
//                 {error}
//               </div>
//             )}

//             {/* Email field */}
//             <div className="relative mb-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//                 required
//               />
//               <span className="absolute left-3 top-3.5 text-[#7B61FF]">
//                 <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="#7B61FF"></path>
//                   <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="#7B61FF"></path>
//                 </svg>
//               </span>
//             </div>

//             {/* Password field */}
//             <div className="relative mb-2">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//                 required
//               />
//               <span className="absolute left-3 top-3.5 text-[#7B61FF]">
//                 <svg width="16" height="18" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
//                   <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
//                 </svg>
//               </span>
//               <span
//                 className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>

//             {/* Remember me and Forgot password */}
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                   className="h-4 w-4 rounded border-[#7B61FF] text-[#7B61FF] focus:ring-[#7B61FF] mr-2"
//                 />
//                 <label htmlFor="rememberMe" className="text-sm text-[#A4A4A4] dark:text-[#A4A4A4]">
//                   Remember me
//                 </label>
//               </div>
//               <a 
//                 href="./forgetpassword" 
//                 className="text-sm text-[#A4A4A4] hover:text-[#7B61FF] hover:underline"
//               >
//                 Forgot Your Password?
//               </a>
//             </div>

//             {/* Login button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#7B61FF] hover:bg-[#7B61FF] text-white py-3 px-4 rounded transition duration-200 mb-4 flex justify-center items-center"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </>
//               ) : "Login"}
//             </button>

//             {/* Register link */}
//             <p className="text-center text-sm">
//               Don't have an account?{" "}
//               <a href="./register" className="text-[#7B61FF] hover:underline font-medium">
//                 Register
//               </a>
//             </p>

//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="mx-4 text-sm text-gray-500">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             {/* Google login button */}
//             <button
//               type="button"
//               className={`w-full py-2 px-4 rounded border flex items-center justify-center space-x-2 ${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
//             >
//               <img src={googleLogo} alt="Google logo" className="h-5 w-5" />
//               <span>Google</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Dark mode toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
//       >
//         {darkMode ? (
//           <FiSun className="text-white-300 text-xl" />
//         ) : (
//           <FiMoon className="text-gray-800 text-xl" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default Login;



// import React, { useState, useEffect } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import loginIllustration from "../assets/login1.png";
// import sekkaLogo from "../assets/Sekka Logo.png";
// import googleLogo from "../assets/google.png";
// import { FiSun, FiMoon } from "react-icons/fi";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [formErrors, setFormErrors] = useState({
//     email: "",
//     password: ""
//   });
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // تحقق من وضع التخزين المحلي لبيانات تسجيل الدخول
//   useEffect(() => {
//     const savedEmail = localStorage.getItem('rememberedEmail');
//     if (savedEmail) {
//       setFormData(prev => ({ ...prev, email: savedEmail }));
//       setRememberMe(true);
//     }
//   }, []);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // التحقق من الصحة أثناء الكتابة
//     if (name === 'email') {
//       setFormErrors(prev => ({
//         ...prev,
//         email: value && !validateEmail(value) ? 'البريد الإلكتروني غير صالح' : ''
//       }));
//     }
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   // التحقق من الصحة قبل الإرسال
//   if (!formData.email || !formData.password) {
//     setError('الرجاء ملء جميع الحقول');
//     return;
//   }
  
//   if (!validateEmail(formData.email)) {
//     setFormErrors(prev => ({
//       ...prev,
//       email: 'البريد الإلكتروني غير صالح'
//     }));
//     return;
//   }

//   setLoading(true);
//   setError("");

//   try {
//     const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       credentials: 'include', // للأمان مع الكوكيز
//       body: JSON.stringify({
//         email: formData.email,
//         password: formData.password
//       })
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'فشل في تسجيل الدخول');
//     }

//     if (data.code === "success") {
//       const { token, user_data } = data.data;
      
//       // تخزين البيانات حسب اختيار "تذكرني"
//       if (rememberMe) {
//         localStorage.setItem('rememberedEmail', formData.email);
//       } else {
//         localStorage.removeItem('rememberedEmail');
//       }
      
//       // تخزين الجلسة
//       sessionStorage.setItem('authToken', token);
//       sessionStorage.setItem('userData', JSON.stringify(user_data));
      
//       // إعادة التوجيه إلى الصفحة الرئيسية
//       navigate('/home');
//     } else {
//       setError(data.message || "فشل تسجيل الدخول، الرجاء المحاولة مرة أخرى");
//     }
//   } catch (err) {
//     setError(err.message || "حدث خطأ أثناء تسجيل الدخول");
//   } finally {
//     setLoading(false);
//   }
// };
  

//   // ... باقي الكود (العناصر المرئية تبقى كما هي)
  
//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
//         <div className="flex h-screen">
//         {/* Left side image */}
//        <div className="hidden lg:flex w-1/2 h-full">
//            <img 
//             src={loginIllustration} 
//             alt="Login Illustration" 
//             className="w-full h-full object-cover" 
//           />
//         </div>

//         {/* Form section */}
//         <div className="w-full lg:w-1/2 flex flex-col p-8">
//           {/* Logo */}
//           <div className="flex justify-center mb-12">
//             <img 
//               src={sekkaLogo} 
//               alt="Seeka Logo" 
//               className="h-28 object-contain" 
//             />
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className={`w-full max-w-md mx-auto p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//             <h2 className="text-4xl font-Poppins mb-8 text-left">Login</h2>
            
//             {/* Error message */}
//             {error && (
//               <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
//                 {error}
//               </div>
//             )}

//             {/* Email field */}
//             <div className="relative mb-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//                 required
//               />
//               <span className="absolute left-3 top-3.5 text-[#7B61FF]">
//                 <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="#7B61FF"></path>
//                   <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="#7B61FF"></path>
//                 </svg>
//               </span>
//             </div>

//             {/* Password field */}
//             <div className="relative mb-2">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//                 required
//               />
//               <span className="absolute left-3 top-3.5 text-[#7B61FF]">
//                 <svg width="16" height="18" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
//                   <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
//                 </svg>
//               </span>
//               <span
//                 className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>

//             {/* Remember me and Forgot password */}
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                   className="h-4 w-4 rounded border-[#7B61FF] text-[#7B61FF] focus:ring-[#7B61FF] mr-2"
//                 />
//                 <label htmlFor="rememberMe" className="text-sm text-[#A4A4A4] dark:text-[#A4A4A4]">
//                   Remember me
//                 </label>
//               </div>
//               <a 
//                 href="./forgetpassword" 
//                 className="text-sm text-[#A4A4A4] hover:text-[#7B61FF] hover:underline"
//               >
//                 Forgot Your Password?
//               </a>
//             </div>

//             {/* Login button */}
//             <button
//               type="button"
//               onClick={() => {
                
//                 // setTimeout(() => {
//                 //   navigate('/Home');
//                 // }, ); // تأخير بسيط لمحاكاة التحميل
//               }}
//               disabled={loading}
//               className="w-full bg-[#7B61FF] hover:bg-[#7B61FF] text-white py-3 px-4 rounded transition duration-200 mb-4 flex justify-center items-center"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                  Login
//                 </>
//               ) : "Login"}
//             </button>

//             {/* Register link */}
//             <p className="text-center text-sm">
//               Don't have an account?{" "}
//               <a href="./register" className="text-[#7B61FF] hover:underline font-medium">
//                 Register
//               </a>
//             </p>

//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="mx-4 text-sm text-gray-500">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             {/* Google login button */}
//             <button
//               type="button"
//               className={`w-full py-2 px-4 rounded border flex items-center justify-center space-x-2 ${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
//             >
//               <img src={googleLogo} alt="Google logo" className="h-5 w-5" />
//               <span>Google</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Dark mode toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
//       >
//         {darkMode ? (
//           <FiSun className="text-white-300 text-xl" />
//         ) : (
//           <FiMoon className="text-gray-800 text-xl" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginIllustration from "../assets/login1.png";
import sekkaLogo from "../assets/Sekka Logo.png";
import googleLogo from "../assets/google.png";
import { FiSun, FiMoon } from "react-icons/fi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.code === "success") {
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', formData.email);
        }
        navigate('/home');
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F1F0FE] text-gray-800'}`}>
      <div className="flex h-screen">
        {/* Left side image */}
        <div className="hidden lg:flex w-1/2 h-full">
          <img 
            src={loginIllustration} 
            alt="Login Illustration" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Form section */}
        <div className="w-full lg:w-1/2 flex flex-col p-8">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img 
              src={sekkaLogo} 
              alt="Sekka Logo" 
              className="h-28 object-contain" 
            />
          </div>

          {/* Form */}
          <form 
              onSubmit={handleSubmit} 
              className={`w-full max-w-md mx-auto p-8 rounded-lg  backdrop-blur-sm bg-opacity-100 -mt-9 ${darkMode ? 'bg-opacity-100' : 'bg-[#F1F0FE]'}`}
            >
          <h2 className="text-3xl  mb-8 text-left ${darkMode ? 'text-[#2C2C2C] ' : 'text-[#F1F0FE]'}`">Login</h2>
 

            
            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
                {error}
              </div>
            )}

            {/* Email field */}
            <div className="relative mb-4">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-[#262832] border-[#262832]' : 'bg-white border-gray-300'}`}
                placeholder="Email"
                required
              />
              <span className="absolute left-3 top-3.5 text-[#7B61FF]">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="#7B61FF"></path>
                  <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="#7B61FF"></path>
                </svg>
              </span>
            </div>

            {/* Password field */}
            <div className="relative mb-2">
              <input
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className={`w-full p-3 pl-10 rounded border ${darkMode ? 'bg-[#262832] border-[#262832]' : 'bg-white border-gray-300'}`}
                placeholder="Password"
                required
              />
             <span className="absolute left-3 top-3.5 text-[#7B61FF]">
                <svg width="16" height="18" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
                  <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
                </svg>
              </span>
              <span
                className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <button
      type="button"
      onClick={() => setRememberMe(!rememberMe)}
      className={`
        h-4 w-4 
        rounded 
        border-2
        flex items-center justify-center
        ${rememberMe ? 'bg-[#7B61FF] border-[#7B61FF]' : 'border-[#7B61FF]'}
        focus:outline-none 
        transition 
        duration-200
        space-x-0
      `}
    >
      {rememberMe && (
        <svg 
          className="h-4 w-4 text-white" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
            clipRule="evenodd" 
          />
        </svg>
      )}
    </button>
                <label htmlFor="rememberMe" className="text-sm ml-2 text-[#A4A4A4] dark:text-[#A4A4A4]">
                Remember me</label>
              </div>
              <a href="./forgetpassword" className="text-sm text-[#A4A4A4] hover:text-[#7B61FF] hover:underline">
                Forgot Your Password?
              </a>
            </div>

            {/* Login button */}
            {/* <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7B61FF] hover:bg-[#7B61FF] text-white py-3 px-4 rounded transition duration-200 mb-4 flex justify-center items-center"
            >
              {loading ? (
                <>
                
                  
                </>
              ) : "Login"}
            </button> */}


        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7B61FF] hover:bg-[#7B61FF] text-white py-3 px-4 rounded transition duration-200 mb-4 flex justify-center items-center"
          onClick={() => {
            // أي عمليات تأكيد تسجيل دخول هنا
            navigate('/'); // الانتقال إلى الصفحة الرئيسية
          }}
        >
          {loading ? (
            <>
              {/* محتوى التحميل إذا كان هناك */}
            </>
          ) : "Login"}
        </button>

            <p className="text-center text-sm">
              Don't have an account?{" "}
              <a href="./register" className="text-[#7B61FF] hover:underline font-medium">Register</a>
            </p>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

          <button
            type="button"
            className={`w-10/12 py-3 px-4 rounded-xl border flex items-center justify-center ml-8 space-x-2 ${
              darkMode 
                ? 'bg-[#262832] border-[#262832] hover:bg-gray-600' 
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
              <img src={googleLogo} alt="Google logo" className="h-5 w-5" />
              <span href='/https://www.google.com/'>Google</span>
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Login;