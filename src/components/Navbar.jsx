import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { themeContext, changeThemeContext } from '../context/ThemeContext';
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const theme = useContext(themeContext);
  const navRef = useRef();
  
  const navbarHandler = () => {
    setOpen(prev => !prev)
    if (open) {
      navRef.current.classList.remove('openClose')
    }
    else {
      navRef.current.classList.add('openClose')
    }
  }
  return (
    <div className='overflow-x-hidden'>
      <header className='bg-white text-black relative w-full'>
        <nav className='flex flex-row justify-between max-sm:text-sm max-sm:hidden'>
          <ul className='flex flex-row max-sm:flex max-sm:items-center max-sm:justify-center'>
            <li className='px-2 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/services' >services</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/about-us' >about us</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/contact-us'>contact us</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/shopping'>shopping</Link></li>
          </ul>
          <div>
            <button onClick={theme.changeTheme}>
              {theme.theme ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header >
      <div className='sm-size text-right py-4 pr-4 md:hidden max-sm:overflow-hidden'>
        <button onClick={navbarHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <div className=' absolute -right-full top-0 w-[40%] h-full z-10 bg-white transition-all duration-150' ref={navRef}>
          <button onClick={navbarHandler} className='absolute left-4 top-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <ul className='flex flex-col py-5'>
            <li className='px-2 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/services' >services</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/about-us' >about us</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/contact-us'>contact us</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/shopping'>shopping</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar