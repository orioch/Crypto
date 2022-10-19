import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartPreview from "./components/ChartPreview";
import CryptoTable from "./components/CryptoTable";
import {
  getCryptoData,
  getArticles,
  loadCharts,
} from "./redux/features/cryptoDataSlice";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import PageNav from "./components/PageNav";
import Search from "./components/Search";
import Main from "./pages/Main";
import CryptoPage from "./pages/CryptoPage";
import HeaderNavBar from "./components/HeaderNavBar";

function App() {
  const { currentPage, sort, cryptoHistoryArray, searchText } = useSelector(
    (store) => store.cryptoData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    dispatch(getCryptoData());
    let loop = setInterval(async () => {
      dispatch(getCryptoData());
    }, 10000);
    return () => {
      clearInterval(loop);
    };
  }, [sort, searchText, currentPage]);

  useEffect(() => {
    dispatch(loadCharts());
  }, [cryptoHistoryArray]);
  return (
    <div>
      <HashRouter>
        <HeaderNavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="tokens" element={<CryptoPage />}>
            <Route path=":id" element={<CryptoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
