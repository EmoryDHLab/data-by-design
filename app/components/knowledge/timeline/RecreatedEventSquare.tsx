import {
  getEventXFromIndex,
  getEventYFromIndex,
  POLYGONS,
  strokeDasharray,
} from "~/components/knowledge/peabodyUtils";
import { useContext, useMemo } from "react";
import BarGraphContext from "./TimelineContext";
import eventData from "~/data/process/eventData.json";
import type { PeabodyEvent, PolygonTransform } from "~/types/process";

interface Props {
  // Index in total process square, so 0..99
  absoluteIndex?: number;
  // Index in year square, so 0..8
  index: number;
  year: number;
  yearEvents: Array<PeabodyEvent> | undefined;
  isFull: boolean;
  isVertical?: boolean;
}

const RecreatedEventSquare = ({
  absoluteIndex,
  index,
  year,
  yearEvents,
  isFull,
  isVertical = false,
}: Props) => {
  const { activeEvent, setActiveEvent } = useContext(BarGraphContext);

  const squareEvent = useMemo(
    () =>
      yearEvents?.find(
        (event) =>
          (event?.squares as Array<number>).includes(index + 1) ||
          event?.squares === "full",
      ),
    [yearEvents, index],
  );

  const strokeClass = useMemo(
    () => (isFull ? strokeDasharray(index, isVertical) : undefined),
    [isFull, index, isVertical],
  );

  const active = useMemo(
    () =>
      activeEvent?.event === squareEvent ||
      (isFull && activeEvent?.event?.year === year),
    [activeEvent, year, squareEvent, isFull],
  );

  const { eventColors, polygonTransform, eventPolygons } = useMemo(() => {
    let eventColors: Array<string> =
      squareEvent?.actors.map(
        (actor) => (eventData.actorColors as { [key: string]: string })[actor],
      ) || [];

    const polygonTransform: PolygonTransform = squareEvent?.transform
      ? {
          transform: `rotate(${squareEvent.transform[0]}deg)`,
          transformOrigin: squareEvent.transform[1],
        }
      : {};

    const polygons: Array<string> = [];

    if (squareEvent?.actors && squareEvent.actors.length > 1) {
      if (squareEvent?.squares === "full") {
        switch (index) {
          case 0:
          case 1:
          case 3:
            polygons.push(...POLYGONS[0]);
            eventColors = [
              (eventData.actorColors as { [key: string]: string })[
                squareEvent.actors[0]
              ],
            ];
            break;
          case 5:
          case 7:
          case 8:
            polygons.push(...POLYGONS[0]);
            eventColors = [
              (eventData.actorColors as { [key: string]: string })[
                squareEvent.actors[1]
              ],
            ];
            break;
          default:
            polygons.push(...POLYGONS[squareEvent?.actors.length - 1]);
        }
      } else {
        polygons.push(...POLYGONS[squareEvent?.actors.length - 1]);
      }
    } else if (squareEvent) {
      polygons.push(...POLYGONS[0]);
    }

    return { eventColors, polygonTransform, eventPolygons: polygons };
  }, [squareEvent, index]);

  if (squareEvent) {
    return (
      <svg
        viewBox="0 0 30 30"
        width={30}
        height={30}
        x={getEventXFromIndex(index)}
        y={getEventYFromIndex(index)}
        className={`${isVertical ? "w-full h-auto" : ""} cursor-pointer`}
        onMouseEnter={() =>
          setActiveEvent({ type: index, event: squareEvent, absoluteIndex })
        }
        onMouseLeave={() => setActiveEvent(undefined)}
      >
        <defs>
          <pattern
            id="nativeHatch"
            patternUnits="userSpaceOnUse"
            width="4"
            height="8"
            patternTransform="rotate(90 2 2)"
          >
            <rect
              width={30}
              height={30}
              fill={eventData.actorColors.Americas}
            />
            <path d="M -1,2 l 6,0" stroke="white" strokeWidth={3} />
          </pattern>
        </defs>
        {eventPolygons.map((p, i) => {
          return (
            <polygon
              key={i}
              points={p}
              fill={eventColors[i] ?? ""}
              stroke={eventColors[i] ?? ""}
              strokeWidth={0.5}
              style={polygonTransform}
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

  return <></>;
};

export default RecreatedEventSquare;
