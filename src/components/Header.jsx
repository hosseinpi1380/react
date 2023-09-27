import React, { useState } from 'react'
import { HiSun } from 'react-icons/hi'
import { IoMdNotifications } from 'react-icons/io'
import { BsFillMoonFill } from 'react-icons/bs'
const Header = () => {
    const [isDay, setIsDay] = useState(true)
    return (
        <>
            <header className='flex items-center justify-between w-full p-4'>
                <div className="header-left flex flex-row rounded-md">
                    <button className='icons transition-all duration-100 active:scale-95' onClick={() => setIsDay(prev => !prev)}>{isDay ? <HiSun /> : <BsFillMoonFill />}</button>
                    <button className='icons transition-all duration-100 active:scale-95' ><IoMdNotifications /></button>
                    <div className="search shadow-md p-1 ml-3">
                        <button className='bg-blue-900 rounded-md text-white p-1 transition-all duration-100 active:scale-95'>جستوجو</button>
                        <input type="text" className='placeholder:text-right placeholder:text-black border-none focus-within:outline-none' placeholder='...جستوجو کنید' />
                    </div>
                </div>
                <div className="header-right flex flex-row items-center text-right gap-3" >
                    <div className="user-info">
                        <h1 className='font-extrabold text-lg gap-y-2 gap-x-2'>حسین پیراسبقی</h1>
                        <h2>برنامه نویس فرانت اند</h2>
                    </div>
                    <img src="./img/nat-10.jpg" alt="" className='rounded-full w-10 h-10' />
                </div>
            </header>
        </>
    )
}

export default Header