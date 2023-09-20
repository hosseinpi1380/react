import React from 'react'
import { SampleProvider } from './context/SampleContext';
import Function from './components/Function';
import Navbar from './components/Navbar';
import './index.css'
import router from './router/routes'
import { useRoutes } from 'react-router-dom';
const App = () => {
  const routing = useRoutes(router)
  return (
    <>
      <SampleProvider>
        <Navbar />
        <Function />
      </SampleProvider>
      {routing}
    </>
  )
}

export default App



