import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import playfairData from "../../data/image/playfairImportExport.json";
import { Paths } from "./scrollytellElements/Paths";
import ScatterPlot from "./elements/ScatterPlot";
import Recreation from "./Recreation";

interface Props {
  scrollProgress: number;
}

const blue = "#3B4BE0";
const gold = "#db882a";
const exportColor = "#56190F";
const importColor = "#F4B20C";
const white = "#F3ECCB";
const height = 44;
const width = 94;
const maxImport = 3300000; // Math.max(...playfairData.map((d: PlayfairData) => d.Imports))
const maxExport = 4900000; // Math.max(...playfairData.map((d: PlayfairData) => d.Exports))
const maxY = Math.max(maxImport, maxExport + 1_000_000);

const xScaleDomain = [1700, 1800]; // d3.extent(playfairData.map(d => d.Years))
const xScale = d3
  .scaleLinear()
  .range([0, (width / 11) * 10])
  .domain(xScaleDomain);
const xValues = xScale.ticks();

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, maxY + 200_000]);

const yValues = [0, 1_000_000, 2_000_000, 3_000_000, 4_000_000, 5_000_000];

const scatterImport = playfairData.map((d) => ({
  x: d.Years,
  y: d.Imports,
}));

const scatterExport = playfairData.map((d) => ({
  x: d.Years,
  y: d.Exports,
}));

const LineSegments = ({ scrollProgress }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [recreationScrollProgress, setRecreationScrollProgress] =
    useState<number>(20);

  useEffect(() => {
    console.log("🚀 ~ LineSegments ~ scrollProgress:", scrollProgress);
    if (
      (scrollProgress > 6.5 && scrollProgress < 7.5) ||
      (scrollProgress > 3.5 && scrollProgress < 5.5)
    )
      setRecreationScrollProgress(20);
    if (scrollProgress > 7.5 && scrollProgress < 8.5)
      setRecreationScrollProgress(12.5);
    if (scrollProgress > 8.5) setRecreationScrollProgress(13);
  }, [scrollProgress]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 105 55"
      className="w-full md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0"
    >
      <image
        href="/images/image/1-northamerica.jpg"
        width={105}
        height={55}
        x={0}
        y={0}
        opacity={scrollProgress > 1.5 && scrollProgress < 2.5 ? 1 : 0}
        className="transition-opacity duration-1000"
      />
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 1.5 ? "opacity-0" : "opacity-100"
        }`}
      >
        <rect
          x={0}
          y={0}
          height={55}
          width={105}
          fill={white}
          fillOpacity={1}
        />
        <g transform="translate(10, 1) scale(0.89, 1)">
          {xValues.map((xValue) => {
            return (
              <text
                key={xValue}
                fill="black"
                x={xScale(xValue)}
                y={50}
                fontSize={1.75}
              >
                {xValue}
              </text>
            );
          })}
        </g>
        <g transform="translate(0, 5.5)">
          {yValues.map((yValue, index) => {
            return (
              <g key={yValue}>
                <text
                  fill="black"
                  x={index === 0 ? 9 : 3.5}
                  y={yScale(yValue)}
                  fontSize={1.5}
                  opacity={1}
                >
                  {d3.format(",")(yValue)}
                </text>
              </g>
            );
          })}
        </g>
        <text fontSize={3} y={5.5} x={4}>
          British Exports and Imports (1700-1800)
        </text>
        <g transform="translate(12, 34.25)">
          <rect x={1.5} y={1.5} height={2} width={2} fill={blue} />
          <text x={4.25} y={3.25} fontSize={2}>
            Exports
          </text>
          <rect x={1.5} y={4.5} height={2} width={2} fill={gold} />
          <text x={4.25} y={6.25} fontSize={2}>
            Imports
          </text>
        </g>
        <line
          x1={11.1}
          x2={11.1}
          y1={12}
          y2={49.1}
          stroke="black"
          strokeWidth={0.25}
        />
        <line
          x1={11.1}
          x2={88}
          y1={49}
          y2={49}
          stroke="black"
          strokeWidth={0.25}
        />
      </g>
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress < 2.5 ? "opacity-100" : "opacity-0"
        }`}
        transform="translate(11, 5) scale(0.9, 1)"
      >
        <path
          d={Paths.import3rdEdD3}
          stroke={blue}
          fill="none"
          strokeLinecap="butt"
          strokeWidth={0.5}
          className="transition-all duration-1000"
        />
        <path
          d={Paths.export3rdEdD3}
          stroke={gold}
          fill="none"
          strokeLinecap="butt"
          strokeWidth={0.5}
          className="transition-all duration-1000"
        />
      </g>
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 2.5 && scrollProgress < 3.5
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <image
          href="/images/image/playfairscan.jpg"
          width={105}
          height={55}
          x={0}
          y={0}
        />
      </g>
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 5.5 && scrollProgress < 6.5
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <rect x={5.75} y={0} height={55} width={93.5} fill="white" />
        <line x1={10} x2={10} y1={0} y2={55} strokeWidth={0} stroke="black" />
        <line x1={95} x2={95} y1={0} y2={55} strokeWidth={0} stroke="black" />
        <text x={11} y={15} fontSize={2}>
          {`<path`}
          <tspan x={12} dy={2.75}>
            d="M0,42.702L8.545,42.557L17.091,42.485L25.636,41.259L34.182,40.393L42.727,37.148L51.273,
          </tspan>
          <tspan x={12} dy={2.75}>
            30.295L58.109,16.59L59.818,11.18L60.673,10.603L61.527,18.033L62.382,26.22L63.236,
          </tspan>
          <tspan x={12} dy={2.75}>
            16.302L64.091,36.895L64.945,35.416L65.8,30.439L66.655,35.705L67.509,34.118L68.364,
          </tspan>
          <tspan x={12} dy={2.75}>
            30.98L69.218,32.856L70.073,37.472L76.909,15.869L85.455,8.656"
          </tspan>
          <tspan x={12} dy={2.75}>
            stroke="#db882a" fill="none" stroke-width="0.5"
          </tspan>
          <tspan x={12} dy={2.75}>
            transform="translate(11, 5) scale(0.9, 1)"
          </tspan>
          <tspan x={11} dy={2.75}>{`/>`}</tspan>
        </text>
      </g>
      <g
        className={`transition-opacity duration-1000 ${
          scrollProgress > 6.5 && scrollProgress < 7.5
            ? "opacity-100"
            : "opacity-0"
        }`}
      ></g>
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
          fillOpacity={scrollProgress < 7.5 ? 1 : 0}
          className="transition-all duration-1000"
        />
        <Recreation scrollProgress={recreationScrollProgress} />
      </g>
      <g
        transform="translate(6.25, -0.75) scale(0.9, 1)"
        className={`transition-opacity duration-1000 ${
          scrollProgress > 4.5 && scrollProgress < 5.5
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        {scatterImport.map((plot) => {
          return (
            <ScatterPlot
              key={plot.x + plot.y}
              xValue={xScale(plot.x)}
              yValue={yScale(plot.y)}
              stroke={importColor}
              radius={1.25}
              strokeWidth={0.5}
              strokeOpacity={0.8}
              color={white}
            />
          );
        })}
        {scatterExport.map((plot) => {
          return (
            <ScatterPlot
              key={plot.x + plot.y}
              xValue={xScale(plot.x)}
              yValue={yScale(plot.y)}
              stroke={exportColor}
              radius={1.25}
              strokeWidth={0.5}
              strokeOpacity={0.8}
              color={white}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default LineSegments;
