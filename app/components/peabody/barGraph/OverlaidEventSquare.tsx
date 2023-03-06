import { useContext, useEffect, useState  } from "react";
import BarGraphContext from "./BarGraphContext";
import { getEventXFromIndex, getEventYFromIndex, strokeDasharray } from "~/components/peabody/peabodyUtils";

interface Props {
  absoluteIndex: number;
  index: number;
  year: number;
  yearEvents: object | undefined;
  isFull: boolean;
}

export default function OverlaidEventSquare({
  absoluteIndex,
  index,
  year,
  yearEvents,
  isFull,
}: Props) {
  const {
    activeEvent,
    setActiveEvent,
  } = useContext(BarGraphContext);

  const [squareEvent, setSquareEvent] = useState<object | undefined>(undefined);
  const [strokeClass, setStrokeClass] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setSquareEvent(
      yearEvents?.find(
        event => event.squares.includes(index + 1) || event.squares === "full"
      )
    );
  }, [setSquareEvent, yearEvents, index]);

  useEffect(() => {
    if (isFull) setStrokeClass(strokeDasharray(index));
  }, [isFull, setStrokeClass, index, activeEvent, year]);

  useEffect(() => {
    setActive(
      activeEvent?.event === squareEvent
      || (isFull && activeEvent?.event.year === year)
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
          onMouseEnter={() => setActiveEvent({ type: index, event: squareEvent, absoluteIndex })}
          onMouseLeave={() => setActiveEvent(undefined)}
          stroke={active ? "gold" : "#b3b3b3"}
          strokeWidth={active ? 5 : 0}
          fillOpacity={0}
          width={30}
          height={30}
          className={strokeClass}
        />
      </svg>
    );
  }

  return <></>
}
