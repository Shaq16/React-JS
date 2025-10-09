import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage/>}></Route>
    </Routes>
  )
}

export default App
