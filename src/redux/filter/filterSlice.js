import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtered: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
export default filterSlice.reducer;
