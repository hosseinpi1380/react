import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsFillBasket3Fill } from 'react-icons/bs'
const Sidebar = () => {
    const activeMenu = ({ isActive }) => {
        return {
            color: isActive ? 'active' : ''
        }
    }
    return (
        <>
            <div className="sidebar fixed right-0 top-0 h-full w-1/5
                 bg-blue-950 text-white text-right py-4">
                <h1 className='font-semibold font-sans text-2xl border-b-2 py-2 mx-2'>به داشبورد خود خوش آمدید</h1>
                <ul className="side-menu" >
                    <li className="side-list">
                        <NavLink style={activeMenu} to='/'>
                            صفحه اصلی
                            <AiFillHome />
                        </NavLink>
                    </li>
                    <li className="side-list">
                        <NavLink to='/products'>
                            محصولات
                            <FaShoppingCart />
                        </NavLink>
                    </li>
                    <li className="side-list">
                        <NavLink to='/comments'
                        >کامنت ها
                            <FaComments />
                        </NavLink>
                    </li>
                    <li className="side-list">
                        <NavLink to='/users'
                        >
                            کاربران
                            <ImUsers />
                        </NavLink>
                    </li>
                    <li className="side-list">
                        <NavLink to='/orders'
                        >
                            سفارشات
                            <BsFillBasket3Fill />
                        </NavLink>
                    </li>
                    <li className="side-list">
                        <NavLink to='/discount'
                        >تخفیف ها<AiFillDollarCircle />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar