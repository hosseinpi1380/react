import React, { useState } from 'react'
import User from './components/User'
import UsernameContextProvider from './context/Username'
const App = () => {
  return (
    <>
      <UsernameContextProvider>
        <User />
      </UsernameContextProvider>
    </>
  )
}

export default App



