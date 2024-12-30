import React from 'react'
import Hero from './components/Home/Hero'
import Footer from './components/Footer/Footer'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout'
import Courses from './components/Courses/Courses'
import Contact from './components/Contact/Contact'
import AboutUs from './components/AboutUS/AboutUs'

const App = () => {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Hero/>}></Route>
        <Route path='courses' element={<Courses/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='http://localhost:5173/about' element={<AboutUs/>}></Route>
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