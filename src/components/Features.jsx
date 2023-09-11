import React from 'react'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
const Features = () => {
    return (
        <>
            <div className="Feature-Container flex flex-row justify-around my-4 mx-2">
                <div className="feature shadow-md p-3 rounded-md w-80 h-[9rem] flex flex-col justify-center">
                    <h2 className='text-xl'>Revanue</h2>
                    <div className=' flex flex-row items-center w-[50%] justify-between'>
                        <span className='text-lg font-semibold'>$2,415</span>
                        <span className='text-sm'>-11.4 <ArrowDownward className='text-red-700' /> </span>
                    </div>
                    <h2 className='text-gray-600'>compared to last month</h2>
                </div>
                <div className="feature shadow-md p-3 rounded-md w-80 h-[9rem] flex flex-col justify-center">
                    <h2 className='text-xl'>Sales</h2>
                    <div className=' flex flex-row items-center w-[50%] justify-between'>
                        <span className='text-lg font-semibold'>$2,415</span>
                        <span className='text-sm'>-11.4 <ArrowDownward className='text-red-700' /> </span>
                    </div>
                    <h2 className='text-gray-600'>compared to last month</h2>
                </div>
                <div className="feature shadow-md p-3 rounded-md w-80 h-[9rem] flex flex-col justify-center">
                    <h2 className='text-xl'>Const</h2>
                    <div className=' flex flex-row items-center w-[50%] justify-between'>
                        <span className='text-lg font-semibold'>$4,415</span>
                        <span className='text-sm'>+21.4 <ArrowUpward className='text-green-700' /> </span>
                    </div>
                    <h2 className='text-gray-600'>compared to last month</h2>
                </div>
            </div>
        </>
    )
}

export default Features