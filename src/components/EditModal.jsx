import React from 'react'

const EditModal = ({ onClose, onSubmit, detailProduct }) => {
    return (
        <div className='main-modal modal-active'>
            <div className='backdrop-blur-sm w-screen h-screen'>
            </div>
            <div className='modal w-1/2 h-1/2 text-right'>
                <form onSubmit={onSubmit} className='flex flex-col text-right'>
                    <h1>اطلاعات جدید را وارد نمایید</h1>
                    <input type="text" placeholder='اسم' value={detailProduct.title} />
                    <input type="text" placeholder='قیمت' value={new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(detailProduct.price)} />
                    <input type="text" placeholder='موجودی' value={detailProduct.count} />
                    <input type="submit" className='bg-gray-500 text-white w-full mt-4 px-4 py-2' value='ثبت اطلاعات جدید' />
                    <button onClick={onClose} className='bg-red-500 px-4 py-2 w-full mt-4 uppercase'>close</button>
                </form>
            </div>
        </div>
    )
}

export default EditModal