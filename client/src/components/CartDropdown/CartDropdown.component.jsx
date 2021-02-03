import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import './CartDropdown.styles.scss';

const Cart = ({ history, cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map(item => <CartItem key={item.id} item={item} />) :
          <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <Button onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartDropdown());
    }}>Go to checkout</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));