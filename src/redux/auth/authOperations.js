import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpUser, signInUser } from 'services/contactsApi';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    const { data } = await signUpUser(credentials);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await signInUser(credentials);
    return data;
  } catch (error) {
    return error.message;
  }
});
