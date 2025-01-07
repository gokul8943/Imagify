import React from 'react'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'

const App = () => {
  return (
    <div>
      <Routes>
        <Routes path='/' element={<Home/>} />
        <Routes path='/result' element={<Result/>} />
        <Routes path='/buy' element={<BuyCredits/>} />
      </Routes>
    </div>
  )
}

export default App
