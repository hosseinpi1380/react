import React, { useState } from 'react'
import './index.css';

import useInput from './hooks/useInput';
export default function App() {
  const [firstname,FirstBinding,firstReset]=useInput(null)
  const [lastname,LastBinding,lastReset]=useInput(null)
  
  const submitHadler=(event)=>{
    event.preventDefault();
    alert(`hello ${firstname}, ${lastname}`)
    firstReset()
    lastReset()
  }
  return (
    <form 
    onSubmit={e=>submitHadler(e)} 
    className='flex flex-col bg-slate-200'>
      <input type="text" placeholder='firstname' 
       {...FirstBinding}/>
      <input type="password" placeholder='password'
      {...LastBinding} 
      />
      <input type="submit" />
    </form>
  )
}
