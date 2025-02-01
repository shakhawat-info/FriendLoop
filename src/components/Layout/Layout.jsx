import React from 'react'
import MenuSide from '../MenuSide';
import TopSearch from '../TopSearch';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className='flex'>
        <MenuSide/>
        <div className="w-full h-screen ">
            <TopSearch/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout