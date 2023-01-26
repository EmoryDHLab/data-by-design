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
      <div className="grid grid-cols-2 bg-black gap-x-32 h-[calc(100vh-30px)] text-white text-center w-full py-6">
        <QuizKey />
        <div className="grid grid-cols-7 gap-y-6 grid-rows-3 row-span-1 h-[fit-content]">
          {/* FIRST ROW */}
          {centuries.map((century, index) => {
            return (
              <div key={`button-${index}`} className="my-auto">
                <FancyButton outlineColor={currentCentury === century ? "gold" : "white" } action={() => setCurrentCentury(century)}>
                  {century}s
                </FancyButton>
              </div>
            )
          })}
          <div className="col-span-3 grid grid-cols-3 grid-rows-2">

            <div className="text-center text-2xl">
              <button
                className="items-center text-white"
                onClick={() => setSolved([])}
                style={{fontFamily: "DxD Icons"}}
              >
                e
              </button>
            </div>
            <div className="text-center text-2xl">
              <button
                className="items-center text-white"
                onClick={() => setSolved(currentCenturyEvents)}
                style={{fontFamily: "DxD Icons"}}
              >
                d
              </button>
            </div>
            <div className="text-center text-2xl">
              <button
                className="items-center text-white"
                onClick={() => {}}
                style={{fontFamily: "DxD Icons"}}
              >
                f
              </button>
            </div>
            <div>Reset</div>
            <div>Complete</div>
          </div>

          {/* SECOND ROW */}
          <div className="col-span-1 text-2xl" style={{fontFamily: "DxD Icons"}}>
            <button
              type="button"
              disabled={!previous}
              onClick={() => setCurrentEvent(previous)}
            >
              c
            </button>
          </div>
          <div className="col-span-5 text-2xl">
            {currentEvent?.year ? `${currentEvent.year}:` : ""} {currentEvent?.event ?? "Some instructions?"}
          </div>
          <div className="col-span-1 text-center text-2xl" style={{fontFamily: "DxD Icons"}}>
          <button
              type="button"
              disabled={!next}
              onClick={() => setCurrentEvent(next)}
            >
              b
            </button>
          </div>
          {/* THIRD ROW */}
          <div className="col-span-6"></div>
          <div className="col-span-1">{solved.length}/{currentCenturyEvents.length}</div>
        </div>
        <div className="w-9/12 my-0 mx-auto">
            <svg viewBox="0 0 99 99">
              <image href={`/images/peabody/${currentCentury}s.jpg`} x="-3.5" y="-3.5" height="106" width="105.5"></image>
            </svg>
        </div>
        <div className="w-9/12 my-0 mx-auto">
          <QuizPeabodySquare />
        </div>
      </div>
    </QuizContext.Provider>
  );
}
