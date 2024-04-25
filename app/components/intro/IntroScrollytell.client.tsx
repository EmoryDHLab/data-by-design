import React, { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import IntroTriggers from "./IntroTriggers";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { classNames } from "~/utils";
import ScrollProgress from "~/components/ScrollProgress";
import RandomPaths from "~/components/intro/RandomPaths";
import FakePage from "~/components/intro/FakePage";
import RandomRectangles from "~/components/intro/RandomRectangles";
import RandomOrTimelineRectangles from "~/components/intro/RandomOrTimelineRectangles";

export default function IntroScrollytell() {
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
      {process.env.NODE_ENV !== "production" && <ScrollProgress />}
      <ScrollytellWrapper
        className="md:flex justify-between w-full"
        setScrollProgress={setScrollProgress}
        triggers={IntroTriggers}
        steps={steps}
        id="intro"
      >
        <div ref={steps} className="relative z-10">
          {IntroTriggers.map((trigger, index) => {
            return (
              <div
                key={trigger.key}
                data-step={index}
                className={classNames(
                  `step text-xl content-center py-5 px-0 md:px-20 text-${primaryTextColor}`,
                  index == 0 ? "md:h-[60vh]" : "min-h-screen",
                  index == 4 || index == 7 ? "w-screen" : "w-[50vw]"
                )}
              >
                {trigger}
              </div>
            );
          })}
        </div>
        <div className="sticky top-16 right-0 md:top-[200px] md:w-1/2 h-screen md:mr-24">
          <LinearTimeline />
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

function LinearTimeline() {
  const { scrollProgress } = useContext(ScrollytellContext);

  if (scrollProgress < 2.6) {
    return <RandomPaths />;
  } else if (scrollProgress < 3.2) {
    return <RandomRectangles />;
  } else if (scrollProgress < 4.4) {
    return <div></div>;
  } else if (scrollProgress < 6) {
    return <RandomOrTimelineRectangles />;
  } else if (scrollProgress < 7) {
    return <FakePage />;
  }
}
