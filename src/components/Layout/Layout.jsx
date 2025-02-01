import React from 'react'
import MenuSide from '../MenuSide';
import TopSearch from '../TopSearch';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className='flex w-full  '>
        <MenuSide/>
        <div className="w-full h-screen overflow-y-scroll no-scrollbar">
            <TopSearch className=" fixed top-0 left-0 "/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout