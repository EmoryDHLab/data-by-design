import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { TFigure } from "~/types/figureType";
import type { ReactElement } from "react";

const width = 3482;
const height = 2254;

interface Props {
  figure: TFigure;
  triggers: ReactElement[];
}

function SketchScrollytell({ figure, triggers }: Props) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({
    x: 0,
    y: 0,
    width,
    height,
  });
  const [zoom, setZoom] = useState<number>(1);
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 0;

  useEffect(() => {
    switch (true) {
      // Winter Camp
      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setFocusShapeSize({ x: 1300, y: 450, width: 1200, height: 1200 });
        setZoom(4);
        setTranslateX(-825);
        setTranslateY(-750);
        break;
      // Dotted Paths
      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setFocusShapeSize({ x: 230, y: 675, width: 3000, height: 1500 });
        setZoom(2);
        setTranslateX(550);
        setTranslateY(-25);
        break;
      // North Shore
      case scrollProgress >= minScrollProgress + 3 &&
        scrollProgress < minScrollProgress + 4:
        setFocusShapeSize({ x: 1350, y: 700, width: 800, height: 800 });
        setZoom(5.5);
        setTranslateX(-250);
        setTranslateY(300);
        break;
      // 2nd set of mamateeks
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setFocusShapeSize({ x: 1350, y: 700, width: 800, height: 800 });
        setZoom(5.5);
        setTranslateX(1100);
        setTranslateY(500);
        break;
      // Setter surveillance
      case scrollProgress >= minScrollProgress + 5 &&
        scrollProgress < minScrollProgress + 6:
        setFocusShapeSize({ x: 1350, y: 1100, width: 800, height: 800 });
        setZoom(5.5);
        setTranslateX(-1100);
        setTranslateY(300);
        break;
      // Safety in the woods
      case scrollProgress >= minScrollProgress + 6 &&
        scrollProgress < minScrollProgress + 7:
        setFocusShapeSize({ x: 925, y: 100, width: 1600, height: 2000 });
        setZoom(2.5);
        setTranslateX(-100);
        setTranslateY(525);
        break;
      // Capture
      case scrollProgress >= minScrollProgress + 7 &&
        scrollProgress < minScrollProgress + 8:
        setFocusShapeSize({ x: 925, y: 500, width: 1200, height: 1200 });
        setZoom(3.5);
        setTranslateX(-575);
        setTranslateY(95);
        break;
      // Captured
      case scrollProgress >= minScrollProgress + 8 &&
        scrollProgress < minScrollProgress + 9:
        setFocusShapeSize({ x: 1450, y: 750, width: 600, height: 600 });
        setZoom(4.5);
        setTranslateX(-990);
        setTranslateY(150);
        break;
      default:
        setFocusShapeSize({ x: 0, y: 0, width, height });
        setZoom(1);
        setTranslateX(0);
        setTranslateY(0);
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
          id="scrollytell-one"
        >
          <div className="sticky p-8 md:p-0 top-16 md:top-[20vh] h-min mt-16 bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="max-h-[60vh] max-w-[90%] md:mb-16 mx-auto drop-shadow-2xl"
            >
              <image
                href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                className="transition-all origin-center duration-[3s]  opacity-100"
                width={width}
                height={height}
                x={0}
                y={0}
                style={{
                  transform: `scale(${zoom}) translateY(${translateY}px) translateX(${translateX}px)`,
                }}
              />
              <defs>
                <mask id="sketch-mask">
                  <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="white"
                    fillOpacity={0.7}
                    className="transition-all duration-[3s]"
                  />
                  <rect
                    {...focusShapeSize}
                    fill="black"
                    className="transition-all duration-[3s]"
                  />
                </mask>
              </defs>
              <g>
                <rect
                  {...focusShapeSize}
                  fill="none"
                  stroke="black"
                  strokeWidth={3}
                  className="transition-all duration-[3s]"
                />
                <rect
                  mask="url(#sketch-mask)"
                  x={0}
                  y={0}
                  width={width}
                  height={height}
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

export default SketchScrollytell;
