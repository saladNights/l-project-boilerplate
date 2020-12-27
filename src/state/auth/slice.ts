import { createSlice } from '@reduxjs/toolkit';

import { State } from './types';

const initialState: State = {
  isLoggedIn: true, // TODO change to undefined when you get real login API
  accessToken: null,
  userData: null,
  isAdmin: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {},
    loginSuccess(state, action) {
      state.isLoggedIn = !!action.payload;
      state.accessToken = action.payload;
    },
    loginError(state) {},
    logOut(state) {},
    logOutSuccess(state) {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.userData = null;
    },
  },
});

export const { login, loginSuccess, loginError, logOut, logOutSuccess } = authSlice.actions;

export default authSlice.reducer;
