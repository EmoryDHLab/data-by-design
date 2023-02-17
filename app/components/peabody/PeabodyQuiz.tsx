import { createContext, useEffect, useState } from "react";
import QuizPeabodySquare from "~/components/peabody/quiz/QuizPeabodySquare";
import peabody1500SquareColors from "~/data/peabody/1500SquareColors.json";
import peabody1600SquareColors from "~/data/peabody/1600SquareColors.json";
import peabody1700SquareColors from "~/data/peabody/1700SquareColors.json";
import peabody1800SquareColors from "~/data/peabody/1800SquareColors.json";
import eventData from "~/data/peabody/eventData.json";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";
import QuizKey from "./quiz/QuizKey";
import FancyButton from "../FancyButton";

const centuries = [ 1500, 1600, 1700, 1800, ];

export const QuizContext = createContext({
  clearSquares: 0,
  currentCentury: 1500,
});

const getCenturyEvents = ((century) => {
  return Object.keys(eventData.events).map((year) => {
    if (year >= century + 1 && year <= century + 100) {
        return eventData.events[year].flat();
    }
  }).filter(Boolean).flat();
})

export default function PeabodyQuiz() {
  const [currentCentury, setCurrentCentury] = useState(centuries[0]);
  const [currentEvent, setCurrentEvent] = useState(undefined);
  const [hoveredEvent, setHoveredEvent] = useState(undefined);
  const [currentCenturyEvents, setCurrentCenturyEvents] = useState(getCenturyEvents(centuries[0]));
  const [solved, setSolved] = useState([]);
  const [previous, setPrevious] = useState(undefined);
  const [next, setNext] = useState(undefined);

  useEffect(() => {
    setSolved([]);
    setCurrentCenturyEvents(getCenturyEvents(currentCentury));
  }, [currentCentury, setCurrentCenturyEvents, setSolved]);

  useEffect(() => {
     setCurrentEvent(solved.length > 0 ?solved[solved.length - 1] : undefined);
  }, [solved]);

  useEffect(() => {
    if (!currentCenturyEvents) return;
    const currentIndex = currentCenturyEvents.indexOf(currentEvent)
    setPrevious(currentCenturyEvents[currentIndex - 1]);
    setNext(currentCenturyEvents[currentIndex + 1]);
  }, [currentEvent, setPrevious, setNext]);

  return (
    <QuizContext.Provider value={{
      currentEvent,
      setCurrentEvent,
      hoveredEvent,
      setHoveredEvent,
      currentCentury,
      currentCenturyEvents,
      solved,
      setSolved,
    }}>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black gap-x-0 md:gap-x-32 md:gap-y-12 h-[calc(100vh-30px)] text-white text-center w-full p-6">
        <div className="w-full md:w-9/12 my-0 mx-auto">
          <QuizKey />
        </div>
        <div className="grid grid-cols-7 gap-y-2 md:gap-y-6">
          {centuries.map((century, index) => {
            return (
              <svg viewBox="0 0 100 32" key={`button-${index}`} className="my-auto">
                <FancyButton outlineColor={currentCentury === century ? "gold" : "white" } action={() => setCurrentCentury(century)}>
                  {century}s
                </FancyButton>
              </svg>
            )
          })}
          <svg viewBox="0 0 100 32" className="my-auto text-center">
            <text
              onClick={() => setSolved([])}
              type="button"
              x={0}
              y={0}
              fill="white"
              role="button"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              <tspan x={50} fontSize={16} dy={12.75} fontFamily="DxD Icons">e</tspan>
              <tspan x={50} fontSize={8} dy={12.75}>RESET</tspan>
            </text>
          </svg>

          <svg viewBox="0 0 100 32" className="my-auto text-center">
            <text
              onClick={() => setSolved(currentCenturyEvents)}
              type="button"
              x={0}
              y={0}
              fill="white"
              role="button"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              <tspan x={50} fontSize={16} dy={12.75} fontFamily="DxD Icons">d</tspan>
              <tspan x={50} fontSize={8} dy={12.75}>Complete</tspan>
            </text>
          </svg>

          <svg viewBox="0 0 100 32" className="my-auto text-center">
            <text
              type="button"
              x={0}
              y={0}
              fill="white"
              role="button"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              <tspan x={50} fontSize={16} dy={12.75} fontFamily="DxD Icons">f</tspan>
              {/* <tspan x={50} fontSize={8} dy={12.75}>xxx</tspan> */}
            </text>
          </svg>

          <svg viewBox="0 0 100 32" className="my-auto text-center">
            <g>
              <text
                onClick={() => setCurrentEvent(previous)}
                type="button"
                x={0}
                y={16}
                fill="white"
                role={previous ? "button" : ""}
                fontFamily="DxD Icons"
                fontSize={24}
              >
                c
              </text>
            </g>
          </svg>

          <svg viewBox="0 0 100 32" className="my-auto text-center col-span-5">
            <g>
              <text
                x={50}
                y={16}
                fill="white"
                fontSize={4}
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {currentEvent?.year ? `${currentEvent.year}:` : ""} {currentEvent?.event ?? "Some instructions?"}
              </text>
            </g>
          </svg>

          <svg viewBox="0 0 100 32" className="my-auto text-center">
            <g>
              <text
                onClick={() => setCurrentEvent(next)}
                type="button"
                x={50}
                y={16}
                fill="white"
                role={next ? "button" : ""}
                fontFamily="DxD Icons"
                fontSize={24}
              >
                b
              </text>
            </g>
          </svg>

          {/* <svg viewBox="0 0 100 32" className="my-auto text-center col-end-7">
            <g>
              <text
                x={50}
                y={16}
                fill="white"
                fontSize={24}
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {solved.length}/{currentCenturyEvents.length}
              </text>
            </g>
          </svg> */}

        </div>
        <div className="hidden md:block md:w-9/12 my-0 mx-auto">
            <svg viewBox="0 0 99 99">
              <image href={`/images/peabody/${currentCentury}s.jpg`} x="-3.5" y="-3.5" height="106" width="105.5"></image>
            </svg>
        </div>
        <div className="w-full col-span-full md:col-span-1 md:w-9/12 my-0 mx-auto">
          <QuizPeabodySquare />
        </div>
      </div>
    </QuizContext.Provider>
  );
}
