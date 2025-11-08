import './CheckoutPage.css'
import './checkout-header.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'
import { Header } from '../../../components/Header'

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)

  useEffect(() => {
    axios.get('/api/delivery-options').then((res) => {
      setDeliveryOptions(res.data)
    })
    axios.get('/api/payment-summary').then((res) => {
      setPaymentSummary(res.data)
    })
  }, [])

  return (
    <>
      <title>Checkout</title>
      <Header cart={cart} />

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" alt="Logo" />
              <img className="mobile-logo" src="images/mobile-logo.png" alt="Mobile Logo" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link" href="/"> {cart.length} items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" alt="Lock" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  )
}
