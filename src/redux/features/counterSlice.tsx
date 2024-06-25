import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
  tallies: object[];
};

const initialState: CounterType = { count: 0, tallies: [] };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      if (state.count % 5 === 0) {
        state.tallies.push({});
      }
    },
    decrement: (state) => {
      state.count -= 1;
      if (state.count >= 0 && state.count % 5 === 4) {
        state.tallies.pop();
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
