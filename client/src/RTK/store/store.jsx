import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "../slice/Slice";

export const store = configureStore({
  reducer: { mainSlice: mainReducer },
});

export default store;
