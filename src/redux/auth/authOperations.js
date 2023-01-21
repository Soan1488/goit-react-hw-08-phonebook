import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  signUpUser,
  signInUser,
  loguotUser,
  fetchCurrentUser,
  token,
} from 'services/contactsApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials);
      return data;
    } catch (error) {
      toast.error('Something goes wrong, please try again');
      return rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signInUser(credentials);
      return data;
    } catch (error) {
      toast.error('Something goes wrong, please try again');
      return rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await loguotUser(token);
      return;
    } catch (error) {
      toast.error('Something goes wrong, please try again');
      return rejectWithValue();
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const persistToken = getState().auth.token;
      if (persistToken === null) {
        return rejectWithValue();
      }
      token.set(persistToken);
      const data = await fetchCurrentUser();
      return data;
    } catch (error) {
      toast.error('Something goes wrong, please log in');
      return rejectWithValue();
    }
  }
);
