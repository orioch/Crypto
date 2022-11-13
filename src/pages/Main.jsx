import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../components/Cards";
import CryptoTable from "../components/CryptoTable";
import PageNav from "../components/PageNav";
import Search from "../components/Search";
import "../css/mainPage.css";
import {
  getArticles,
  getCryptoData,
  loadCharts,
} from "../redux/features/cryptoDataSlice";

export default function Main() {
  const dispatch = useDispatch();
  // dispatch getCryptoData evry 10 secconds
  useEffect(() => {
    dispatch(getCryptoData());
    let loop = setInterval(async () => {
      dispatch(getCryptoData());
    }, 10000);
    return () => {
      clearInterval(loop);
    };
  }, []);
  // dispatch loadChart and getArticles once
  useEffect(() => {
    dispatch(loadCharts());
    dispatch(getArticles());
  }, []);

  return (
    <div className="main-page">
      <div className="header">
        <Cards />
        <Search />
      </div>
      <CryptoTable />
      <PageNav />
    </div>
  );
}
