import React from 'react'
import Card_Booket from './Card_Booket'

export default function Booket() {
  return (
    <div
     className='flex relative flex-wrap  w-[80%] shadow shadow-gray-400 rounded-xl border p-[20px]  items-center justify-center gap-[35px]' 
     >
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>
        <Card_Booket/>

        <div className='absolute  right-[-10px] top-[140px] w-0 h-0 border-t-[10px] border-t-transparent border-l-[30px]  border-l-white border-b-[20px] border-b-transparent'></div>
    </div>
  )
}
