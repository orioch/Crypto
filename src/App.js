import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import CryptoPage from "./pages/CryptoPage";
import HeaderNavBar from "./components/HeaderNavBar";

function App() {
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
