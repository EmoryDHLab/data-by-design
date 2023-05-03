import { useContext } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";

export default function QuizEventCategories() {
  const {
    currentStepCount,
    focusedCategory,
    setFocusedCategory,
    selectedCategories,
    currentStep,
    handleCategoryClick,
  } = useContext(QuizContext);

  // Strike through if category is incorrectly selected
  // Underline on hover
  const textDecoration = (index: number) => {
    if (
      selectedCategories.includes(index) &&
      !currentStep.solvedEvents.includes(index)
    ) {
      return "line-through";
    } else if (
      focusedCategory === index &&
      !currentStep.solvedEvents.includes(index)
    ) {
      return "underline";
    }
  };

  // Don't show until second step
  // Half opacity if incorrectly selected or already solved
  // Otherwise, show
  const textOpacity = (index: number) => {
    if (currentStepCount < 3) {
      return 0.0;
    } else if (selectedCategories.includes(index)) {
      return 0.5;
    } else {
      return 1.0;
    }
  };

  // Gold if focused or already solved
  const textColor = (index: number) => {
    if (currentStep.solvedEvents.includes(index)) return "gray";
    if (focusedCategory === index) return "gold";
    return  "white";
  };

  const role = (index: number) => {
    if (currentStepCount > 2 && currentStepCount < 7) {
      if (
        selectedCategories.includes(index) ||
        currentStep.solvedEvents.includes(index)
      ) {
        return undefined;
      } else {
        return "button";
      }
    }
  };

  return (
      <text
        fill="white"
        fontSize={6}
        x={60}
        y={85}
        fillOpacity={0}
      >
        {eventData.eventTypes.map((type, index) => {
          const squareRole = role(index)
          return (
            <tspan
              fillOpacity={textOpacity(index)}
              className="transition-[fill-opacity] duration-1000"
              key={index}
              x={60}
              dy={10}
              fill={textColor(index)}
              role={squareRole ?? ""}
              tabIndex={squareRole === "button" ? 0 : -1}
              onMouseEnter={() => setFocusedCategory(index)}
              onMouseLeave={() => setFocusedCategory(undefined)}
              onClick={() => handleCategoryClick(index)}
              onKeyUp={({ key }) => { if (key === "Enter") handleCategoryClick(index) }}
              textDecoration={textDecoration(index)}
              onFocus={() => setFocusedCategory(index)}
              onBlur={() => setFocusedCategory(undefined)}
            >
              {index + 1}. {type}
            </tspan>
          );
        })}
      </text>
  );
};
