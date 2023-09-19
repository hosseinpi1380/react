import React, { useState } from 'react'
import User from './components/User'
import UsernameContext from './context/Username'
const App = () => {
  const [username, setUsername] = useState('hossein');
  return (
    <UsernameContext.Provider value={username}>
      <User />
    </UsernameContext.Provider>
  )
}

export default App



