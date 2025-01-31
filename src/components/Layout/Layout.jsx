import React from 'react'
import MenuSide from '../MenuSide';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className='flex'>
        <MenuSide/>
        <div className="w-full">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout