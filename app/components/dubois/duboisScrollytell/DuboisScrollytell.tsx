import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { ReactElement } from "react";
import type { TFocusShape } from "~/types/scrollytellTypes";

const chartHeight = 900;
const chartWidth = 630;

const DuboisScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);
  const [focusShapeSize, setFocusShapeSize] = useState<TFocusShape>({
    x: 0,
    y: 0,
    width: chartWidth,
    height: chartHeight,
  });

  useEffect(() => {
    switch (true) {
      case scrollProgress >= 0.5 && scrollProgress <= 1.5:
        setFocusShapeSize({ x: 0, y: 160, width: chartWidth, height: 130 });
        break;
      case scrollProgress >= 1.5 && scrollProgress <= 2.5:
        setFocusShapeSize({ x: 190, y: 340, width: 250, height: 240 });
        break;
      case scrollProgress >= 2.5 && scrollProgress <= 5.5:
        setFocusShapeSize({ x: 0, y: 340, width: chartWidth, height: 240 });
        break;
      default:
        setFocusShapeSize({
          x: 0,
          y: 0,
          width: chartWidth,
          height: chartHeight,
        });
        break;
    }
  }, [scrollProgress]);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      steps={steps}
      bgColor="duboisPrimary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
    >
      <div
        className={`flex flex-col md:flex-row justify-between`}
        id="scrollytell-1"
      >
        <div className="sticky p-8 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className={`max-h-[80vh] max-w-[90%] md:my-16 mx-auto bg-duboisPrimary`}
          >
            <g id="original-chart">
              <mask id="chart1-mask">
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
                  {...focusShapeSize}
                  fill="white"
                  className="transition-all duration-1000"
                />
              </mask>

              <image
                mask="url(#chart1-mask)"
                href="/images/dubois/ch5-12-series.jpg"
                className={`w-full transition-opacity duration-1000 opacity-${
                  (scrollProgress || 0) >= 0 && (scrollProgress || 0) <= 3
                    ? 100
                    : 0
                }`}
              />
              <rect
                {...focusShapeSize}
                fill="none"
                strokeWidth={
                  scrollProgress >= 1 && scrollProgress <= 3 ? 10 : 0
                }
                className="transition-all duration-1000 stroke-shanawdithitPrimary"
              />
            </g>
            <g id="catalog">
              <image
                y="10%"
                href="/images/dubois/1898-1899-catalog-data-table-cropped.jpg"
                className={`w-full transition-opacity duration-1000 opacity-${
                  (scrollProgress || 0) >= 3 && (scrollProgress || 0) <= 4
                    ? 100
                    : 0
                }`}
              />
            </g>
            <g
              id="alumni"
              className={`transition-opacity duration-1000 opacity-${
                (scrollProgress || 0) >= 4 && (scrollProgress || 0) <= 6
                  ? 100
                  : 0
              }`}
            >
              <image
                className="w-full"
                href="/images/dubois/1898-1899-catalog-alumni-page.jpg"
              />
              <g
                className={`w-full transition-opacity duration-1000 opacity-${
                  (scrollProgress || 0) >= 5 && (scrollProgress || 0) <= 6
                    ? 100
                    : 0
                }`}
              >
                <rect
                  x={102}
                  y={483}
                  width={163}
                  height={19}
                  fill="yellow"
                  fillOpacity={0.3}
                  strokeOpacity={0.5}
                  strokeWidth={0.5}
                  className="stroke-offblack"
                />
                <rect
                  x={102}
                  y={502}
                  width={163}
                  height={17}
                  fill="yellow"
                  fillOpacity={0.3}
                  strokeOpacity={0.5}
                  strokeWidth={0.5}
                  className="stroke-offblack"
                />
                <rect
                  x={102}
                  y={530}
                  width={163}
                  height={19}
                  fill="yellow"
                  fillOpacity={0.3}
                  strokeOpacity={0.5}
                  strokeWidth={0.5}
                  className="stroke-offblack"
                />
              </g>
            </g>
            <g
              id="google-sheet"
              className={`w-full transition-opacity duration-1000 opacity-${
                (scrollProgress || 0) >= 6 && (scrollProgress || 0) <= 7
                  ? 100
                  : 0
              }`}
            >
              <image
                y="12%"
                href="/images/dubois/screenshot-grad-google-sheet.jpg"
                className={`w-full`}
              />
            </g>
            <g
              id="chart1-pie"
              className={`w-full transition-opacity duration-1000 opacity-${
                (scrollProgress || 0) >= 7 && (scrollProgress || 0) <= 8
                  ? 100
                  : 0
              }`}
            >
              <image
                y="12%"
                href="/images/dubois/chart1-pie.jpg"
                className={`w-full`}
              />
            </g>
            <g
              id="chart1-hover"
              className={`w-full transition-opacity duration-1000 opacity-${
                (scrollProgress || 0) >= 8 && (scrollProgress || 0) <= 9
                  ? 100
                  : 0
              }`}
            >
              <image
                y="12%"
                href="/images/dubois/chart1-hover.jpg"
                className={`w-full`}
              />
            </g>
            <g
              id="chart1-full"
              className={`w-full transition-opacity duration-1000 opacity-${
                (scrollProgress || 0) >= 9 && (scrollProgress || 0) <= 11
                  ? 100
                  : 0
              }`}
            >
              <image
                y="12%"
                href="/images/dubois/chart1-full.jpg"
                className={`w-full`}
              />
            </g>
          </svg>
        </div>

        <div
          ref={steps}
          className="relative pointer-events-none md:mt-96 md:w-full"
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={`DuboisScrollytell-${trigger.key}`}
                data-step={index}
                className={`pointer-events-none step text-xl p-5 relative w-auto md:w-3/4 ${
                  index + 1 === triggers.length ? "h-[50vh]" : "h-screen"
                } text-${accentTextColor}`}
              >
                <p className="bg-duboisPrimary-translucent p-3 md:p-12 text-offblack md:text-offwhite">
                  {trigger}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollytellWrapper>
  );
};

export default DuboisScrollytell;
