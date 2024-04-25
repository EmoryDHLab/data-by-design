import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ClientOnly } from "remix-utils";
import Picture from "~/components/layout/Picture";
import PullQuote from "~/components/PullQuote";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/brooks.json";
import FiskColors from "./FiskColors";
import VoyageExample from "../voyages/VoyageExample";
import VoyagesVis from "../voyages/VoyagesVis.client";
import ScrollingVoyageVis from "./ScrollingVoyageVis";
import Variables from "./Variables";
import type { ReactElement } from "react";

const minScrollProgress = 16;
const BACKGROUND = [224, 220, 242];
const initialStartYear = 1565;
const initialEndYear = 1865;

const VoyageScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
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
    console.log("🚀 ~ VoyageScrollytell ~ scrollProgress:", scrollProgress);
  }, [scrollProgress]);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      steps={steps}
      bgColor="brooksSecondary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
    >
      <div className={`sticky h-screen top-24`}>
        <div className="grid grid-cols-2 justify-items-center">
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
                figure={figures["query"]}
                className={`drop-shadow-none p-6`}
              />
            </div>
            {/* 2 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 1 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["query2"]}
                className={`drop-shadow-none p-6`}
              />
            </div>
            {/* 3 */}
            <div
              className={`absolute top-[6%] transition-opacity duration-1000 opacity-${
                slideIndex === 2 ? 100 : 0
              }`}
            >
              <div className="p-8 h-[75vh] content-center ">
                <Variables />
              </div>
            </div>

            {/* 4 */}
            <div
              className={`absolute top-[6%] transition-opacity duration-1000 opacity-${
                slideIndex === 3 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["image23"]}
                className={`drop-shadow-none h-[75vh]`}
              />
            </div>
            {/* 5 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 4 ? 100 : 0
              }`}
            >
              <div className="p-8 h-2/5 grid content-center md:mt-56">
                <PullQuote
                  title={
                    'Fisk\'s "representation [of the river] is one of unbridled tangles, and recursively looped waterways that flow, spread, and interrupt each other, a cacophony of effusion, a watery din."'
                  }
                  subtitle={
                    '— Romi Morrison, "Gaps between the digits: On the fleshy unknowns of  the HUMAN" (2019)'
                  }
                />
              </div>
            </div>
            {/* 8 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 7 ? 100 : 0
              }`}
            >
              <div className="p-8 h-[75vh] content-center ">
                <VoyageExample />
              </div>
            </div>
            {/* 15 */}
            <div
              className={`absolute transition-opacity duration-1000 top-[10%] opacity-${
                slideIndex === 15 ? 100 : 0
              }`}
            >
              <Picture
                figure={figures["autobiographyPLACEHOLDER"]}
                className={`drop-shadow-none p-10`}
              />
            </div>
            {/* 16 */}
            <div
              className={`absolute transition-opacity duration-1000 opacity-${
                slideIndex === 16 ? 100 : 0
              }`}
            >
              <div className="p-8 h-2/5 grid content-center md:mt-56">
                <PullQuote
                  title="This argument for quiet aims to give up resistance as a framework in search of what is lost in its all-encompassing reach."
                  subtitle='— Kevin Quashie, "The Sovereignty of Quiet: Beyond Resistance in Black Culture" p5. (2012)'
                />
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div
          className={`absolute -top-6 right-0 transition-opacity duration-1000 opacity-${
            slideIndex === 5 ? 100 : 0
          }`}
        >
          <FiskColors />
        </div>

        {/* 6 */}
        <div
          className={`absolute -top-4 ml-[70vw] transition-opacity duration-1000 opacity-${
            slideIndex === 6 ? 100 : 0
          }`}
        >
          <ClientOnly>
            {() => (
              <VoyagesVis
                id="sample-voyages"
                startYear={1587}
                endYear={1589}
                showSlider={false}
                allVoyages
                background={BACKGROUND}
                fullColor={true}
                heightAdjust={1}
              />
            )}
          </ClientOnly>{" "}
        </div>

        {/* 8 */}
        <div
          className={`absolute -top-4 transition-opacity duration-1000 opacity-${
            slideIndex === 8 ? 100 : 0
          }`}
        >
          <ClientOnly>
            {() => (
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
            )}
          </ClientOnly>
          <div className="absolute top-28 text-center w-screen mx-auto font-dubois text-xl">
            <span className="bg-offwhite py-6 px-16">Begin Voyage</span>
          </div>
          <div className="absolute bottom-64 text-center w-screen mx-auto font-dubois text-xl">
            <span className="bg-offwhite py-6 px-16">End Voyage</span>
          </div>
          <div className="absolute top-[40vh] left-32 text-center mx-auto font-dubois text-xl">
            <span className="bg-offwhite py-6 px-16">1565</span>
          </div>
          <div className="absolute top-[40vh] right-32 text-center mx-auto font-dubois text-xl">
            <span className="bg-offwhite py-6 px-16">1858</span>
          </div>
        </div>

        {/* 9 - 12 */}
        <div
          className={`absolute top-4 transition-opacity duration-1000 opacity-${
            slideIndex >= 9 && slideIndex <= 12 ? 100 : 0
          }`}
        >
          <ScrollingVoyageVis scrollProgress={scrollProgress} />
        </div>

        {/* 13, 17 */}
        <div
          className={`absolute top-4 transition-opacity duration-1000 opacity-${
            (slideIndex >= 12 && slideIndex <= 13) ||
            (scrollProgress >= 32 && scrollProgress <= 33)
              ? 100
              : 0
          }`}
        >
          <ClientOnly>
            {() => (
              <VoyagesVis
                id="scrolling-voyage-all"
                allVoyages={true}
                fullColor={false}
                startYear={1756}
                endYear={1766}
              />
            )}
          </ClientOnly>
        </div>
        {/* 18 */}
        <div
          className={`absolute top-4 transition-opacity duration-1000 opacity-${
            scrollProgress >= 32.85 && scrollProgress <= 33.3 ? 100 : 0
          }`}
        >
          <ClientOnly>
            {() => (
              <VoyagesVis
                id="all-full-color-1756"
                startYear={1756}
                endYear={1766}
                showSlider={true}
                allVoyages={true}
                fullColor={true}
              />
            )}
          </ClientOnly>
        </div>
        <div
          className={`absolute -top-4 transition-opacity duration-1000 opacity-${
            scrollProgress >= 33.3 ? 100 : 0
          }`}
        >
          <ClientOnly>
            {() => (
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
            )}
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
              className={`pointer-events-none step text-xl p-5 md:px-20 relative w-auto md:w-1/2 ${
                index + 1 === triggers.length ? "h-[50vh]" : "h-screen"
              } text-${accentTextColor}`}
            >
              <p className="bg-brooksSecondary-translucent p-3 md:p-12">
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
