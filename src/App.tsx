import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
         <Outlet/>
      <Footer/>
    </div>
  )
}



// outlet is used only to run the child components