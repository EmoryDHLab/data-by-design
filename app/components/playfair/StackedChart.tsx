import * as d3 from "d3";
import HorizontalGrid from "./elements/HorizontalGrid"
import OvalTitle from "./elements/OvalTitle"
import VerticalGrid from "./elements/VerticalGrid"
import playfairData from "~/data/playfair/playfairImportExport.json"

export default function StackedChart() {
  const height = 44;
  const width = 58;
  const innerGridWidth = (58 / 11) * 10 + 3;
  const interval = 500000;
  const ellipse = { cx: 20, cy: 14, rx: (94 / 11) * 1.9, ry: 10 };
  const topText = { text: "EXPORTS & IMPORTS", x: 6, y: 12 };
  const midText = { text: "to and from all", x: 14, y: 15.5 };
  const botText = { text: "NORTH AMERICA", x: 7, y: 19 };

  // const maxImport = Math.max(...playfairData.map(d => d.Imports));
  // const minImport = Math.min(...playfairData.map(d => d.Imports));
  // const maxExport = Math.max(...playfairData.map(d => d.Exports));
  // const minExport = Math.min(...playfairData.map(d => d.Exports));

  const maxY = Math.max(...playfairData.map(d => d.Imports + d.Exports));
  const maxYear = Math.max(...playfairData.map(d => d.Years));
  const minYear = Math.min(...playfairData.map(d => d.Years));
  const xValues = Array.from({ length: 11}, (_, n) => n * 10 + 1700);
  const yValues = Array.from({ length: (maxY + interval) / interval}, (_, n) => n * interval);

  const readableYValue = (value) => {
    if (value === 0 ) return " ";

    if (value === interval ) return interval;

    if (value === 1) return "1 Million";

    const newValue = value / (interval * 2);

    if (Number.isInteger(newValue)) return `${newValue} Millions`;

    return newValue;
  }

  const xScale = d3.scaleLinear()
                   .range([0, innerGridWidth - 5])
                   .domain([minYear - 5, maxYear + 5]);

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, maxY + interval]);

  const stackedData = d3.stack().keys(["Imports", "Exports"])(playfairData);

  const exportBars = stackedData[1].map((d) => {
    return {
      xLabel: "Exports",
      x: xScale(d.data.Years),
      y: yScale(d[1]),
      width: 3,
      height: height - yScale(d[1]),
    };
  });

  const importBars = stackedData[0].map((d) => {
    return {
      xLabel: "Imports",
      x: xScale(d.data.Years),
      y: yScale(d[1]),
      width: 3,
      height: height - yScale(d[1]),
    };
  });

  return (
    <g>
      <text
        fill="black"
        x="28"
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
        transform="rotate(-90) translate(-30, 0)"
      >
        U.S. Dollar
      </text>
      <rect
        fill="white"
        x="3"
        y="3"
        height={height}
        width={(width / 11) * 10 - 2}
        opacity="0.2"
      ></rect>
      {exportBars.map((bar, index) => {
        return (
          <rect
            fill="#E4AE95"
            key={`${index}export`}
            height={bar.height}
            width={bar.width}
            x={bar.x + 1.5}
            y={bar.y + 3}
          ></rect>
        )
      })}
      {importBars.map((bar, index) => {
        return (
          <rect
            fill="#ABAF7B"
            key={`${index}import`}
            height={bar.height}
            width={bar.width}
            x={bar.x + 1.5}
            y={bar.y + 3}
          ></rect>
        )
      })}
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
            text={readableYValue(yValue)}
            innerWidth={innerGridWidth - 2}
            opacity={index % 2 === 0 ? "0.4" : "0.2"}
          />
        )
      })}
      <OvalTitle
        color="#FCE2B0"
        ellipse={ellipse}
        topText={topText}
        midText={midText}
        botText={botText}
      />

      <rect
        fill="transparent"
        x="3"
        y="3"
        height={height}
        width={width}
        stroke="black"
        strokeWidth="0.25"
      ></rect>
      <line
        x1={innerGridWidth - 2}
        y1="3"
        x2={innerGridWidth - 2}
        y2="47"
        stroke="black"
        strokeWidth="0.1"
      ></line>
      <g>
        <text
          fill="black"
          fontSize="3"
          fontFamily="Chancery Cursive"
          x="36"
          y="30"
        >
          Exports
        </text>
        <text
          fill="black"
          fontSize="3"
          fontFamily="Chancery Cursive"
          x="32"
          y="45"
        >
          Imports
        </text>
      </g>
    </g>
  )
}