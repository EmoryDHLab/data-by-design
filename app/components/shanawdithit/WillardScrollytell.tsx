import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { TFigure } from "~/types/figureType";
import type { ReactElement } from "react";

const width = 1232;
const height = 1089;

interface Props {
  figure: TFigure;
  triggers: ReactElement[];
}

function WillardScrollytell({ figure, triggers }: Props) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({
    x: 0,
    y: 0,
    width,
    height,
  });
  const [zoom, setZoom] = useState<number>(1);
  const [translateX, setTranslateX] = useState<number>(-414);
  const [translateY, setTranslateY] = useState<number>(-50);
  const [skewX, setSkewX] = useState<number>(0);
  const [skewY, setSkewY] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 10.5;

  useEffect(() => {
    switch (true) {
      // Intro
      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setFocusShapeSize({ x: 815, y: 765, width: 165, height: 75 });
        setZoom(4);
        setTranslateX(-275);
        setTranslateY(-250);
        setSkewX(0);
        setSkewY(0);
        break;
      // Tribe names
      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setFocusShapeSize({ x: 0, y: 0, width, height });
        setZoom(4);
        setTranslateX(75);
        setTranslateY(-200);
        setSkewX(0);
        setSkewY(0);
        break;
      // Tribe influence
      case scrollProgress >= minScrollProgress + 3 &&
        scrollProgress < minScrollProgress + 4:
        setFocusShapeSize({ x: 475, y: 660, width: 210, height: 80 });
        setZoom(4);
        setTranslateX(75);
        setTranslateY(-200);
        setSkewX(0);
        setSkewY(0);
        break;
      // Circle color
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setFocusShapeSize({ x: 5, y: 405, width: 900, height: 190 });
        setZoom(2);
        setTranslateX(50);
        setTranslateY(-50);
        setSkewX(0);
        setSkewY(0);
        break;
      // Salt water
      case scrollProgress >= minScrollProgress + 5 &&
        scrollProgress < minScrollProgress + 6:
        setFocusShapeSize({ x: 1160, y: 410, width: 115, height: 435 });
        setZoom(2.25);
        setTranslateX(-120);
        setTranslateY(-80);
        setSkewX(-30);
        setSkewY(0);
        break;
      default:
        setFocusShapeSize({ x: 0, y: 0, width, height });
        setZoom(1.5);
        setTranslateX(0);
        setTranslateY(0);
        setSkewX(0);
        setSkewY(0);
    }
  }, [scrollProgress]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="shanawdithitAccent"
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
          id="scrollytell-two"
        >
          <div className="sticky p-8 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="max-h-[80vh] max-w-[90%] md:my-16 mx-auto bg-shanawdithitAccent transition-all duration-1000"
            >
              <mask id="willard-mask">
                <rect
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  fill="white"
                  fillOpacity={0.3}
                  // className="transition-all duration-[3s]"
                />
                <rect
                  {...focusShapeSize}
                  fill="white"
                  className="transition-all duration-[3s]"
                  style={{ transform: `skew(${skewX}deg, ${skewY}deg)` }}
                />
              </mask>
              <image
                mask="url(#willard-mask)"
                href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                className="transition-all origin-center duration-[3s]  opacity-100"
                width="100%"
                height={height}
                x={0}
                y={0}
                style={{
                  transform: `scale(${zoom}) translateY(${translateY}px) translateX(${translateX}px)`,
                }}
              />
              {/* <g>
                <rect
                  {...focusShapeSize}
                  fill="none"
                  stroke="black"
                  strokeWidth={3}
                  className="transition-all duration-[3s]"
                  style={{ transform: `skew(${skewX}deg, ${skewY}deg)` }}
                />
                <rect
                  mask="url(#willard-mask)"
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  className="transition-all duration-[3s]"
                />
              </g> */}
            </svg>
            <figcaption></figcaption>
            {/* <div className={`text-3xl relative md:bottom-0 ml-4 text-black hidden md:${scrollProgress >= 13.5 ? "hidden" : "block"}`} tabIndex={-1}>↓</div> */}
          </div>
          <div
            ref={steps}
            className="bias-full w-full md:bias-1/2 md:w-2/5 relative"
          >
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={`sketch-trigger-${trigger.key}`}
                  data-step={index}
                  className={`pointer-events-none step text-xl content-center relative min-h-screen text-${accentTextColor}`}
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
}

export default WillardScrollytell;
