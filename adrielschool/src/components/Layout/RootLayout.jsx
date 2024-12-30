import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div  className='overflow-x-hidden'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout