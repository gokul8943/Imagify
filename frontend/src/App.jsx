import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './pages/SignUp'

import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:PX-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      <ToastContainer position='bottom-center'/>
     {showLogin &&  <Login />}
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredits />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
