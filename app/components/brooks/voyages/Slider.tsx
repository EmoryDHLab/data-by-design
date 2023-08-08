import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import SliderHandle from "./SliderHandle";
import SliderJoin from "./SliderJoin";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  width: number;
  setYearRange: Dispatch<SetStateAction<Array<number>>>;
  yearRange: Array<number>;
}

function Slider({ width, setYearRange, yearRange }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const scaleRef = useRef<any>(null);
  const maxX = useRef<number>(0);

  // Just a ref so it can be used in the initial effect.
  const initialYearRange = useRef(yearRange);
  const [sliderWidth, setSliderWidth] = useState<Array<number>>([0, 0]);

  const handleClick = ({ clientX }: { clientX: number }) => {
    const newX = clientX - 50; // Minus 50 to account for the transformed position.
    const previousDiff = sliderWidth[1] - sliderWidth[0];
    const newStart = newX;
    const newEnd = Math.ceil((newX) + previousDiff);
    if (newStart >= 0 && newEnd <= maxX.current + 1) {
      setSliderWidth([newStart, newEnd]);
    }
  }

  useEffect(() => {
    // @ts-ignore
    const startYear = Math.floor(scaleRef.current?.invert(sliderWidth[0]));
    // @ts-ignore
    const endYear = Math.floor(scaleRef.current?.invert(sliderWidth[1]));
    setYearRange([startYear, endYear]);
  }, [sliderWidth, setYearRange]);

  useEffect(() => {
    if (isNaN(width)) return;

    // @ts-ignore
    const svg = d3.select(svgRef.current)
                  .attr("width", width + 100)
                  .attr("height", 100)
                  .attr("class", "cursor-pointer");

    const scale = d3.scaleLinear()
                    .domain([1565, 1858])
                    .range([0, width])
                    .clamp(true);

    const fullAxis = d3.axisBottom(scale)
                       .ticks(10, "d")
                       .tickSize(20);

    // @ts-ignore
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
        // @ts-ignore
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
      scale(initialYearRange.current[0]),
      scale(initialYearRange.current[1])
    ]);

    maxX.current = scale(1858);

    return () => {
      svg.selectAll(".scale").remove();
    }
  }, [width]);

  return (
    <svg
      ref={svgRef}
      onClick={handleClick}
    >
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
            year={yearRange[0]}
            start
          />
          <SliderHandle
            sliderWidth={sliderWidth}
            setSliderWidth={setSliderWidth}
            maxX={maxX.current}
            year={yearRange[1]}
          />
        </SliderJoin>
      </g>
    </svg>
  );
}

export default Slider;
