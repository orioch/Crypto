import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const pricingDataUrl = "https://api.coincap.io/v2/assets";

const initialState = {
  cryptoArray: [],
  cryptoHistoryArray: {},
  currentPage: 1,
  itemsInPage: 15,
  length: 0,
};

export const getCryptoData = createAsyncThunk("crypto/getData", () => {
  return fetch(pricingDataUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
export const getCryptoHistory = createAsyncThunk(
  "crypto/getHistory",
  (action) => {
    return fetch(
      `https://api.coincap.io/v2/assets/${action}/history?interval=d1`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

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
      let newCryptoArray = action.payload.data;
      newCryptoArray.forEach((crypto) => {
        crypto.history = state.cryptoHistoryArray[crypto.id];
      });
      state.cryptoArray = newCryptoArray;
    },
    [getCryptoHistory.fulfilled]: (state, action) => {
      state.cryptoHistoryArray[action.meta.arg] = action.payload.data;
    },
  },
});

export const { changeCurrentPage } = dataSlice.actions;
export default dataSlice.reducer;
