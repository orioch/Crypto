import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const pricingDataUrl = "https://api.coincap.io/v2/assets";
const initialState = {
  cryptoArray: [],
  cryptoHistoryArray: {},
  currentPage: 1,
  itemsInPage: 15,
  length: 0,
  sort: { prop: "priceUsd", directionUp: false },
};

const sortArray = (array, { prop, directionUp }) => {
  return array.sort((a, b) => {
    let valueA = prop == "name" ? a[prop].toLowerCase() : Number(a[prop]);
    let valueB = prop == "name" ? b[prop].toLowerCase() : Number(b[prop]);

    return directionUp ? (valueA > valueB ? 1 : -1) : valueA < valueB ? 1 : -1;
  });
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
    sortCryptoArray: (state, action) => {
      if (state.sort.prop == action.payload) {
        state.sort.directionUp = !state.sort.directionUp;
      } else {
        state.sort.directionUp = false;
        state.sort.prop = action.payload;
      }
      state.cryptoArray = sortArray(state.cryptoArray, state.sort);
    },
    loadCharts: (state) => {
      let newCryptoArray = state.cryptoArray;
      newCryptoArray.forEach((crypto) => {
        crypto.history = state.cryptoHistoryArray[crypto.id];
      });
      state.cryptoArray = newCryptoArray;
    },
  },
  extraReducers: {
    [getCryptoData.fulfilled]: (state, action) => {
      console.log("ok");
      state.length = action.payload.data.length;
      let newCryptoArray = action.payload.data;
      newCryptoArray = sortArray(newCryptoArray, state.sort);
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

export const { changeCurrentPage, sortCryptoArray, loadCharts } =
  dataSlice.actions;
export default dataSlice.reducer;
