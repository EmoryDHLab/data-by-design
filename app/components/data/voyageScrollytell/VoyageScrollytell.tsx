import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/data.json";
import VoyageExample from "../voyages/VoyageExample";
import Variables from "./Variables";
import { useResizeObserver } from "~/hooks";
import ScrollingVoyageVis from "./ScrollingVoyageVis";
import PullQuote from "~/components/layout/PullQuote";
import { missing } from "~/data/figures/missing";
import type { ReactElement } from "react";
import Axis from "../voyages/Axis";

const minScrollProgress = 16;
const fullWidthSlides = [0, 3, 12, 13, 14, 15, 16, 17, 18, 21, 22];

// VoyageExample has its own fixed coordinate space for the paths, and the
// annotation labels that show at different slideIndex values extend beyond
// its framed rect. Measured via getBBox() on the frame rect unioned with
// each unclipped annotation group (the internally clipped decorative paths
// are excluded - getBBox ignores clip-path, so including them would report
// their raw, never-actually-visible geometry). Used to center and scale it
// to fit the parent SVG's dynamic viewBox without clipping anything.
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
    slideIndex: 6,
    quote: `Fisk's "representation [of the river] is one of unbridled tangles, and recursively looped waterways that flow, spread, and interrupt each other, a cacophony of effusion, a watery din."`,
    subquote: `— Romi Morrison, "Gaps between the digits: On the fleshy unknowns of the HUMAN" (2019)`,
  },
  {
    slideIndex: 20,
    quote: `This argument for quiet aims to give up resistance as a framework in search of what is lost in its all-encompassing reach.`,
    subquote: `— Kevin Quashie, "The Sovereignty of Quiet: Beyond Resistance in Black Culture" p5. (2012)`,
  },
];

const VoyageScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const { windowSize } = useResizeObserver();
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(
      windowSize.width
        ? windowSize.width < 768
          ? windowSize.width * 0.9
          : windowSize.width * 0.45
        : 300,
    );
    setHeight(windowSize.height ? windowSize.height - 80 : 742);
  }, [windowSize]);

  useEffect(() => {
    if (scrollProgress > minScrollProgress && scrollProgress % 1 > 0.5) {
      setSlideIndex(Math.ceil(scrollProgress) - minScrollProgress);
    } else if (scrollProgress <= minScrollProgress + 0.5) {
      setSlideIndex(0);
    }
  }, [scrollProgress]);

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
                href={`/images/chapters/data/query.jpg`}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 1 ? 100 : 0
                }`}
              />
              {/* 2 */}
              <image
                href={`/images/chapters/missing.jpg`}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                // href={`/images/chapters/${figures["PLACEHOLDERquery2"].fileName}.jpg`}
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 2 ? 100 : 0
                }`}
              />
              {/* 3 */}
              <g
                className={`transition-opacity duration-1000 opacity-${
                  slideIndex === 4 ? 100 : 0
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
              {/* 19 */}
              <image
                x={0}
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                href={`/images/chapters/${
                  missing("0105-narrative").fileName
                }.jpg`}
                className={`absolute transition-opacity duration-1000 opacity-${
                  slideIndex === 19 ? 100 : 0
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
        {[
          {
            name: "voyage-not-full-color",
            alt: "Visualization of enslaving voyages from 1708 to 1719, muted except for the strands of voyages with documented resistance.",
            visible:
              (slideIndex >= 17 && slideIndex <= 18) ||
              (scrollProgress >= 36.4 && scrollProgress <= 36.7),
          },
          {
            name: "voyage-full-color",
            alt: "Visualization of enslaving voyages from 1708 to 1719, each strand colored by the nation that carried out the voyage.",
            visible: slideIndex === 21 && scrollProgress >= 36.7,
          },
        ].map(({ name, alt, visible }) => (
          <div key={name} className="absolute top-4 md:top-18 mt-8 scale-90">
            <picture
              className={`block w-screen transition-opacity duration-1000 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <source
                srcSet={`/images/voyages/${name}.webp`}
                type="image/webp"
              />
              <img
                src={`/images/voyages/${name}.jpg`}
                alt={alt}
                className="h-auto mx-auto"
              />
            </picture>
            <div
              className={`block w-[90%] transition-opacity duration-1000 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Axis
                yearRange={[1708, 1719]}
                width={(windowSize.width ?? 400) - 128}
                color="black"
                widthAdjustment={45}
              />
            </div>
          </div>
        ))}
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
