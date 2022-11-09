import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartPreview from "./components/ChartPreview";
import CryptoTable from "./components/CryptoTable";
import {
  getCryptoData,
  getArticles,
  loadCharts,
} from "./redux/features/cryptoDataSlice";

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  useLocation,
} from "react-router-dom";
import "./App.css";
import PageNav from "./components/PageNav";
import Search from "./components/Search";
import Main from "./pages/Main";
import CryptoPage from "./pages/CryptoPage";
import HeaderNavBar from "./components/HeaderNavBar";

function App() {
  let location = useLocation();
  const { currentPage, sort, cryptoHistoryArray, searchText } = useSelector(
    (store) => store.cryptoData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    dispatch(loadCharts());
  }, [cryptoHistoryArray]);

  return (
    <div>
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="tokens" element={<CryptoPage />}>
          <Route path=":id" element={<CryptoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
