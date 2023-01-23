import { useContext, useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import Tutorial from "./tutorial/TutorialSquares";
import { ChapterContext } from "~/theme";
import { ScrollytellContext } from "~/scrollytellContext";
import InlineFootnote from "../InlineFootnote";

const triggers = [
  (<></>),
  (<>Peabody's version of Bem's system borrows the idea of a numbered grid, with each year in a century marked out in its own box.</>),
  (<>She also borrows the idea of subdividing each box, so that each of the nine interior squares corresponds to a particular type of historical event.</>),
  (<>In the Polish-American System, as in Bem's, the top left corner is the space for wars, battles, and sieges; in the top middle is the space for conquests and unions; in the top right is the space for losses and divisions, and so on.</>),
  (<>Shapes that take up the entire box indicate an event of such magnitude or complexity that the other events in that same year hardly matter.</>),
  (<>The events are also color-coded, indicating the various countries involved in a particular event. On this point, Peabody makes special note that she employs "a somewhat different, and, as it seems to me, a more expressive distribution of colors."<InlineFootnote index={7} bgOverride="white" textOverride="offblack" /></>),
];

export default function Scrollytell() {
  const [ scrollProgress, setScrollProgress ] = useState(0.0);
  const { backgroundColor, primaryTextColor, docHeightState } = useContext(ChapterContext);
  const scroller = useRef(scrollama());
  const steps = useRef(undefined);

  useEffect(() => {
    if (steps.current?.children.length !== triggers.length) return;
    scroller.current.setup({
      offset: "60px",
      step: ".step",
      progress: true,
    })
    .onStepProgress(({index, progress}) => setScrollProgress(index + progress));

    return () => scroller.current?.destroy();
  }, [setScrollProgress, steps]);

  useEffect(() => {
    scroller.current?.resize()
  }, [docHeightState])

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress
      }}
    >
      <div className={`bg-${backgroundColor} flex justify-between`}>
        <div ref={steps} className="bias-1/2 w-1/2">
          {triggers.map((trigger, index) => {
            return (
              <p key={index} data-step={index} className={`step text-2xl content-center px-12 ${index + 1 === triggers.length || index == 0 ? "h-[60vh]" : "h-screen"} text-${primaryTextColor}`}>
                {trigger}
              </p>
            );
          })}
        </div>
        <div className="sticky top-[60px] h-screen bias-1/2 w-1/2 mr-24">
          <Tutorial />
        </div>
      </div>
    </ScrollytellContext.Provider>
  )
}
