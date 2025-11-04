import * as d3 from "d3";

interface Props {
  width: number;
  height: number;
}

const xScaleDomain = [1700, 1800]; // d3.extent(playfairData.map(d => d.Years))
const maxImport = 3300000; // Math.max(...playfairData.map((d: PlayfairData) => d.Imports))
const maxExport = 4900000; // Math.max(...playfairData.map((d: PlayfairData) => d.Exports))
const maxY = Math.max(maxImport, maxExport + 1_000_000);
const yValues = [0, 1_000_000, 2_000_000, 3_000_000, 4_000_000, 5_000_000];

const D3Chart = ({ width, height }: Props) => {
  const xScale = d3
    .scaleLinear()
    .range([0, (width / 11) * 10])
    .domain(xScaleDomain);

  const xValues = xScale.ticks();

  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, maxY + 200_000]);
  return (
    <>
      <rect
        x={0}
        y={0}
        height={55}
        width={105}
        fill="#F3ECCB"
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
        <rect x={1.5} y={1.5} height={2} width={2} fill="#db882a" />
        <text x={4.25} y={3.25} fontSize={2}>
          Exports
        </text>
        <rect x={1.5} y={4.5} height={2} width={2} fill="#3B4BE0" />
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
    </>
  );
};

export default D3Chart;
