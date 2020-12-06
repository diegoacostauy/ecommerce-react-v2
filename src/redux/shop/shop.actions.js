import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionSnapToMap } from '../../firebase/firebase.utils';

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

// Its a function that returns a function with dispatch as param
// we can dispatch multiple actions and handle async code
export const fetchCollectionsStartThunk = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get()
      .then(snap => {
        const collectionsMap = convertCollectionSnapToMap(snap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      }).catch(err => dispatch(fetchCollectionsFailure(err.message)));
  }
}