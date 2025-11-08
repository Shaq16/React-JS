import dayjs from 'dayjs'

export function DeliveryOptions({cartItem,deliveryOptions}) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">Choose a delivery option:</div>

            {deliveryOptions.map((option) => {
                let priceString =
                    option.priceCents > 0
                        ? `Rs ${option.priceCents} Shipping`
                        : 'FREE Shipping'

                return (
                    <div key={option.id} className="delivery-option">
                        <input
                            type="radio"
                            checked={option.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`}
                            readOnly
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">{priceString}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}