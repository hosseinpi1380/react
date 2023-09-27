import React from 'react'

const Error = ({msg}) => {
    return (
        <div className='w-full bg-red-700 text-white text-center py-3'>
            <h1> هیچ {msg} یافت نشد</h1>
        </div>
    )
}

export default Error