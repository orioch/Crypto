import React from "react";
import Cards from "../components/Cards";
import CryptoTable from "../components/CryptoTable";
import PageNav from "../components/PageNav";
import Search from "../components/Search";
import "../css/mainPage.css";

export default function Main() {
  return (
    <div className="main-page">
      <Cards />
      <Search />
      <CryptoTable />
      <PageNav />
    </div>
  );
}
