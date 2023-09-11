import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductsData } from '../Data';
const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate=useNavigate();
  useEffect(()=>{
    setProduct(ProductsData.find(el => { return el.id === Number(id) }))
  }, []);
  return (
    <>
      {product ?
        <div className='text-center my-auto'>
          <div>Product {id} information</div>
          <h1>Product number {id}</h1>
          <h1>{product.name}</h1>
          <img src={product.avatar} alt="" className='rounded-full'/>
          <button className='bg-red-500 p-2 rounded-full text-white' onClick={() => { navigate(-1) }}>back to pre page!</button>
        </div>
        : ''}
    </>
  )
}
export default Product