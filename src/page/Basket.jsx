import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Basket = () => {
  const theme = useThemeContext();
  return (
    <>
      <h1 className='text-white text-center uppercase font-serif text-3xl'>basket</h1>
      {theme.basket ? (
        theme.basket.map(el =>
          <div className="card flex flex-1 flex-col
           mx-3 h-60 bg-white shadow-lg " key={el.fname}>
            <img src={el.img} alt="" className='h-28 w-full' />
            <div className="info p-2 h-full flex flex-col items-center">
              <span className='flex flex-row justify-evenly w-full'>
                <h1 className='uppercase'>{el.name}</h1>
                <h1>{el.fname}</h1>
                <h2>count:{el.count}</h2>
              </span>
            </div>
          </div>
        )
      )
        : '<h1>your basket is null</h1>'}
    </>
  )
}

export default Basket