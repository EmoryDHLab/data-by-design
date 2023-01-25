import {
  getEventXFromIndex,
  getEventYFromIndex,
  POLYGONS,
} from "~/components/peabody/peabodyUtils";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";
import type { Dispatch, SetStateAction } from "react";
import { useContext, useEffect, useRef, useState  } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";

interface Props {
  // Index in total peabody square, so 0..99
  absoluteIndex: number;
  // Index in year square, so 0..8
  index: number;
  highlightedElement: HighlightedElement | undefined;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  eventSquareColors: string[] | null;
  year: number;
}

export default function QuizEventSquare({
  absoluteIndex,
  index,
  highlightedElement,
  setHighlightedElement,
  eventSquareColors,
  year,
}: Props) {
  const [opacity, setOpacity] = useState(0);

  const {
    clearSquares,
    currentEvent,
    setCurrentEvent,
    fillAllSquares,
    currentCenturyEvents,
    solved,
    setSolved,
  } = useContext(QuizContext);

  const squareEvent = currentCenturyEvents.filter(e => e.year === year).find(e => e.squares.includes(index + 1) || e.squares === "full");

  const eventColors = useRef([]);

  eventColors.current = squareEvent?.actors.map(actor => eventData.actorColors[actor]);

  const polygons = [];

  if (squareEvent?.actors?.length > 1) {
    if (squareEvent?.squares === "full") {
      switch (index) {
        case 0:
        case 1:
        case 3:
          polygons.push(...POLYGONS[0]);
          eventColors.current = [eventData.actorColors[squareEvent.actors[0]]];
          break;
        case 5:
        case 7:
        case 8:
          polygons.push(...POLYGONS[0]);
          eventColors.current = [eventData.actorColors[squareEvent.actors[1]]];
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

  useEffect(() => {
    setOpacity(0);
  }, [setOpacity, clearSquares]);

  useEffect(() => {
    if (currentEvent?.year === year && (currentEvent?.squares === "full" || currentEvent?.squares?.length === 9 || currentEvent?.squares.includes( index + 1))) setOpacity(1);
  }, [currentEvent, setOpacity]);

  useEffect(() => {
    if (fillAllSquares) setOpacity(1);
  }, [setOpacity, fillAllSquares]);

  useEffect(() => {
    setCurrentEvent(squareEvent);
    if (squareEvent) setSolved([...solved, squareEvent]);
  }, [opacity, setCurrentEvent]);

  return (
    <svg
      viewBox="0 0 30 30"
      width="30"
      height="30"
      x={getEventXFromIndex(index)}
      y={getEventYFromIndex(index)}
      onClick={() => setOpacity(1)}
      // onMouseEnter={mouseEnter}
      // onMouseLeave={mouseLeave}
    >
      <rect
        stroke="#b3b3b3"
        strokeWidth={0.5}
        fillOpacity={opacity}
        fill="#e5e7eb"
        width="30"
        height="30"
      ></rect>
      {polygons.map((p, i) => {
        return (
          <polygon
            key={i}
            className={`transition-opacity duration-700`}
            stroke="gold"
            strokeWidth={0.5}
            points={p}
            fill={eventColors.current[i]}
            fillOpacity={opacity}
          />
        );
      })}
    </svg>
  );
}
