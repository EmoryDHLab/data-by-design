import { createContext, useEffect, useState } from "react";
import QuizPeabodySquare from "~/components/peabody/quiz/QuizPeabodySquare";
import eventData from "~/data/peabody/eventData.json";
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
  }, [currentEvent, currentCenturyEvents, setPrevious, setNext]);

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
      <div className="hidden md:grid grid grid-cols-1 md:grid-cols-2 bg-black gap-x-0 md:gap-x-32 md:gap-y-12 text-white text-center w-full p-6">
        <div className="h-auto grid grid-cols-1">
          <QuizKey />
        </div>
        <div className="h-auto grid grid-cols-7 gap-y-2">
          {centuries.map((century, index) => {
            return (
              <svg viewBox="0 0 100 32" key={`button-${index}`} className="w-full">
                <FancyButton outlineColor={currentCentury === century ? "gold" : "white" } action={() => setCurrentCentury(century)}>
                  {century}s
                </FancyButton>
              </svg>
            )
          })}
          <svg viewBox="0 0 100 32" className="text-center w-full">
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
              <tspan x={50} fontSize={16} dy={12.75} className={"font-icons"}>e</tspan>
              <tspan x={50} fontSize={8} dy={12.75}>RESET</tspan>
            </text>
          </svg>

          <svg viewBox="0 0 100 32" className="text-center w-full">
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
              <tspan x={50} fontSize={16} dy={12.75} className={"font-icons"}>d</tspan>
              <tspan x={50} fontSize={8} dy={12.75}>Complete</tspan>
            </text>
          </svg>

          <svg viewBox="0 0 100 32" className="text-center w-full">
            <text
              type="button"
              x={0}
              y={0}
              fill="white"
              role="button"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              <tspan x={50} fontSize={16} dy={12.75} className={"font-icons"}>f</tspan>
              {/* <tspan x={50} fontSize={8} dy={12.75}>xxx</tspan> */}
            </text>
          </svg>

          <svg viewBox="0 0 50 50" className="text-center w-1/2">
            <g>
              <text
                onClick={() => setCurrentEvent(previous)}
                type="button"
                x={0}
                y={25}
                fill="white"
                role={previous ? "button" : ""}
                className={"font-icons"}
                fontSize={25}
              >
                c
              </text>
            </g>
          </svg>

          <svg viewBox="0 0 100 12" className="text-center col-span-5 w-full">
            <g>
              <text
                x={50}
                y={6}
                fill="white"
                fontSize={4}
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {currentEvent?.year ? `${currentEvent.year}:` : ""} {currentEvent?.event ?? "Some instructions?"}
              </text>
            </g>
          </svg>

          <svg viewBox="0 0 50 50" className="text-center w-1/2">
            <g>
              <text
                onClick={() => setCurrentEvent(next)}
                type="button"
                x={25}
                y={25}
                fill="white"
                role={next ? "button" : ""}
                className={"font-icons"}
                fontSize={25}
              >
                b
              </text>
            </g>
          </svg>

          {/* <svg viewBox="0 0 100 32" className="text-center col-end-7">
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
