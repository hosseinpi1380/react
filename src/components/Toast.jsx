import React, { useContext, useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'
const Toast = () => {
    const toast = useThemeContext();
    return (
        <>
            {toast.showToast && (
                <div className='toast-container fixed bottom-0  right-2 text-end mb-4'>
                    <div className="toast items-center flex text-white bg-blue-500">
                        <div className="flex justify-center items-center p-2">
                            <button onClick={toast.closeToast}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></button>
                            <div className="">😍محصول با موفقیت به سبد اضافه شد!</div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default Toast