import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Home/Hero'
import Footer from './components/Footer/Footer'
import NavbarBanner from './components/Navbar/NavbarBanner'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <NavbarBanner/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App