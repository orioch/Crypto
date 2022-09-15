import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoData, } from "./redux/features/cryptoDataSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoData());
  }, []);

  return <div className="App">test</div>;
}

export default App;
