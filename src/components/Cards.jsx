import React from "react";
import Articles from "./cards/Articles";
import Trending from "./cards/Trending";

export default function Cards() {
  return (
    <div className="cards">
      <Trending />
      <Articles />
    </div>
  );
}
