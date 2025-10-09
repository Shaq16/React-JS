import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<div>Test</div>}></Route>
    </Routes>
  )
}

export default App
