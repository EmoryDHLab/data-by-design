import { useContext } from "react"
import BarGraphContext from "./BarGraphContext";
import { numberRange } from "~/utils";

const textOffset = (index) => {
  if (index === 1) return 0;
  if (index === 100) return 291;
  return index * 3 - 6;
}

export default function Timeline() {
  const { currentCentury } = useContext(BarGraphContext);
  return (
    <svg className="w-full md:w-11/12" viewBox="0 0 300 10">
      <line
        x1="0"
        y1="0"
        x2="300"
        y2="0"
        stroke="white"
        strokeWidth="0.5"
      />
      {[...numberRange(1, 100)].map((i) => (
        <g key={i}>
          <line
            x1={i * 3 - 1.5}
            y1={0}
            x2={i * 3 - 1.5}
            y2={i % 10 == 0 ? 6 : 4}
            stroke="white"
            strokeWidth="0.5"
          />
          {(i % 10 == 0 || i === 1) && (
            <text
              x={textOffset(i)}
              y={10}
              textLength={9}
              fill="white"
              fontSize="4"
              fontVariant="small-caps"
            >
              {currentCentury + i}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}