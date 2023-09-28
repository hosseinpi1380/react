import React, { useState } from 'react'

const EditModal = ({ onClose, onSubmit, detailProduct }) => {
    const [updatedObj, setUpdatedObj] = useState();
    const editRequest=()=>{
        fetch(`http://localhost:3000/api/products/${detailProduct.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedObj)
        })
    }
    return (
        <div className='main-modal modal-active'>
            <div className='backdrop-blur-sm w-screen h-screen'>
            </div>
            <div className='modal w-1/2 h-1/2 text-right'>
                <form onSubmit={onSubmit} className='flex flex-col text-right'>
                    <h1>اطلاعات جدید را وارد نمایید</h1>
                    <input type="text" placeholder={detailProduct.title} defaultValue={detailProduct.title}/>
                    <input type="text" placeholder={Number(detailProduct.price).toLocaleString()} />
                    <input type="text" placeholder={detailProduct.count} />
                    <input type="submit" className='bg-blue-700 text-white w-full mt-4 px-4 py-2' 
                    value='ثبت اطلاعات جدید' onClick={editRequest}/>
                    <button onClick={onClose} className='bg-red-700 px-4 py-2 w-full text-white mt-4 uppercase'>بستن</button>
                </form>
            </div>
        </div>
    )
}

export default EditModal