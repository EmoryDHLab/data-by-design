// @ts-nocheck
import * as d3 from "d3";
import VerticalGrid from "./elements/VerticalGrid";
import HorizontalGrid from "./elements/HorizontalGrid";
import OvalTitle from "./elements/OvalTitle";
import playfairData from "~/data/playfair/playfairImportExport.json";
import ScatterPlot from "./elements/ScatterPlot";
import StippleHatch from "./elements/StippleHatch";
import ColorArea from "./elements/ColorArea";
import { Paths } from "./scrollytellElements/Paths";

const height = 44;
const width = 94;
const innerGridWidth = (width / 11) * 10 + 5.5;
const maxImport = 3300000; // Math.max(...playfairData.map((d: PlayfairData) => d.Imports))
const maxExport = 4900000; // Math.max(...playfairData.map((d: PlayfairData) => d.Exports))
const maxY = Math.max(maxImport, maxExport + 1_000_000);
const interval = 200000;

const xScaleDomain = [1700, 1800]; // d3.extent(playfairData.map(d => d.Years))
const xScale = d3
  .scaleLinear()
  .range([0, (width / 11) * 10])
  .domain(xScaleDomain);

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, maxY + 200_000]);

const xMinorScale = d3
  .scaleLinear()
  .range([0, (width / 100) * 9])
  .domain([1_770, 1_780]);

const yValues = yScale.ticks(20);
const xValues = xScale.ticks();
const xMinorValues = xMinorScale.ticks();

const scatterImport = playfairData
  .map((d) => ({
    x: d.Years,
    y: d.Imports,
  }))
  .slice(0, 21);

const scatterExport = playfairData
  .map((d) => ({
    x: d.Years,
    y: d.Exports,
  }))
  .slice(0, 21);

const formatYValue = (value: number) => {
  if (value < interval || value >= 6_000_000) return " ";
  if (value === interval) return "200,000";
  if (value < 1_000_000) return value / 100_000;
  const shortValue = value / 1_000_000;
  if (shortValue === 1 && shortValue % 1 === 0) return `${shortValue} Million`;
  if (shortValue % 1 === 0) return `${shortValue} Millions`;
  return value / 1_000_000;
};

const scaleMapper = (sOut: Array<number>, sIn: Array<number>) => {
  const m = (1.0 * sOut[1] - sOut[0]) / (sIn[1] - sIn[0]);
  return (x: number) => sOut[0] + m * (x - sIn[0]);
};

export default function Recreation({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const transitionInOut = (arrayIn: Array<number>, arrayOut: Array<number>) => {
    let progToOpacityIn = scaleMapper([0.0, 1.0], arrayIn);
    let progToOpacityOut = scaleMapper([1.0, 0.0], arrayOut);
    if (scrollProgress <= arrayIn[0]) {
      return 0;
    } else if (scrollProgress > arrayIn[0] && scrollProgress <= arrayIn[1]) {
      return progToOpacityIn(scrollProgress);
    } else if (scrollProgress > arrayOut[0] && scrollProgress <= arrayOut[1]) {
      return progToOpacityOut(scrollProgress);
    } else if (scrollProgress >= arrayIn[1] && scrollProgress <= arrayOut[0]) {
      return 1;
    }
    return 0;
  };

  const transitionIn = (array: Array<number>) => {
    if (scrollProgress <= array[0]) {
      return 0;
    } else if (scrollProgress > array[0] && scrollProgress <= array[1]) {
      let progToOpacity = scaleMapper([0.0, 1.0], array);
      return progToOpacity(scrollProgress);
    } else {
      return 1;
    }
  };

  return (
    <svg
      viewBox="0 0 105 55"
      className="w-full md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0"
    >
      <rect width="100%" height="100%" fill="#F3ECCB"></rect>
      <rect
        x={0.25}
        y={0.25}
        width={104.5}
        height={54.5}
        fill="none"
        strokeWidth={0.5}
        stroke="black"
      ></rect>
      <rect
        x={1}
        y={1}
        width={103}
        height={53}
        fill="none"
        strokeWidth={0.1}
        stroke="black"
      ></rect>
      <rect
        fill="transparent"
        x={5.5}
        y={5.5}
        height={height}
        width={width}
        stroke="black"
        strokeWidth={0.25}
      ></rect>
      <g>
        <rect
          fill="white"
          x={5.5}
          y={5.5}
          height={height}
          width={(width / 11) * 10}
          opacity={0.2}
        ></rect>
        {xValues.map((xValue, index) => {
          return (
            <VerticalGrid
              key={xValue}
              xValue={xScale(xValue)}
              xOffset={5.5}
              text={xValue}
              textXOffset={4.25}
              textYOffset={5.5}
            />
          );
        })}
        {yValues.map((yValue, index) => {
          return (
            <HorizontalGrid
              key={yValue}
              yValue={yScale(yValue)}
              text={formatYValue(yValue)}
              innerWidth={innerGridWidth}
              opacity={(yValue / 1_000_000) % 1 === 0 ? 0.2 : 0.1}
            />
          );
        })}
        <g
          opacity={
            scrollProgress > 0 && scrollProgress < 2
              ? transitionInOut([0, 0.5], [1.25, 2])
              : 0
          }
        >
          {scatterImport.map((plot) => {
            return (
              <ScatterPlot
                key={plot.x + plot.y}
                xValue={xScale(plot.x)}
                yValue={yScale(plot.y)}
                color="#D6BF24"
              />
            );
          })}
          {scatterExport.map((plot) => {
            return (
              <ScatterPlot
                key={plot.x + plot.y}
                xValue={xScale(plot.x)}
                yValue={yScale(plot.y)}
                color="#BB877F"
              />
            );
          })}
        </g>
        {/* First edition lines */}
        <g
          transform="scale(0.106, 0.09) translate(52,185)"
          opacity={
            scrollProgress >= 1 && scrollProgress < 4.5
              ? transitionInOut([1, 1.5], [4, 4.5])
              : 0
          }
        >
          <path
            d={Paths.import1stEd}
            stroke="#F4B20C"
            strokeWidth="2px"
            fill="none"
          />
          <path
            d={Paths.export1stEd}
            stroke="#56190F"
            strokeWidth="2px"
            fill="none"
          />
        </g>
        {/* Shaded area */}
        <StippleHatch
          opacity={
            scrollProgress >= 1.5 && scrollProgress < 4.5
              ? transitionInOut([1.5, 2], [4, 4.75])
              : 0
          }
        />
        {/* Detail lines */}
        {xMinorValues.map((xValue, index) => {
          return (
            <VerticalGrid
              key={xValue}
              xValue={xMinorScale(xValue)}
              xOffset={(width / 11) * 7 + 5.5}
              offset={(width / 11) * 7 + 5.5}
              text={" "}
              opacity={
                scrollProgress >= 2.75 && scrollProgress < 4
                  ? transitionInOut([2.75, 3], [3, 4])
                  : 0
              }
            />
          );
        })}
        {/* 3rd edition lines */}
        <g
          transform="scale(0.22, 0.195) translate(25,70)"
          opacity={scrollProgress >= 4 ? transitionIn([4, 5]) : 0}
        >
          <path d={Paths.import3rdEd} stroke="#F4B20C" fill="none" />
          <path d={Paths.export3rdEd} stroke="#56190F" fill="none" />
        </g>
        {/* Labels */}
        <g opacity={scrollProgress >= 5 ? transitionIn([5, 6]) : 0}>
          <text
            fill="black"
            fontSize="3"
            fontFamily="Chancery Cursive"
            transform={`rotate(-11) translate(${width / 9},${height + 2.5})`}
          >
            Line of Imports
          </text>
          <text
            fill="black"
            fontSize={3}
            fontFamily="Chancery Cursive"
            transform="rotate(-65) translate(-8,64)"
          >
            Line of Exports
          </text>
        </g>
        {/* Color Areas */}
        <ColorArea opacity={scrollProgress >= 5 ? transitionIn([5, 6]) : 0} />
        <OvalTitle
          color="#FCE2B0"
          ellipse={{ cx: 28, cy: 19, rx: (width / 11) * 1.9, ry: 10 }}
          topText={{ text: "EXPORTS & IMPORTS", x: 14, y: 17 }}
          midText={{ text: "to and from all", x: 22, y: 20.5 }}
          botText={{ text: "NORTH AMERICA", x: 15, y: 24 }}
          opacity={scrollProgress >= 6 ? transitionIn([6, 7]) : 0}
        />
        <g opacity={scrollProgress >= 7 ? transitionIn([7, 8]) : 0}>
          <text
            fill="black"
            x={width / 2}
            y={4}
            fontFamily="Times New Roman"
            fontSize={2.5}
          >
            Time
          </text>
          <text
            fill="black"
            y={4}
            x={-27.5}
            fontFamily="Times New Roman"
            fontSize={2.5}
            transform="rotate(-90)"
            textAnchor="middle"
          >
            Money
          </text>
        </g>
        <g opacity={scrollProgress > 9 ? transitionIn([9, 9.25]) : 0}>
          <image
            transform="scale(1.17, 1.07)"
            href="/images/playfair/1-northamerica.jpg"
            width={105}
            height={55}
            x={-7.5}
            y={-2}
          />
          <rect x={0} y={-2.5} fill="#3B6FE0" width={105} height={3} />
          <rect x={0} y={54} fill="#3B6FE0" width={105} height={3} />
        </g>
      </g>
    </svg>
  );
}
