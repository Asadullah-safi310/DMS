import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Myappointments from './pages/Appointments'
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
