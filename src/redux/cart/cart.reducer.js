import { CartActionTypes } from './cart.types';
import { addItemToCart, decreaseQty } from './cart.utils';

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

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      }

    case CartActionTypes.DECREASE_QTY:
      return {
        ...state,
        cartItems: decreaseQty(state.cartItems, payload)
      }

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state;
  }
};

export default cartReducer;