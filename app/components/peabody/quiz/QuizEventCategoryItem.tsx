import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";
import type { PeabodySquare } from "~/types/peabody";

interface Props {
  index: number;
  type: string;
  unused: boolean;
}

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
  const [mobileClassNames, setMobileClassNames] = useState<string | undefined>(undefined);
  const [isOption, setIsOption] = useState<boolean>(allowOption(index));
  const { isMobile, isDesktop } = useDeviceContext();

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
          onKeyUp: ({ key }: { key: string }) => { if (key === "Enter") handleCategoryClick(index) },
          onMouseEnter: () => setFocusedCategory((index as PeabodySquare)),
          onMouseLeave: () => setFocusedCategory(undefined),
          onFocus: () => setFocusedCategory((index as PeabodySquare)),
          onBlur: () => setFocusedCategory(undefined),
          className: `${defaultClassNames} cursor-pointer hidden md:block`,
        });
      } else {
        setInteractiveOptions({
          fill: "gray",
          fillOpacity: 0.5,
          textDecoration: currentStep?.solvedEvents.includes((index as PeabodySquare)) ? "" : "line-through",
          className: `${defaultClassNames} cursor-not-allowed hidden md:block`,
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

  useEffect(() => {
    if (currentStepCount > 2 && currentStepCount < 7) {
      if (isOption) {
        setMobileClassNames(undefined);
      } else {
        setMobileClassNames('text-gray-500');
      }
    }  else if (currentStepCount === 7) {
      if (unused) {
        setMobileClassNames('opacity-0 h-0');
      } else {
        setMobileClassNames(undefined);
      }
    }
  }, [currentStepCount, isOption, unused]);

  if (isMobile) {
    return (
      <li className={mobileClassNames}>
        {type} {isOption}
      </li>
    );
  } else if (isDesktop) {
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

  return (
    <span>{type}</span>
  );
}
