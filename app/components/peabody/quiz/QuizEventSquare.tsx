import {
  getEventXFromIndex,
  getEventYFromIndex,
  POLYGONS,
} from "~/components/peabody/peabodyUtils";
import { useContext, useEffect, useRef, useState  } from "react";
import { QuizContext } from "./QuizContext";
import eventData from "~/data/peabody/eventData.json";
import type { PeabodyEvent, PeabodySquare, PolygonTransform } from "~/types/peabody";

interface Props {
  // Index in total peabody square, so 0..99
  absoluteIndex: number;
  // Index in year square, so 0..8
  index: number;
  year: number;
  yearEvents: Array<PeabodyEvent>;
  isVertical: boolean;
}

export default function RecreatedEventSquare({
  absoluteIndex,
  index,
  year,
  yearEvents,
  isVertical,
}: Props) {
  const {
    allowOption,
    currentStep,
    currentStepCount,
    focusedCategory,
    handleCategoryClick,
    selectedCategories,
    setFocusedCategory,
  } = useContext(QuizContext);

  const [squareEvent, setSquareEvent] = useState<PeabodyEvent | undefined>(undefined);
  const [eventPolygons, setEventPolygons] = useState<Array<string>>([]);
  const [polygonOpacity, setPolygonOpacity] = useState<number>(0.0);
  const [interactiveOptions, setInteractiveOptions] = useState<object>({});
  const [isOption, setIsOption] = useState<boolean>(allowOption(index));

  const eventColors = useRef<Array<string>>([]);
  const polygonTransform = useRef<PolygonTransform | undefined>(undefined);

  useEffect(() => {
    setIsOption(allowOption(index));
  }, [setIsOption, currentStepCount, selectedCategories, index, allowOption]);

  useEffect(() => {
    if (
      currentStepCount > 2 &&
      currentStepCount < 7 &&
      isOption &&
      year === 1644
    ) {
      setInteractiveOptions({
        role: "button",
        tabIndex: 0,
        onClick: () => handleCategoryClick(index),
        onKeyUp: ({ key }: { key: string }) => { if (key === "Enter") handleCategoryClick(index) },
        onMouseEnter: () => setFocusedCategory((index as PeabodySquare)),
        onMouseLeave: () => setFocusedCategory(undefined),
        onFocus: () => setFocusedCategory((index as PeabodySquare)),
        onBlur: () => setFocusedCategory(undefined),
        className: "focus:outline-none focus:ring-0 cursor-pointer",
      });
    }
    else {
      setInteractiveOptions({});
    }
  }, [setInteractiveOptions, index, allowOption, currentStepCount, year, setFocusedCategory, handleCategoryClick, isOption]);

  useEffect(() => {
    if (
      (
        currentStepCount <= 8 &&
        year === 1644 &&
        currentStep?.solvedEvents.includes((index as PeabodySquare))
      ) ||
      currentStepCount >= 8
    ) {
      setPolygonOpacity(1.0);
    } else {
      setPolygonOpacity(0.0);
    }
  }, [currentStepCount, year, currentStep, setPolygonOpacity, index]);

  useEffect(() => {
    setSquareEvent(
      yearEvents?.find(
        event => (event?.squares as Array<number>).includes(index + 1) || event?.squares === "full"
      )
    );
  }, [setSquareEvent, yearEvents, index]);

  useEffect(() => {
    eventColors.current = squareEvent?.actors.map(actor => (eventData?.actorColors as {[key: string]: string})[actor]) || [];

    polygonTransform.current = squareEvent?.transform
                                ? {
                                    transform: `rotate(${squareEvent.transform[0]}deg)`,
                                    transformOrigin: squareEvent.transform[1]
                                  }
                                : {};

    const polygons = [];

    if (squareEvent?.actors && squareEvent?.actors?.length > 1) {
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

  return (
    <svg
      viewBox="0 0 30 30"
      width={30}
      height={30}
      x={getEventXFromIndex(index)}
      y={getEventYFromIndex(index)}
      className={`w-full h-auto ${isOption ? "" : "cursor-not-allowed"}`}
      {...interactiveOptions}
    >
      {(currentStepCount >= 3 && currentStepCount < 8 && year === 1644) &&
      <>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-william text-lg fill-current pointer-events-none"
          color="#3c6464"
        >
          {index + 1}
        </text>

        {selectedCategories.includes((index as PeabodySquare)) &&
          <>
            <line x1={0} x2={30} y1={0} y2={30} className="stroke-red-400" strokeWidth={3}/>
            <line x1={30} x2={0} y1={0} y2={30} className="stroke-red-400" strokeWidth={3}/>
          </>
        }

        <rect
          stroke={focusedCategory === index ? "gold" : "#b3b3b3"}
          strokeWidth={focusedCategory === index ? 5 : 2}
          width={30}
          height={30}
          fillOpacity={0}
        ></rect>
      </>
      }

      { squareEvent &&
        <>
          {eventPolygons.map((p, i) => {
            return (
              <polygon
                key={i}
                points={p}
                fill={eventColors?.current[i] ?? ""}
                stroke={eventColors?.current[i] ?? ""}
                strokeWidth={0.5}
                strokeOpacity={polygonOpacity}
                style={polygonTransform.current}
                fillOpacity={polygonOpacity}
                className={`transition-all duration-700`}
              />
            );
          })}
        </>
      }
    </svg>
  );
}
