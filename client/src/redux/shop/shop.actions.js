import ShopActionsTypes from './shop.types';
export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = err => ({
  type: ShopActionsTypes.FETCH_COLLECTION_FAILURE,
  payload: err
})