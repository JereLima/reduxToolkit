import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementValueCounter(state) {
      state.value += 1;
    },
    decrementValueCounter(state) {
      state.value -= 1;
    },
    clearValueCounter(state) {
      state.value = 0;
    },
  },
});

export const {
  incrementValueCounter,
  decrementValueCounter,
  clearValueCounter,
} = messageSlice.actions;

export default messageSlice.reducer;
