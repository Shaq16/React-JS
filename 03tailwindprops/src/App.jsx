import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <h1 class="bg-green-400 text-black p-5 rounded-xl">Tailwind CSS</h1>
      <Card name="Erin Tounge" btnText="Check out"/>
      <Card name="Alice Wingford"/>
        
    </>
  )
}

export default App
