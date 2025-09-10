import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Info from '../pages/Info'

function App() {


  return (
    <>
      <Routes>
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App
