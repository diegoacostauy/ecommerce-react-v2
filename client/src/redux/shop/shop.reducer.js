import ShopActionsTypes from './shop.types';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionsTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionsTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload
      }
    case ShopActionsTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      }
    default:
      return {
        ...state
      }
  }
}