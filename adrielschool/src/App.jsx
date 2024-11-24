import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Home/Hero'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App