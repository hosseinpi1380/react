import React, { useContext, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar';
import router from './router/routes'
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
const App = () => {
  const routing = useRoutes(router)
  useEffect(() => {

  })
  return (
    <>
      <ThemeProvider>
        <Navbar />
        {routing}
      </ThemeProvider>
    </>
  )
}

export default App



