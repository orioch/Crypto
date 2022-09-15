import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pricingDataUrl = "https://api.coincap.io/v2/assets";
const iconsUrl = "https://cryptoicons.org/api/icon/eth/200";
const initialState = {
  cryptoData: [],
  isLoading: false,
  isIconsLoading: false,
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
      state.cryptoData.forEach((crypto) => {
        crypto.icon =
          "https://cryptoicons.org/api/icon/" +
          crypto.symbol.toLowerCase() +
          "/200";
      });
    },
  },
});

export default dataSlice.reducer;
