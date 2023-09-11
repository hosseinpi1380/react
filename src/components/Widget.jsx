import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { transaction } from '../Data';
const WidgetSm = () => {
  return (
    <>
      <div className='flex flex-row shadow-md justify-between mb-3 max-sm:flex-col max-lg:flex-col max-lg:w-full'>
        <div className="widget-Sm shadow-md w-2/5 p-2 max-lg:w-full">
          <h1>New Join Members</h1>
          <ul>
            <li className='flex flex-row justify-between my-3'>
              <img src='./img/nat-10.jpg' alt="" className='w-12 h-12 rounded-full' />
              <span className="user">
                <h1 className='text-lg font-semibold uppercase'>Hossein Pirasbaghi</h1>
                <h2>front dev</h2>
              </span>
              <button className='bg-slate-300 rounded-full h-fit p-2'>
                <VisibilityIcon />
              </button>
            </li>
            <li className='flex flex-row justify-between my-3'>
              <img src='./img/nature1.jpg' alt="" className='w-12 h-12 rounded-full' />
              <span className="user">
                <h1 className='text-lg font-semibold uppercase'>Hossein Pirasbaghi</h1>
                <h2>front dev</h2>
              </span>
              <button className='bg-slate-300 rounded-full h-fit p-2'>
                <VisibilityIcon />
              </button>
            </li>
            <li className='flex flex-row justify-between my-3'>
              <img src='./img/nature2.jpg' alt="" className='w-12 h-12 rounded-full' />
              <span className="user">
                <h1 className='text-lg font-semibold uppercase'>Hossein Pirasbaghi</h1>
                <h2>front dev</h2>
              </span>
              <button className='bg-slate-300 rounded-full h-fit p-2'>
                <VisibilityIcon />
              </button>
            </li>
            <li className='flex flex-row justify-between my-3'>
              <img src='./img/nature3.jpg' alt="" className='w-12 h-12 rounded-full' />
              <span className="user">
                <h1 className='text-lg font-semibold uppercase'>Hossein Pirasbaghi</h1>
                <h2>front dev</h2>
              </span>
              <button className='bg-slate-300 rounded-full h-fit p-2'>
                <VisibilityIcon />
              </button>
            </li>
          </ul>
        </div>
        <div className="widget-lg w-3/5 p-4 shadow-md ml-2 max-lg:w-full">
          <h1 className='uppercase font-semibold'>latest transation</h1>
          <table className='w-full'>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>

              </tr>
            </thead>
            <tbody className='text-center'>
              {transaction.map((user,index) => <tr key={index}>
                <td className='flex flex-row items-center justify-center'>
                  <img src={user.src} alt="" className='rounded-full w-14 h-14' />
                  <span className='ml-2 uppercase'>{user.custormer}</span>
                </td>
                <td>{user.data}</td>
                <td>{user.amount}</td>
                <td>
                  <button className={`btn ${user.status} p-2 rounded-full text-white`}>${user.status}</button>
                </td>
              </tr>)}
    
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default WidgetSm