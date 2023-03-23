import { useContext } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";

export default function QuizEventCategories() {
  const {
    stepState,
    focusedCategory,
    setFocusedCategory,
    selectedCategories,
    solvedEvents,
    handleCategoryClick,
  } = useContext(QuizContext);

  // Strike through if category is incorrectly selected
  // Underline on hover
  const textDecoration = (index: number) => {
    if (
      selectedCategories.includes(index) &&
      !solvedEvents.includes(index)
    ) {
      return "line-through";
    } else if (
      focusedCategory === index &&
      !solvedEvents.includes(index)
    ) {
      return "underline";
    }
  };

  // Don't show until second step
  // Half opacity if incorrectly selected or already solved
  // Otherwise, show
  const textOpacity = (index: number) => {
    if (stepState < 2) {
      return 0.0;
    } else if (selectedCategories.includes(index)) {
      return 0.5;
    } else {
      return 1.0;
    }
  };

  // Gold if focused or already solved
  const textColor = (index: number) => {
    return solvedEvents.includes(index) || focusedCategory === index ? "gold" : "white";
  };

  return (
      <text
        fill="white"
        fontSize={6}
        x={85}
        y={85}
        fillOpacity={0}
      >
        {eventData.eventTypes.map((type, index) => {
          return (
            <tspan
              fillOpacity={textOpacity(index)}
              className="transition-[fill-opacity] duration-1000"
              key={index}
              x={85}
              dy={10}
              fill={textColor(index)}
              role={selectedCategories.includes(index) ? "" : "button"}
              onMouseEnter={() => setFocusedCategory(index)}
              onMouseLeave={() => setFocusedCategory(undefined)}
              onClick={() => handleCategoryClick(index)}
              textDecoration={textDecoration(index)}
            >
              {index + 1}. {type}
            </tspan>
          );
        })}
      </text>
  );
};
