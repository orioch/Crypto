import React from "react";
import { useParams } from "react-router-dom";

export default function CryptoPage() {
  let params = useParams();

  return <div>{params.id}</div>;
}
