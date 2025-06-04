import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ClientOnly from "~/components/ClientOnly";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/data.json";
import FiskColors from "./FiskColors";
import VoyageExample from "../voyages/VoyageExample";
import VoyagesVis from "../voyages/VoyagesVis.client";
import ScrollingVoyageVis from "./ScrollingVoyageVis";
import Variables from "./Variables";
import type { ReactElement } from "react";
import { useResizeObserver } from "~/hooks";

const minScrollProgress = 16;
const BACKGROUND = [224, 220, 242];
const initialStartYear = 1565;
const initialEndYear = 1865;

const VoyageScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const { windowSize } = useResizeObserver();
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
      bgColor="dataSecondary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
    >
      <div className={`sticky h-screen -top-0 overflow-hidden`}>
        <div className="flex flex-col-reverse md:flex-none md:grid grid-cols-2 justify-items-center">
          <div className="h-screen w-3/4 my-auto md:col-start-2">
            <div></div>
            <svg
              viewBox="0 0 329 747"
              width={windowSize.width ? windowSize.width * 0.45 : 300}
              className=" md:h-full flex md:ml-6 p-3 md:p-6 pt-10 md:pt-0 absolute left-[25%] md:left-auto md:right-0"
            >
              {/* 1 */}
              <image
                x={0}
                y="25%"
                width="100%"
                href={`/images/data/${figures["PLACEHOLDERquery"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 0 ? 100 : 0
                }`}
              />
              {/* 2 */}
              <image
                x={0}
                y="25%"
                width="100%"
                href={`/images/data/${figures["PLACEHOLDERquery2"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 1 ? 100 : 0
                }`}
              />
              {/* 3 */}
              <g
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 2 ? 100 : 0
                }`}
              >
                <Variables />
              </g>
              {/* 4 */}
              <image
                x={0}
                y="20%"
                width="100%"
                href={`/images/data/${figures["fisk-plate22sheet09"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 3 ? 100 : 0
                }`}
              />
              {/* 5 */}
              <g
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 4 ? 100 : 0
                }`}
              >
                <line
                  x1={0}
                  x2={0}
                  y1={285}
                  y2={500}
                  strokeWidth={3}
                  stroke="#8C20E1"
                />

                <text fontSize={20} y={300} className="font-neueMontreal block">
                  <tspan x={10} dy={0}>
                    Fisk's "representation &#91;of the
                  </tspan>
                  <tspan x={10} dy={21}>
                    river&#93; is one of unbridled
                  </tspan>
                  <tspan x={10} dy={21}>
                    tangles, and recursively looped
                  </tspan>
                  <tspan x={10} dy={21}>
                    waterways that flow, spread,
                  </tspan>
                  <tspan x={10} dy={21}>
                    and interrupt each other, a
                  </tspan>
                  <tspan x={10} dy={21}>
                    cacophony of effusion, a watery
                  </tspan>
                  <tspan x={10} dy={21}>
                    din."
                  </tspan>
                </text>
                <text
                  fontSize={18}
                  x={5}
                  y={450}
                  className="font-neueMontrealLight font-light"
                >
                  <tspan x={10} dy={0}>
                    — Romi Morrison, "Gaps between
                  </tspan>
                  <tspan x={10} dy={20}>
                    the digits: On the fleshy unknowns
                  </tspan>
                  <tspan x={10} dy={20}>
                    of the HUMAN" (2019)
                  </tspan>
                </text>
              </g>

              {/* 16 */}
              <image
                x={0}
                y="33%"
                width="100%"
                href={`/images/data/${figures["equiano-narrative"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 15 ? 100 : 0
                }`}
              />

              {/* 17 */}
              <g
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 16 ? 100 : 0
                }`}
              >
                <line
                  x1={0}
                  x2={0}
                  y1={285}
                  y2={464}
                  strokeWidth={3}
                  stroke="#8C20E1"
                />

                <text fontSize={20} y={300} className="font-neueMontreal block">
                  <tspan x={10} dy={0}>
                    This argument for quiet aims
                  </tspan>
                  <tspan x={10} dy={21}>
                    to give up resistance as a
                  </tspan>
                  <tspan x={10} dy={21}>
                    framework in search of what
                  </tspan>
                  <tspan x={10} dy={21}>
                    is lost in its all-encompassing
                  </tspan>
                  <tspan x={10} dy={21}>
                    reach.
                  </tspan>
                </text>
                <text
                  fontSize={18}
                  x={5}
                  y={420}
                  className="font-neueMontrealLight font-light"
                >
                  <tspan x={10} dy={0}>
                    — Kevin Quashie, "The
                  </tspan>
                  <tspan x={10} dy={20}>
                    Sovereignty of Quiet: Beyond
                  </tspan>
                  <tspan x={10} dy={20}>
                    Resistance in Black Culture" p5. (2012)
                  </tspan>
                </text>
              </g>
            </svg>
            {/* 6 */}
            <FiskColors
              className={`absolute -top-[25%] md:top-1 left-[25%] md:left-auto md:right-0 transition-opacity duration-1000 opacity-${
                slideIndex === 5 ? 100 : 0
              }`}
            />
            {/* 7 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 6 ? 100 : 0
              }`}
            >
              <ClientOnly>
                <VoyagesVis
                  id="sample-voyages"
                  startYear={1587}
                  endYear={1589}
                  showSlider={false}
                  allVoyages
                  background={BACKGROUND}
                  fullColor
                  heightAdjust={1}
                  showAxis={false}
                />
              </ClientOnly>{" "}
            </div>
            {/* 8 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 7 ? 100 : 0
              }`}
            >
              <div className="p-8 h-screen content-center ">
                <VoyageExample />
              </div>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div
          className={`absolute -top-4 md:top-0 transition-opacity duration-1000 opacity-${
            slideIndex === 8 ? 100 : 0
          }`}
        >
          <ClientOnly>
            <VoyagesVis
              startYear={initialStartYear}
              endYear={initialEndYear}
              background={BACKGROUND}
              showSlider={false}
              showAxis={false}
              allVoyages={false}
              id="resistance-only"
              heightAdjust={1}
            />
          </ClientOnly>
          <div className="absolute top-28 text-center w-screen mx-auto font-power text-xl z-10">
            <span className="bg-offwhite py-2 px-8">Begin Voyage</span>
          </div>
          <div className="absolute bottom-28 text-center w-screen mx-auto font-power text-xl z-10">
            <span className="bg-offwhite py-2 px-8">End Voyage</span>
          </div>
          <div className="absolute top-[40vh] left-12 text-center mx-auto font-power text-xl z-10">
            <span className="bg-offwhite py-2 px-8">1565</span>
          </div>
          <div className="absolute top-[40vh] right-12 text-center mx-auto font-power text-xl z-10">
            <span className="bg-offwhite py-2 px-8">1858</span>
          </div>
        </div>

        {/* 9 - 12 */}
        <div
          className={`absolute top-4 md:top-18 transition-opacity duration-1000 opacity-${
            slideIndex >= 9 && slideIndex <= 12 ? 100 : 0
          }`}
        >
          <ScrollingVoyageVis scrollProgress={scrollProgress} />
        </div>

        {/* 13, 17 */}
        <div className={`absolute top-4 md:top-18`}>
          <ClientOnly>
            <VoyagesVis
              id="scrolling-voyage-all"
              allVoyages={true}
              fullColor={false}
              startYear={1756}
              endYear={1766}
              className={`transition-opacity duration-1000 opacity-${
                (slideIndex >= 12 && slideIndex <= 13) ||
                (scrollProgress >= 32 && scrollProgress <= 33)
                  ? 100
                  : 0
              }`}
            />
          </ClientOnly>
        </div>
        {/* 18 */}
        <div className={`absolute top-4 md:top-18`}>
          <ClientOnly>
            <VoyagesVis
              id="all-full-color-1756"
              startYear={1756}
              endYear={1766}
              showSlider={true}
              allVoyages={true}
              fullColor={true}
              className={`transition-opacity duration-1000 opacity-${
                scrollProgress >= 32.85 && scrollProgress <= 33.3 ? 100 : 0
              }`}
            />
          </ClientOnly>
        </div>
        <div
          className={`absolute -top-4 transition-opacity duration-1000 opacity-${
            scrollProgress >= 33.3 ? 100 : 0
          }`}
        >
          <ClientOnly>
            <VoyagesVis
              startYear={1776}
              endYear={1786}
              background={[224, 220, 242]}
              showSlider={false}
              showAxis={false}
              id="scrollytell-allVoyageContainer"
              heightAdjust={1.02}
              widthAdjust={1}
            />
          </ClientOnly>
        </div>
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
              className={`pointer-events-none step text-xl p-5 md:px-20 relative w-auto md:w-1/2 md:mb-64 ${
                index + 1 === triggers.length ? "h-screen" : "h-screen"
              } text-${accentTextColor}`}
            >
              <p className="bg-dataSecondary-translucent p-3 md:p-12">
                {trigger}
              </p>
            </div>
          );
        })}
      </div>
    </ScrollytellWrapper>
  );
};

export default VoyageScrollytell;
