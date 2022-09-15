import React from "react";
import * as d3 from "d3";
import flatMap from "array.prototype.flatmap";
import { getCryptoHistory } from "../redux/features/cryptoDataSlice";
import data from "./data";

flatMap.shim();
export default function ChartPreview({ data2, id }) {
  //   const d3ref = React.useRef(null);

  const dataRef = React.useRef(flatMap(data2 ? data2 : data, (e) => e));
  React.useEffect(() => {
    function init() {
      const width = 400;
      const height = 100;
      const margin = 10;

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(dataRef.current, (d) => new Date(d.date)))
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d3.max(d.map((el) => el.priceUsd)))])
        .range([height, 0]);

      const line = d3
        .line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));

      const dataset = dataRef.current.map((d) => ({
        x: new Date(d.date),
        y: d.priceUsd,
      }));

      const svg = d3
        .select("#" + id)
        .attr("width", width + margin * 2)
        .attr("height", height + margin * 2)
        .append("g")
        .attr("transform", `translate(${margin}, ${margin})`);

      svg.append("path").datum(dataset).attr("class", "line").attr("d", line);
    }
    init();
  }, []);

  return (
    <div>
      <svg id={id} />
    </div>
  );
}
