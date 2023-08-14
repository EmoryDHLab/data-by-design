import { useEffect } from "react";
import * as d3 from "d3";

interface Props {
  width: number;
  height: number;
  yearRange: Array<number>;
}

function Axis({ width, height, yearRange }: Props) {

  useEffect(() => {
    const xScale = d3.scaleLinear()
                   .domain(yearRange)
                   .range([0, width]);

    // Create axis
    const xAxis = d3.axisBottom(xScale).ticks(10, "d");

    // Remove previous axis
    d3.select("#x-axis").remove();

    // Append new axis
    d3.select("#axis-container")
      .append("svg")
      .attr("id", "x-axis")
      .attr("width", width + 100)
      .attr("height", 75)
      .attr("fill", "white")
      .append("g")
      .attr("transform", `translate(50,20)`)
      .style("font-size", "1.25rem")
      .style('color', 'white')
      .call(xAxis);
  }, [yearRange, width]);

  return (
    <div id="axis-container">
      <div id="x-axis"></div>
    </div>
  );
}

export default Axis;