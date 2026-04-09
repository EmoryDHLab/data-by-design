import { useContext, useEffect, useRef, useState } from "react";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import { ScrollytellContext } from "~/scrollytellContext";
import { ChapterContext } from "~/chapterContext";
import { TFocusShape } from "~/types/scrollytellTypes";
import type { ReactElement } from "react";

const chartHeight = 1024;
const chartWidth = 820;
const quoteSize = 32;
const quoteX = 25;
const quoteHeight = (quoteSize + 10) * 6 + quoteSize;
const quoteTopSpacing = (chartHeight - quoteHeight) / 2;

const ScrollytellOne = ({ triggers }: { triggers: ReactElement[] }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [focusShape, setFocusShape] = useState<TFocusShape>({
    x: 0,
    y: 0,
    width: chartWidth,
    height: chartHeight,
  });
  const steps = useRef<HTMLDivElement>(null);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);

  useEffect(() => {
    switch (true) {
      case scrollProgress >= 6 && scrollProgress <= 7:
        setFocusShape({
          x: 115,
          y: 800,
          width: 525,
          height: 110,
        });
        break;

      default:
        setFocusShape({ x: 0, y: 0, width: chartWidth, height: chartHeight });
        break;
    }
  }, [scrollProgress]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        bgColor={backgroundColor}
        stepClassName=".scrollytell-one-step"
      >
        <div
          className="flex flex-col md:flex-row justify-between"
          id="scrollytell-1"
        >
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-1/2 md:order-last bg-changePrimary">
            <div
              className={`h-[calc(100vh-32px)] my-auto flex flex-col mr-4 mt-8`}
            >
              <svg
                className="relative"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              >
                <mask id="scrollytell-one-mask">
                  {focusShape && (
                    <>
                      <rect
                        x={0}
                        y={0}
                        width={chartWidth}
                        height={chartHeight}
                        fill="white"
                        stroke="black"
                        fillOpacity={0.1}
                        className="transition-all duration-1000"
                      />
                      <rect
                        {...focusShape}
                        fill="white"
                        className="transition-all duration-1000"
                      />
                    </>
                  )}
                </mask>

                <image
                  x={(chartWidth - 752) / 2}
                  width={752}
                  height={chartHeight}
                  className={`scale-90 origin-center drop-shadow-md ${
                    (scrollProgress >= 0 && scrollProgress <= 1) ||
                    (scrollProgress >= 6 && scrollProgress <= 7)
                      ? "opacity-100"
                      : "opacity-0"
                  } ${
                    scrollProgress >= 6 && scrollProgress <= 7
                      ? "-translate-y-[36rem] scale-125"
                      : "translate-y-0 scale-100"
                  } transition-all duration-1000`}
                  href="https://iip.readux.io/iiif/3/dxd%2fchange/alumni.tiff/44,53,1646,2636/full/0/default.jpg"
                  mask="url(#scrollytell-one-mask"
                />

                <image
                  width={chartWidth}
                  height={chartHeight}
                  className={`scale-90 drop-shadow-md ${
                    scrollProgress >= 1 && scrollProgress <= 2
                      ? "opacity-100"
                      : "opacity-0"
                  } 
                      transition-all duration-1000 origin-center`}
                  href="/images/change/0525-899-series.jpg"
                />

                <image
                  x={(chartWidth - 752) / 2}
                  width={752}
                  height={chartHeight}
                  className={`scale-90 origin-center drop-shadow-md ${
                    scrollProgress >= 2 && scrollProgress <= 4
                      ? "opacity-100"
                      : "opacity-0"
                  } transition-opacity duration-1000`}
                  href="/images/change/0526-data-table.jpg"
                />

                <image
                  x={(chartWidth - 752) / 2}
                  width={752}
                  height={chartHeight}
                  className={`scale-90 origin-center drop-shadow-md ${
                    scrollProgress >= 4 && scrollProgress <= 5
                      ? "opacity-100"
                      : "opacity-0"
                  } transition-opacity duration-1000`}
                  href="https://iip.readux.io/iiif/3/dxd%2fchange/0501-paris-expo-loc.tiff/8,131,710,750/full/0/default.jpg"
                />

                <g
                  className={`${
                    scrollProgress >= 7 && scrollProgress <= 8
                      ? "opacity-100"
                      : "opacity-0"
                  } transition-opacity duration-1000`}
                >
                  <image
                    x={(chartWidth - 752) / 2}
                    width={752}
                    height={chartHeight}
                    className={`drop-shadow-md scale-90 origin-center`}
                    href="https://iip.readux.io/iiif/3/dxd%2fchange/catalog.tiff/56,239,1475,2275/full/0/default.jpg"
                  />
                  <rect
                    width={555}
                    height={40}
                    x={125}
                    y={885}
                    className="fill-peoplePrimary/25"
                  />
                </g>
                <image
                  x={(chartWidth - 752) / 2}
                  width={752}
                  height={chartHeight}
                  className={`scale-90 origin-center drop-shadow-md ${
                    scrollProgress >= 12 && scrollProgress <= 13
                      ? "opacity-100"
                      : "opacity-0"
                  } transition-opacity duration-1000 scale-110 origin-center drop-shadow-md`}
                  href="/images/change/senior_class.png"
                />
                <g
                  className={`transition-opacity duration-1000 ${
                    scrollProgress >= 13 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <line
                    x1={0}
                    x2={0}
                    y1={quoteTopSpacing}
                    y2={quoteHeight + quoteTopSpacing}
                    strokeWidth={10}
                    className="stroke-peoplePrimary"
                  />

                  <text
                    fontSize={quoteSize}
                    y={quoteTopSpacing}
                    className="font-neueMontreal fill-offwhite block tracking-wide"
                    dominantBaseline="hanging"
                  >
                    <tspan x={quoteX} dy={0}>
                      “Every historian of the multitude, the
                    </tspan>
                    <tspan x={quoteX} dy={quoteSize + 10}>
                      dispossessed, the subaltern, and the enslaved
                    </tspan>
                    <tspan x={quoteX} dy={quoteSize + 10}>
                      is forced to grapple with power and authority of
                    </tspan>
                    <tspan x={quoteX} dy={quoteSize + 10}>
                      the archive and the limits it sets on what can be
                    </tspan>
                    <tspan x={quoteX} dy={quoteSize + 10}>
                      known, whose perspective matters, and who is
                    </tspan>
                    <tspan x={quoteX} dy={quoteSize + 10}>
                      endowed with the gravity and authority of
                    </tspan>
                    <tspan x={quoteX} dy={quoteSize + 10}>
                      historical actor .”
                    </tspan>
                  </text>
                </g>
              </svg>{" "}
            </div>
          </div>
          <div
            ref={steps}
            className={`bias-full w-full md:bias-1/2 md:w-2/5 relative bg-changePrimary`}
          >
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={trigger.key}
                  data-step={index}
                  className={`scrollytell-one-step h-screen ${
                    index === 6 || index === 9 ? "" : "ps-8 md:ps-20"
                  } text-xl text-offwhite`}
                >
                  {trigger}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
};

export default ScrollytellOne;
