import React from 'react'
import ReactDOM from 'react-dom'
import { useCms } from '../context/CmsProvider'
const DetailsModal = ({ cancelDetail, detailInfo }) => {
    const cms = useCms();
    return ReactDOM.createPortal(
        <div className={`main-modal ${cms.detailModal ? 'modal-active' : ''}`}>
            <div className='backdrop-blur-sm w-screen h-screen'>
            </div>
            <div className='modal'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mb-3">
                    <button className='bg-red-500 text-white p-2' onClick={cancelDetail}>close Modal</button>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-lg text-right text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='text-2xl text-right'>

                                <th scope="col" className="px-6 py-3">
                                    محصبوبیت
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    رنگ
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    قیمت
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    اسم محصول
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-right">
                                <td className="px-6 py-4">
                                    {Number(detailInfo?.popularity).toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    {detailInfo?.colors}
                                </td>

                                <td className="px-6 py-4">

                                    {detailInfo?.price}
                                </td>

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {detailInfo?.title}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        , document.getElementById('details-modal')
    )
}

export default DetailsModal