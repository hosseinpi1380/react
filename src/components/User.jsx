 import React from 'react'
import Second from './Second'
import { useContext } from 'react'
import {UsernameContext} from '../context/Username'
const User = () => {
  const username = useContext(UsernameContext);
  return (
    <>
      <h1>username: {username}</h1>
      <Second/>
    </>
  )
}

export default User