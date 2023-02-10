import { useContext, useRef, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

import {
  getEventXFromIndex,
  getEventYFromIndex,
  POLYGONS,
} from "~/components/peabody/peabodyUtils";

import Events from "~/data/peabody/1600sEvents.json";

interface Props {
  eventIndex: number;
  active: boolean;
  year: number;
  mouseEnter:  Dispatch<SetStateAction<object>>;
  mouseLeave:  Dispatch<SetStateAction<undefined>>;
  yearEvent: object;
  highlightedElement: object;
  shouldHighlight: boolean;
}

export default function TutorialEventSquare({
  eventIndex,
  active,
  year,
  yearEvent,
  highlightedElement,
  shouldHighlight,
}: Props) {
  const eventColors = useRef<string|undefined>(undefined);
  eventColors.current = yearEvent?.actors.map(actor => Events.actorColors[actor]);

  const { scrollProgress, setHighlightedSquare } = useContext(ScrollytellContext);

  const polygons = [];

  if (yearEvent?.actors.length > 1) {
    if (yearEvent?.squares === "full") {
      switch (eventIndex) {
        case 0:
        case 1:
        case 3:
          polygons.push(...POLYGONS[0]);
          eventColors.current = [Events.actorColors[yearEvent.actors[0]]];
          break;
        case 5:
        case 7:
        case 8:
          polygons.push(...POLYGONS[0]);
          eventColors.current = [Events.actorColors[yearEvent.actors[1]]];
          break;
        default:
          polygons.push(...POLYGONS[yearEvent?.actors.length - 1]);
        }
    } else {
      polygons.push(...POLYGONS[yearEvent?.actors.length - 1]);
    }
  } else if (yearEvent) {
    polygons.push(...POLYGONS[0]);
  }

  // const [isHighlighted, setIsHighlighted] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const [fillColor, setFillColor] = useState("white");

  // useEffect(() => {
  //   setIsHighlighted(highlightedElement?.year === year && highlightedElement.eventType === eventIndex);
  // }, [setIsHighlighted, year, highlightedElement, eventIndex]);

  // useEffect(() => {
  //   setIsVisible(
  //     (scrollProgress >=3 && yearEvent?.squares == "full") ||
  //    scrollProgress >= 4
  //   );
  // }, [setIsVisible, scrollProgress, yearEvent]);

  // useEffect(() => {
  //   if (shouldHighlight && scrollProgress >= 3.25 && scrollProgress < 5) {
  //     switch (eventIndex) {
  //       case 2:
  //         setFillColor("#355c66");
  //         break;
  //       case 4:
  //         setFillColor("#498868");
  //         break;
  //       case 6:
  //         setFillColor("#8c2a22");
  //         break;
  //       default:
  //         setFillColor("white");
  //     }
  //   } else {
  //     setFillColor("white");
  //   }
  // }, [shouldHighlight, setFillColor, eventIndex, scrollProgress]);

  return (
    <>
      <svg
        key={eventIndex}
        viewBox="0 0 30 30"
        width="30"
        height="30"
        x={getEventXFromIndex(eventIndex)}
        y={getEventYFromIndex(eventIndex)}
        onMouseEnter={() => setHighlightedSquare({yearEvent, square: eventIndex + 1})}
        onMouseLeave={() => setHighlightedSquare(undefined)}
      >
        <defs>
          <pattern width="5" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" style={{stroke: 'orange', strokeWidth: 4}}></line>
          </pattern>
        </defs>
        <rect
          stroke="#b3b3b3"
          strokeWidth={0.5}
          // fillOpacity={active ? 1 : 0}
          fillOpacity={1}
          fill="white"
          width={30}
          height={30}
        >
        </rect>
        {polygons.map((p, i) => {
          return (
            <polygon
              key={i}
              className={`transition-opacity duration-700 opacity-${(year === 1623 && scrollProgress >= 3.25) || scrollProgress >= 4.25 ? 100 : 0}`}
              stroke="gold"
              strokeWidth={0}
              points={p}
              fill={eventColors.current[i]}
              fillOpacity={1}
            />
          );
        })}
      </svg>
      <text
        x={getEventXFromIndex(eventIndex) + 10}
        y={getEventYFromIndex(eventIndex) + 22}
        fill="black"
        className="number pointer-events-none"
        opacity={(active && scrollProgress < 5) || (shouldHighlight && scrollProgress >= 2.25 && scrollProgress < 3.25) ? 1 : 0}
      >
        {eventIndex + 1}
      </text>
    </>
  )
}