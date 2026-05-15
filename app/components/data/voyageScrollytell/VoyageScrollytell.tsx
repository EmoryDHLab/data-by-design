import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ClientOnly from "~/components/ClientOnly";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/data.json";
import VoyageExample from "../voyages/VoyageExample";
import VoyagesVis from "../voyages/VoyagesVis.client";
import Variables from "./Variables";
import type { ReactElement } from "react";
import { useResizeObserver } from "~/hooks";
import ScrollingVoyageVis from "./ScrollingVoyageVis";
import PullQuote from "~/components/layout/PullQuote";

const minScrollProgress = 16;
const fullWidthSlides = [0, 3, 12, 13, 14, 15, 16, 17, 18, 21, 22];

const VoyageScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const { windowSize } = useResizeObserver();
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollProgress > minScrollProgress && scrollProgress % 1 > 0.5) {
      setSlideIndex(Math.ceil(scrollProgress) - minScrollProgress);
    } else if (scrollProgress <= minScrollProgress + 0.5) {
      setSlideIndex(0);
    }
  }, [scrollProgress]);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      steps={steps}
      bgColor="dataSecondary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
    >
      <div className={`sticky h-screen -top-0 overflow-hidden`}>
        <div className="flex flex-col-reverse md:flex-none md:grid grid-cols-2 justify-items-center">
          <div className="h-screen w-full md:w-3/4 my-auto md:col-start-2 relative">
            <div></div>
            {/* Slide 5: Romi Morrison quote (HTML overlay) */}
            <div
              className="absolute top-[22%] left-0 right-0 px-6 md:px-0 md:right-auto md:left-0 md:w-[28rem] transition-opacity duration-1000 pointer-events-none"
              style={{ opacity: slideIndex === 6 ? 1 : 0 }}
            >
              <PullQuote
                quote={`Fisk's "representation [of the river] is one of unbridled tangles, and recursively looped waterways that flow, spread, and interrupt each other, a cacophony of effusion, a watery din."`}
                subquote={`— Romi Morrison, "Gaps between the digits: On the fleshy unknowns of the HUMAN" (2019)`}
                borderColor="#8C20E1"
              />
            </div>
            {/* Slide 20: Kevin Quashie quote (HTML overlay) */}
            <div
              className="absolute top-[22%] left-0 right-0 px-6 md:px-0 md:right-auto md:left-0 md:w-[28rem] transition-opacity duration-1000 pointer-events-none"
              style={{ opacity: slideIndex === 20 ? 1 : 0 }}
            >
              <PullQuote
                quote={`This argument for quiet aims to give up resistance as a framework in search of what is lost in its all-encompassing reach.`}
                subquote={`— Kevin Quashie, "The Sovereignty of Quiet: Beyond Resistance in Black Culture" p5. (2012)`}
                borderColor="#8C20E1"
              />
            </div>
            <svg
              viewBox="0 0 329 747"
              width={
                windowSize.width
                  ? windowSize.width < 768
                    ? windowSize.width * 0.9
                    : windowSize.width * 0.45
                  : 300
              }
              className=" md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0 absolute left-[5%] md:left-auto md:right-0"
            >
              {/* 1 */}
              <image
                // x={-50}
                y="15%"
                width="80%"
                href={`/images/missing/PLACEHOLDERquery.jpg`}
                // href={`/images/data/${figures["PLACEHOLDERquery"].fileName}.jpg`}
                className={`absolute scale-100 md:scale-125 transition-opacity duration-1000 opacity-${
                  slideIndex === 1 ? 100 : 0
                }`}
              />
              {/* 2 */}
              <image
                y="25%"
                width="100%"
                href={`/images/missing/PLACEHOLDERquery2.jpg`}
                // href={`/images/data/${figures["PLACEHOLDERquery2"].fileName}.jpg`}
                className={`absolute scale-100 md:scale-125 transition-opacity duration-1000 opacity-${
                  slideIndex === 2 ? 100 : 0
                }`}
              />
              {/* 3 */}
              <g
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 4 ? 100 : 0
                }`}
              >
                <Variables />
              </g>
              {/* 4 */}
              <image
                x={0}
                y="20%"
                width="100%"
                href={`/images/data/${figures["0106-fisk"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 5 ? 100 : 0
                }`}
              />
              {/* 19 */}
              <image
                x={0}
                y="25%"
                width="100%"
                href={`/images/data/${figures["0105-narrative"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 19 ? 100 : 0
                }`}
              />
              <VoyageExample slideIndex={slideIndex} />
            </svg>
          </div>
        </div>
        <ScrollingVoyageVis
          scrollProgress={scrollProgress}
          slideIndex={slideIndex}
        />
        <ClientOnly>
          <>
            <div className="absolute top-4 md:top-18 mt-8 scale-90">
              <VoyagesVis
                className={`${
                  (slideIndex >= 17 && slideIndex <= 18) ||
                  (scrollProgress >= 36.4 && scrollProgress <= 36.7)
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                id="all-not-full-color-voyage"
                allVoyages={true}
                fullColor={false}
                startYear={1708}
                endYear={1719}
                showSlider={false}
              />
            </div>
            <div className="absolute top-4 md:top-18 mt-8 scale-90">
              <VoyagesVis
                className={`${
                  slideIndex === 21 && scrollProgress >= 36.7
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                id="all-full-color"
                allVoyages={true}
                fullColor={true}
                startYear={1708}
                endYear={1719}
                showSlider={false}
              />
            </div>
          </>
        </ClientOnly>
      </div>

      <div
        ref={steps}
        className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96 md:w-full"
      >
        {triggers.map((trigger, index) => {
          return (
            <div
              key={`voyageScrollytell-${trigger.key}`}
              data-step={index}
              className={`pointer-events-none step text-xl p-5 md:px-20 relative w-auto ${
                fullWidthSlides.includes(index)
                  ? "md:w-full md:px-52"
                  : "md:w-1/2"
              } ${
                index + 1 === triggers.length
                  ? "min-h-screen"
                  : "min-h-screen md:mb-64"
              } text-${accentTextColor}`}
            >
              <div className="bg-dataSecondary-translucent p-3 md:p-12">
                {trigger}
              </div>
            </div>
          );
        })}
      </div>
    </ScrollytellWrapper>
  );
};

export default VoyageScrollytell;
