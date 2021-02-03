import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionSnapToMap } from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // call is an effect inside our generator that invokes functions
    const collectionsMap = yield call(convertCollectionSnapToMap, snapshot);
    // put is like dispatch in thunks
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    // put is like dispatch in thunks
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}