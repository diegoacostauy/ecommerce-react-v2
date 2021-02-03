import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// this is localStorage, but it could be sessionStorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  // persist type
  storage,
  // reducer to be stored
  whitelist: ['cart'],
};


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);