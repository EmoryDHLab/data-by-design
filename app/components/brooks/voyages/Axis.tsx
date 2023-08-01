import { useEffect } from "react";
import * as d3 from "d3";

function Axis({ width, height, start, end }) {

  useEffect(() => {
    const xScale = d3.scaleLinear()
                   .domain([start, end])
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
      .call(xAxis)
  }, [start, end, width]);

  return (
    <section id="axis-container">
      <section id="x-axis"></section>
    </section>
  );
}

export default Axis;