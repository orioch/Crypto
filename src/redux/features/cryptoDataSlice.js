import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const pricingDataUrl = "https://api.coincap.io/v2/assets";
const initialState = {
  cryptoArray: [],
  cryptoHistoryArray: {},
  cryptoArrayToDisplay: [],
  currentPage: 1,
  itemsInPage: 15,
  length: 0,
  sort: { prop: "priceUsd", directionUp: false },
  searchText: "",
};

const sortArray = (array, { prop, directionUp }) => {
  return array.sort((a, b) => {
    let valueA = prop == "name" ? a[prop].toLowerCase() : Number(a[prop]);
    let valueB = prop == "name" ? b[prop].toLowerCase() : Number(b[prop]);

    return directionUp ? (valueA > valueB ? 1 : -1) : valueA < valueB ? 1 : -1;
  });
};
const searchInArray = (array, text) => {
  return array.filter((crypto) =>
    crypto.name.toLowerCase().includes(text.toLowerCase())
  );
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
      state.cryptoArrayToDisplay = sortArray(
        state.cryptoArrayToDisplay,
        state.sort
      );
    },
    loadCharts: (state) => {
      state.cryptoArray.forEach((crypto) => {
        crypto.history = state.cryptoHistoryArray[crypto.id];
      });
    },
    search: (state, action) => {
      state.searchText = action.payload;
      state.cryptoArrayToDisplay = searchInArray(
        state.cryptoArray,
        action.payload
      );
    },
  },
  extraReducers: {
    [getCryptoData.fulfilled]: (state, action) => {
      console.log("ok");
      state.cryptoArray = action.payload.data;
      state.cryptoArray.forEach((crypto) => {
        crypto.history = state.cryptoHistoryArray[crypto.id];
      });
      state.cryptoArrayToDisplay = searchInArray(
        state.cryptoArray,
        state.searchText
      );
      state.cryptoArrayToDisplay = sortArray(
        state.cryptoArrayToDisplay,
        state.sort
      );
      state.length = state.cryptoArrayToDisplay.length;
    },
    [getCryptoHistory.fulfilled]: (state, action) => {
      state.cryptoHistoryArray[action.meta.arg] = action.payload.data;
      state.cryptoArrayToDisplay.find(
        (crypto) => crypto.id == action.meta.arg
      ).history = action.payload.data;
    },
  },
});

export const { changeCurrentPage, sortCryptoArray, loadCharts, search } =
  dataSlice.actions;
export default dataSlice.reducer;
