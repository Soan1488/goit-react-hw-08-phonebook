import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactApi,
  deleteContactApi,
} from 'services/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    try {
      const resp = await fetchContacts();
      return resp;
    } catch (error) {
      return error.message;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const resp = await addContactApi(contact);
      return resp;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const resp = await deleteContactApi(id);
      return resp;
    } catch (error) {
      return error.message;
    }
  }
);
