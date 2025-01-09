import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='px-4 sm:PX-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredits/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
