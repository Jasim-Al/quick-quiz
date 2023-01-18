import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import nameReducer from "./nameSlice";
import scoreReducer from "./scoreSlice";

export const store = configureStore({
  reducer: { name: nameReducer, count: countReducer, score: scoreReducer },
});
