import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartPreview from "./components/ChartPreview";
import CryptoTable from "./components/CryptoTable";
import { getCryptoData, loadCharts } from "./redux/features/cryptoDataSlice";
import "./App.css";
import PageNav from "./components/PageNav";

function App() {
  const { currentPage, sortProperty, cryptoHistoryArray } = useSelector(
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
  }, [sortProperty, currentPage]);

  useEffect(() => {
    dispatch(loadCharts());
  }, [cryptoHistoryArray]);
  return (
    <div className="App">
      <CryptoTable />
      <PageNav />
    </div>
  );
}

export default App;
