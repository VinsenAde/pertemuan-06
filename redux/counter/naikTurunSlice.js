// naikTurunSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCounter: 0
};

const naikTurunSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    tambahCounter(state) {
      state.totalCounter++;
    },
    kurangCounter(state) {
      state.totalCounter--;
    }
  }
});

export const { tambahCounter, kurangCounter } = naikTurunSlice.actions;

export default naikTurunSlice.reducer;