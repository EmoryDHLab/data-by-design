import { Suspense, useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/data.json";
import VoyageExample from "../voyages/VoyageExample";
import Variables from "./Variables";
import { useResizeObserver } from "~/hooks";
import ScrollingVoyageVis from "./ScrollingVoyageVis";
import PullQuote from "~/components/layout/PullQuote";
import { missing } from "~/data/figures/missing";
import VoyagesVis from "../voyages/VoyagesVis.client";
import ClientOnly from "~/components/ClientOnly";
import type { ReactElement } from "react";

const minScrollProgress = 0;
const fullWidthSlides = [0, 12, 13, 14, 17, 18, 21, 22];

const VOYAGE_EXAMPLE_BOUNDS = { x: 93, y: 146, width: 443, height: 390 };

// Same idea for Variables, measured via getBBox() on its root <g>.
const VARIABLES_BOUNDS = { x: 0, y: 0, width: 314, height: 530 };

// Centers a component's fixed-coordinate content bounds in a width x height
// viewBox, scaled up (with a 10% margin) to fill as much of it as possible
// without clipping.
function getCenteredTransform(
  bounds: { x: number; y: number; width: number; height: number },
  width: number,
  height: number,
) {
  const scale =
    width && height
      ? Math.min(width / bounds.width, height / bounds.height) * 0.9
      : 1;
  const translateX = width / 2 - (bounds.x + bounds.width / 2) * scale;
  const translateY = height / 2 - (bounds.y + bounds.height / 2) * scale;
  return `translate(${translateX}, ${translateY}) scale(${scale})`;
}

const pullQuotes = [
  {
    slideIndex: 4,
    quote: `Quisquam sint modi voluptatem aut perferendis voluptatum ipsa.`,
    subquote: `- Stephanie Smallwood`,
  },
  // {
  //   slideIndex: 6,
  //   quote: `Fisk's "representation [of the river] is one of unbridled tangles, and recursively looped waterways that flow, spread, and interrupt each other, a cacophony of effusion, a watery din."`,
  //   subquote: `— Romi Morrison, "Gaps between the digits: On the fleshy unknowns of the HUMAN" (2019)`,
  // },
  {
    slideIndex: 16,
    quote: `This argument for quiet aims to give up resistance as a framework in search of what is lost in its all-encompassing reach.`,
    subquote: `— Kevin Quashie, "The Sovereignty of Quiet: Beyond Resistance in Black Culture" p5. (2012)`,
  },
];

const VoyageScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const { windowSize } = useResizeObserver();
  const steps = useRef<HTMLDivElement>(null);

  const width = windowSize.width
    ? windowSize.width < 768
      ? windowSize.width * 0.9
      : windowSize.width * 0.45
    : 300;
  const height = windowSize.height ? windowSize.height - 80 : 742;

  let nextSlideIndex = slideIndex;

  if (scrollProgress > minScrollProgress && scrollProgress % 1 > 0.5) {
    nextSlideIndex = Math.ceil(scrollProgress) - minScrollProgress;
  } else if (scrollProgress <= minScrollProgress + 0.5) {
    nextSlideIndex = 0;
  }

  if (nextSlideIndex !== slideIndex) {
    setSlideIndex(nextSlideIndex);
  }

  const voyageExampleTransform = getCenteredTransform(
    VOYAGE_EXAMPLE_BOUNDS,
    width,
    height,
  );
  const variablesTransform = getCenteredTransform(
    VARIABLES_BOUNDS,
    width,
    height,
  );

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      steps={steps}
      bgColor="dataSecondary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
      stepClassName=".voyage-scrollytell-step"
    >
      <div className={`sticky h-screen -top-0 overflow-hidden`}>
        <div className="flex flex-col-reverse md:flex-none md:grid grid-cols-2 justify-items-center">
          <div className="h-screen w-full md:w-3/4 my-auto md:col-start-2 relative">
            {pullQuotes.map(({ slideIndex: quoteSlide, quote, subquote }) => (
              <div
                key={quoteSlide}
                className="absolute top-[22%] left-0 right-0 px-6 md:px-0 md:right-auto md:left-0 md:w-[28rem] transition-opacity duration-1000 pointer-events-none"
                style={{ opacity: slideIndex === quoteSlide ? 1 : 0 }}
              >
                <PullQuote
                  quote={quote}
                  subquote={subquote}
                  borderColor="#8C20E1"
                />
              </div>
            ))}
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full md:h-full flex"
            >
              {/* 1 */}
              <image
                href={`https://iiif.ecds.io/iiif/2/0106-outcome.tiff/1575,44,603,630/full/0/default.jpg`}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 1 ? 100 : 0
                }`}
              />
              {/* 2 */}
              <image
                href={`/images/chapters/${figures["0107-resistance"].fileName}.jpg`}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                // Covers both the step that names the "resistance" variable and
                // the one that enumerates its seven subcategories.
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 2 ? 100 : 0
                }`}
              />
              {/* 3 */}
              <g
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 3 ? 100 : 0
                }`}
                transform={variablesTransform}
              >
                <Variables />
              </g>
              {/* 4 */}
              <image
                x={0}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                href={`/images/chapters/${figures["0108-fisk"].fileName}.jpg`}
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 5 ? 100 : 0
                }`}
              />
              <image
                x={0}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                href={
                  "https://iiif.ecds.io/iiif/3/0102-equiano.tiff/full/max/0/default.jpg"
                }
                className={`duration-1000 transition-opacity ${
                  slideIndex === 15 ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* 19 */}
              <image
                x={0}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                href={`/images/chapters/${
                  missing("0105-narrative").fileName
                }.jpg`}
                className={`absolute transition-opacity duration-1000 ${
                  slideIndex >= 7 && slideIndex < 8
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
              <g transform={voyageExampleTransform}>
                <VoyageExample slideIndex={slideIndex} />
              </g>
            </svg>
          </div>
        </div>
        <ScrollingVoyageVis
          scrollProgress={scrollProgress}
          slideIndex={slideIndex}
        />
        <ClientOnly>
          <Suspense fallback={<></>}>
            <div className="absolute top-4 md:top-18 mt-8 scale-90">
              <VoyagesVis
                className={`${
                  slideIndex >= 17 && slideIndex < 18
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
                className={`${slideIndex >= 18 ? "opacity-100" : "opacity-0"}`}
                id="all-full-color"
                allVoyages={true}
                fullColor={true}
                startYear={1708}
                endYear={1719}
                showSlider={false}
              />
            </div>
          </Suspense>
        </ClientOnly>{" "}
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
              className={`pointer-events-none voyage-scrollytell-step text-xl p-5 md:px-20 relative w-auto ${
                fullWidthSlides.includes(index) ? "md:w-full" : "md:w-1/2"
              } ${
                index + 1 === triggers.length
                  ? "min-h-screen"
                  : "min-h-screen md:mb-64"
              } text-${accentTextColor}`}
            >
              {/* The full-width steps span the viewport, so the text box is
                  capped at the body measure to keep the lines readable. The
                  extra 6rem covers the box's own md:p-12 padding. */}
              <div
                className={`bg-dataSecondary-translucent p-3 md:p-12 ${
                  fullWidthSlides.includes(index)
                    ? "md:mx-auto md:max-w-[calc(68ch+6rem)]"
                    : ""
                }`}
              >
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
