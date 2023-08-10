import { useContext, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";
import type { ReactNode } from "react";
import type { PeabodyEvent } from "~/types/peabody";

interface Props {
  year: number;
  index: number;
  children: ReactNode;
  yearEvents: Array<PeabodyEvent>;
}

export default function TutorialYearSquare({
  year,
  index,
  children,
  yearEvents,
}: Props) {

  const { scrollProgress } = useContext(ScrollytellContext);
  const squares = yearEvents.map(yearEvent => yearEvent?.squares).flat();
  const full = squares.includes("full") || squares.length === 9;
  const [yearColor, setYearColor] = useState("black");

  useEffect(() => {
    if (full && scrollProgress < 12.25) {
      setYearColor("black");
    }
    if (year === 1607) {
      setYearColor(scrollProgress >= 4.25 && scrollProgress <= 5.25 ? "white" : "black");
    }
    if (year === 1615) {
      setYearColor(scrollProgress >= 2.25 && scrollProgress <= 4.25 ? "transparent" : "black");
    }
    if (year === 1620) {
      setYearColor(scrollProgress >= 5.25 && scrollProgress <= 7.25 ? "white" : "black");
    }
    if (full && scrollProgress >= 12.25) {
      setYearColor("white");
    }
  }, [scrollProgress, setYearColor, year, full]);

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      <g>
        <rect fill="white" width={90} height={90} className="focus:outline-none focus:ring focus:ring-violet-300" />
        {children}
      </g>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
        className={`font-william text-2xl fill-current pointer-events-none`}
        style={{ color: yearColor }}
        opacity={0.6}
      >
        {year}
      </text>
    </svg>
  )
}