import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
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
const innerGridWidth = (width / 11) * 10 + 3;
const maxOn = (prop) => Math.max(...playfairData.map((d) => d[prop]));
const maxImport = maxOn("Imports");
const maxExport = maxOn("Exports");
const maxY = Math.max(maxImport, maxExport + 1_000_000);
const interval = 200000;

const xScale = d3.scaleLinear()
                 .range([0, (width / 11) * 10])
                 .domain(d3.extent(playfairData.map(d => d.Years)));

const yScale = d3.scaleLinear()
                 .range([height, 0])
                 .domain([0, maxY + 200_000]);

const xMinorScale = d3.scaleLinear()
                      .range([0, (width / 100) * 9])
                      .domain([1_770, 1_780]);

const yValues = yScale.ticks(20);
const xValues = xScale.ticks();
const xMinorValues = xMinorScale.ticks();

const scatterImport = playfairData.map((d) => ({
  x: d.Years,
  y: d.Imports,
})).slice(8, 21);

const scatterExport = playfairData.map((d) => ({
  x: d.Years,
  y: d.Exports,
})).slice(8, 21);

const formatYValue = (value) => {
  if (value < interval || value >= 6_000_000) return ' ';
  if (value === interval) return '200,000';
  if (value < 1_000_000) return value / 100_000;
  const shortValue = value / 1_000_000;
  if (shortValue === 1 && (shortValue) % 1 === 0) return `${shortValue} Million`;
  if ((shortValue) % 1 === 0) return `${shortValue} Millions`;
  return value / 1_000_000;
};

const scaleMapper = (sOut, sIn) => {
  const m = (1.0 * sOut[1] - sOut[0]) / (sIn[1] - sIn[0]);
  return (x) => sOut[0] + m * (x - sIn[0]);
};

export default function Recreation() {
  const { scrollProgress } = useContext(ScrollytellContext);

  const transitionInOut = (arrayIn, arrayOut) => {
    let progToOpacityIn = scaleMapper([0.0, 1.0], arrayIn);
    let progToOpacityOut = scaleMapper([1.0, 0.0], arrayOut);
    if (scrollProgress <= arrayIn[0]) {
      return 0;
    } else if (scrollProgress > arrayIn[0] && scrollProgress <= arrayIn[1]) {
      return progToOpacityIn(scrollProgress);
    } else if (scrollProgress > arrayOut[0] && scrollProgress <= arrayOut[1]) {
      return progToOpacityOut(scrollProgress);
    }
  };

  const transitionIn = (array) => {
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
    <svg viewBox="0 0 100 50" className="w-full md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0">
      <rect width="100%" height="100%" fill="#F3ECCB"></rect>
      <rect
        fill="transparent"
        x={3}
        y={3}
        height={height}
        width={width}
        stroke="black"
        strokeWidth={0.25}
      ></rect>
      <g>
        <rect
          fill="white"
          x="3"
          y="3"
          height={height}
          width={(width / 11) * 10}
          opacity="0.2"
        ></rect>
        {xValues.map((xValue, index) => {
          return (
            <VerticalGrid
              key={xValue}
              xValue={xScale(xValue)}
              offset={3}
              text={xValue}
            />
          )
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
          )
        })}
        <g opacity={scrollProgress > 0 && scrollProgress < 2 ? transitionInOut([0, 0.5], [1.25, 2]) : 0}>
          {scatterImport.map((plot) => {
            return(
              <ScatterPlot
                key={plot.x + plot.y}
                xValue={xScale(plot.x)}
                yValue={yScale(plot.y)}
                color="#D6BF24"
              />
            )
          })}
          {scatterExport.map((plot) => {
            return(
              <ScatterPlot
                key={plot.x + plot.y}
                xValue={xScale(plot.x)}
                yValue={yScale(plot.y)}
                color="#BB877F"
              />
            )
          })}
        </g>
        {/* First edition lines */}
        <g
          transform="scale(0.106, 0.09) translate(28,155)"
          opacity={scrollProgress >= 1 && scrollProgress < 5.5 ? transitionInOut([1, 2], [5, 5.5]) : 0}
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
        <StippleHatch opacity={scrollProgress >= 2 && scrollProgress < 5.5 ? transitionInOut([2.25, 3], [5, 5.75]): 0} />
        {/* Detail lines */}
        {xMinorValues.map((xValue, index) => {
          return (
            <VerticalGrid
              key={xValue}
              xValue={xMinorScale(xValue)}
              offset={(width / 11) * 7 + 3}
              text={' '}
              opacity={scrollProgress >= 3 && scrollProgress < 5 ? transitionInOut([3, 4], [4, 5]) : 0}
            />
          )
        })}
        {/* 3rd edition lines */}
        <g transform="scale(0.22, 0.195) translate(14,58)" opacity={scrollProgress >= 5 ? transitionIn([5, 6]) : 0}>
          <path d={Paths.import3rdEd} stroke="#F4B20C" fill="none" />
          <path d={Paths.export3rdEd} stroke="#56190F" fill="none" />
        </g>
        {/* Labels */}
        <g opacity={scrollProgress >= 6 ? transitionIn([6, 7]) : 0}>
          <text
            fill="black"
            fontSize="3"
            fontFamily="Chancery Cursive"
            transform={`rotate(-11) translate(${width / 9},${height})`}
          >
            Line of Imports
          </text>
          <text
            fill="black"
            fontSize="3"
            fontFamily="Chancery Cursive"
            transform="rotate(-65) translate(-8,60)"
          >
            Line of Exports
          </text>
        </g>
        {/* Color Areas */}
        <ColorArea opacity={scrollProgress >= 6 ? transitionIn([6, 7]) : 0} />
        <OvalTitle
          color="#FCE2B0"
          ellipse={{ cx: 28, cy: 17, rx: (width / 11) * 1.9, ry: 10 }}
          topText={{ text: "EXPORTS & IMPORTS", x: 14, y: 15 }}
          midText={{ text: "to and from all", x: 22, y: 18.5 }}
          botText={{ text: "NORTH AMERICA", x: 15, y: 22 }}
          opacity={scrollProgress >= 7 ? transitionIn([7, 8]) : 0}
        />
        <g opacity={scrollProgress >= 8 ? transitionIn([8, 9]) : 0}>
          <text
            fill="black"
            x={width / 2}
            y="2.3"
            fontFamily="Times New Roman"
            fontSize="2.3"
          >
            Time
          </text>
          <text
            fill="black"
            y="2"
            fontFamily="Times New Roman"
            fontSize="2.3"
            transform="rotate(-90) translate(-29, 0)"
          >
            Money
          </text>
        </g>
        <image
          opacity={scrollProgress > 9 ? transitionIn([9, 9.25]) : 0}
          transform="scale(1, .85)"
          href="/images/playfair/1-northamerica.jpg"
          width={100}
        />
      </g>
    </svg>
  )
}