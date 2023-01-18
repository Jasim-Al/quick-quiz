import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.value += 1;
    },

    setTodefault: (state) => ({ ...state, value: 0 }),
  },
});

export const selectScore = (state) => state.score.value;

export const { incrementScore, setTodefault } = scoreSlice.actions;
export default scoreSlice.reducer;
