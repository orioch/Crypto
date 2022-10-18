import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Card } from "react-bootstrap";
import "../../css/cards.css";

export default function Articles() {
  const [index, setIndex] = useState(0);
  const { articles } = useSelector((store) => store.cryptoData);
  if (!articles) {
    return <div>loading</div>;
  }

  if (!articles.topArticles) {
    return <div>loading</div>;
  }

  let topArticles = articles.topArticles.slice(0, 4);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log(topArticles);
  return (
    <div>
      <Card className="articles-card">
        <Carousel
          style={{ width: "18rem", height: "20rem" }}
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {topArticles.map((article, index) => (
            <Carousel.Item>
              <div style={{ fontSize: "2px", margin: "3rem" }}>
                <h3>{article.title}</h3>
                <p>{article.description.slice(0, 130)}...</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    </div>
  );
}
