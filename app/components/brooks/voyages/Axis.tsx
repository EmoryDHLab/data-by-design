import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Props {
  width: number;
  color?: string;
  yearRange: Array<number>;
  widthAdjustment?: number | undefined;
}

function Axis({ width, color, yearRange, widthAdjustment=0 }: Props) {
  const axisContainerRef = useRef<HTMLDivElement>(null);
  const axisRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const xScale = d3.scaleLinear()
                   .domain(yearRange)
                   .range([0, width + widthAdjustment || 0]);

    // Create axis
    const xAxis = d3.axisBottom(xScale).ticks(10, "d");

    // Remove previous axis
    d3.select(axisRef.current).select("g").remove();

    // Append new axis
    d3.select(axisRef.current)
      // .append("svg")
      // .attr("id", "x-axis")
      .attr("width", width + 100)
      .attr("height", 75)
      .attr("fill", color ?? "white")
      .append("g")
      .attr("transform", `translate(${widthAdjustment > 0 ? widthAdjustment : 50},20)`)
      .style("font-size", "1.25rem")
      .style('color', color ?? 'white')
      .call(xAxis);
  }, [yearRange, width, color, widthAdjustment]);

  return (
    <div ref={axisContainerRef}>
      {/* <div id="x-axis"></div> */}
      <svg ref={axisRef}></svg>
    </div>
  );
}

export default Axis;