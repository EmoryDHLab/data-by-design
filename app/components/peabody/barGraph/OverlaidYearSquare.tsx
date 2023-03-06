import { useContext, useEffect, useState } from "react";
import BarGraphContext from "./BarGraphContext";
import { numberRange } from "~/utils";
import OverlaidEventSquare from "./OverlaidEventSquare";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";

interface Props {
  index: number;
  year: number;
}

export default function OverlaidYearSquare({ index, year }: Props) {
  const { currentCenturyEvents } = useContext(BarGraphContext);
  const [yearEvents, setYearEvents] = useState(undefined);
  const [isFull, setIsFull] = useState<boolean>(false);

  useEffect(() => {
    setYearEvents(currentCenturyEvents.filter(event => event.year === year));
  }, [setYearEvents, currentCenturyEvents, year]);

  useEffect(() => {
    const squares = yearEvents?.flatMap(event => event.squares);
    setIsFull(squares?.length === 9 || squares?.includes("full"));
  }, [setIsFull, yearEvents]);

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      {yearEvents?.length > 0 &&
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
      }
    </svg>
  );
}
