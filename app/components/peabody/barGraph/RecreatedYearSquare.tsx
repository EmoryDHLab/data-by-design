import { useContext, useEffect, useState } from "react";
import BarGraphContext from "./BarGraphContext";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";
import RecreatedEventSquare from "./RecreatedEventSquare";
import { numberRange } from "~/utils";
import type { PeabodyEvent } from "~/types/peabody";

interface Props {
  index: number;
  year: number;
}

export default function RecreatedYearSquare({
  index,
  year,
}: Props) {
  const { currentCenturyEvents } = useContext(BarGraphContext);
  const [yearEvents, setYearEvents] = useState<Array<PeabodyEvent>>([]);
  const [isFull, setIsFull] = useState<boolean>(false);

  useEffect(() => {
    setYearEvents(currentCenturyEvents.filter(event => event?.year === year));
  }, [setYearEvents, currentCenturyEvents, year]);

  useEffect(() => {
    const squares = yearEvents?.flatMap(event => event?.squares);
    setIsFull(Boolean(squares?.length === 9 || squares?.includes("full")));
  }, [setIsFull, yearEvents]);

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      <rect className="fill-peabodyChartBackground" width="90" height="90" />
      {yearEvents?.length > 0 &&
        <>
          {[...numberRange(0, 8)].map((eventIndex) => {
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
        </>
      }
    </svg>
  );
}
