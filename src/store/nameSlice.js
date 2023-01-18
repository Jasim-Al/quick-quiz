import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action) => ({ ...state, value: action.payload }),
  },
});

export const selectName = (state) => state.name.value;

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
