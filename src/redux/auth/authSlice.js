import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      state.isLoading = false;
    },
    [register.rejected]: state => {
      state.isLoading = false;
    },

    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      state.isLoading = false;
    },
    [login.rejected]: state => {
      state.isLoading = false;
    },

    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: state => {
      state.isLoading = false;
    },

    [refreshUser.pending]: state => {
      state.isLoading = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refreshUser.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
