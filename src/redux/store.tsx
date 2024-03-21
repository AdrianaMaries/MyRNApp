import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import {movieApi} from './api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
