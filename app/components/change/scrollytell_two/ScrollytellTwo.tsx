import { useContext, useEffect, useRef, useState } from "react";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import { ScrollytellContext } from "~/scrollytellContext";
import { ChapterContext } from "~/chapterContext";
import { TFocusShape } from "~/types/scrollytellTypes";
import People from "./People";
import Legend from "./Legend";
import Students from "./Students";
import Map from "./Map";
import figures from "~/data/figures/change.json";
import type { ReactElement } from "react";

const chartHeight = 1024;
const chartWidth = 820;

const ScrollytellTwo = ({ triggers }: { triggers: ReactElement[] }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [focusShape, setFocusShape] = useState<TFocusShape>({
    width: figures["0530"].width,
    height: figures["0530"].height,
    y: chartHeight / 2 - figures["0530"].height / 2,
    x: chartWidth / 2 - figures["0530"].width / 2,
  });
  const steps = useRef<HTMLDivElement>(null);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);

  useEffect(() => {
    switch (true) {
      case scrollProgress <= 2:
        setFocusShape({
          width: figures["0530"].width,
          height: figures["0530"].height,
          y: chartHeight / 2 - figures["0530"].height / 2,
          x: chartWidth / 2 - figures["0530"].width / 2,
        });
        break;

      case scrollProgress >= 2 && scrollProgress <= 3:
        setFocusShape({
          width: figures["0530"].width,
          height: 575,
          y: chartHeight / 2 - figures["0530"].height / 2,
          x: chartWidth / 2 - figures["0530"].width / 2,
        });
        break;

      default:
        setFocusShape({
          width: chartWidth,
          height: 770,
          y: 125,
          x: 0,
        });
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
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-1/2 md:order-last">
            <div
              className={`h-[calc(100vh-32px)] my-auto flex flex-col mt-8 p-8`}
            >
              <svg
                // className="relative bg-offwhite"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              >
                <rect
                  {...focusShape}
                  className="fill-offwhite transition-all duration-1000"
                />

                <image
                  width={figures["0530"].width}
                  height={figures["0530"].height}
                  y={chartHeight / 2 - figures["0530"].height / 2}
                  x={chartWidth / 2 - figures["0530"].width / 2}
                  className={`${
                    scrollProgress >= 0 && scrollProgress <= 1
                      ? "opacity-100"
                      : "opacity-0"
                  }
                      transition-opacity duration-1000`}
                  href={`/images/chapters/${figures["0530"].fileName}.jpg`}
                />

                <g
                  className={`duration-1000 transition-opacity ${
                    scrollProgress >= 1 && scrollProgress <= 3
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <Map
                    showColleges
                    showATL={scrollProgress > 2}
                    width={chartWidth}
                    x={65}
                    y={100}
                    className="scale-[0.88]"
                  />
                </g>

                <Students width={chartWidth} height={chartHeight} />
                <People width={chartWidth} height={chartHeight} />
                <Legend width={chartWidth} height={chartHeight} />
              </svg>{" "}
            </div>
          </div>
          <div
            ref={steps}
            className={`bias-full w-full md:bias-1/2 md:w-2/5 relative`}
          >
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={trigger.key}
                  data-step={index}
                  className={`scrollytell-two-step h-screen ${
                    index + 1 === triggers.length ? "p-0" : "p-5"
                  } md:px-20 text-xl text-${primaryTextColor} ${
                    index === 0 ? "mt-[75vh]" : ""
                  }`}
                >
                  <div className="bg-changePrimary-translucent">{trigger}</div>
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
