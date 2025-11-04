import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import playfairData from "../../data/image/playfairImportExport.json";
import { Paths } from "./scrollytellElements/Paths";
import ScatterPlot from "./elements/ScatterPlot";
import Recreation from "./Recreation";
import LineSegmentDots from "./LineSegmentDots";
import D3Chart from "./line_segment_elements/D3Chart";
import RawPath from "./line_segment_elements/RawPath";

interface Props {
  scrollProgress: number;
}

const blue = "#3B4BE0";
const gold = "#db882a";
const white = "#F3ECCB";
const height = 44;
const width = 94;

const LineSegments = ({ scrollProgress }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [recreationScrollProgress, setRecreationScrollProgress] =
    useState<number>(50);
  const [focusShape, setFocusShape] = useState<object>({
    x: 0,
    y: 0,
    width,
    height,
    transform: "",
  });
  const [chartTransform, setChartTransform] = useState<string>(
    "scale(1) translate(0) rotate(0)"
  );

  useEffect(() => {
    if (scrollProgress < 2.5 || scrollProgress >= 3.5) {
      setFocusShape({
        x: 21,
        y: 13.6,
        width: 66,
        height: 39,
        transform: "rotate(1)",
      });
    } else {
      setFocusShape({ x: 0, y: -17, width: 200, height: 200 });
    }
  }, [scrollProgress]);

  useEffect(() => {
    if (scrollProgress > 6.7 && scrollProgress < 7.5)
      setRecreationScrollProgress(20);

    if (scrollProgress > 7.5 && scrollProgress < 8.5)
      setRecreationScrollProgress(12.5);

    if (scrollProgress > 8.5) setRecreationScrollProgress(13);

    if (scrollProgress <= 2.5) {
      setChartTransform("scale(1.42, 1.3) translate(-17.1,-13.6) rotate(-1)");
    } else if (scrollProgress >= 3.5) {
      setChartTransform("scale(1.41, 1.38) translate(-17.1,-13.5) rotate(-1)");
    } else {
      setChartTransform("scale(1) translate(0) rotate(0)");
    }
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
          scrollProgress >= 3.5 ? "delay-1000" : ""
        } ${scrollProgress <= 3.5 ? "opacity-100" : "opacity-100"}`}
      >
        <mask id="northam-mask">
          <rect
            {...focusShape}
            fill="white"
            fillOpacity={1}
            className="transition-all duration-1000"
          />
        </mask>

        <image
          mask="url(#northam-mask)"
          className="transition-all duration-1000"
          href="/images/image/0201-playfair-northam.jpg"
          width={100}
          x={5}
          y={scrollProgress < 2.5 || scrollProgress >= 3.5 ? -25 : -15}
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
          className="transition-all duration-1000"
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
          className="transition-all duration-1000"
          strokeDasharray={180.4506378173828}
          strokeDashoffset={
            scrollProgress < 0.5 || scrollProgress > 2.5 ? 180.4506378173828 : 0
          }
        />
      </g>

      {/* Full scan image from above between 2.5 and 3.5 */}

      {/* Background for drawn lines when scrolling up between 6.5 and 7.5 */}
      <g className={scrollProgress >= 6.5 ? "opacity-100" : "opacity-0"}>
        <rect x={5.75} y={0} height={55} width={93.5} fill={white} />
      </g>

      {/* Drawn line between 3.5 and 5.5 and at 6.5 */}
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 6.5 || (scrollProgress > 3.5 && scrollProgress < 5.5)
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
          fillOpacity={scrollProgress > 3.5 && scrollProgress < 7.5 ? 100 : 0}
          className="transition-all duration-1000 delay-1000"
        />

        <g
          opacity={scrollProgress >= 3.5 ? 1 : 0}
          transform="translate(6, -0.4) scale(0.9, 1)"
          className="transition-opacity duration-1000"
        >
          <path
            d={Paths.import3rdEd}
            stroke="#F4B20C"
            strokeWidth="0.3px"
            fill="none"
            className="transition-all duration-1000"
            strokeDasharray={112.31173706054688}
            strokeDashoffset={scrollProgress >= 3.5 ? 0 : 112.31173706054688}
          />
          <path
            d={Paths.export3rdEd}
            stroke="#56190F"
            strokeWidth="0.3px"
            fill="none"
            className="transition-all duration-1000"
            strokeDasharray={157.57818603515625}
            strokeDashoffset={scrollProgress >= 3.5 ? 0 : 157.57818603515625}
          />
        </g>
      </g>

      {/* Dots between 4.5 and 5.5 */}
      <g
        transform="translate(5.6, 0) scale(1)"
        className={`transition-opacity duration-1000 ${
          scrollProgress > 4.5 && scrollProgress < 5.5
            ? "opacity-100"
            : "opacity-0"
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
          scrollProgress >= 7.5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Recreation scrollProgress={recreationScrollProgress} />
      </g>
    </svg>
  );
};

export default LineSegments;
