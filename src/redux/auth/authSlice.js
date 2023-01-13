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
    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected]: state => state,
  },
});

export default authSlice.reducer;
