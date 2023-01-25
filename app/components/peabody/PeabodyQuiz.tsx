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
// import { numberRange } from "~/utils";
// import QuizEventSquare from "~/components/peabody/quiz/QuizEventSquare";

const centuries = [
  { century: 1500, data: peabody1500SquareColors},
  { century: 1600, data: peabody1600SquareColors},
  { century: 1700, data: peabody1700SquareColors},
  { century: 1800, data: peabody1800SquareColors},
];

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
  const [highlightedElement, setHighlightedElement] = useState<
  HighlightedElement | undefined
  >(undefined);

  const [activeYearData, setActiveYearData] = useState({
    squareColors: peabody1500SquareColors,
    year: 1500,
  });

  const [clearSquares, setClearSquares] = useState(0);
  const [fillAllSquares, setFillAllSquares] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(undefined);
  const [currentCenturyEvents, setCurrentCenturyEvents] = useState(getCenturyEvents(1500));
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    setClearSquares(clearSquares => clearSquares + 1);
  }, [setClearSquares, activeYearData, setFillAllSquares]);

  useEffect(() => {
    setCurrentCenturyEvents(getCenturyEvents(activeYearData.year));
  }, [activeYearData, setCurrentCenturyEvents]);

  useEffect(() => {
    setFillAllSquares(false);
    setCurrentEvent(undefined);
    setSolved([]);
  }, [clearSquares, setFillAllSquares]);

  useEffect(() => {
    if (fillAllSquares) setSolved(currentCenturyEvents);
  }, [fillAllSquares, setSolved]);

  return (
    <QuizContext.Provider value={{
      clearSquares,
      fillAllSquares,
      currentEvent,
      setCurrentEvent,
      currentCentury: activeYearData.year,
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
                <FancyButton
                  action={() =>
                    setActiveYearData({
                      squareColors: century.data,
                      year: century.century
                    })
                  }
                >
                  {century.century}s
                </FancyButton>
              </div>
            )
          })}
          <div className="col-span-3 grid grid-cols-3 grid-rows-2">

            <div className="text-center text-2xl">
              <button
                className="items-center text-white"
                onClick={() => setClearSquares(clearSquares + 1)}
                style={{fontFamily: "DxD Icons"}}
              >
                e
              </button>
            </div>
            <div className="text-center text-2xl">
              <button
                className="items-center text-white"
                onClick={() => setFillAllSquares(true)}
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
          <div className="col-span-1 text-2xl" style={{fontFamily: "DxD Icons"}}>c</div>
          <div className="col-span-5 text-2xl">
            {currentEvent?.year ? `${currentEvent.year}:` : ""} {currentEvent?.event ?? "Some instructions?"}
          </div>
          <div className="col-span-1 text-center" style={{fontFamily: "DxD Icons"}}>b</div>
          {/* THIRD ROW */}
          <div className="col-span-6"></div>
          <div className="col-span-1">{solved.length}/{currentCenturyEvents.length}</div>
        </div>
        <div className="w-9/12 my-0 mx-auto">
            <svg viewBox="0 0 99 99">
              <image href={`/images/peabody/${activeYearData.year}s.jpg`} x="-3.5" y="-3.5" height="106" width="105.5"></image>
            </svg>
        </div>
        <div className="w-9/12 my-0 mx-auto">
          <QuizPeabodySquare
            setHighlightedElement={setHighlightedElement}
            highlightedElement={highlightedElement}
            squareColors={activeYearData.squareColors}
          />
        </div>
      </div>
      {/* <div className="w-full bg-black py-12 h-[calc(100vh-30px)] gird grid-cols-2 text-white">
        <div className="text-white">
          <div className="justify-center grid grid-cols-2 gap-4 pl-16">
            <QuizKey />
            <div>poo</div>
          </div>
          <div className="">
            {centuries.map((century, index) => {
              return (
                <div key={`button-${index}`}>
                  <FancyButton
                    action={() =>
                      setActiveYearData({
                        squareColors: century.data,
                        year: century.century
                      })
                    }
                  >
                    {century.century}
                  </FancyButton>
                </div>
              )
            })}
            <div className="text-center text-3xl">
              <button
                className="items-center text-white"
                onClick={() => setClearSquares(clearSquares + 1)}
                style={{fontFamily: "DxD Icons"}}
                onMouseEnter={() => setOpen(false)}
              >
                e
              </button>
            </div>
            <div className="text-center text-3xl">
              <button
                className="items-center text-white"
                onClick={() => setFillAllSquares(true)}
                style={{fontFamily: "DxD Icons"}}
              >
                d
              </button>
            </div>
            <div className="text-center text-3xl">
              <button
                className="items-center text-white"
                onClick={() => {}}
                style={{fontFamily: "DxD Icons"}}
              >
                f
              </button>
            </div>
            {/* <div className="col-span-1 text-2xl" style={{fontFamily: "DxD Icons"}}>c</div>
            <div className="col-span-5 text-2xl">
              {currentEvent?.year ? `${currentEvent.year}:` : ""} {currentEvent?.event ?? "Some instructions?"}
            </div>
            <div className="col-span-1 text-center" style={{fontFamily: "DxD Icons"}}>b</div>
            <div className="col-span-6"></div>
            <div className="col-span-1">{solved.length}/{currentCenturyEvents.length}</div>
          </div>
        {/* </div>
        <div className="">
          {/* <div className="w-1/2 flex justify-center">
            <div className="w-5/6"> *
            <svg className="w-full" viewBox="0 0 99 99">
              <image href={`/images/peabody/${activeYearData.year}s.jpg`} x="-3.5" y="-3.5" width="105.5" height="106"></image>
            </svg>
            {/* </div>
          </div>
          <div className="">
            {/* <div className="w-5/6">
              <QuizPeabodySquare
                setHighlightedElement={setHighlightedElement}
                highlightedElement={highlightedElement}
                squareColors={activeYearData.squareColors}
              />
            {/* </div>
          </div>
        </div>
      </div> */}
    </QuizContext.Provider>
  );
}
