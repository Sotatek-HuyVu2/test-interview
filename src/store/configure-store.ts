import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todo from './todo-list/reducers';
import box from './list-box/reducers';

const reducer = combineReducers({
  todo,
  box,
});

const store = configureStore({
  reducer,
});

export default store;
