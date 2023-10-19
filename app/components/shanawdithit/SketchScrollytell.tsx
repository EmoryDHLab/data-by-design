import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import Triggers from "./sketchScrollytell/Triggers";
import type { TFigure } from "~/types/figureType";

const width = 793;
const height = 573;

interface Props {
  figure: TFigure;
}

function SketchScrollytell({ figure }: Props) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({ x: 0, y: 0, width, height });
  const [zoom, setZoom] = useState<number>(1);
  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 0;

  useEffect(() => {
    switch(true) {
      // Cross-sections
      // case (scrollProgress >= minScrollProgress && scrollProgress < minScrollProgress + 1):
      //   setFocusShapeSize({ x: 0, y: 650, width, height: 800});
      //   setZoom(1);
      //   setXOffset(0);
      //   setYOffset(0);
      //   break;
      // Side Cross-section
      case (scrollProgress >= minScrollProgress + 1 && scrollProgress < minScrollProgress + 2):
        setFocusShapeSize({ x: 500, y: 375, width: 95, height: 75});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Text
      case (scrollProgress >= minScrollProgress + 2 && scrollProgress < minScrollProgress + 3):
        setFocusShapeSize({ x: 200, y: 250, width: 250, height: 125});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Title
      case (scrollProgress >= minScrollProgress + 3 && scrollProgress < minScrollProgress + 4):
        setFocusShapeSize({ x: 415, y: 195, width: 50, height: 50});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Tables
      case (scrollProgress >= minScrollProgress + 4 && scrollProgress < minScrollProgress + 5):
        setFocusShapeSize({ x: 165, y: 165, width: 50, height: 50});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
        // Table 1
      case (scrollProgress >= minScrollProgress + 5 && scrollProgress < minScrollProgress + 6):
        setFocusShapeSize({ x: 560, y: 215, width: 50, height: 50});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Table 2
      case (scrollProgress >= minScrollProgress + 6 && scrollProgress < minScrollProgress + 7):
        setFocusShapeSize({ x: 325, y: 100, width: 150, height: 150});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      case (scrollProgress >= minScrollProgress + 7 && scrollProgress < minScrollProgress + 8):
        setFocusShapeSize({ x: 425, y: 225, width: 95, height: 75});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      case (scrollProgress >= minScrollProgress + 8 && scrollProgress < minScrollProgress + 9):
        setFocusShapeSize({ x: 550, y: 230, width: 40, height: 40});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      default:
        setFocusShapeSize({ x: 0, y: 0, width, height});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
      }
      console.log("🚀 ~ file: SketchScrollyTell.tsx:90 ~ SketchScrollytell ~ scrollProgress:", scrollProgress)
  }, [scrollProgress]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={Triggers}
        steps={steps}
        className="w-screen"
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
        >
          <div className="sticky p-8 md:p-0 top-16 h-min mt-16 bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="max-h-[80vh] max-w-[90%] md:my-16 mx-auto drop-shadow-2xl"
            >
              <image
                href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                className="transition-all origin-center duration-1000  opacity-100"
                width={width * zoom}
                height={height * zoom}
                x={0 + xOffset}
                y={0 + yOffset}
              />
              <defs>
                <mask id="sketch-mask">
                  <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="white"
                    fillOpacity={0.5}
                    className="transition-all duration-1000"
                  />
                  <rect
                    {...focusShapeSize}
                    fill="black"
                    className="transition-all duration-1000"
                  />
                </mask>
              </defs>
              <g>
                <rect
                  {...focusShapeSize}
                  fill="none"
                  stroke="black"
                  strokeWidth={10}
                  className="transition-all duration-1000"
                />
                <rect mask="url(#sketch-mask)"
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  className="transition-opacity duration-700 opacity-100"
                />

              </g>
            </svg>
            <figcaption></figcaption>
            {/* <div className={`text-3xl relative md:bottom-0 ml-4 text-black hidden md:${scrollProgress >= 13.5 ? "hidden" : "block"}`} tabIndex={-1}>↓</div> */}
          </div>
          <div ref={steps} className="bias-full w-full md:bias-1/2 md:w-2/5 relative">
            {Triggers.map((trigger, index) => {
              return (
                <div
                  key={`sketch-trigger-${trigger.key}`}
                  data-step={index}
                  className={`pointer-events-none step text-xl content-center relative min-h-screen text-${accentTextColor}`}
                >
                 {trigger}
                </div>
              )
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  )
}

export default SketchScrollytell;