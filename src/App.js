import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoData, getIcons } from "./redux/features/cryptoDataSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoData());
    dispatch(getIcons());
  }, []);

  return <div className="App">test</div>;
}

export default App;
