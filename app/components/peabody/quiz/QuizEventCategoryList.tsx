import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import eventData from "~/data/peabody/eventData.json";
import QuizEventCategoryItem from "./QuizEventCategoryItem";
import { useDeviceContext } from "~/hooks";

const unusedCategories = [3, 4, 6, 7, 8];

export default function QuizEventCategoryList() {
  const { currentStepCount, setCurrentStepCount } = useContext(QuizContext);
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
        className={`md:hidden list-decimal list-inside ml-4 text-sm overflow-y-hidden transition-[height] duration-1000 ${mobileHeight}`}
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
      <svg>
        <text
          fill="white"
          x={60}
          y={105}
          fillOpacity={0}
          className="hidden md:block"
        >
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
          <tspan
            className="transition-[fill-opacity] duration-1000 font-duboisLightNarrow italic focus:outline-none focus:underline hover:underline"
            dy={24}
            fillOpacity={currentStepCount >= 7 ? 1.0 : 0.0}
            fontSize={14}
            role={currentStepCount === 7 ? "button" : ""}
            tabIndex={currentStepCount === 7 ? 0 : -1}
            onClick={() => setCurrentStepCount(8)}
            onKeyUp={({ key }) => {
              if (key === "Enter" || key === "Space") setCurrentStepCount(8);
            }}
            x={60}
            fontFamily="VTC Du Bois Narrow, serif"
            fontStyle="italic"
          >
            CONTINUE
            <tspan dx={2} className="font-icons">
              b
            </tspan>
          </tspan>
        </text>
      </svg>
    );
  }

  return <></>;
}
