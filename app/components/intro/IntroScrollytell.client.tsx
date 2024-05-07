import React, { useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import IntroTriggers from "./IntroTriggers";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { classNames } from "~/utils";
import ScrollProgress from "~/components/ScrollProgress";
import RandomPaths from "~/components/intro/RandomPaths";
import RandomRectangles from "~/components/intro/RandomRectangles";
import RandomOrTimelineRectangles from "~/components/intro/RandomOrTimelineRectangles";
import MinardPath from "./MinardPath";
import MinardBlackLine from "~/components/intro/MinardBlackLine";
import MinardText from "~/components/intro/MinardText";
import MinardVerticalLines from "~/components/intro/MinardVerticalLines";
import HorizontalTimeline from "~/components/intro/HorizontalTimeline";
import ShanawdithitMap from "~/components/intro/ShanawdithitMap";

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
        className="md:flex justify-between"
        setScrollProgress={setScrollProgress}
        triggers={IntroTriggers}
        steps={steps}
        id="intro"
      >
        <div
          className={classNames(
            "sticky h-[60vh] md:h-screen top-16 md:top-[200px] bias-full md:bias-1/2 md:mr-24 md:order-last z-0 md:z-20",
            (scrollProgress < 5.5 || scrollProgress > 7) && "md:w-1/2"
          )}
          id="intro-scrollytell"
        >
          <div className="flex flex-col items-center right-0 md:block md:h-screen w-screen">
            <LinearTimeline />
          </div>
        </div>
        <div
          ref={steps}
          className="bias-full md:bias-1/2 pointer-events-none md:w-1/2 z-10"
        >
          {IntroTriggers.map((trigger, index) => {
            let height = "min-h-screen";
            if (index == 0) {
              height = "md:h-[60vh]";
            }
            if (index == 6) {
              height = "";
            }
            if (index == 16) {
              height = "md:h-[200vh]";
            }

            return (
              <div
                key={trigger.key}
                data-step={index}
                className={classNames(
                  `step text-xl content-center py-5 px-0 md:px-20 w-full text-${primaryTextColor}`,
                  height,
                  index == 4 || index == 7 ? "md:w-screen" : "md:w-[50vw]"
                )}
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

  if (scrollProgress > 6.05 && scrollProgress < 8.6) {
    return <div />;
  }

  if (scrollProgress > 8.6 && scrollProgress < 14.5) {
    return (
      <div className="md:w-[50vw] relative">
        {scrollProgress > 9.5 && (
          <MinardPath className="absolute sm:left-[24px] sm:top-[137px] sm:w-[333px] lg:left-[40px] lg:top-[230px] lg:w-[550px] z-10" />
        )}
        {scrollProgress > 10.5 && (
          <MinardBlackLine className="absolute sm:left-[31px] sm:top-[143px] sm:w-[251px] lg:left-[52px] lg:top-[238px] lg:w-[418px] z-10" />
        )}
        {scrollProgress > 11.5 && (
          <MinardText className="absolute lg:left-[47px] lg:top-[225px] lg:w-[410px] z-10" />
        )}
        {scrollProgress > 12.5 && (
          <MinardVerticalLines className="absolute lg:left-[43px] lg:top-[282px] lg:w-[320px] z-10" />
        )}
        <img
          className={classNames(
            "z-20 lg:w-[500px] transition sm:w-[300px]",
            scrollProgress > 9.5 && "opacity-50"
          )}
          alt="Minard chart"
          src="/images/intro/1-Carte_figurative_des_pertes_successives_Minard_Charles-Joseph.jpeg"
        />
      </div>
    );
  }

  if (scrollProgress > 14.5 && scrollProgress < 16.5) {
    return <HorizontalTimeline />;
  }

  if (scrollProgress > 16.5 && scrollProgress < 20) {
    return <ShanawdithitMap />;
  }
}
