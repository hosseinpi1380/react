import React, { useContext } from 'react'
import Toast from '../components/Toast'
import { useThemeContext } from '../context/ThemeContext';
const Shopping = () => {

  const theme = useThemeContext()
  const addToBasket = el => {
    let isInBasket = theme.basket.find(product => product.fname == el.fname)
    if (!isInBasket) {
      let newProduct = { name: el.name, img: el.img, fname: el.fname, count: el.count };
      theme.setBasket(prev => [...prev, newProduct])
      console.log(newProduct);
    }
    else {
      isInBasket.count += 1
    }
  }
  return (
    <>
      <h1 className='uppercase font-semibold text-2xl text-center text-white'>shopping page</h1>
      <div className="container grid grid-cols-3
       my-10 mx-auto w-4/5 gap-2 justify-center max-sm:grid-cols-1">
        {theme.data.map(el => (
          <div className="card flex flex-1 flex-col
           mx-3 h-60 bg-white shadow-lg " key={el.id}>
            <img src={el.img} alt="" className='h-28 w-full' />
            <div className="info p-2 h-full flex flex-col items-center">
              <span className='flex flex-row justify-evenly w-full'>
                <h1 className='uppercase'>{el.name}</h1>
                <h1>{el.fname}</h1>
              </span>
              <button onClick={() => {
                theme.addToBasket()
                addToBasket(el)
              }
              }
                className='bg-red-700 p-2 mt-6 text-white rounded-md shadow-md active:shadow-lg 
              active:scale-95 active:duration-100'>
                add to bascket</button>
            </div>
          </div>
        ))}
        <Toast></Toast>
      </div>
    </>
  )
}

export default Shopping