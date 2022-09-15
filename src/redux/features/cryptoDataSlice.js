import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pricingDataUrl = "https://api.coincap.io/v2/assets";
const initialState = {
  cryptoData: [],
  isLoading: false,
};

export const getCryptoData = createAsyncThunk("crypto/getData", () => {
  return fetch(pricingDataUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getCryptoData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCryptoData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cryptoData = action.payload.data;
    },
  },
});

export default dataSlice.reducer;
