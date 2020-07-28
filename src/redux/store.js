import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

//redux devtools extension
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhacers(applyMiddleware(...middlewares)));

export default store;