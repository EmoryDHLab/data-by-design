import * as d3 from "d3";
import { useEffect, useRef } from "react";

const MonthScale = ({
  year,
  width = 0,
  height = 0,
  xOffset,
}: {
  year: number;
  width: number | undefined;
  height: number | undefined;
  xOffset: number;
}) => {
  const scaleRef = useRef<SVGGElement>(null);
  useEffect(() => {
    const xScaleYear = d3
      .scaleTime()
      .domain([new Date(year, 8, 1), new Date(year + 1, 7, 31)])
      .range([0, width]);

    const xAxisYear = d3
      .axisBottom(xScaleYear)
      // @ts-ignore
      .tickFormat(d3.timeFormat("%b"))
      .tickSize(0)
      .ticks(d3.timeMonth.every(1));

    d3.select(scaleRef.current)
      .append("g")
      .attr("transform", `translate(100, ${height / 1.35})`)
      .call(xAxisYear, 0)
      .selectAll("text")
      .attr("dx", xOffset)
      .attr("text-anchor", "middle")
      .attr("font-size", height / 1.5)
      .attr("class", "font-dubois tracking-widest fill-offwhite");

    d3.select(scaleRef.current)
      .selectAll("path")
      .attr("class", "stroke-offblack");

    const refCopy = scaleRef.current;

    return () => {
      if (refCopy) {
        refCopy.innerHTML = "";
      }
    };
  }, [year, width, height, xOffset]);

  return <g ref={scaleRef} role="presentation" />;
};

export default MonthScale;
