import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { TFocusShape } from "~/types/scrollytellTypes";
import type { ReactElement } from "react";

const width = 2000;
const height = 2534;

function DuboisPosterSideBySideScrollytell({
  triggers,
}: {
  triggers: ReactElement[];
}) {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<TFocusShape>({
    x: 0,
    y: 0,
    width,
    height,
  });
  const [zoom, setZoom] = useState<number>(1);
  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 10.5;

  useEffect(() => {
    switch (true) {
      // case scrollProgress >= minScrollProgress &&
      //   scrollProgress < minScrollProgress + 1:
      //   setFocusShapeSize({ x: 0, y: 80, width, height: 330 });
      //   setZoom(1);
      //   setXOffset(0);
      //   setYOffset(0);
      //   break;
      // case scrollProgress >= minScrollProgress + 1 &&
      //   scrollProgress < minScrollProgress + 2:
      //   setFocusShapeSize({ x: 0, y: 370, width, height: 230 });
      //   setZoom(1);
      //   setXOffset(0);
      //   setYOffset(0);
      //   break;
      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setFocusShapeSize({ x: 700, y: 550, width: 600, height: 420 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setFocusShapeSize({ x: 0, y: 923, width, height: 940 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setFocusShapeSize({ x: 0, y: 550, width: 800, height: 380 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // case scrollProgress >= minScrollProgress + 3 &&
      //   scrollProgress < minScrollProgress + 4:
      //   setFocusShapeSize({ x: 0, y: 920, width, height: 210 });
      //   setZoom(1);
      //   setXOffset(0);
      //   setYOffset(0);
      //   break;
      // case scrollProgress >= minScrollProgress + 3 &&
      //   scrollProgress < minScrollProgress + 4:
      //   setFocusShapeSize({ x: 0, y: 1835, width, height: 228 });
      //   setZoom(1);
      //   setXOffset(0);
      //   setYOffset(0);
      //   break;
      case scrollProgress >= minScrollProgress + 7 &&
        scrollProgress < minScrollProgress + 8:
        setFocusShapeSize({ x: 0, y: 175, width, height: 900 });
        setZoom(1.1);
        setXOffset(-100);
        setYOffset(-1000);
        break;
      default:
        setFocusShapeSize({ x: 0, y: 0, width, height });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
    }
  }, [scrollProgress, hideSensitiveState]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="duboisPrimary"
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
          id="scrollytell-2"
        >
          <div className="sticky p-8 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className={`max-h-[80vh] max-w-[90%] md:my-16 mx-auto bg-duboisPrimary`}
            >
              <image
                mask="url(#Dubois-mask"
                href="/images/dubois/899.jpg"
                className={`transition-all origin-center duration-1000  opacity-${
                  hideSensitiveState ? 0 : 100
                }`}
                width={width * zoom}
                height={height * zoom}
                x={0 + xOffset}
                y={0 + yOffset}
              />
              <mask id="Dubois-mask">
                <rect
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  fill="white"
                  fillOpacity={0.1}
                  className="transition-all duration-1000"
                />
                <rect
                  {...focusShapeSize}
                  fill="white"
                  className="transition-all duration-1000"
                />
              </mask>
              <g>
                <rect
                  {...focusShapeSize}
                  fill="none"
                  strokeWidth={scrollProgress >= minScrollProgress ? 20 : 0}
                  className="transition-all duration-1000 stroke-shanawdithitPrimary"
                />
              </g>
            </svg>
            <figcaption></figcaption>
          </div>

          <div
            ref={steps}
            className="bias-full w-full md:bias-1/2 md:w-2/5 relative"
          >
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={`brooks-trigger-${trigger.key}`}
                  data-step={index}
                  className={`pointer-events-none step text-xl content-center relative h-screen text-${accentTextColor}`}
                >
                  <p
                    className={`p-6 text-offwhite md:p-0 bg-${
                      index == 0 || index == triggers.length - 1
                        ? ""
                        : "duboisPrimary-translucent"
                    } w-9/12`}
                  >
                    {trigger}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

export default DuboisPosterSideBySideScrollytell;
