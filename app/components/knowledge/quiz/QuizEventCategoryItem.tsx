import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import type { PeabodySquare } from "~/types/process";

interface Props {
  index: number;
  type: string;
  unused: boolean;
}

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

  const [isOption, setIsOption] = useState<boolean>(allowOption(index));

  useEffect(() => {
    setIsOption(allowOption(index));
  }, [setIsOption, currentStepCount, selectedCategories, index, allowOption]);

  const getClassName = () => {
    if (currentStepCount > 2 && currentStepCount < 7) {
      if (isOption) {
        return `cursor-pointer transition-colors duration-300 ${
          focusedCategory === index ? "text-yellow-400 underline" : "text-white"
        }`;
      } else {
        return `cursor-not-allowed text-gray-500 ${
          currentStep?.solvedEvents.includes(index as PeabodySquare)
            ? ""
            : "line-through"
        }`;
      }
    } else if (currentStepCount === 7) {
      return unused ? "hidden" : "text-white";
    }
    return "opacity-0";
  };

  return (
    <li
      className={getClassName()}
      role={isOption && currentStepCount > 2 && currentStepCount < 7 ? "button" : undefined}
      tabIndex={isOption && currentStepCount > 2 && currentStepCount < 7 ? 0 : -1}
      onClick={() => isOption && handleCategoryClick(index)}
      onKeyUp={({ key }) => {
        if (key === "Enter" && isOption) handleCategoryClick(index);
      }}
      onMouseEnter={() => isOption && setFocusedCategory(index as PeabodySquare)}
      onMouseLeave={() => setFocusedCategory(undefined)}
      onFocus={() => isOption && setFocusedCategory(index as PeabodySquare)}
      onBlur={() => setFocusedCategory(undefined)}
    >
      {type}
    </li>
  );
}
