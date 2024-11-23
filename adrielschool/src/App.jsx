import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Home/Hero'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App