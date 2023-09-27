import React from 'react'
import './index.css'
import { useRoutes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import route from './routes/route'
import Header from './components/Header'
import { CmsProvider } from './context/CmsProvider'
const App = () => {
  const routes = useRoutes(route)
  return (
    <>
      <CmsProvider>
        <Sidebar />
        <div className='w-4/5'>
          <Header />
          {routes}
        </div>
      </CmsProvider>
    </>
  )
}

export default App





