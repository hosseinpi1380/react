import React, { useEffect } from 'react'
const Product = (props) => {
    const { filtered } = props
    console.log(filtered);
    
    return (
        <>
            {
                filtered.map((item) => {
                    return (
                        <div className='flex flex-row items-center justify-between w-96 h-60 my-4 overflow-hidden' key={item.id}>
                            <img src={item.image} className='w-32 h-full border-1 border-yellow-700 rounded-md' />
                            <div className='product-info px-2 h-4/5'>
                                <div className="title border-b-2 border-gray-400 w-full flex flex-row justify-evenly">
                                    <h1 className='text-md'>{item.title}</h1>
                                    <h3 className='text-yellow-700'>{item.price} $</h3>
                                </div>
                                <div className="desc"> 
                                    {item.description}
                                </div>
                            </div>
                        </div>)
                })
            }
        </>
    )
}

export default Product