import { useContext, useRef, useState } from "react";
import Tutorial from "./tutorial/TutorialSquares";
import { ChapterContext } from "~/theme";
import { ScrollytellContext } from "~/scrollytellContext";
import TutorialTriggers from "./tutorial/TutorialTriggers";
import ScrollytellWrapper from "../ScrollytellWrapper";

export default function Scrollytell() {
  const [ scrollProgress, setScrollProgress ] = useState(0.0);
  const [ highlightedSquare, setHighlightedSquare ] = useState(undefined);
  const { primaryTextColor } = useContext(ChapterContext);
  const steps = useRef(undefined);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
        highlightedSquare,
        setHighlightedSquare,
      }}
    >
      <ScrollytellWrapper
        className={`md:flex justify-between`}
        scrollProgress={scrollProgress}
        setScrollProgress={setScrollProgress}
        triggers={TutorialTriggers}
        steps={steps}
      >
        <div className="sticky top-16 md:top-0 h-screen bias-full md:bias-1/2 md:w-1/2 md:mr-24 md:order-last">
          <div className="text-3xl relative top-[calc(100vh-120px)] left-[calc(-50vw+6rem)] hidden md:block">↓</div>
          <Tutorial />
        </div>
        <div ref={steps} className="bias-full md:bias-1/2 md:w-1/2 ">
          {TutorialTriggers.map((trigger, index) => {
            return (
              // <div
              //   key={index}
              //   data-step={index}
              //   className={`step relative text-2xl content-center p-5 md:px-20 ${
              //     index + 1 === TutorialTriggers.length
              //       ? "md:h-[50vh]"
              //       : "h-screen"
              //     } text-${primaryTextColor}`}>
              <div
                key={index}
                data-step={index}
                className={`step text-xl content-center p-5 md:px-20 ${
                  index + 1 === TutorialTriggers.length || index == 0
                    ? `${index !== 0 ? "h-[65vh]" : ""} md:h-[60vh]`
                    : "h-screen"
                } text-${primaryTextColor}`}
              >
                {trigger}
              </div>
            );
          })}
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  )
}
