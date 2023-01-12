import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpUser, signInUser, loguotUser } from 'services/contactsApi';

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
    console.log('data', data);
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
