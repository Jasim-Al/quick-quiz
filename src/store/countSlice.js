import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action) => ({ ...state, value: action.payload }),
  },
});

export const selectCount = (state) => state.count.value;

export const { setCount } = countSlice.actions;
export default countSlice.reducer;
