import { useContext, useMemo, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { TFigure } from "~/types/figureType";
import type { ReactElement } from "react";

const width = 1232;
const height = 1089;

const minScrollProgress = 10.5;

type TFocusState = {
  focusShapeSize: { x: number; y: number; width: number; height: number };
  zoom: number;
  translateX: number;
  translateY: number;
  skewX: number;
  skewY: number;
};

function getFocusState(scrollProgress: number): TFocusState {
  switch (true) {
    // Intro
    case scrollProgress >= minScrollProgress + 1 &&
      scrollProgress < minScrollProgress + 2:
      return {
        focusShapeSize: { x: 815, y: 765, width: 165, height: 75 },
        zoom: 4,
        translateX: -275,
        translateY: -250,
        skewX: 0,
        skewY: 0,
      };
    // Tribe names
    case scrollProgress >= minScrollProgress + 2 &&
      scrollProgress < minScrollProgress + 3:
      return {
        focusShapeSize: { x: 0, y: 0, width, height },
        zoom: 4,
        translateX: 75,
        translateY: -200,
        skewX: 0,
        skewY: 0,
      };
    // Tribe influence
    case scrollProgress >= minScrollProgress + 3 &&
      scrollProgress < minScrollProgress + 4:
      return {
        focusShapeSize: { x: 475, y: 660, width: 210, height: 80 },
        zoom: 4,
        translateX: 75,
        translateY: -200,
        skewX: 0,
        skewY: 0,
      };
    // Circle color
    case scrollProgress >= minScrollProgress + 4 &&
      scrollProgress < minScrollProgress + 5:
      return {
        focusShapeSize: { x: 5, y: 405, width: 900, height: 190 },
        zoom: 2,
        translateX: 50,
        translateY: -50,
        skewX: 0,
        skewY: 0,
      };
    // Salt water
    case scrollProgress >= minScrollProgress + 5 &&
      scrollProgress < minScrollProgress + 6:
      return {
        focusShapeSize: { x: 1160, y: 410, width: 115, height: 435 },
        zoom: 2.25,
        translateX: -120,
        translateY: -80,
        skewX: -30,
        skewY: 0,
      };
    default:
      return {
        focusShapeSize: { x: 0, y: 0, width, height },
        zoom: 1.5,
        translateX: 0,
        translateY: 0,
        skewX: 0,
        skewY: 0,
      };
  }
}

interface Props {
  figure: TFigure;
  triggers: ReactElement[];
}

function WillardScrollytell({ figure, triggers }: Props) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  const { focusShapeSize, zoom, translateX, translateY, skewX, skewY } =
    useMemo(() => getFocusState(scrollProgress), [scrollProgress]);

  const scrollytellContextValue = useMemo(
    () => ({ scrollProgress }),
    [scrollProgress],
  );

  return (
    <ScrollytellContext.Provider value={scrollytellContextValue}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="peopleSecondary"
        id="scrollytell-two"
      >
        <div className={`flex flex-col md:flex-row justify-between `}>
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="max-h-[80vh] max-w-[90%] md:my-16 mx-auto  transition-all duration-1000"
            >
              <mask id="willard-mask">
                <rect
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  fill="white"
                  fillOpacity={0.3}
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
                href={`/images/chapters/${figure.fileName}.jpg`}
                className="transition-all origin-center duration-[3s]  opacity-100"
                width="100%"
                height={height}
                x={0}
                y={0}
                style={{
                  transform: `scale(${zoom}) translateY(${translateY}px) translateX(${translateX}px)`,
                }}
              />
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
