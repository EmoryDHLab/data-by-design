import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import SliderHandle from "./SliderHandle";
import SliderJoin from "./SliderJoin";

function Slider({ width, setYearRange, yearRange }) {
  const svgRef = useRef();
  const scaleRef = useRef();
  const maxX = useRef();
  // Just a ref so it can be used in the initial effect.
  const yearRangeRef = useRef(yearRange);
  const [sliderWidth, setSliderWidth] = useState<array>([0, 0]);

  useEffect(() => {
    const startYear = Math.floor(scaleRef.current?.invert(sliderWidth[0]));
    const endYear = Math.floor(scaleRef.current?.invert(sliderWidth[1]));
    setYearRange([startYear, endYear]);
  }, [sliderWidth, setYearRange]);

  useEffect(() => {
    yearRangeRef.current = yearRange;
  }, [yearRange]);

  useEffect(() => {
    if (isNaN(width)) return;

    const svg = d3.select(svgRef.current)
                  .attr("width", width + 100)
                  .attr("height", 100)
                  .attr("class", "cursor-pointer")
                  // .on("click", drag);

    const scale = d3.scaleLinear()
                    .domain([1565, 1858])
                    .range([0, width])
                    .clamp(true);

    const fullAxis = d3.axisBottom(scale)
                       .ticks(10, "d")
                       .tickSize(20);

    const axisEnds = d3.axisBottom(scale)
                       .tickSize(20)
                       .tickValues([1565, 1858])
                       .tickFormat((d) => d);

    svg.select("#scales")
       .append("g")
       .attr("class", "scale")
       .attr("transform", `translate(50,40)`)
       .attr("y", 76)
       .style("font-size", "1rem")
       .call(axisEnds);

    svg.select("#scales")
       .append("g")
       .attr("class", "scale")
       .attr("transform", `translate(50,40)`)
       .attr("y", 76)
       .style("font-size", "1rem")
       .call(fullAxis);

    scaleRef.current = scale;
    setSliderWidth([
      scale(yearRangeRef.current[0]),
      scale(yearRangeRef.current[1])
    ]);

    maxX.current = scale(1858);

    return () => {
      svg.selectAll(".scale").remove();
    }
  }, [width]);

  return (
    <svg ref={svgRef}>
      <g id="scales"></g>
      <g
        transform="translate(50,40)"
        className="cursor-ew-resize"
      >
        <SliderJoin
          sliderWidth={sliderWidth}
          setSliderWidth={setSliderWidth}
          yearRange={yearRange}
          maxX={maxX.current}
        >
          <SliderHandle
            sliderWidth={sliderWidth}
            setSliderWidth={setSliderWidth}
            maxX={maxX.current}
            start
          >
            {yearRange[0]}
          </SliderHandle>
          <SliderHandle
            sliderWidth={sliderWidth}
            setSliderWidth={setSliderWidth}
            maxX={maxX.current}
          >
            {yearRange[1]}
          </SliderHandle>
        </SliderJoin>
      </g>
    </svg>
  );
}

export default Slider;
