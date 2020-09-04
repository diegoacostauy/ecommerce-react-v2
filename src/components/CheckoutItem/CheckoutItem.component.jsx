import React from 'react';
import { connect } from 'react-redux';
import { removeItem, decreaseQty, addItem } from '../../redux/cart/cart.actions';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({cartItem, cartItem: {name, imageUrl, price, quantity}, removeItem, decreaseQty, addItem}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Cart item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity"><button className="action-btn descrease" onClick={() => decreaseQty(cartItem)}>&#10094;</button><span>{quantity}</span><button className="action-btn increase" onClick={()=>addItem(cartItem)}>&#10095;</button></span>
    <span className="price">{price}</span>
    <button className="action-btn remove-button" onClick={()=> removeItem(cartItem)}>&#10005;</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  decreaseQty: item => dispatch(decreaseQty(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);