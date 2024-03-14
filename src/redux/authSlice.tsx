import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: state => {
      state.isAuthenticated = true;
      console.log('authenticated ' + state.isAuthenticated);
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const login = authSlice.actions.login;
export const logout = authSlice.actions.logout;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
