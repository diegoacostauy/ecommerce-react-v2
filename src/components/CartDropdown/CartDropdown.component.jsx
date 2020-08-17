import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import './CartDropdown.styles.scss';

const Cart = ({ cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      }
    </div>
    <Button>Go to checkout</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(Cart);