import { useContext, useMemo } from "react";
import TimelineContext from "./TimelineContext";
import { numberRange } from "~/utils";
import OverlaidEventSquare from "./OverlaidEventSquare";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/knowledge/peabodyUtils";

interface Props {
  index: number;
  year: number;
}

export default function OverlaidYearSquare({ index, year }: Props) {
  const { currentCenturyEvents } = useContext(TimelineContext);

  const yearEvents = useMemo(
    () => currentCenturyEvents.filter((event) => event?.year === year),
    [currentCenturyEvents, year],
  );

  const isFull = useMemo(() => {
    const someSquares = yearEvents.flatMap((event) => event?.squares);
    return someSquares.length === 9 || someSquares.includes("full");
  }, [yearEvents]);

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      {yearEvents?.length > 0 && (
        <>
          {[...numberRange(0, 8)].map((eventIndex) => {
            const absoluteIndex = index * 9 + eventIndex;
            return (
              <OverlaidEventSquare
                key={eventIndex}
                absoluteIndex={absoluteIndex}
                index={eventIndex}
                year={year}
                yearEvents={yearEvents}
                isFull={isFull}
              />
            );
          })}
        </>
      )}
    </svg>
  );
}
