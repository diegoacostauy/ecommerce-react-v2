import ShopActionsTypes from './shop.types';

const initialState = {
  collections: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      }
    default:
      return {
        ...state
      }
  }
}