import React from 'react';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Cart item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <button className="remove-button">&#10005;</button>
  </div>
);

export default CheckoutItem;