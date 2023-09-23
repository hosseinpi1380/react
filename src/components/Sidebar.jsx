import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const activeMenu=(e)=>{
        console.log(e);
    }
    return (
        <>
            <div className="sidebar fixed right-0 top-0 h-full w-1/5
                 bg-blue-950 text-white text-right py-4">
                <h1 className='font-semibold text-2xl border-b-2 py-2'>به داشبورد خود خوش آمدید</h1>
                <div className="element ">
                    <ul className="side-menu mx-2" onClick={e=>activeMenu(e)}>
                        <li className="side-list font-semibold text-xl my-3 py-2" >
                            <Link to='/'>صفحه اصلی</Link>
                        </li>
                        <li className="side-list font-semibold text-xl my-3 py-2">
                            <Link to='/products'>محصولات</Link>
                        </li>
                        <li className="side-list font-semibold text-xl my-3 py-2">
                            <Link to='/comments'>کامنت ها</Link>
                        </li>
                        <li className="side-list font-semibold text-xl my-3 py-2">
                            <Link to='/users'>کاربران</Link>
                        </li>
                        <li className="side-list font-semibold text-xl my-3 py-2">
                            <Link to='/orders'>سفارشات</Link>
                        </li>
                        <li className="side-list font-semibold text-xl my-3 py-2">
                            <Link to='/discouts'>تخفیف ها</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar