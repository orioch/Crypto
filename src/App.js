import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoTable from "./components/CryptoTable";
import { getCryptoData } from "./redux/features/cryptoDataSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoData());
  }, []);

  return (
    <div className="App">
      <CryptoTable />
    </div>
  );
}

export default App;
