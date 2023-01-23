import { useContext, useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import Recreation from "./Recreation";
import { ChapterContext } from "~/theme";
import { ScrollytellContext } from "~/scrollytellContext";

const triggers = [
  (<></>),
  (<>The table in the first edition of the <cite>Atlas</cite> includes data only for the years between 1770 and 1782.</>),
  (<>Playfair nevertheless plotted data lines for the full range of years between 1700 and 1780.</>),
  (<>He shaded the area between the two data lines in order to illustrate the balance of trade between the two nations. Stippled dots indicate periods of time when the amount of imports from North America to England exceeded the amount of exports from England to North America. Diagonal lines indicate the times when exports from England to North America exceed imports.</>),
  (<>While Playfair includes both major and minor gridlines along the y-axis of the chart, in the version included in the first edition of the <cite>Atlas</cite> Playfair includes minor gridlines along the x-axis only for the twelve years for which he possesses tabular data.</>),
  (<>In the third edition of the <cite>Atlas</cite> these minor gridlines disappear--along with the data tables.</>),
  (<>While Playfair extends the endpoint of the x-axis to 1800, what was then the present, the datalines become less precise. As he plots the lines of imports and exports, they become smoother--as improved engraving technique, or of his desire to convey a more general impression of the economic picture, or both.</>),
  (<>In the third edition of the <cite>Atlas</cite> Playfair also made significant improvements to the charts' design. He replaced the hachure and stippled dots employed in the second edition to indicate the difference between the periods of trade in favor of and against England with hand-stained color</>),
  (<>He (or more likely, the master-engraver Neele) also placed the titles in oval superimposed upon the chart, rather than above, and decided to remove the explanatory notes about the charts' scale.</>),
  (<>He labeled the axes and modified the scale markers of the charts—each of which also improved legibility.</>),
  (<>The overall effect was to solidify the impact "simple impression" that he envisioned from the start.</>),
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
    scroller.current?.resize();
  }, [docHeightState]);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress
      }}
    >
      <div className={`bg-${backgroundColor} flex justify-between`}>
        <div ref={steps} className="bias-1/2 w-2/5">
          {triggers.map((trigger, index) => {
            return (
              <p key={index} data-step={index} className={`step text-2xl content-center px-12 ${index + 1 === triggers.length || index == 0 ? "h-[60vh]" : "h-screen"} text-${primaryTextColor}`}>
                {trigger}
              </p>
            );
          })}
        </div>
        <div className="sticky top-[60px] h-screen bias-1/2 w-3/5 mr-24">
          <Recreation />
        </div>
      </div>
    </ScrollytellContext.Provider>
  )
}
