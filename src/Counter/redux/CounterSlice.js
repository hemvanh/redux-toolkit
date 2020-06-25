import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    currentCount: 100,
  },
  reducers: {
    incre(state) {
      state.currentCount += 1;
    },
    decre(state) {
      state.currentCount -= 1;
    },
    customIncre(state, { payload }) {
      state.currentCount += payload;
    },
  },
});

export const { incre, decre, customIncre } = counterSlice.actions;

export default counterSlice.reducer;
