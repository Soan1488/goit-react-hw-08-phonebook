import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperations';

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
    [register.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      token: payload.token,
      user: payload.user,
    }),
    [login.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      token: payload.token,
      user: payload.user,
    }),
    [logout.fulfilled]: (state, { payload }) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
