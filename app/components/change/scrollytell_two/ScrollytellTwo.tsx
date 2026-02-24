import { useContext, useEffect, useRef, useState } from "react";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import { ScrollytellContext } from "~/scrollytellContext";
import type { ReactElement } from "react";
import { ChapterContext } from "~/chapterContext";
import { TFocusShape } from "~/types/scrollytellTypes";
import StudentChartOneV2 from "./StudentChartOneV2";
import Viz2 from "../Viz2";
import People from "./People";
import Legend from "./Legend";

const chartHeight = 1024;
const chartWidth = 820;

const ScrollytellTwo = ({ triggers }: { triggers: ReactElement[] }) => {
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
      case scrollProgress >= 0.5 && scrollProgress <= 1.25:
        setFocusShape({
          x: -60,
          y: 200,
          width: chartWidth,
          height: 200,
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
        stepClassName=".scrollytell-two-step"
      >
        <div
          className="flex flex-col md:flex-row justify-between"
          id="scrollytell-2"
        >
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-1/2 md:order-last bg-offwhite">
            <div
              className={`h-[calc(100vh-32px)] my-auto flex flex-col mr-4 mt-8`}
            >
              <div
                className={`absolute translate-y-18 transition-opacity duration-1000 ${
                  scrollProgress >= 10.25 ? "opacity-100" : "opacity-0"
                }`}
              >
                <Viz2 interactive={false} showLegend={false} />
              </div>
              <svg
                className="relative"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              >
                <mask id="scrollytell-two-mask">
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
                  width={chartWidth}
                  height={chartHeight}
                  className={`scale-90 ${
                    scrollProgress >= 0 && scrollProgress <= 1.25
                      ? "opacity-100"
                      : "opacity-0"
                  } ${
                    scrollProgress >= 0.5
                      ? "scale-[2.5] translate-y-80"
                      : "scale-100 translate-y-0"
                  }
                      transition-all duration-1000 origin-center`}
                  href="/images/change/0525-899-series.jpg"
                  mask="url(#scrollytell-two-mask"
                />
                {/* {focusShape && (
                  <rect
                    {...focusShape}
                    fill="none"
                    strokeWidth={10}
                    className={`transition-all duration-1000 stroke-peoplePrimary`}
                  />
                )} */}

                <image
                  x={34}
                  width={752}
                  height={chartHeight}
                  className={`scale-90 ${
                    scrollProgress >= 1.25 && scrollProgress <= 2.25
                      ? "opacity-100"
                      : "opacity-0"
                  } transition-opacity duration-1000`}
                  href="/images/change/graduates.jpg"
                />
                <StudentChartOneV2
                  width={chartWidth}
                  height={chartHeight}
                  className={
                    scrollProgress >= 2.25 && scrollProgress <= 5.25
                      ? "opacity-100"
                      : "opacity-0"
                  }
                />
                <People width={chartWidth} height={chartHeight} />
                <Legend width={chartWidth} height={chartHeight} />
              </svg>{" "}
            </div>
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
                  className={`scrollytell-two-step h-screen p-5 md:px-20 text-xl text-${primaryTextColor} ${
                    index === 0 ? "mt-[75vh]" : ""
                  }`}
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

export default ScrollytellTwo;
