import { createContext, useEffect, useState } from "react";
import eventData from "~/data/peabody/eventData.json";
import SelectActors from "./quiz/SelectActors";
import QuizSquare from "./quiz/QuizSquare";
import QuizEventCategories from "./quiz/QuizEventCategories";

const quizEvents = eventData.events[1644];
const step1Event = quizEvents.find((event) => event.squares.includes(1));
const step2Event = quizEvents.find((event) => event.squares.includes(2));
const step3Event = quizEvents.find((event) => event.squares.includes(3));
const step4Event = quizEvents.find((event) => event.squares.includes(6));

export const QuizContext = createContext({
  clearSquares: 0,
  currentCentury: 1500,
  currentEvent: undefined
});

export default function PeabodyQuiz() {
  const [currentEvent, setCurrentEvent] = useState(step1Event);
  const [stepState, setStepState] = useState<number>(0);
  const [solvedEvents, setSolvedEvents] = useState<array>([]);
  const [selectedCategories, setSelectedCategories] = useState<array>([]);
  const [focusedCategory, setFocusedCategory] = useState<number|undefined>(undefined);

  useEffect(() => {
      setSelectedCategories(solvedEvents);
  }, [stepState, setSelectedCategories, solvedEvents]);

  // Called when an event square or category is selected
  const handleCategoryClick = (selected) => {
    switch (stepState) {
      case 2:
        if (selected > 0) setSelectedCategories(selectedCategories.concat([selected]));
        if (selected === 0) {
          setSolvedEvents(solvedEvents.concat([selected]));
          setStepState(3);
          setCurrentEvent(step2Event);
        }
        break;
      case 3:
        if (selected > 1) setSelectedCategories(selectedCategories.concat([selected]));
        if (selected === 1) {
          setSolvedEvents(solvedEvents.concat([selected]));
          setStepState(4);
          setCurrentEvent(step3Event);
        }
        break;
      case 4:
        if (selected > 2) setSelectedCategories(selectedCategories.concat([selected]));
        if (selected === 2) {
          setSolvedEvents(solvedEvents.concat([selected]));
          setStepState(5);
          setCurrentEvent(step4Event);
        }
        break;
      case 5:
        if (selected === 5) {
          setSolvedEvents(solvedEvents.concat([selected]));
          setStepState(5);
          setCurrentEvent(step4Event);
        } else {
          setSelectedCategories(selectedCategories.concat([selected]));
        }
        break;
      default:
        setSolvedEvents([]);
        setStepState(0);
        setCurrentEvent(step1Event);
        setSelectedCategories([]);
    }
  };

  return (
    <QuizContext.Provider value={{
      currentEvent,
      stepState,
      setStepState,
      focusedCategory,
      setFocusedCategory,
      selectedCategories,
      solvedEvents,
      handleCategoryClick,
    }}>
      <div className="bg-black w-full h-[calc(100vh-48px)]">
        <svg viewBox="0 0 300 200" className="h-full m-auto w-11/12">
          <g className={`${stepState >= 1 ? "-translate-x-12 -translate-y-2 scale-75 " : ""} transition-all duration-1000`}>
            <text
              x={85}
              y={30}
              fontSize={6} fill="white"
            >
              EVENT
            </text>
            <text x={85} y={46} fontSize={12} fill="white" fontFamily="VTC Du Bois, serif">
              {currentEvent.event.replace(/ \[.*\]/, '')}
            </text>

            <text
              x={85}
              y={58}
              fontSize={stepState < 1 ? 6 : 0.0}
              fill="white"
              fontFamily="VTC Du Bois Narrow, serif"
              fontStyle="italic"
              fillOpacity={stepState < 1 ? 1.0 : 0.0}
              className="transition-all duration-1000"
            >
              Select the countries involved
            </text>

            <text
              x={85}
              y={80}
              fontSize={10}
              fill="white"
              fontFamily="VTC Du Bois Narrow, serif"
              fontStyle="italic"
              fillOpacity={stepState >= 2 ? 1.0 : 0.0}
              className="transition-all duration-1000"
            >
              Categorize the the event.
            </text>
            <SelectActors />
            <QuizEventCategories />
          </g>

          <g className={`fill-peabodyOrange scale-${stepState >= 1 ? 100 : 0} transition-all duration-1000 origin-bottom-right`}>
            <text
              x={165}
              y={15}
              fontSize={6}
              fill="white"
              fontFamily="VTC Du Bois Narrow, serif"
              fontStyle="italic"
              fillOpacity={stepState === 1 ? 1.0 : 0.0}
              className="transition-all duration-1000"
            >
              Select the year
            </text>

            <rect
              width={125}
              height={125}
              x={165}
              y={19.5}
              tabIndex={0}
            />
            <QuizSquare />
          </g>
        </svg>
      </div>
    </QuizContext.Provider>
  );
}
