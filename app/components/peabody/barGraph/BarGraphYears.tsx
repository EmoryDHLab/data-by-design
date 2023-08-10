import { useContext, useEffect, useState } from "react";
import BarGraphContext from "./BarGraphContext";
import RecreatedEventSquare from "./RecreatedEventSquare";
import { numberRange } from "~/utils";
import type { PeabodyEvent } from "~/types/peabody";

interface Props {
  year: number;
}

export default function BarGraphYears({ year }: Props) {
  const { currentCenturyEvents } = useContext(BarGraphContext);
  const [yearEvents, setYearEvents] = useState<Array<PeabodyEvent>>(currentCenturyEvents.filter(event => event?.year === year));
  const [isFull, setIsFull] = useState<boolean>(false);

  useEffect(() => {
    setYearEvents(currentCenturyEvents.filter(event => event?.year === year));
  }, [setYearEvents, currentCenturyEvents, year]);

  useEffect(() => {
    const squares = yearEvents?.flatMap(event => event?.squares);
    setIsFull(Boolean(squares?.length === 9 || squares?.includes("full")));
  }, [setIsFull, yearEvents]);

  return (
    <div className="w-6 h-full flex flex-col-reverse border border-transparent">
      {yearEvents?.length > 0 &&
        <>
          {[...numberRange(0, 8)].map((eventIndex) => {
            return (
              <RecreatedEventSquare
                key={eventIndex}
                year={year}
                index={eventIndex}
                yearEvents={yearEvents}
                isFull={isFull}
                isVertical={true}
              />
            )
          })}
        </>
      }
    </div>
  )
}