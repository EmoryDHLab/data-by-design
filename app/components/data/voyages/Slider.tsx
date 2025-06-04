import { useEffect, useRef, useState } from "react";
import { useDeviceContext } from "~/hooks";
import * as d3 from "d3";
import SliderHandle from "./SliderHandle";
import SliderJoin from "./SliderJoin";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  width: number;
  setYearRange: Dispatch<SetStateAction<Array<number>>>;
  yearRange: Array<number>;
  interactive: boolean;
}

const Slider = ({
  width,
  setYearRange,
  yearRange,
  interactive = false,
}: Props) => {
  const containerRef = useRef<SVGSVGElement>(null);
  const sliderRef = useRef<SVGGElement>(null);
  const scaleRef = useRef<d3.ScaleLinear<number, number, number>>();
  const maxX = useRef<number>(0);
  const { isDesktop } = useDeviceContext();

  // Just a ref so it can be used in the initial effect.
  const initialYearRange = useRef(yearRange);
  const [sliderWidth, setSliderWidth] = useState<Array<number>>([0, 0]);

  const handleClick = ({ clientX }: { clientX: number }) => {
    if (!interactive) return;
    const newX = clientX - 50; // Minus 50 to account for the transformed position.
    const previousDiff = sliderWidth[1] - sliderWidth[0];
    const newStart = newX;
    const newEnd = Math.ceil(newX + previousDiff);
    if (newStart >= 0 && newEnd <= maxX.current + 1) {
      setSliderWidth([newStart, newEnd]);
    }
  };

  useEffect(() => {
    if (interactive) return;
    const scale = d3
      .scaleLinear()
      .domain([1565, 1858])
      .range([0, width])
      .clamp(true);

    setSliderWidth([scale(yearRange[0]), scale(yearRange[1])]);
  }, [yearRange, width, interactive]);

  useEffect(() => {
    if (!interactive || !scaleRef.current) return;
    const startYear = Math.floor(scaleRef.current.invert(sliderWidth[0]));
    const endYear = Math.floor(scaleRef.current.invert(sliderWidth[1]));
    setYearRange([startYear, endYear]);
  }, [sliderWidth, setYearRange, interactive]);

  useEffect(() => {
    if (isNaN(width)) return;

    const svg = d3
      .select(containerRef.current)
      .attr("width", isDesktop ? width + 100 : width + 20)
      .attr("height", isDesktop ? 100 : 85)
      .attr("class", `${interactive ? "cursor-pointer" : ""}`);

    const scale = d3
      .scaleLinear()
      .domain([1565, 1858])
      .range([0, width - 40])
      .clamp(true);

    const fullAxis = d3
      .axisBottom(scale)
      .ticks(isDesktop ? 20 : 5, "d")
      .tickSize(20);

    const axisEnds = d3
      .axisBottom(scale)
      .tickSize(20)
      .tickValues(isDesktop ? [1565, 1858] : [1565])
      // @ts-expect-error: IDK, D3 amirite?
      .tickFormat((d) => d);

    d3.select(sliderRef.current)
      .append("g")
      .attr("class", "scale")
      .attr("transform", `translate(${isDesktop ? 70 : 20},40)`)
      .attr("y", 76)
      .style("font-size", isDesktop ? "1rem" : "0.75rem")
      // @ts-expect-error: IDK, D3 amirite?
      .call(axisEnds);

    d3.select(sliderRef.current)
      .append("g")
      .attr("class", "scale")
      .attr("transform", `translate(${isDesktop ? 70 : 20},40)`)
      .attr("y", 76)
      .style("font-size", isDesktop ? "1rem" : "0.75rem")
      .call(fullAxis);

    scaleRef.current = scale;

    setSliderWidth([
      scale(initialYearRange.current[0]),
      scale(initialYearRange.current[1]),
    ]);

    maxX.current = scale(1858);

    return () => {
      svg.selectAll(".scale").remove();
    };
  }, [width, isDesktop, interactive]);

  return (
    <svg ref={containerRef} onClick={handleClick}>
      <g ref={sliderRef}></g>
      <g
        transform="translate(70,40)"
        className={`${interactive ? "cursor-ew-resize" : ""}`}
      >
        <SliderJoin
          sliderWidth={sliderWidth}
          setSliderWidth={setSliderWidth}
          maxX={maxX.current}
          interactive={interactive}
        >
          {isDesktop && (
            <>
              <SliderHandle
                sliderWidth={sliderWidth}
                setSliderWidth={setSliderWidth}
                maxX={maxX.current}
                year={yearRange[0]}
                start
                interactive={interactive}
              />
              <SliderHandle
                sliderWidth={sliderWidth}
                setSliderWidth={setSliderWidth}
                maxX={maxX.current}
                year={yearRange[1]}
                interactive={interactive}
              />
            </>
          )}
        </SliderJoin>
      </g>
    </svg>
  );
};

export default Slider;
