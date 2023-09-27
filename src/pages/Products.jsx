import React from 'react'
import Error from '../components/Error'
import ProductsTable from '../components/ProductsTable'

const Products = () => {
  return (
    <>
      <div className="prodcuts-container bg-gray-200 w-full px-2">
        <h1 className='text-right m-4 font-semibold font-sans text-lg '>افزودن محصول جدید</h1>
        <form onClick={e=>e.preventDefault()} className='grid grid-cols-2 grid-flow-row gap-2 text-right bg-white p-4 my-5 rounded-lg'>
          <input className='product-input' type="text" placeholder='اسم محصول را بنویسید' />
          <input className='product-input' type="text" placeholder='موجودی محصول را بنویسید' />
          <input className='product-input' type="text" placeholder='قیمت محصول' />
          <input className='product-input' type="text" placeholder='ادرس عکس محصول را بنویسید' />
          <input className='product-input' type="text" placeholder='میزان محبوبیت محصول را بنویسید' />
          <input className='product-input' type="text" placeholder='میزان فورش محصول را بنویسید' />
          <input className='product-input' type="text" placeholder='تعداد رنگ بندی محصول را بنویسید'/>
          <input type="submit" className='bg-blue-900 text-white active:shadow-lg active:scale-95 shadow-md transition-all duration-300 cursor-pointer' value='ثبت محصول'/>
        </form>
        <ProductsTable/>
      </div>
    </>
  )
}

export default Products