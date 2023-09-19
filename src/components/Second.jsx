import React, { useContext } from 'react'
import {UsernameContext} from '../context/Username'
import Third from './Third'
const Second = () => {
  const username = useContext(UsernameContext)
  return (
    <>
      <h2>second:{username}</h2>
      <Third/>
    </>
  )
}

export default Second