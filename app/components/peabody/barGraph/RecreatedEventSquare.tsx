import {
  getEventXFromIndex,
  getEventYFromIndex,
  POLYGONS,
  strokeDasharray,
} from "~/components/peabody/peabodyUtils";
import { useContext, useEffect, useRef, useState  } from "react";
import BarGraphContext from "./BarGraphContext";
import eventData from "~/data/peabody/eventData.json";
import type { PeabodyEvent, PolygonTransform } from "~/types/peabody";

interface Props {
  // Index in total peabody square, so 0..99
  absoluteIndex?: number;
  // Index in year square, so 0..8
  index: number;
  year: number;
  yearEvents: Array<PeabodyEvent> | undefined;
  isFull: boolean;
  isVertical?: boolean;
}

export default function RecreatedEventSquare({
  absoluteIndex,
  index,
  year,
  yearEvents,
  isFull,
  isVertical=false,
}: Props) {

  const {
    activeEvent,
    setActiveEvent,
  } = useContext(BarGraphContext);

  const [squareEvent, setSquareEvent] = useState<PeabodyEvent | undefined>(undefined);
  const [strokeClass, setStrokeClass] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<boolean>(false);
  const [eventPolygons, setEventPolygons] = useState<Array<string>>([]);
  const eventColors = useRef<Array<string>>([]);
  const polygonTransform = useRef<PolygonTransform>({});

  useEffect(() => {
    setSquareEvent(
      yearEvents?.find(
        event => (event?.squares as Array<number>).includes(index + 1) || event?.squares === "full"
      )
    );
  }, [setSquareEvent, yearEvents, index]);

  useEffect(() => {
    if (isFull) setStrokeClass(strokeDasharray(index, isVertical));
  }, [isFull, setStrokeClass, index, isVertical]);

  useEffect(() => {
    eventColors.current = squareEvent?.actors.map(actor => (eventData.actorColors as {[key: string]: string})[actor]) || [];

    polygonTransform.current = squareEvent?.transform
                                ? {
                                    transform: `rotate(${squareEvent.transform[0]}deg)`,
                                    transformOrigin: squareEvent.transform[1]
                                  }
                                : {};

    const polygons = [];

    if (squareEvent?.actors && squareEvent.actors.length > 1) {
      if (squareEvent?.squares === "full") {
        switch (index) {
          case 0:
          case 1:
          case 3:
            polygons.push(...POLYGONS[0]);
            eventColors.current = [(eventData.actorColors as {[key: string]: string})[squareEvent.actors[0]]];
            break;
          case 5:
          case 7:
          case 8:
            polygons.push(...POLYGONS[0]);
            eventColors.current = [(eventData.actorColors as {[key: string]: string})[squareEvent.actors[1]]];
            break;
          default:
            polygons.push(...POLYGONS[squareEvent?.actors.length - 1]);
        }
      } else {
        polygons.push(...POLYGONS[squareEvent?.actors.length - 1]);
      }
    } else if (squareEvent) {
      polygons.push(...POLYGONS[0])
    }

    setEventPolygons(polygons);
  }, [squareEvent, index, setEventPolygons]);

  useEffect(() => {
    setActive(
      activeEvent?.event === squareEvent
      || (isFull && activeEvent?.event?.year === year)
    );
  }, [activeEvent, year, setActive, squareEvent, isFull]);

  if (squareEvent) {
    return (
      <svg
        viewBox="0 0 30 30"
        width={30}
        height={30}
        x={getEventXFromIndex(index)}
        y={getEventYFromIndex(index)}
        className="w-full h-auto"
        onMouseEnter={() => setActiveEvent({ type: index, event: squareEvent, absoluteIndex })}
        onMouseLeave={() => setActiveEvent(undefined)}
      >
        {eventPolygons.map((p, i) => {
          return (
            <polygon
              key={i}
              points={p}
              fill={eventColors.current[i] ?? ""}
              stroke={eventColors.current[i] ?? ""}
              strokeWidth={0.5}
              style={polygonTransform.current}
            />
            );
          })}
          <rect
            stroke={active ? "gold" : "#b3b3b3"}
            strokeWidth={active ? 5 : 0}
            width={30}
            height={30}
            fillOpacity={0}
            className={strokeClass}
          ></rect>
      </svg>
    );
  }

  return <></>
}
