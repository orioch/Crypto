import React, { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../utils/utilitis";

export default function Trending() {
  const [index, setIndex] = useState(0);
  const { cryptoArray } = useSelector((store) => store.cryptoData);
  let trending = [];
  if (cryptoArray) {
    trending = cryptoArray.slice(0, 4);
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Card className="trending-card">
        <Carousel
          className="carousel"
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {trending ? (
            trending.map((crypto, index) => (
              <Carousel.Item>
                <div className="box">
                  <h3>{crypto.name}</h3>
                  <p>
                    {numberWithCommas(parseFloat(crypto.priceUsd).toFixed(2))}$
                  </p>
                </div>
              </Carousel.Item>
            ))
          ) : (
            <div>loading</div>
          )}
        </Carousel>
      </Card>
    </div>
  );
}
