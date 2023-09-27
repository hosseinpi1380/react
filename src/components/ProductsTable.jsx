import React, { useEffect, useState } from 'react'
import Error from './Error'
import Modal from './Modal'
import { useCms } from '../context/CmsProvider'
import DetailsModal from './DetailsModal'
import EditModal from './EditModal'
const ProductsTable = () => {
    const [allProducts, setAllProducts] = useState([])
    const [productId, setProductId] = useState(null)
    const [detailModal,setDetailModal]=useState(null)
    const [idDetailModal,setIdDetailModal]=useState(null)
    const cms = useCms();

    useEffect(() => {
        const checkKey = e => {
            console.log(e);
            if (e.keyCode === 27) {
                cancelDetail()
            }
        }
        window.addEventListener('keydown', checkKey)
        return () => window.removeEventListener('keydown', checkKey)
    });
    const getAllProducts = () => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const confirmModal = () => {
        fetch(`http://localhost:3000/api/products/${productId}`, {
            method: "DELETE",
        }).then(res => res.json()).then(result => {
            getAllProducts()
            cms.setShowModal(false)
        })
        console.log('مدال حذف شد!');
    }
    const deleteModal = (id) => {
        setProductId(id)
        cms.setShowModal(prev => !prev)
    }
    const cancelModal = () => {
        cms.setShowModal(false)
    }
    const showDetailModal = (id) => {
        console.log(id);
        let productDetail=allProducts.find(el=>el.id==id)
        setDetailModal(productDetail)
        cms.setDetailModal(true)
    }
    const cancelDetail = () => {
        cms.setDetailModal(false)
    }
    const updateEditModal = () => {
        console.log('محصول ویرایش شد!');
        cms.setEditModal(false)
    }
    return (
        <div className='w-full'>
            {allProducts.length ? (
                <table className='w-full bg-white rounded-md shadow-md overflow-hidden my-2'>
                    <thead>
                        <tr className='bg-gray-50 text-gray-700 text-xl'>
                            <th>عملیات</th>
                            <th>موجودی</th>
                            <th>قیمت</th>
                            <th>اسم</th>
                            <th>عکس</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map(product =>
                            <tr className='text-center my-2 hover:bg-gray-50' key={product.id}>
                                <td>
                                    <button className='bg-blue-900 mx-1 p-2 rounded-md active:shadow-md text-white' 
                                    onClick={()=>showDetailModal(product.id)}>جزيیات</button>
                                    <button className='bg-blue-900 mx-1 p-2 rounded-md active:shadow-md text-white' 
                                    onClick={() => deleteModal(product.id)}>حذف</button>
                                    <button className='bg-blue-900 mx-1 p-2 rounded-md active:shadow-md text-white' 
                                    onClick={()=> {
                                        cms.setEditModal(true)
                                        let idDetail = allProducts.find(el => el.id === product.id)
                                        setIdDetailModal(idDetail)
                                        }}>ویرایش</button>
                                </td>
                                <td>{product.count}</td>
                                <td>{Number(product.price).toLocaleString()}</td>
                                <td>{product.title}</td>
                                <td className='flex justify-center'>
                                    <img className='w-20 h-20 rounded-full' src="../../img/nat-10.jpg" alt="" />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            ) : <Error msg='محصولی' />}
            {cms.showModal && <Modal confirmModal={confirmModal} cancelModal={cancelModal} />}
            <DetailsModal cancelDetail={cancelDetail} detailInfo={detailModal}/>
            {cms.editModal && <EditModal onClose={() => cms.setEditModal(false)} onSubmit={updateEditModal} detailProduct={idDetailModal}/>}
        </div>
    )
}

export default ProductsTable