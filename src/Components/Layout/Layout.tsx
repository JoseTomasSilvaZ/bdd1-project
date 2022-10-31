import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../UI/NavBar'

const Layout = () => {
  return (
    <div className='w-full flex flex-col gap-5`'>
        <NavBar/>
        <Outlet/>
    </div>
    
  )
}

export default Layout