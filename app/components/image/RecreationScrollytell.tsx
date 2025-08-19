import { useContext, useRef, useState } from "react";
import Recreation from "./Recreation";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import type { ReactElement } from "react";

const RecreationScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const steps = useRef<HTMLDivElement>(null);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      triggers={triggers}
      steps={steps}
    >
      <div className={`bg-${backgroundColor} md:flex justify-between md:mb-8`}>
        <div className="sticky top-16 md:top-0 h-screen mt-16 md:mt-0 md:mr-24 bias-full w-full md:bias-1/2 md:w-3/5 md:order-last md:pb-[60px]">
          <div className="text-3xl relative md:top-[calc(100vh-12rem)] right-[35vw] text-white hidden md:block">
            ↓
          </div>
          <Recreation scrollProgress={scrollProgress} />
        </div>
        <div
          ref={steps}
          className="bias-full w-full md:bias-1/2 md:w-2/5 relative "
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={trigger.key}
                data-step={index}
                className={`step text-xl content-center p-5 md:px-20 ${
                  index + 1 === triggers.length || index == 0
                    ? `${index !== 0 ? "h-[65vh]" : ""} md:h-[60vh]`
                    : "h-screen"
                } text-${primaryTextColor}`}
              >
                <p
                  className={`${
                    index === 0 ? "" : "bg-imagePrimary-translucent"
                  } p-3 md:p-0`}
                >
                  {trigger}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollytellWrapper>
  );
};

export default RecreationScrollytell;
