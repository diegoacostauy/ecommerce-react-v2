import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      }

    default:
      return state;
  }
};

export default cartReducer;