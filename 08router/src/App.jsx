import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Info from '../pages/Info'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/info" element={<Info />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
