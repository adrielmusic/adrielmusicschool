import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Home/Hero'
import Footer from './components/Footer/Footer'
import NavbarBanner from './components/Navbar/NavbarBanner'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout'
import Contact from './components/Contact/Contact'
import AboutUs from './components/AboutUS/AboutUs'

const App = () => {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Hero/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='about' element={<AboutUs/>}></Route>
      </Route>
    )
  )

  return (
    <div>
    <RouterProvider router={router}/>
    <Footer/>
    </div>
  )
}

export default App