import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import QuizConclusion from "./QuizConclusion";
import QuizEventCategoryList from "./QuizEventCategoryList";
import QuizFeedback from "./QuizFeedback";
import QuizInstructions from "./QuizInstructions";
import QuizIntro from "./QuizIntro";
import QuizNav from "./QuizNav";
import QuizSelectActors from "./QuizSelectActors";
import QuizSquare from "./QuizSquare";
import { quizSteps } from "./quizSteps";
import eventData from "~/data/process/eventData.json";
import QuizFinal from "./QuizFinal";
import { QuizContext } from "./QuizContext";
import type {
  QuizStep,
  QuizStepCount,
  PeabodySquare,
  QuizFeedbackType,
} from "~/types/process";
import QuizSquareMask from "./QuizSquareMask";

export default function Quiz() {
  // Memoize quiz steps to prevent recreation
  const memoizedQuizSteps = useMemo(() => quizSteps as Array<QuizStep>, []);

  const [currentStep, setCurrentStep] = useState<QuizStep>(memoizedQuizSteps[0]);
  const [currentStepCount, setCurrentStepCount] = useState<QuizStepCount>(0);
  const [selectedCategories, setSelectedCategories] = useState<
    Array<PeabodySquare>
  >([]);
  const [selectedYears, setSelectedYears] = useState<Array<number>>([]);
  const [focusedCategory, setFocusedCategory] = useState<PeabodySquare>();
  const [feedback, setFeedback] = useState<QuizFeedbackType>(undefined);
  const quizRef = useRef<SVGSVGElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const desktopSectionRef = useRef<HTMLElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  // Removed scrollIntoView to prevent unwanted screen movement during quiz navigation

  // Add snap scrolling behavior when quiz section is in view (only when scrolling down)
  useEffect(() => {
    const targetRef = desktopSectionRef.current || mobileSectionRef.current;
    if (!targetRef) return;

    let lastScrollY = window.scrollY;
    let hasSnapped = false;
    let scrollTimer: NodeJS.Timeout | null = null;
    let userInteracting = false;
    let stepChangeTimer: NodeJS.Timeout | null = null;

    const smoothScrollToTarget = () => {
      const rect = targetRef.getBoundingClientRect();
      const targetPosition = window.scrollY + rect.top;

      // Use a custom smooth scroll with easing
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800; // Longer duration for smoother feel
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeInOutCubic(progress);
        const currentPosition = startPosition + distance * easedProgress;

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const rect = targetRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Clear any existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      // Debounce scroll events for smoother detection
      scrollTimer = setTimeout(() => {
        if (
          isScrollingDown &&
          !hasSnapped &&
          !userInteracting &&
          !stepChangeTimer
        ) {
          // Check if quiz section is partially visible with a larger trigger zone
          if (
            rect.top < viewportHeight * 0.7 &&
            rect.top > 0 &&
            rect.top < viewportHeight * 0.6
          ) {
            hasSnapped = true;
            smoothScrollToTarget();

            // Reset snap flag after animation completes
            setTimeout(() => {
              hasSnapped = false;
            }, 1200);
          }
        }

        // Reset snap flag when scrolled away from quiz
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          hasSnapped = false;
        }
      }, 50); // Debounce delay

      lastScrollY = currentScrollY;
    };

    const handleInteractionStart = () => {
      userInteracting = true;
    };

    const handleInteractionEnd = () => {
      setTimeout(() => {
        userInteracting = false;
      }, 1000); // Longer delay to prevent snap during quiz step transitions
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    targetRef.addEventListener("mousedown", handleInteractionStart);
    targetRef.addEventListener("touchstart", handleInteractionStart);
    targetRef.addEventListener("click", handleInteractionStart);
    targetRef.addEventListener("mouseup", handleInteractionEnd);
    targetRef.addEventListener("touchend", handleInteractionEnd);

    // Disable snap scroll temporarily when currentStepCount changes
    if (stepChangeTimer) {
      clearTimeout(stepChangeTimer);
    }
    stepChangeTimer = setTimeout(() => {
      stepChangeTimer = null;
    }, 1500); // Disable snap for 1.5s after step change

    return () => {
      window.removeEventListener("scroll", handleScroll);
      targetRef.removeEventListener("mousedown", handleInteractionStart);
      targetRef.removeEventListener("touchstart", handleInteractionStart);
      targetRef.removeEventListener("click", handleInteractionStart);
      targetRef.removeEventListener("mouseup", handleInteractionEnd);
      targetRef.removeEventListener("touchend", handleInteractionEnd);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      if (stepChangeTimer) {
        clearTimeout(stepChangeTimer);
      }
    };
  }, [currentStepCount]);

  useEffect(() => {
    setSelectedCategories([]);
    setSelectedYears([]);
  }, [setSelectedCategories, setSelectedYears, currentStepCount]);

  useEffect(() => {
    if (selectedYears.length >= 3 && currentStepCount === 2) {
      setFeedback({
        message: "1644, the Powhatan attacked Virginia in 1644.",
        correct: false,
      });

      setCurrentStepCount(
        (currentStepCount) => (currentStepCount + 1) as QuizStepCount
      );
      setSelectedYears([]);
    }
  }, [setCurrentStepCount, selectedYears, setSelectedYears, currentStepCount]);

  useEffect(() => {
    if (selectedCategories.length >= 3) {
      setFeedback({
        message: `${currentStep?.stepEvent?.event.replace(
          / \[.*\]/,
          ""
        )} was categorized as ${
          eventData.eventTypes[
            (currentStep.stepEvent?.squares as Array<number>)[0] - 1
          ]
        }`,
        correct: false,
      });
      setCurrentStepCount(
        (currentStepCount) => (currentStepCount + 1) as QuizStepCount
      );
    }
  }, [selectedCategories, currentStep, setFeedback]);

  useEffect(() => {
    setCurrentStep(memoizedQuizSteps[currentStepCount]);
    setSelectedCategories([]);
  }, [currentStepCount, memoizedQuizSteps]);

  const handleYearClick = useCallback((year: number) => {
    if (year === 1644 && currentStepCount === 2) {
      setCurrentStepCount(
        (currentStepCount) => (currentStepCount + 1) as QuizStepCount
      );
      setSelectedYears([]);
      setFeedback({
        message: `YES it was 1644. Now select how Peabody would categorize ${memoizedQuizSteps[2].stepEvent.event}`,
        correct: true,
      });
    } else {
      setSelectedYears(prev => [...prev, year]);
    }
  }, [currentStepCount, memoizedQuizSteps]);

  // Called when an event square or category is selected
  const handleCategoryClick = useCallback((selected: number) => {
    if (currentStepCount === 3 && selected == 0) {
      setCurrentStepCount(4);
      setFeedback({
        message: "Peabody identified other events that took place in the year.",
        correct: true,
      });
    } else if (currentStepCount === 4 && selected == 1) {
      setCurrentStepCount(5);
      setFeedback({
        message:
          "The third event that Peabody identified taking place later that year is...",
        correct: true,
      });
    } else if (currentStepCount === 5 && selected == 2) {
      setCurrentStepCount(6);
      setFeedback({
        message: "One more...",
        correct: true,
      });
    } else if (currentStepCount === 6 && selected == 5) {
      setCurrentStepCount(7);
      setFeedback({
        message: "All done!",
        correct: true,
      });
    } else if (
      !(currentStep.solvedEvents as Array<number>).includes(selected)
    ) {
      setSelectedCategories(prev => [selected as PeabodySquare, ...prev]);
    }
  }, [currentStepCount, currentStep.solvedEvents]);

  const allowOption = useCallback((index: PeabodySquare) => {
    if (currentStepCount > 2 && currentStepCount < 7) {
      if (
        selectedCategories.includes(index) ||
        (currentStep.solvedEvents as Array<PeabodySquare>).includes(index)
      ) {
        return false;
      }
    }
    return true;
  }, [currentStepCount, selectedCategories, currentStep.solvedEvents]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
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
    setFeedback,
  }), [
    allowOption,
    currentStep,
    currentStepCount,
    focusedCategory,
    handleCategoryClick,
    selectedCategories,
    selectedYears,
    handleYearClick,
    feedback,
  ]);

  return (
    <QuizContext.Provider value={contextValue}>
      <section
        ref={desktopSectionRef}
        className="bg-black w-full h-screen hidden md:block relative z-10 overflow-hidden scroll-mt-0"
        id="quiz"
      >
        <div
          id="quiz-intro"
          className={`absolute inset-0 flex items-center justify-center z-50 transition-all duration-1000 ${
            currentStepCount === 0
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <QuizIntro
            className={`transition-all duration-1000 ${
              currentStepCount === 0
                ? "translate-x-0 scale-100"
                : "-translate-x-full scale-95"
            }`}
          />
        </div>

        <div className="relative">
          {/* Text content flexbox */}
          <div className="hidden md:flex absolute top-0 left-0 w-full h-full pointer-events-none">
            <div
              className={`flex flex-col font-power py-28 gap-4 max-w-2xl transition-all duration-500 ease-out ${
                currentStepCount === 1
                  ? "pl-24 md:pl-48 lg:pl-64 xl:pl-96"
                  : "pl-12 md:pl-24 lg:pl-32 xl:pl-48"
              }`}
            >
              <div id="quiz-feedback" className="pointer-events-auto ">
                <QuizFeedback />
              </div>
              <div id="quiz-instructions" className="pointer-events-auto">
                <QuizInstructions />
              </div>

              {/* Event text - right below instructions */}
              <div
                className={`pointer-events-auto  ${
                  currentStepCount === 0
                    ? "opacity-0 translate-y-8 scale-95"
                    : ""
                } ${
                  currentStepCount >= 1 && currentStepCount < 8
                    ? "opacity-100 translate-y-0 scale-100"
                    : ""
                } ${
                  currentStepCount >= 8
                    ? "opacity-0 -translate-y-8 scale-95"
                    : ""
                } transition-all duration-700 ease-out delay-200`}
              >
                <div className="text-white text-sm opacity-100">
                  EVENT {Math.min(currentStep.solvedEvents.length + 1, 4)} of 4
                </div>
                <div className="text-white text-xl font-sans mt-2">
                  {currentStep?.stepEvent?.event.replace(/ \[.*\]/, "")}
                </div>

                {/* Actor buttons - HTML for step 2+ */}
                {currentStepCount >= 2 && currentStepCount < 8 && (
                  <div className="mt-4">
                    <QuizSelectActors />
                  </div>
                )}

                {/* Category list - HTML for step 2+ */}
                {currentStepCount > 1 && currentStepCount < 9 && (
                  <div className="mt-4">
                    <QuizEventCategoryList />
                  </div>
                )}
              </div>

              {/* Conclusion text */}
              <div
                id="quiz-conclusion"
                className={`pointer-events-auto transition-all duration-1000 -mt-40 ${
                  currentStepCount === 8
                    ? "opacity-100 translate-y-0 scale-100 delay-300"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <QuizConclusion />
              </div>
              {/* Enhanced end screen for step 9 - now in QuizFinal component */}
              <div
                id="quiz-final"
                className="flex items-start justify-center w-full pointer-events-auto relative z-40"
              >
                <QuizFinal />
              </div>
            </div>
          </div>

          <svg
            id="quiz-recreation"
            ref={quizRef}
            viewBox="0 0 300 200"
            className="h-screen m-auto w-11/12 sticky top-0"
          >
            <QuizFinal />

            <g
              className={`md:scale-${
                currentStepCount >= 2 ? 100 : 0
              } transition-all duration-1000 origin-bottom-right`}
            >
              <QuizSquare defaultX={165} defaultY={45} />
            </g>

            {/* SVG actors - only show for step 1 */}
            <g
              className={`${
                currentStepCount === 0 ? "hidden translate-x-full" : ""
              } ${
                currentStepCount >= 2 ? "hidden" : ""
              } transition-all duration-1000`}
            >
              <g className="transition-all duration-700 delay-100">
                <QuizSelectActors />
              </g>
            </g>

            <QuizNav />
          </svg>

          {/* Progress text */}
          <div className="hidden md:block absolute bottom-0 right-4 text-white text-xs">
            {currentStepCount} of 9
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <div
        ref={mobileSectionRef}
        className="bg-black h-screen relative w-full md:hidden overflow-hidden scroll-mt-0"
      >
        <div
          className={`flex flex-col h-full font-power transition-opacity duration-1000 ${
            currentStepCount == 0 ? "opacity-100" : "opacity-100"
          }`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 z-30 ${
              currentStepCount > 0
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            <QuizIntro className="mx-6" />
          </div>

          <div
            className={`transition-all duration-1000 ${
              currentStepCount == 8
                ? "opacity-100 h-auto max-h-96 mx-6 mb-6 px-4 py-6"
                : "opacity-0 h-0 pointer-events-none"
            }`}
          >
            <QuizConclusion />
          </div>
          <div className="grid place-content-center text-white px-6">
            <QuizInstructions />
          </div>

          <div
            className={`grid place-content-start text-white px-6 transition-opacity duration-1000 ${
              currentStepCount > 0 && currentStepCount < 8
                ? "opacity-100"
                : "opacity-0 h-0"
            }`}
          >
            <p className="ml-20 mt-10mb-0 text-sm">
              EVENT {Math.min(currentStep.solvedEvents.length + 1, 4)} of 4
            </p>
            <p className="ml-20 my-0 font-sans text-xl">
              {currentStep?.stepEvent?.event.replace(/ \[.*\]/, "")}
            </p>
          </div>

          <div
            className={`text-white ml-4 mt-4 transition-opacity duration-100 ${
              currentStepCount > 0 && currentStepCount < 8
                ? "opacity-100"
                : "opacity-0 h-0"
            }`}
          >
            {currentStepCount === 1 ? (
              <svg viewBox="0 0 120 20" className="w-80 h-16">
                <QuizSelectActors />
              </svg>
            ) : (
              <QuizSelectActors />
            )}
          </div>

          <div
            className={`text-white ml-4 mt-4 transition-opacity duration-600 ${
              currentStepCount > 2 && currentStepCount < 8
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <QuizEventCategoryList />
          </div>

          <div
            className={`text-white transition-all duration-1000 opacity-${
              currentStepCount > 1 ? 100 : 0
            } h-${currentStepCount < 3 ? "2/5" : "1/4"} ${
              currentStepCount == 9 ? "mt-16" : ""
            }`}
          >
            <svg viewBox="0 0 125 125" className="w-full h-full">
              <QuizSquareMask defaultX={0} defaultY={0} />
              <QuizSquare defaultX={0} defaultY={0} />
            </svg>
          </div>

          {/* QUIZ NAV */}
          <div
            className={`grid place-content-center text-white transition-opacity duration-1000 ${
              currentStepCount > 0 && currentStepCount < 8
                ? "opacity-100"
                : "opacity-0 pointer-events-none h-0"
            }`}
          >
            <svg viewBox="0 0 80 100" className="w-full h-full mx-auto">
              <QuizNav />
            </svg>
          </div>

          <div
            className={`grid place-content-center text-white text-2xl text-center font-powerLightNarrow transition-opacity duration-1000 ${
              currentStepCount == 8
                ? "opacity-100"
                : "opacity-0 pointer-events-none h-0"
            }`}
          >
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
          </div>

          <div
            className={`grid place-content-center text-white text-2xl text-center font-powerLightNarrow transition-opacity duration-1000 ${
              currentStepCount == 9
                ? "opacity-100"
                : "opacity-0 pointer-events-none h-0"
            }`}
          >
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
            <p className="m-0">CONTINUE READING</p>
            <p className="m-0 motion-safe:animate-[bounce_2.5s_ease-in-out_infinite]">
              <span className="font-icons text-5xl">t</span>
            </p>
          </div>
        </div>
      </div>
      {/* END MOBILE */}

      <div ref={endRef}>&nbsp;</div>
    </QuizContext.Provider>
  );
}
