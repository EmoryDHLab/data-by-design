import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";

// const yearsToLabel = [
//   1601,
//   1605,
//   1606,
//   1610,
//   1641,
//   1645,
//   1646,
//   1651,
//   1655,
//   1656,
//   1660,
//   1691,
//   1695,
//   1696,
//   1700,
// ];

// const fullYears = [1655, 1691]

export default function TutorialYearSquare({ year, index, active, setActive, children, yearEvents }) {

  const { scrollProgress } = useContext(ScrollytellContext);
  const squares = yearEvents.map(yearEvent => yearEvent.squares).flat();
  const full = squares.includes("full") || squares.length === 9;

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
      onMouseEnter={() => setActive(year)}
      onMouseLeave={() => setActive(undefined)}
      onFocus={() => setActive(year)}
      onMouseBlur={() => setActive(undefined)}
    >
      <g>
        <rect fill="white" width="90" height="90" tabIndex={0} className="focus:outline-none focus:ring focus:ring-violet-300" />
        {children}
      </g>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
        className={`font-william text-2xl fill-current pointer-events-none`}
        style={{color: (scrollProgress >= 3.25 && year === 1623) || (scrollProgress >= 4.25 && full) ? "white" : "black"}}
        opacity={active ? 0 : 0.6}
      >
        {year !== 1623 || (year === 1623 && scrollProgress < 2.25) || (year === 1623 && scrollProgress >= 3.25) ? year : ""}
      </text>
    </svg>
  )
}