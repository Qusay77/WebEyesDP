import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loaderState from './counterSlice';

const root = combineReducers({
  loaderState,
});

const store = configureStore({
  reducer: root,
});

export default store;
