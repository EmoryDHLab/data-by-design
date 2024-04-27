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
import RandomImagesIntoGrid from "~/components/intro/RandomImagesIntoGrid";
import CentralImageOnPage from "~/components/intro/CentralImageOnPage";

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
        <div ref={steps} className="relative z-10 pointer-events-none">
          {IntroTriggers.map((trigger, index) => {
            let height = "min-h-screen";
            if (index == 0) {
              height = "md:h-[60vh]";
            }
            if (index == 6) {
              height = "";
            }

            return (
              <div
                key={trigger.key}
                data-step={index}
                className={classNames(
                  `step text-xl content-center py-5 px-0 md:px-20 text-${primaryTextColor}`,
                  height,
                  index == 4 || index == 7 ? "w-screen" : "w-[50vw]"
                )}
              >
                {trigger}
              </div>
            );
          })}
        </div>
        <div
          className={classNames(
            "sticky top-16 right-0 md:top-[200px] h-screen md:mr-24",
            (scrollProgress < 5.5 || scrollProgress > 7) && "md:w-1/2"
          )}
        >
          <LinearTimeline />
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

function LinearTimeline() {
  const { scrollProgress } = useContext(ScrollytellContext);

  if (scrollProgress > 0 && scrollProgress < 2.6) {
    return <RandomPaths />;
  }

  if (scrollProgress > 2.6 && scrollProgress < 3.2) {
    return <RandomRectangles />;
  }

  if (scrollProgress > 3.2 && scrollProgress < 4.4) {
    return <div></div>;
  }

  if (scrollProgress > 4.4 && scrollProgress < 5.5) {
    return <RandomOrTimelineRectangles />;
  }

  if (scrollProgress > 6.05 && scrollProgress < 7.2) {
    return <div />;
  }

  if (scrollProgress > 7.6 && scrollProgress < 8) {
    return <CentralImageOnPage />;
  }
}
