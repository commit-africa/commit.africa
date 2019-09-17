import { createStore, combineReducers, applyMiddleware, ReducersMapObject, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import user, { INITIAL_STATE as USER_INITIAL_STATE } from './modules/users';
import * as types from './types';

const PERSISTED_MODULES = ['user'];
const SCHEMA_TIMESTAMP = 1568708727056;

const INITIAL_STATE: types.state = {
  account: USER_INITIAL_STATE,
};

const REDUCERS: ReducersMapObject = {
  user,
};

const isBrowser = typeof window !== 'undefined';
const middleware = applyMiddleware(thunk);
const localStorage = persistState(PERSISTED_MODULES, { key: SCHEMA_TIMESTAMP });

const enhancers = isBrowser
  ? composeWithDevTools(middleware, localStorage)
  : composeWithDevTools(middleware);

const combinedReducers = combineReducers(REDUCERS);
export const store: Store = createStore(combinedReducers, INITIAL_STATE, enhancers);
