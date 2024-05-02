import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ClientOnly } from "remix-utils";
import Picture from "~/components/layout/Picture";
import PullQuote from "~/components/PullQuote";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/dubois.json";
import type { ReactElement } from "react";

const minScrollProgress = 10;

const DuboisScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollProgress > minScrollProgress && scrollProgress % 1 > 0.25) {
      setSlideIndex(Math.ceil(scrollProgress) - minScrollProgress);
    } else if (scrollProgress <= minScrollProgress + 0.25) {
      setSlideIndex(0);
    }
  }, [scrollProgress]);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      steps={steps}
      bgColor="duboisSecondary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
    >
      <div className={`sticky h-screen top-24`}>
        <div className="grid grid-cols-2">
          <div></div>
          <div className="h-3/4 w-3/4 my-auto">
            <div></div>
            {/* 1 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 0 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["ch5-14-rogers"]}
                className={`drop-shadow-none p-6 w-3/5`}
              />
            </div>

            {/* 2 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 1 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["ch5-14-rogers-highlighted"]}
                className={`drop-shadow-none p-6 w-3/5`}
              />
            </div>

            {/* 3 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 2 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["college-bred-negro"]}
                className={`drop-shadow-none p-6`}
              />
            </div>

            {/* 4 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 3 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["number-of-graduates"]}
                className={`drop-shadow-none h-[75vh]`}
              />
            </div>
            
          </div>
        </div>
      </div>

      <div
        ref={steps}
        className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96 md:w-full"
      >
        {triggers.map((trigger, index) => {
          return (
            <div
              key={`DuboisScrollytell-${trigger.key}`}
              data-step={index}
              className={`pointer-events-none step text-xl p-5 md:px-20 relative w-auto md:w-1/2 ${
                index + 1 === triggers.length ? "h-[50vh]" : "h-screen"
              } text-${accentTextColor}`}
            >
              <p className="bg-duboisSecondary-translucent p-3 md:p-12">
                {trigger}
              </p>
            </div>
          );
        })}
      </div>

    </ScrollytellWrapper>
  );
};

export default DuboisScrollytell;
