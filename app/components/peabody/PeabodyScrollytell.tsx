import { useContext, useRef, useState } from "react";
import Tutorial from "./tutorial/TutorialSquares";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import type { ReactElement } from "react";

export default function Scrollytell({
  triggers,
}: {
  triggers: ReactElement[];
}) {
  const [scrollProgress, setScrollProgress] = useState(0.0);
  const { primaryTextColor } = useContext(ChapterContext);
  const steps = useRef<HTMLDivElement>(null);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
      }}
    >
      <ScrollytellWrapper
        className={`md:flex justify-between`}
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        id="tutorial"
      >
        <div className="sticky top-16 md:top-0 h-screen bias-full md:bias-1/2 md:w-1/2 md:mr-24 md:order-last">
          <div className="text-3xl relative top-[calc(100vh-120px)] left-[calc(-50vw+6rem)] hidden md:block">
            ↓
          </div>
          <Tutorial />
        </div>
        <div
          ref={steps}
          className="bias-full md:bias-1/2 md:w-1/2 relative z-10"
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={trigger.key}
                data-step={index}
                className={`step text-xl content-center py-5 px-0 md:px-20 ${
                  index == 0 ? "md:h-[60vh]" : "min-h-screen"
                } text-${primaryTextColor}`}
              >
                {trigger}
              </div>
            );
          })}
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}
