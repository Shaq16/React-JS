
import { HomePage } from './pages/home/HomePage'
import './App.css'
import { useState, useEffect } from 'react'

import axios from 'axios';
import { Routes, Route } from 'react-router' 
import { CheckoutPage } from './pages/home/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
function App() {

  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((res) => {
      setCart(res.data)
    })
  }, [])


  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
