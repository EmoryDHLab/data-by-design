import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import eventData from "~/data/process/eventData.json";
import QuizEventCategoryItem from "./QuizEventCategoryItem";
import { useDeviceContext } from "~/hooks";

const unusedCategories = [3, 4, 6, 7, 8];

export default function QuizEventCategoryList() {
  const { currentStepCount } = useContext(QuizContext);
  const { isMobile, isDesktop } = useDeviceContext();
  const [mobileHeight, setMobileHeight] = useState<string | undefined>("h-0");

  useEffect(() => {
    if (isDesktop) return;
    if (currentStepCount > 2 && currentStepCount < 7)
      return setMobileHeight("h-48");
    if (currentStepCount == 7) return setMobileHeight("h-24");
    return setMobileHeight("h-0");
  }, [currentStepCount, setMobileHeight, isDesktop]);

  if (isMobile) {
    return (
      <ol
        className={`md:hidden list-decimal list-inside text-sm overflow-y-hidden transition-[height] duration-1000 ${mobileHeight}`}
      >
        {eventData.eventTypes.map((type, index) => {
          return (
            <QuizEventCategoryItem
              key={`mobile-${type}`}
              index={index}
              type={type}
              unused={unusedCategories.includes(index)}
            />
          );
        })}
      </ol>
    );
  } else if (isDesktop) {
    return (
      <ol className="list-decimal list-inside text-base text-white space-y-1">
        {eventData.eventTypes.map((type, index) => {
          return (
            <QuizEventCategoryItem
              key={type}
              index={index}
              type={type}
              unused={unusedCategories.includes(index)}
            />
          );
        })}
      </ol>
    );
  }

  return <></>;
}
