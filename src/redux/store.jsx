import { configureStore } from "@reduxjs/toolkit";
import dashReducer from "./dashSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashReducer, 
  },
});
