import { useContext, useRef, useState } from "react";
import Recreation from "./Recreation";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import InlineFootnote from "../InlineFootnote";

const triggers = [
  <span key="7e80c3fc"></span>,
  <span key="6830c50a">
    The tables in the first and second editions of the <cite>Atlas</cite>{" "}
    include annual data for the years between 1770 and 1782. For the years
    between 1700 and 1770, there is only data for each decade.
  </span>,
  <span key="8340a9d4">
    He shaded the area between the two data lines in order to illustrate the balance
    of trade between the two nations. Stippled dots indicate periods of time
    when the amount of imports from North America to England exceeded the amount
    of exports from England to North America. Diagonal lines indicate the times
    when exports from England to North America exceeded imports.
  </span>,
  <span key="8ceb9cdd">
    In the accompanying chart, Playfair includes both major and minor gridlines
    along the y-axis of the chart, but he includes minor gridlines along the
    x-axis only for the twelve years for which he possesses annual data.
    Presumably, this indicates the greater granularity of those years’ data.
  </span>,
  <span key="8e121b42">
    In the third edition of the <cite>Atlas</cite>, however, these minor
    gridlines disappear—along with the data tables.
  </span>,
  <span key="585d79be">
    Playfair extends the endpoint of the x-axis to 1800—what was then the
    present. In addition, the data-lines become less precise. The lines of
    imports and exports also become smoother--a reflection of either his desire
    to convey a more “simple” idea, or his improved engraving technique, or
    both.
  </span>,
  <span key="dab6327f">
    In this edition, he also makes significant improvements to the charts’
    design. He replaces the hachure and stippled dots employed in the second
    edition to indicate the difference between the periods of trade in favor of
    and against England with hand-stained color.
  </span>,
  <span key="55b81857">
    He (or more likely, the master-engraver Neele) also placed the titles in
    oval superimposed upon the chart, rather than above, and decided to remove
    the explanatory notes about the charts’ scale.
  </span>,
  <span key="56df66b8">
    He labeled the axes and modified the scale markers of the charts—each of
    which also improved legibility.
  </span>,
  <span key="a74c7264">
    The overall effect was to solidify the authority of the “simple and complete
    idea” that he envisioned from the start.
    <InlineFootnote
      index={12}
      bgOverride="white"
      superscriptOverride="playfairPrimary"
      textOverride="white"
    />
  </span>,
  <span key="e6a1c5ea"></span>,
];

export default function PlayfairScrollytell() {
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const steps = useRef<HTMLDivElement>(null);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      triggers={triggers}
      steps={steps}
    >
      <div className={`bg-${backgroundColor} md:flex justify-between`}>
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
                    index === 0 ? "" : "bg-playfairPrimary-translucent"
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
}
