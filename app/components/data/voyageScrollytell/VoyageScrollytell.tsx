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

const minScrollProgress = 16;
const fullWidthSlides = [0, 3, 12, 13, 14, 15, 16, 17, 18, 21, 22];

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
              className=" md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0 absolute left-[25%] md:left-auto md:right-0"
            >
              {/* 1 */}
              <image
                x={-50}
                y="15%"
                width="100%"
                href={`/images/data/${figures["PLACEHOLDERquery"].fileName}.jpg`}
                className={`absolute scale-100 md:scale-125 transition-opacity duration-1000 opacity-${
                  slideIndex === 1 ? 100 : 0
                }`}
              />
              {/* 2 */}
              <image
                x={-50}
                y="25%"
                width="100%"
                href={`/images/data/${figures["PLACEHOLDERquery2"].fileName}.jpg`}
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
                href={`/images/data/${figures["fisk-plate22sheet09"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 5 ? 100 : 0
                }`}
              />
              {/* 5 */}
              <g
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 6 ? 100 : 0
                }`}
              >
                <line
                  x1={0}
                  x2={0}
                  y1={235}
                  y2={470}
                  strokeWidth={3}
                  stroke="#8C20E1"
                />

                <text fontSize={20} y={250} className="font-neueMontreal block">
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
                  y={420}
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

              {/* 19 */}
              <image
                x={0}
                y="25%"
                width="100%"
                href={`/images/data/${figures["equiano-narrative"].fileName}.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 19 ? 100 : 0
                }`}
              />

              {/* 20 */}
              <g
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 20 ? 100 : 0
                }`}
              >
                <line
                  x1={0}
                  x2={0}
                  y1={235}
                  y2={414}
                  strokeWidth={3}
                  stroke="#8C20E1"
                />

                <text fontSize={20} y={250} className="font-neueMontreal block">
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
                  y={370}
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
              <VoyageExample slideIndex={slideIndex} />
            </svg>
          </div>
        </div>
        <ClientOnly>
          <>
            <div className="absolute top-4 md:top-18 mt-8 scale-90">
              <VoyagesVis
                className={`${slideIndex === 12 ? "opacity-100" : "opacity-0"}`}
                id="all-voyage"
                allVoyages={true}
                fullColor={true}
                startYear={1565}
                endYear={1858}
                showSlider={false}
              />
            </div>
            <div className="absolute top-4 md:top-18 mt-8 scale-90">
              <VoyagesVis
                className={`${
                  slideIndex >= 13 && slideIndex <= 16
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                id="zoomed-voyage"
                allVoyages={false}
                fullColor={true}
                startYear={1708}
                endYear={1719}
                showSlider={false}
              />
            </div>
            <div className="absolute top-4 md:top-18 mt-8 scale-90">
              <VoyagesVis
                className={`${
                  slideIndex >= 17 && slideIndex <= 18
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
                className={`${slideIndex === 21 ? "opacity-100" : "opacity-0"}`}
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
              } md:mb-64 ${
                index + 1 === triggers.length ? "h-auto" : "h-screen"
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
