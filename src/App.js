import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./components/List";
import { getCryptoData } from "./redux/features/cryptoDataSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoData());
  }, []);

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
