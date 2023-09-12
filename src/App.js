import React, { useEffect, useState } from 'react'
import './index.css'
import useFetch from './hooks/useFetch';
import useCounter from './hooks/useCounter'
export default function App() {
  
  const [count,addCount,minCount]=useCounter(0);

  return (
    <>
    {count}
    <button className='add' onClick={addCount}>+</button>
    <button className='min' onClick={minCount}>-</button>
    </>
  )
}
