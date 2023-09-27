import React from 'react'
import ReactDOM from 'react-dom'
import { useCms } from '../context/CmsProvider'
const Modal = ({ confirmModal, cancelModal }) => {
    const cms = useCms();
    return ReactDOM.createPortal(
        <div className={`main-modal ${cms.showModal ? 'modal-active' : ''}`}>
            <div className='backdrop-blur-sm w-screen h-screen'>
            </div>
            <div className='modal w-1/2 h-1/2'>
                <div>
                    <h1>ایا از حذف محصول مطعن هستید؟</h1>
                    <div className='my-3'>
                        <button className='py-2 px-4 rounded-lg shadow-md mx-3 bg-red-600' onClick={() => confirmModal()}>بله</button>
                        <button className='py-2 px-4 rounded-lg shadow-md mx-3 bg-blue-600' onClick={() => cancelModal()}>خیر</button>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('modal-parent')
    )
}

export default Modal