import React from "react";
import CryptoTable from "../components/CryptoTable";
import PageNav from "../components/PageNav";
import Search from "../components/Search";

export default function Main() {
  return (
    <div>
      <Search />
      <CryptoTable />
      <PageNav />
    </div>
  );
}
