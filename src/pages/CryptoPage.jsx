import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/cryptoPage.css";
export default function CryptoPage() {
  let params = useParams();
  const { cryptoArray } = useSelector((store) => store.cryptoData);
  console.log(cryptoArray);
  return <div className="crypto-page-header">{params.id}</div>;
}
