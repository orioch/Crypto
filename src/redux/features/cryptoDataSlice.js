import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const pricingDataUrl = "https://api.coincap.io/v2/assets";
const initialState = {
  cryptoArray: [],
  currentPage: 1,
  itemsInPage: 15,
  length: 0,
};

export const getCryptoData = createAsyncThunk("crypto/getData", () => {
  return fetch(pricingDataUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
export const rerenderCryptoData = createAsyncThunk("crypto/getData", () => {
  return fetch(pricingDataUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getCryptoData.fulfilled]: (state, action) => {
      state.length = action.payload.data.length;
      state.cryptoArray = action.payload.data;
    },
  },
});

export const { changeCurrentPage } = dataSlice.actions;
export default dataSlice.reducer;
