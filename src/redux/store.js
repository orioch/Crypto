import { configureStore } from "@reduxjs/toolkit";
import cryptoDataReducer from "./features/cryptoDataSlice";

export const store = configureStore({
  reducer: {
    cryptoData: cryptoDataReducer,
  },
});
