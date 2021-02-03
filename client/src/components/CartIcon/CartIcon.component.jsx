import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount, selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './CartIcon.styles.scss';

const CartIcon = ({ hidden, toggleCartDropdown, itemsCount }) => {
  const toggleCartDropdownOnEnter = ev => {
    if (ev.keyCode === 13 || ev.which === 13) {
      toggleCartDropdown();
    }
  }

  return (<div
    className="cart-icon"
    onClick={toggleCartDropdown}
    onKeyPress={toggleCartDropdownOnEnter}
    role="button"
    tabIndex="0"
    aria-pressed={hidden ? 'false' : 'true'}
    aria-expanded={hidden ? 'false' : 'true'}
    aria-haspopup="true"
  >
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">
      {itemsCount}
    </span>
  </div>);
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);