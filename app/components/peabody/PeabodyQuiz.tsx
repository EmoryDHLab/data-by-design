import { createContext, useEffect, useRef, useState } from "react";
import QuizConclusion from "./quiz/QuizConclusion";
import QuizEventCategories from "./quiz/QuizEventCategories";
import QuizFeedback from "./quiz/QuizFeedback";
import QuizInstructions from "./quiz/QuizInstructions";
import QuizIntro from "./quiz/QuizIntro";
import QuizNav from "./quiz/QuizNav";
import QuizSelectActors from "./quiz/QuizSelectActors";
import QuizSquare from "./quiz/QuizSquare";
import { quizSteps } from "./quiz/quizSteps";
import eventData from "~/data/peabody/eventData.json";
import type { QuizStep } from "~/types/peabody";
import QuizFinal from "./quiz/QuizFinal";

export const QuizContext = createContext({
  clearSquares: 0,
  currentCentury: 1500,
  currentStep: undefined
});


export default function PeabodyQuiz() {
  const [currentStep, setCurrentStep] = useState<QuizStep>(quizSteps[0]);
  const [currentStepCount, setCurrentStepCount] = useState<number>(0);
  const [selectedCategories, setSelectedCategories] = useState<array>([]);
  const [selectedYears, setSelectedYears] = useState<array>([]);
  const [focusedCategory, setFocusedCategory] = useState<number|undefined>(undefined);
  const [feedback, setFeedback] = useState<object>({});
  const quizRef = useRef();
  const endRef = useRef();

  useEffect(() => {
    if (currentStepCount < 9) quizRef.current.scrollIntoView();
  }, [currentStepCount]);

  useEffect(() => {
    setSelectedCategories([]);
    setSelectedYears([]);
  }, [setSelectedCategories, setSelectedYears, currentStepCount]);

  useEffect(() => {
    if (selectedYears.length >= 3 && currentStepCount === 2) {
      setFeedback({
        message: "1644, the Powhatan attacked Virginia in 1644.",
        correct: false
      });

      setCurrentStepCount(currentStepCount => currentStepCount + 1);
      setSelectedYears([]);
    }
  }, [setCurrentStepCount, selectedYears, setSelectedYears, currentStepCount]);

  useEffect(() => {
    if (selectedCategories.length >= 3) {
      setFeedback({
        message: `${currentStep.stepEvent.event.replace(/ \[.*\]/, '')} was categorized as ${eventData.eventTypes[currentStep.stepEvent.squares[0] - 1]}`,
        correct: false
      });
      setCurrentStepCount(currentStepCount => currentStepCount + 1);
    }

  }, [selectedCategories, currentStep, setFeedback]);

  useEffect(() => {
    setCurrentStep(quizSteps[currentStepCount]);
    setSelectedCategories([])
    if (currentStepCount === 9) endRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [currentStepCount, setCurrentStep, setSelectedCategories]);

  const handleYearClick = (year) => {
    if (year === 1644 && currentStepCount === 2) {
      setCurrentStepCount(currentStepCount => currentStepCount + 1);
      setSelectedYears([]);
      setFeedback({
        message: `YES it was 1644. Now select how Peabody would categorize ${quizSteps[2].stepEvent.event}`,
        correct: true
      });
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  }

  // Called when an event square or category is selected
  const handleCategoryClick = (selected) => {
    if (currentStepCount === 3 && selected == 0) {
      setCurrentStepCount(4);
      setFeedback({
        message: "Peabody identified other events that took place in the year.",
        correct: true
      });
    } else if (currentStepCount === 4 && selected == 1) {
      setCurrentStepCount(5);
      setFeedback({
        message: "The third event that Peabody identified taking place later that year is...",
        correct: true
      });
    } else if (currentStepCount === 5 && selected == 2) {
      setCurrentStepCount(6);
      setFeedback({
        message: "One more...",
        correct: true
      });
    } else if (currentStepCount === 6 && selected == 5) {
      setCurrentStepCount(7);
      setFeedback({
        message: "All done!",
        correct: true
      });
    } else if (!currentStep.solvedEvents.includes(selected)) {
        setSelectedCategories([selected, ...selectedCategories])

    }
  };

  return (
    <QuizContext.Provider value={{
      currentStep,
      currentStepCount,
      setCurrentStepCount,
      focusedCategory,
      setFocusedCategory,
      handleCategoryClick,
      selectedCategories,
      setSelectedCategories,
      selectedYears,
      setSelectedYears,
      handleYearClick,
      feedback,
      setFeedback
    }}>
      <section className="bg-black w-full h-[400vh]">
        <svg ref={quizRef} viewBox="0 0 300 200" className="h-screen m-auto w-11/12 sticky top-0">
          {currentStepCount <= 1 &&
            <QuizIntro className={`transition-all duration-1000 ${currentStepCount > 0 ? "-translate-x-full" : ""}`} />
          }

          {currentStepCount > 0 &&
            <QuizConclusion className={`transition-opacity duration-1000 ${currentStepCount === 8 ? "opacity-100 delay-300" : "opacity-0"}`} />
          }

          <QuizFinal />

          <QuizFeedback />

          <g className={`bg-white scale-${currentStepCount >= 2 ? 100 : 0} transition-all duration-1000 origin-bottom-right`}>
            <QuizSquare />
          </g>

         <g className={`${currentStepCount === 0 ? "hidden translate-x-full" : ""} ${currentStepCount >= 2 && currentStepCount < 8 ? "-translate-x-8 translate-y-2 scale-75 " : ""} ${currentStepCount >= 7 ? "-translate-x-full" : ""} ${currentStepCount === 8 ? "hidden" : ""} transition-all duration-1000`}>
            <text
              x={60}
              y={41}
              fontSize={6} fill="white"
              className={`opacity`}
            >
              EVENT {Math.min(currentStep.solvedEvents.length + 1, 4)} of 4
            </text>
            <text x={60} y={55} fontSize={12} fill="white" fontFamily="VTC Du Bois, serif">
              {currentStep.stepEvent.event.replace(/ \[.*\]/, '')}
            </text>

            <g className={` transition-all duration-700 delay-100`}>
              <QuizSelectActors />
              <QuizEventCategories />
            </g>
          </g>

          <QuizInstructions />

          <QuizNav />

          <text x={280} y={215} fill="white" fontSize={3}>{currentStepCount} of 9</text>
        </svg>
      </section>
      <section ref={endRef}>&nbsp;</section>
    </QuizContext.Provider>
  );
}
