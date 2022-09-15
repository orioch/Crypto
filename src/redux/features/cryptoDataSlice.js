import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pricingDataUrl = "https://api.coincap.io/v2/assets";
const iconsUrl = "https://cryptoicons.org/api/icon/eth/200";
const initialState = {
  cryptoArray: [],
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
      state.cryptoArray = action.payload.data;
      state.cryptoArray.forEach((crypto) => {
        crypto.icon =
          "https://coinicons-api.vercel.app/api/icon/" +
          crypto.symbol.toLowerCase();
      });
      state.isLoading = false;
    },
  },
});

export default dataSlice.reducer;
