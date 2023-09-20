import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className='flex flex-row max-sm:flex max-sm:items-center max-sm:justify-center'>
            <li className='px-2 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/services' >services</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/about-us' >about us</Link></li>
            <li className='px-2 cursor-pointer'><Link to='/contact-us'>contact us</Link></li>
          </ul>
        </nav>
      </header >
    </>
  )
}

export default Navbar