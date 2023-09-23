import React from 'react'
import Sidebar from './components/Sidebar'
import { useRoutes } from 'react-router-dom'
import route from './routes/route'
import './index.css'
const App = () => {
  const routes=useRoutes(route)
  return (
    <>
      <Sidebar/>
      {routes}
    </>
  )
}

export default App





