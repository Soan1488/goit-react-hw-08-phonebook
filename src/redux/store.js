import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice';
import authReduser from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReduser,
    auth: authReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});
