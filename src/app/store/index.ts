import { applyMiddleware, compose, createStore } from 'redux';
import {reducers} from './reducer';
import ReduxThunk from 'redux-thunk'; 

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers, /* preloadedState, */
  composeEnhancers(applyMiddleware(ReduxThunk))
  );