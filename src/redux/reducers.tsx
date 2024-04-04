import authReducer from './authSlice';
import {combineReducers} from '@reduxjs/toolkit';
import {movieApi} from './api';

export const rootReducer = combineReducers({
  auth: authReducer,
  [movieApi.reducerPath]: movieApi.reducer,
});
