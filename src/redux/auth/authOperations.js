import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpUser } from 'services/contactsApi';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    const { data } = await signUpUser(credentials);
    return data;
  } catch (error) {
    return error.message;
  }
});
