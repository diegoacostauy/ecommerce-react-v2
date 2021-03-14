import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { getUserCartRef } from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selector';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import { CartActionTypes } from './cart.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const user = yield select(selectCurrentUser);
  if (user) {
    try {
      const cartRef = yield getUserCartRef(user.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch(error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  console.log(user);
  const cartRef = yield getUserCartRef(user.id);
  const cartSnap = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnap.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest([
    CartActionTypes.ADD_ITEM,
    CartActionTypes.REMOVE_ITEM,
    CartActionTypes.CLEAR_CART
  ], updateCartInFirebase
  )
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onCartChange),
    call(onUserSignIn),
  ]);
}