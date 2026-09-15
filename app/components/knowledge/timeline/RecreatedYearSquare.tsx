import { useContext, useMemo } from "react";
import TimelineContext from "./TimelineContext";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/knowledge/peabodyUtils";
import RecreatedEventSquare from "./RecreatedEventSquare";
import { numberRange } from "~/utils";

interface Props {
  index: number;
  year: number;
}

export default function RecreatedYearSquare({ index, year }: Props) {
  const { currentCenturyEvents } = useContext(TimelineContext);

  const yearEvents = useMemo(
    () => currentCenturyEvents.filter((event) => event?.year === year),
    [currentCenturyEvents, year],
  );

  const isFull = useMemo(() => {
    const squares = yearEvents.flatMap((event) => event?.squares);
    return Boolean(squares.length === 9 || squares.includes("full"));
  }, [yearEvents]);

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      <rect className="fill-knowledgeChartBackground" width="90" height="90" />
      {yearEvents.length > 0 &&
        [...numberRange(0, 8)].map((eventIndex) => {
          const absoluteIndex = index * 9 + eventIndex;
          return (
            <RecreatedEventSquare
              key={eventIndex}
              index={eventIndex}
              year={year}
              absoluteIndex={absoluteIndex}
              yearEvents={yearEvents}
              isFull={isFull}
            />
          );
        })}
    </svg>
  );
}
