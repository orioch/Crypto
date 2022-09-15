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
export const getIcons = createAsyncThunk("crypto/getIcons", () => {
  return fetch(iconsUrl, {mode: 'no-cors'})
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
    [getIcons.pending]: (state) => {
      state.isIconsLoading = true;
    },
    [getIcons.fulfilled]: (state, action) => {
      state.isIconsLoading = false;
      console.log(action);
    },
  },
});

export default dataSlice.reducer;
