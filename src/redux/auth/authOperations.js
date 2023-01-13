import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpUser,
  signInUser,
  loguotUser,
  fetchCurrentUser,
} from 'services/contactsApi';
import { token } from 'services/contactsApi';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await signUpUser(credentials);
    console.log('data', data);
    return data;
  } catch (error) {
    return error.message;
    //🟨TODO add logic for error
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await signInUser(credentials);
    return data;
  } catch (error) {
    return error.message;
    //🟨TODO add logic for error
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await loguotUser();
  } catch (error) {
    return error.message;
    //🟨TODO add logic for error
  }
});

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
      return error;
      //🟨TODO add logic for error
    }
  }
);
