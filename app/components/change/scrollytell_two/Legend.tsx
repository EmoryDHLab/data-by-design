import { useContext } from "react";
import studentData from "~/data/power/studentChartOne.json";
import { ScrollytellContext } from "~/scrollytellContext";

interface Props {
  width: number;
  height: number;
}

export default function Legend({ width, height }: Props) {
  const largeText = height / 42;
  const radius = largeText / 2;
  const xOffset = radius / 2;
  const column1 = 0;
  const column2 = width / 3 + xOffset;
  const column3 = width - width / 3 + xOffset;
  const row1 = height / 3;
  const row2 = (height / 3) * 2 - height / 6;
  const row3 = height - height / 3;
  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <g
      className={`transition-opacity duration-1000 scale-95 ${
        scrollProgress >= 9.25 && scrollProgress <= 10.25
          ? "opacity-100"
          : "opacity-0"
      }`}
    >
      <g id="row1">
        <circle
          cx={column1}
          cy={row1}
          r={radius}
          className="fill-[#D92944] stroke-offblack"
        ></circle>
        <circle
          cx={column1 + radius * 2.5}
          cy={row1}
          r={radius}
          className="fill-[#D92944]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column1 + radius * 4}
          y={row1}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          Teachers
        </text>
        <circle
          cx={column2}
          cy={row1}
          r={radius}
          className="fill-[#5A7BC3] stroke-offblack"
        ></circle>
        <circle
          cx={column2 + radius * 2.5}
          cy={row1}
          r={radius}
          className="fill-[#5A7BC3]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column2 + radius * 4}
          y={row1}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          Ministers
        </text>
        <circle
          cx={column3}
          cy={row1}
          r={radius}
          className="fill-[#FFD3D3] stroke-offblack"
        ></circle>
        <circle
          cx={column3 + radius * 2.5}
          cy={row1}
          r={radius}
          className="fill-[#FFD3D3]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column3 + radius * 4}
          y={row1}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          Government Services
        </text>
      </g>
      <g id="row2">
        <circle
          cx={column1}
          cy={row2}
          r={radius}
          className="fill-[#CDCE9D] stroke-offblack"
        ></circle>
        <circle
          cx={column1 + radius * 2.5}
          cy={row2}
          r={radius}
          className="fill-[#CDCE9D]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column1 + radius * 4}
          y={row2}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          Business
        </text>
        <circle
          cx={column2}
          cy={row2}
          r={radius}
          className="fill-[#2F4F4F] stroke-offblack"
        ></circle>
        <circle
          cx={column2 + radius * 2.5}
          cy={row2}
          r={radius}
          className="fill-[#2F4F4F]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column2 + radius * 4}
          y={row2}
          dominantBaseline="auto"
          className="font-power uppercase text-offblack"
        >
          <tspan>Other</tspan>
          <tspan x={column2 + radius * 4} dy={largeText}>
            Professions
          </tspan>
        </text>
        <circle
          cx={column3}
          cy={row2}
          r={radius}
          className="fill-[#FEC313] stroke-offblack"
        ></circle>
        <circle
          cx={column3 + radius * 2.5}
          cy={row2}
          r={radius}
          className="fill-[#FEC313]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column3 + radius * 4}
          y={row2}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          House Wives
        </text>
      </g>
      <g id="row3">
        <circle
          cx={column1 + radius * 2.5}
          cy={row3}
          r={radius}
          className="fill-[#C4C4C4] stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column1 + radius * 4}
          y={row3}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          Deceased
        </text>
        <circle
          cx={column2}
          cy={row3}
          r={radius}
          className="fill-[#B5CCFF] stroke-offblack"
        ></circle>
        <circle
          cx={column2 + radius * 2.5}
          cy={row3}
          r={radius}
          className="fill-[#B5CCFF]/50 stroke-offblack"
        ></circle>
        <text
          fontSize={largeText}
          x={column2 + radius * 4}
          y={row3}
          dominantBaseline="central"
          className="font-power uppercase text-offblack"
        >
          Unknown
        </text>
        <polygon
          points={`
          ${column3 + radius * 2},${row3 - radius}
          ${column3 + radius * 3}, ${row3}
          ${column3 + radius * 2},${row3 + radius}
          ${column3 + radius},${row3}
        `}
          strokeWidth={5}
          className={`stroke-offblack transition-all duration-1000 fill-offwhite`}
        />

        <text
          fontSize={largeText}
          x={column3 + radius * 4}
          y={row3}
          dominantBaseline="auto"
          className="font-power uppercase text-offblack"
        >
          <tspan>Student Contributor</tspan>
          <tspan x={column3 + radius * 4} dy={largeText}>
            to Data Portraits
          </tspan>
        </text>
      </g>
    </g>
  );
}
