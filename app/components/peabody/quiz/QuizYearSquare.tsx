import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import QuizEventSquare from "./QuizEventSquare";
import { getYearXFromIndex, getYearYFromIndex } from "~/components/peabody/peabodyUtils";
import { numberRange } from "~/utils";
import { getCenturyEvents } from "../peabodyUtils";

const YEAR_WIDTH = 11.6;
const width = YEAR_WIDTH - YEAR_WIDTH / 48;
const height = YEAR_WIDTH - YEAR_WIDTH / 48;

const quizYears = [1601, 1606, 1641, 1650, 1651];

const centuryEvents = getCenturyEvents(1600);

interface Props {
  index: number;
  year: number;
}

export default function QuizYearSquare({
  index,
  year
}: Props) {
  const [interactiveOptions, setInteractiveOptions] = useState<object>({});
  const x = getYearXFromIndex(index, YEAR_WIDTH) + 165;
  const y = getYearYFromIndex(index, YEAR_WIDTH) + 25;
  const {
    currentStepCount,
    selectedYears,
    handleYearClick
  } = useContext(QuizContext);

  const yearEvents = centuryEvents.filter(event => event.year == year);

  useEffect(() => {
    if (currentStepCount === 2 && !selectedYears.includes(year)) {
      setInteractiveOptions({
        role: "button",
        tabIndex: 0,
        onClick: () => handleYearClick(year),
        onKeyUp: ({ key }) => { if (key === "Enter") handleYearClick(year); }
      });
    } else {
      setInteractiveOptions({});
    }
  }, [setInteractiveOptions, currentStepCount, handleYearClick, year, selectedYears]);

  return (
    <svg
      viewBox="0 0 90 90"
      width={width}
      height={height}
      x={x}
      y={y}
      className={selectedYears.includes(year) && currentStepCount === 2 ? "cursor-not-allowed" : ""}
      {...interactiveOptions}
    >
      <rect width={90} height={90} className="fill-peabodyChartBackground" />
      <line x1={30} x2={30} y1={0} y2={90} className="stroke-gray-400" strokeWidth={2} strokeOpacity={0.25} />
      <line x1={60} x2={60} y1={0} y2={90} className="stroke-gray-400" strokeWidth={2} strokeOpacity={0.25} />
      <line x1={0} x2={90} y1={30} y2={30} className="stroke-gray-400" strokeWidth={2} strokeOpacity={0.25} />
      <line x1={0} x2={90} y1={60} y2={60} className="stroke-gray-400" strokeWidth={2} strokeOpacity={0.25} />

      {(
        currentStepCount < 3 ||
        (currentStepCount >= 3 && currentStepCount < 8 && year !== 1644) ||
        (currentStepCount >= 8 && quizYears.includes(year))
      ) &&
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-william text-2xl fill-current pointer-events-none"
          color="#3c6464"
          fontSize={3}
        >
          {year}
        </text>
      }

      {(selectedYears.includes(year) && currentStepCount <= 2) &&
        <>
          <line x1={0} x2={90} y1={0} y2={90} className="stroke-red-400" strokeWidth={2}/>
          <line x1={90} x2={0} y1={0} y2={90} className="stroke-red-400" strokeWidth={2}/>
        </>
      }

      {[...numberRange(0, 8)].map((eventIndex) => {
        const absoluteIndex = index * 9 + eventIndex;
        return (
          <QuizEventSquare
            key={`quiz${absoluteIndex}`}
            index={eventIndex}
            year={year}
            absoluteIndex={absoluteIndex}
            yearEvents={yearEvents}
          />
        )
      })}
    </svg>
  );
}
