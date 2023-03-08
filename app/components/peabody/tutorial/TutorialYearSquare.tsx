import { useContext, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";

export default function TutorialYearSquare({ year, index, active, setActive, children, yearEvents }) {

  const { scrollProgress } = useContext(ScrollytellContext);
  const squares = yearEvents.map(yearEvent => yearEvent.squares).flat();
  const full = squares.includes("full") || squares.length === 9;
  const [yearColor, setYearColor] = useState("black");

  useEffect(() => {
    if (full && scrollProgress >= 5.25) {
      setYearColor("white");
    } else if (full && scrollProgress < 5.25) {
      setYearColor("black");
    }
    if (year === 1607) {
      if (scrollProgress >= 4.25) setYearColor("white");
      if (scrollProgress <= 4.25) setYearColor("black");
    } else if (year === 1615) {
      if (scrollProgress <= 2.25 || scrollProgress >= 4.25) setYearColor("black");
      if (scrollProgress >= 2.25 && scrollProgress <= 4.25) setYearColor("transparent");
    }
  }, [scrollProgress, setYearColor, year, full]);

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
      onBlur={() => setActive(undefined)}
    >
      <g>
        <rect fill="white" width={90} height={90} className="focus:outline-none focus:ring focus:ring-violet-300" />
        {children}
      </g>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
        className={`font-william text-2xl fill-current pointer-events-none`}
        style={{ color: yearColor }}
        opacity={active ? 0 : 0.6}
      >
        {year !== 1607 || (year === 1607 && scrollProgress < 3.25) || (year === 1607 && scrollProgress >= 4.25) || year != 1615 ? year : ""}
      </text>
    </svg>
  )
}