import { useContext, useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import Tutorial from "./tutorial/TutorialSquares";
import { ChapterContext } from "~/theme";
import { ScrollytellContext } from "~/scrollytellContext";
import TutorialTriggers from "./tutorial/TutorialTriggers";

export default function Scrollytell() {
  const [ scrollProgress, setScrollProgress ] = useState(0.0);
  const [ highlightedSquare, setHighlightedSquare ] = useState(undefined);
  const { backgroundColor, primaryTextColor, docHeightState } = useContext(ChapterContext);
  const scroller = useRef(scrollama());
  const steps = useRef(undefined);

  useEffect(() => {
    if (steps.current?.children.length !== TutorialTriggers.length) return;
    scroller.current.setup({
      offset: "60px",
      step: ".step",
      progress: true,
    })
    .onStepProgress(({index, progress}) => setScrollProgress(index + progress));

    // return () => scroller.current?.destroy();
  }, [setScrollProgress, steps]);

  useEffect(() => {
    scroller.current?.resize()
  }, [docHeightState])

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
        highlightedSquare,
        setHighlightedSquare,
      }}
    >
      <div className={`bg-${backgroundColor} flex justify-between`}>
        <div ref={steps} className="bias-1/2 w-1/2">
          {TutorialTriggers.map((trigger, index) => {
            return (
              <div key={index} data-step={index} className={`step text-2xl content-center px-20 ${index == 0 ? "h-[60vh]" : "h-screen"} text-${primaryTextColor}`}>
                {trigger}
              </div>
            );
          })}
        </div>
        <div className="sticky top-[30px] h-screen bias-1/2 w-1/2 mr-24">
          <div className="text-3xl relative top-[calc(100vh-120px)] left-[calc(-50vw+6rem)]">↓</div>
          <Tutorial />
        </div>
      </div>
    </ScrollytellContext.Provider>
  )
}
