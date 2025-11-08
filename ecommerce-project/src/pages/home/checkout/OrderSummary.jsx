import dayjs from 'dayjs'
import { DeliveryOptions } from './DeliveryOptions'

export function OrderSummary({ cart, deliveryOptions }) {
  if (!Array.isArray(cart) || cart.length === 0) {
    return <div className="order-summary">Your cart is empty.</div>
  }

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (option) => option.id === cartItem.deliveryOptionId
          )

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{' '}
                {selectedDeliveryOption
                  ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')
                  : 'Loading...'}
              </div>

              <div className="cart-item-details-grid">
                <img
                  className="product-image"
                  src={cartItem.product?.image}
                  alt={cartItem.product?.name || 'Product'}
                />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product?.name}</div>
                  <div className="product-price">Rs {cartItem.product?.priceCents}</div>

                  <div className="product-quantity">
                    <span>
                      Quantity:{' '}
                      <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">Update</span>
                    <span className="delete-quantity-link link-primary">Delete</span>
                  </div>
                </div>
              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions}/>
              </div>
            </div>
          )
        })}
    </div>
  )
}
