import React from 'react';
import './index.css';
import SideBarCom from './components/Sidebar';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import TopBar from './components/TopBar';
export default function App() {
  const router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container flex flex-row">
        <SideBarCom />
        {router}
      </div>
    </>
  )
}