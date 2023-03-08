import { useContext, useRef, useState } from "react";
import Recreation from "./Recreation";
import { ChapterContext } from "~/theme";
import ScrollytellWrapper from "../ScrollytellWrapper";

const triggers = [
  <></>,
  <>
    The table in the first edition of the <cite>Atlas</cite> includes data only
    for the years between 1770 and 1782.
  </>,
  <>
    Playfair nevertheless plotted data lines for the full range of years between
    1700 and 1780.
  </>,
  <>
    He shaded the area between the two data lines in order to illustrate the
    balance of trade between the two nations. Stippled dots indicate periods of
    time when the amount of imports from North America to England exceeded the
    amount of exports from England to North America. Diagonal lines indicate the
    times when exports from England to North America exceed imports.
  </>,
  <>
    While Playfair includes both major and minor gridlines along the y-axis of
    the chart, in the version included in the first edition of the{" "}
    <cite>Atlas</cite> Playfair includes minor gridlines along the x-axis only
    for the twelve years for which he possesses tabular data.
  </>,
  <>
    In the third edition of the <cite>Atlas</cite> these minor gridlines
    disappear--along with the data tables.
  </>,
  <>
    While Playfair extends the endpoint of the x-axis to 1800, what was then the
    present, the datalines become less precise. As he plots the lines of imports
    and exports, they become smoother--as improved engraving technique, or of
    his desire to convey a more general impression of the economic picture, or
    both.
  </>,
  <>
    In the third edition of the <cite>Atlas</cite> Playfair also made
    significant improvements to the charts' design. He replaced the hachure and
    stippled dots employed in the second edition to indicate the difference
    between the periods of trade in favor of and against England with
    hand-stained color
  </>,
  <>
    He (or more likely, the master-engraver Neele) also placed the titles in
    oval superimposed upon the chart, rather than above, and decided to remove
    the explanatory notes about the charts' scale.
  </>,
  <>
    He labeled the axes and modified the scale markers of the charts—each of
    which also improved legibility.
  </>,
  <>
    The overall effect was to solidify the impact "simple impression" that he
    envisioned from the start.
  </>,
];

export default function PlayfairScrollytell() {
  const [scrollProgress, setScrollProgress] = useState<float>(0.0);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const steps = useRef<HTMLDivElement>(undefined);

  return (
    <ScrollytellWrapper scrollProgress={scrollProgress} setScrollProgress={setScrollProgress} triggers={triggers} steps={steps}>
      <div className={`bg-${backgroundColor} md:flex justify-between`}>
        <div className="sticky top-16 md:top-0 h-screen mt-16 md:mt-0 md:mr-24 bias-full w-full md:bias-1/2 md:w-3/5 md:order-last md:pb-[60px]">
          <div className="text-3xl relative md:top-[calc(100vh-12rem)] right-[35vw] text-white hidden md:block">↓</div>
          <Recreation scrollProgress={scrollProgress} />
        </div>
        <div ref={steps} className="bias-full w-full md:bias-1/2 md:w-2/5 relative">
          {triggers.map((trigger, index) => {
            return (
              <div
                  key={index}
                  data-step={index}
                  className={`step text-xl content-center p-5 md:px-20 ${
                    index + 1 === triggers.length || index == 0
                      ? `${index !== 0 ? "h-[65vh]" : ""} md:h-[60vh]`
                      : "h-screen"
                  } text-${primaryTextColor}`}
              >
                <p className={`${index === 0 ? "": "bg-[#3b6fe0bf]"} p-3 md:p-0`}>
                  {trigger}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollytellWrapper>
  );
}
