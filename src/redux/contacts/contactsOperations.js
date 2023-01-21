import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  fetchContacts,
  addContactApi,
  deleteContactApi,
} from 'services/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetchContacts();
      return resp;
    } catch (error) {
      toast.error('Something goes wrong, please try again');
      return rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await addContactApi(contact);
      return resp;
    } catch (error) {
      toast.error('Something goes wrong, please try again');
      return rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await deleteContactApi(id);
      return resp;
    } catch (error) {
      toast.error('Something goes wrong, please try again');
      return rejectWithValue();
    }
  }
);
