import { useState } from 'react'

export default function useCounter(init) {
  const [count,setCount]=useState(init);
  const addCount=()=>{
    setCount(prev=>prev+1)
  }
  const minCount=()=>{
    setCount(prev=>prev-1)
  }
  return [count,addCount,minCount]
}
