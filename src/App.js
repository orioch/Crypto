import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoTable from "./components/CryptoTable";
import {
  getCryptoData,
  rerenderCryptoData,
} from "./redux/features/cryptoDataSlice";
import "./App.css";
import PageNav from "./components/PageNav";

function App() {
  const { currentPage } = useSelector((store) => store.cryptoData);
  const dispatch = useDispatch();

  useEffect(() => {
    let loop = setInterval(async () => {
      dispatch(getCryptoData());
    }, 3000);
    return () => {
      clearInterval(loop);
    };
  });

  return (
    <div className="App">
      <CryptoTable />
      <PageNav />
    </div>
  );
}

export default App;
