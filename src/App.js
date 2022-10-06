import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartPreview from "./components/ChartPreview";
import CryptoTable from "./components/CryptoTable";
import { getCryptoData, loadCharts } from "./redux/features/cryptoDataSlice";
import "./App.css";
import PageNav from "./components/PageNav";
import Search from "./components/Search";

function App() {
  const { currentPage, sort, cryptoHistoryArray } = useSelector(
    (store) => store.cryptoData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptoData());
    let loop = setInterval(async () => {
      dispatch(getCryptoData());
    }, 10000);
    return () => {
      clearInterval(loop);
    };
  }, [sort, currentPage]);

  useEffect(() => {
    dispatch(loadCharts());
  }, [cryptoHistoryArray]);
  return (
    <div className="App">
      <Search />
      <CryptoTable />
      <PageNav />
    </div>
  );
}

export default App;
