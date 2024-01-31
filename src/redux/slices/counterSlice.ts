import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

// * Initial State
const initialState: CounterState = {
  value: 0,
};

// * Create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    customIncrement: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, customIncrement } = counterSlice.actions;

export default counterSlice.reducer;
