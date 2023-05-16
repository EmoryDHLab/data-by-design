import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";

interface Props {
  index: number;
  type: string;
  unused: boolean;
};

const defaultClassNames = "transition-[fill-opacity] duration-1000";

export default function QuizEventCategoryItem({ index, type, unused }: Props) {
  const {
    allowOption,
    currentStep,
    currentStepCount,
    focusedCategory,
    handleCategoryClick,
    selectedCategories,
    setFocusedCategory,
  } = useContext(QuizContext);

  const [interactiveOptions, setInteractiveOptions] = useState<object>({});
  const [isOption, setIsOption] = useState<boolean>(allowOption(index));

  useEffect(() => {
    setIsOption(allowOption(index));
  }, [setIsOption, currentStepCount, selectedCategories, index, allowOption]);

  useEffect(() => {
    if (currentStepCount > 2 && currentStepCount < 7) {
      if (isOption) {
        setInteractiveOptions({
          role: "button",
          tabIndex: 0,
          fill: focusedCategory === index ? "gold" : "white",
          textDecoration: focusedCategory === index ? "underline" : "",
          fillOpacity: 1.0,
          onClick: () => handleCategoryClick(index),
          onKeyUp: ({ key }) => { if (key === "Enter") handleCategoryClick(index) },
          onMouseEnter: () => setFocusedCategory(index),
          onMouseLeave: () => setFocusedCategory(undefined),
          onFocus: () => setFocusedCategory(index),
          onBlur: () => setFocusedCategory(undefined),
          className: `${defaultClassNames} cursor-pointer`,
        });
      } else {
        setInteractiveOptions({
          fill: "gray",
          fillOpacity: 0.5,
          textDecoration: currentStep.solvedEvents.includes(index) ? "" : "line-through",
          className: `${defaultClassNames} cursor-not-allowed`,
        });
      }
    } else if (currentStepCount === 7) {
      setInteractiveOptions({
        fill: "white",
        fillOpacity: 1,
        className: unused ? "hidden" : defaultClassNames,
      })
    } else {
      setInteractiveOptions({ fillOpacity: 0 });
    }
  }, [
    currentStepCount,
    currentStep,
    isOption,
    setInteractiveOptions,
    handleCategoryClick,
    setFocusedCategory,
    index,
    focusedCategory,
    unused,
  ]);

  return (
    <tspan
      fontSize={6}
      x={60}
      dy={10}
      {...interactiveOptions}
    >
      {index + 1}. {type}
    </tspan>
  );
}
