import { useContext, useEffect, useState } from "react";
import TimelineContext from "./TimelineContext";
import {
  getEventXFromIndex,
  getEventYFromIndex,
  strokeDasharray,
} from "~/components/knowledge/peabodyUtils";
import type { PeabodyEvent, ActivePeabodyEvent } from "~/types/process";

interface Props {
  absoluteIndex: number;
  index: number;
  year: number;
  yearEvents: Array<PeabodyEvent>;
  isFull: boolean;
}

export default function OverlaidEventSquare({
  absoluteIndex,
  index,
  year,
  yearEvents,
  isFull,
}: Props) {
  const { activeEvent, setActiveEvent } = useContext(TimelineContext);

  const [squareEvent, setSquareEvent] = useState<object | undefined>(undefined);
  const [strokeClass, setStrokeClass] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setSquareEvent(
      yearEvents?.find(
        (event) =>
          (event?.squares as Array<number>).includes(index + 1) ||
          event?.squares === "full"
      )
    );
  }, [setSquareEvent, yearEvents, index]);

  useEffect(() => {
    if (isFull) setStrokeClass(strokeDasharray(index));
  }, [isFull, setStrokeClass, index, activeEvent, year]);

  useEffect(() => {
    setActive(
      activeEvent?.event === squareEvent ||
        (isFull && activeEvent?.event?.year === year)
    );
  }, [activeEvent, year, setActive, squareEvent, isFull]);

  if (squareEvent) {
    return (
      <svg
        width={30}
        height={30}
        x={getEventXFromIndex(index)}
        y={getEventYFromIndex(index)}
        viewBox="0 0 30 30"
      >
        <rect
          onMouseEnter={() =>
            setActiveEvent({
              type: index + 1,
              event: squareEvent,
              absoluteIndex,
            } as ActivePeabodyEvent)
          }
          onMouseLeave={() => setActiveEvent(undefined)}
          stroke={active ? "gold" : "#b3b3b3"}
          strokeWidth={active ? 5 : 0}
          fillOpacity={0}
          width={30}
          height={30}
          className={`cursor-pointer ${strokeClass}`}
        />
      </svg>
    );
  }

  return <></>;
}
