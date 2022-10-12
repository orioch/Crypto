import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/cryptoPage.css";
import { Badge } from "react-bootstrap";
import { numberWithCommas } from "../utils/utilitis";
import ChartPreview from "../components/ChartPreview";

export default function CryptoPage() {
  let params = useParams();
  const { cryptoArray } = useSelector((store) => store.cryptoData);
  let currentCrypto = cryptoArray.find((crypto) => crypto.symbol == params.id);
  console.log(currentCrypto.history);
  if (currentCrypto == undefined) return <div>loading</div>;
  return (
    <div className="crypto-page">
      <div className="crypto-page-header">
        <div className="box">
          <img
            src={`https://coinicons-api.vercel.app/api/icon/${currentCrypto.symbol.toLowerCase()}`}
            className="icon"
          />
          <div className="text">{currentCrypto.name}</div>
          <Badge bg="secondary">{currentCrypto.symbol}</Badge>
        </div>
        <div className="box">
          <div className="text">
            {numberWithCommas(parseFloat(currentCrypto.priceUsd).toFixed(2))}$
          </div>
        </div>
      </div>
      <div className="chart">
        <ChartPreview dailyData={currentCrypto.history} lineOnly={false} />
      </div>
    </div>
  );
}
