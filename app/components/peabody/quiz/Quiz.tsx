import { useEffect, useRef, useState } from "react";
import QuizConclusion from "./QuizConclusion";
import QuizEventCategoryList from "./QuizEventCategoryList";
import QuizFeedback from "./QuizFeedback";
import QuizInstructions from "./QuizInstructions";
import QuizIntro from "./QuizIntro";
import QuizNav from "./QuizNav";
import QuizSelectActors from "./QuizSelectActors";
import QuizSquare from "./QuizSquare";
import { quizSteps } from "./quizSteps";
import eventData from "~/data/peabody/eventData.json";
import QuizFinal from "./QuizFinal";
import { QuizContext } from "./QuizContext";
import type { QuizStep } from "~/types/peabody";
import QuizSquareMask from "./QuizSquareMask";

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState<QuizStep>(quizSteps[0]);
  const [currentStepCount, setCurrentStepCount] = useState<number>(0);
  const [selectedCategories, setSelectedCategories] = useState<array>([]);
  const [selectedYears, setSelectedYears] = useState<array>([]);
  const [focusedCategory, setFocusedCategory] = useState<number|undefined>(undefined);
  const [feedback, setFeedback] = useState<object>({});
  const quizRef = useRef();
  const endRef = useRef();

  useEffect(() => {
    if (currentStepCount > 0 && currentStepCount < 9) quizRef.current.scrollIntoView({ behavior: "smooth" });
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
        setSelectedCategories([selected, ...selectedCategories]);
    }
  };

  const allowOption = (index: number) => {
    if (currentStepCount > 2 && currentStepCount < 7) {
      if (
        selectedCategories.includes(index) ||
        currentStep.solvedEvents.includes(index)
      ) {
        return false;
      }
    }
    return true;
  };

  return (
    <QuizContext.Provider value={{
      allowOption,
      currentStep,
      currentStepCount,
      setCurrentStepCount,
      focusedCategory,
      setFocusedCategory,
      handleCategoryClick,
      selectedCategories,
      selectedYears,
      handleYearClick,
      feedback,
      setFeedback
    }}>
      <section className="bg-black w-full h-[200vh] hidden md:block">
        <svg ref={quizRef} viewBox="0 0 300 200" className="h-screen m-auto w-11/12 sticky top-0">
          {currentStepCount <= 1 &&
            <QuizIntro className={`transition-all duration-1000 ${currentStepCount > 0 ? "-translate-x-full" : ""}`} />
          }

          {currentStepCount > 0 &&
            <QuizConclusion className={`transition-opacity duration-1000 ${currentStepCount === 8 ? "opacity-100 delay-300" : "opacity-0"}`} />
          }

          <QuizFinal />

          <QuizFeedback />

          <g className={`md:scale-${currentStepCount >= 2 ? 100 : 0} transition-all duration-1000 origin-bottom-right`}>
            <QuizSquare defaultX={165} defaultY={25} />
          </g>

         <g className={`${currentStepCount === 0 ? "hidden translate-x-full" : ""} ${currentStepCount >= 2 && currentStepCount < 8 ? "-translate-x-8 translate-y-2 scale-75 opacity-100" : ""} ${currentStepCount >= 7 ? "-translate-x-full opacity-0" : ""} transition-all duration-1000`}>
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
              {(currentStepCount > 1 && currentStepCount < 9) && (
                <QuizEventCategoryList />
              )}
            </g>
          </g>

          <QuizInstructions />

          <QuizNav />

          <text x={280} y={205} fill="white" fontSize={3}>{currentStepCount} of 9</text>
        </svg>
      </section>

      {/* MOBILE */}
      <section className="bg-black h-[200vh] relative w-full md:hidden">
        <section className={`flex flex-col h-screen sticky top-12 transition-opacity duration-1000 ${currentStepCount == 0 ? "opacity-100" : "opacity-100"}`}>
          <section className={`absolute h-1/4 mx-12 items-center justify-center top-12 transition-all duration-1000 ${currentStepCount > 0 ? "opacity-0 h-0 pointer-events-none" : "opacity-100"}`}>
            <QuizIntro />
            <button
              className="font-duboisLightNarrow italic text-white focus:outline-none focus:underline hover:underline text-3xl my-6"
              tabIndex={0}
              onClick={() => setCurrentStepCount(1)}
            >
              BEGIN
              <span className="font-icons ml-4">b</span>
            </button>
          </section>

          <section className={`transition-all duration-1000 ${currentStepCount == 8 ? "opacity-100 h-64 mx-12 mb-10" : "opacity-0 h-0 pointer-events-none"}`}>
            <QuizConclusion />
          </section>
          <section className="grid place-content-center pointer-events-none">
            <QuizFeedback />
          </section>
          <section className="grid place-content-center text-white">
            <QuizInstructions />
          </section>

          <section className={`grid place-content-start text-white transition-opacity duration-1000 ${currentStepCount > 0 && currentStepCount < 8 ? "opacity-100" : "opacity-0 h-0"}`}>
            <p className="ml-3 mb-0 text-sm">EVENT {Math.min(currentStep.solvedEvents.length + 1, 4)} of 4</p>
            <p className="mx-3 my-0 text-2xl">
              {currentStep.stepEvent.event.replace(/ \[.*\]/, '')}
            </p>
          </section>

          <section className={`grid place-content-center text-white ml-4 mt-4 transition-opacity duration-100 ${currentStepCount > 0 && currentStepCount < 8 ? "opacity-100" : "opacity-0 h-0"}`}>
            <svg viewBox="0 0 120 20" className="w-full h-full">
              <QuizSelectActors />
            </svg>
          </section>

          <section className={`grid place-content-start text-white transition-opacity duration-600 ${currentStepCount > 2 && currentStepCount < 8 ? "opacity-100" : "opacity-0"}`}>
            <QuizEventCategoryList />
            {currentStepCount == 7 &&
              <div
                role="button"
                className="font-dubois ml-4 text-2xl italic"
                onClick={() => setCurrentStepCount(8)}
                onKeyUp={({ key }) => setCurrentStepCount(8)}
                tabIndex={0}
              >
                CONTINUE <span className="font-icons">b</span>
              </div>
            }
          </section>

          <section className={`text-white transition-all duration-1000 opacity-${currentStepCount > 1 ? 100 : 0} h-${currentStepCount < 3 ? "2/5" : "1/4"} ${currentStepCount == 9 ? "mt-16" : ""}`}>
            <svg viewBox="0 0 125 125" className="w-full h-full">
              <QuizSquareMask defaultX={0} defaultY={0} />
              <QuizSquare defaultX={0} defaultY={0} />
            </svg>
          </section>

          {/* QUIZ NAV */}
          <section className={`grid place-content-center text-white transition-opacity duration-1000 ${currentStepCount > 0 && currentStepCount < 8 ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>
            <svg viewBox="0 0 80 100" className="w-full h-full mx-auto">
              <QuizNav />
            </svg>
          </section>

          <section className={`grid place-content-center text-white text-2xl text-center font-duboisLightNarrow transition-opacity duration-1000 ${currentStepCount == 8 ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>
            <p className="m-0">
              <button
                className="focus:outline-none italic focus:underline hover:underline my-6"
                tabIndex={0}
                onClick={() => setCurrentStepCount(9)}
              >
                FINISH
                <span className="font-icons mr-2">b</span>
              </button>
            </p>
          </section>


          <section className={`grid place-content-center text-white text-2xl text-center font-duboisLightNarrow transition-opacity duration-1000 ${currentStepCount == 9 ? "opacity-100" : "opacity-0 pointer-events-none h-0"}`}>
            <p className="m-0">
              <button
                className="focus:outline-none focus:underline hover:underline my-6"
                tabIndex={0}
                onClick={() => setCurrentStepCount(1)}
              >
                <span className="font-icons mr-2">e</span>
                START OVER
              </button>
            </p>
            <p className="m-0">
              CONTINUE READING
            </p>
            <p className="m-0 motion-safe:animate-[bounce_2.5s_ease-in-out_infinite]">
              <span className="font-icons text-5xl">t</span>
            </p>
          </section>

        </section>
      </section>
      {/* END MOBILE */}

      <section ref={endRef}>&nbsp;</section>
    </QuizContext.Provider>
  );
}
