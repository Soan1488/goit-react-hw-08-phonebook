import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authOperations';

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
  },
});

export default authSlice.reducer;
