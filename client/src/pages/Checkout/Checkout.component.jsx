import React from 'react';
import './Checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeButton from '../../components/StripeButton/StripeButton.component';

const Checkout = ({ cartItems, cartTotal, dispatch }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(item => <CheckoutItem cartItem={item} key={item.id}/>)
    }
    <div className="total">
      <span>Total: ${cartTotal}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments
       <br />
       4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </div>
    <div className="checkout-btn">
      <StripeButton className="payment-btn" price={cartTotal} />
    </div>
  </div>
 );

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps, null)(Checkout);