import { createSlice } from '@reduxjs/toolkit';

import { State } from './types';

const initialState: State = {
  isLoading: undefined,
  users: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      state.isLoading = true;
    },
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersError(state) {
      state.isLoading = false;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersError } = usersSlice.actions;

export default usersSlice.reducer;
