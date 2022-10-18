import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Card } from "react-bootstrap";
import "../../css/cards.css";

export default function Articles() {
  const [index, setIndex] = useState(0);
  const { articles } = useSelector((store) => store.cryptoData);
  let topArticles = undefined;
  if (articles.topArticles) {
    topArticles = articles.topArticles.slice(0, 4);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Card className="articles-card">
        <Carousel
          className="carousel"
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {topArticles ? (
            topArticles.map((article, index) => (
              <Carousel.Item>
                <div className="article-box">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
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
