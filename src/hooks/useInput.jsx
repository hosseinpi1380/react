import { useState } from 'react'

const useInput = (init) => {
  const [value,setValue]=useState(init)
  const resetValue=()=>{
    setValue('')
  }
  
  const binding={
    value:init,
    onChange:(e)=>setValue(e.target.value)
  }
  return [value, binding, resetValue];
}

export default useInput