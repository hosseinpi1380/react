import React from 'react';
import './index.css';
import SideBarCom from './component/Sidebar';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
export default function App() {
  const router=useRoutes(routes);
  return (
    <>
      <SideBarCom/>
      {router}
    </>
  )
}






