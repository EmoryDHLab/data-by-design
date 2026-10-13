import { useEffect, useMemo, useRef, useState } from "react";
import { Paths } from "./scrollytellElements/Paths";
import Recreation from "./Recreation";
import LineSegmentDots from "./LineSegmentDots";
import D3Chart from "./line_segment_elements/D3Chart";
import RawPath from "./line_segment_elements/RawPath";

interface Props {
  scrollProgress: number;
  direction: string;
}

const blue = "#3B4BE0";
const gold = "#db882a";
const white = "#FFEBD7";
const height = 44;
const width = 94;

function getFocusShape(scrollProgress: number) {
  if (scrollProgress < 2.5 || scrollProgress >= 4.5) {
    return { x: 21, y: 13.6, width: 66, height: 39, transform: "rotate(1)" };
  }
  return { x: 0, y: -17, width: 200, height: 200 };
}

function getChartTransform(scrollProgress: number) {
  if (scrollProgress >= 2.5 && scrollProgress <= 5.5) {
    return "scale(1) translate(0) rotate(0)";
  }
  return "scale(1.42, 1.3) translate(-17.1,-13.6) rotate(-1)";
}

const LineSegments = ({ scrollProgress, direction }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const focusShape = useMemo(
    () => getFocusShape(scrollProgress),
    [scrollProgress],
  );
  const chartTransform = useMemo(
    () => getChartTransform(scrollProgress),
    [scrollProgress],
  );

  useEffect(() => {
    console.log("🚀 ~ LineSegments ~ scrollProgress:", scrollProgress);
  }, [scrollProgress]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 105 55"
      className="w-full md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0"
    >
      {/* Original Chart */}
      <g
        className={`transition-opacity duration-1000 ${
          direction === "down" && scrollProgress < 4 ? "delay-1000" : "delay-0"
        } ${scrollProgress <= 4.5 ? "opacity-100" : "opacity-0"}`}
      >
        <mask id="northam-mask">
          <rect
            {...focusShape}
            fill="white"
            fillOpacity={1}
            className={`transition-all duration-1000 ${
              direction === "down" && scrollProgress < 4
                ? "delay-1000"
                : "delay-0"
            }`}
          />
        </mask>

        <image
          mask="url(#northam-mask)"
          className={`transition-all ${
            direction === "down" && scrollProgress < 4
              ? "delay-1000 duration-1000"
              : "delay-0 duration-700"
          }`}
          href="/images/chapters/0217A-playfair-northam-scan_copy.jpg"
          width={100}
          x={5}
          y={scrollProgress < 2.5 || scrollProgress >= 4.5 ? -25 : -15}
          transform={chartTransform}
        />
      </g>

      {/* D3 Chart  under 1.5*/}
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 1.5 ? "opacity-0" : "opacity-100"
        }`}
      >
        <D3Chart height={height} width={width} />
      </g>

      {/* D3 Lines between 0.5 and 2.5 */}
      <g transform="translate(11, 5.5) scale(0.905)">
        <path
          d={Paths.import3rdEdD3}
          stroke={gold}
          fill="none"
          strokeLinecap="butt"
          strokeWidth={0.5}
          className={`transition-all duration-1000 ${
            direction === "up" ? "delay-1000" : "delay-0"
          }`}
          strokeDasharray={114.47510528564453}
          strokeDashoffset={
            scrollProgress < 0.5 || scrollProgress > 2.5
              ? 114.47510528564453
              : 0
          }
        />
        <path
          d={Paths.export3rdEdD3}
          stroke={blue}
          fill="none"
          strokeLinecap="butt"
          strokeWidth={0.5}
          className={`transition-all duration-1000 ${
            direction === "up" ? "delay-1000" : "delay-0"
          }`}
          strokeDasharray={180.4506378173828}
          strokeDashoffset={
            scrollProgress < 0.5 || scrollProgress > 2.5 ? 180.4506378173828 : 0
          }
        />
      </g>

      {/* Drawn line between 3.5 and 5.5 and at 6.5 */}
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 3.5 && scrollProgress < 5.5
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <rect
          x={5.75}
          y={0}
          height={55}
          width={93.5}
          fill={white}
          fillOpacity={scrollProgress > 4.5 && scrollProgress < 7.5 ? 100 : 0}
          className={`transition-all duration-1000 origin-center ${
            scrollProgress >= 3.5 && scrollProgress <= 4.5
              ? "scale-75"
              : "scale-100"
          } ${direction === "down" ? "delay-0" : "delay-0"}`}
        />

        <g
          opacity={scrollProgress >= 3.5 ? 1 : 0}
          transform="translate(6, -0.4) scale(0.9, 1)"
          className="transition-opacity duration-1000"
        >
          <path
            d={Paths.import3rdEd}
            stroke="#F4B20C"
            strokeWidth={scrollProgress >= 4.5 ? "0.3px" : "0.5px"}
            fill="none"
            className={`transition-all duration-1000 ${
              scrollProgress >= 2.5 && scrollProgress <= 4.5
                ? "scale-[0.7] translate-x-[1.05rem] translate-y-[1.6rem]"
                : "scale-100"
            } ${
              direction === "down" && scrollProgress < 4
                ? "delay-1000"
                : "delay-0"
            }`}
            strokeDasharray={112.31173706054688}
            strokeDashoffset={scrollProgress >= 3.5 ? 0 : 112.31173706054688}
          />
          <path
            d={Paths.export3rdEd}
            stroke="#56190F"
            strokeWidth={scrollProgress >= 4.5 ? "0.3px" : "0.5px"}
            fill="none"
            className={`transition-all duration-1000 ${
              scrollProgress >= 2.5 && scrollProgress <= 4.5
                ? "scale-[0.7] translate-x-[1.05rem] translate-y-[1.6rem]"
                : "scale-100"
            } ${
              direction === "down" && scrollProgress < 4
                ? "delay-1000"
                : "delay-0"
            }`}
            strokeDasharray={157.57818603515625}
            strokeDashoffset={scrollProgress >= 3.5 ? 0 : 157.57818603515625}
          />
        </g>
      </g>

      {/* Dots between 4.5 and 5.5 */}
      <g
        transform="translate(5.6, 0) scale(1)"
        className={`transition-opacity ${
          scrollProgress > 4.5 && scrollProgress < 5.5
            ? "opacity-100"
            : "opacity-0"
        } ${
          direction === "down"
            ? "delay-[1500ms] duration-1000"
            : "delay-0 duration-0"
        }`}
      >
        <LineSegmentDots />
      </g>

      {/* Raw Path Element between 5.5 and 6.5 */}
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 5.5 && scrollProgress < 6.5
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <RawPath />
      </g>

      {/* Recreation above 7.5 */}
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress >= 6.5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Recreation scrollProgress={12} />
      </g>
    </svg>
  );
};

export default LineSegments;
