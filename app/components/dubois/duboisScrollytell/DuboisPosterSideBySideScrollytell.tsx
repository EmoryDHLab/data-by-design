import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import EyeClosed from "../../icons/EyeClosed";

type TFocusShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const triggers = [
  <span key="300ed3fc">
    [PH] Description and commentary of the original chart. Provides an overview of this chart
  </span>,
  <span key="ac19f869">
    [PH] First, the title in bold up a the top
  </span>,
  <span key="f63d8f0c">
    [PH] Then, the title right below in French
  </span>,
  <span key="a87bda1c">
    [PH] Then, black text at mid-left “Prepared and executed…”
  </span>,
  <span key="94a7a3b2">
    [PH] Then, map of US in middle
  </span>,
  <span key="63ba9abc">
    [PH] Then, black text in middle just below, “The University was founded…”
  </span>,
  <span key="1a7c90eb">
    {" "}
    [PH] Then, black text at very bottom, “The university has 20 professors…”
  </span>,
  <span key="5448c43e">
    [PH] And then, finally, the pie chart (current frame 2 below)
  </span>,
  <span key="06e375fc">
    [PH] The pie chart at the center of the image visualizes the occupations of the 330 Black Americans who had graduated from Atlanta University since its founding in 1867 and up through 1898, the year before the chart was made (and the last year for which Du Bois had complete data). The slices of the pie correspond to the four main occupations and professional fields for AU alumni – teachers, ministers, government service, and business – as well as additional categories for “other professions” and “house wives.”
  </span>,
  <span key="9b862bca"></span>,
];

const width = 2000;
const height = 2534;

function DuboisPosterSideBySideScrollytell() {
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

  const minScrollProgress = 0.5;

  useEffect(() => {

    switch (true) {
      // A series of statistical charts ...
      case scrollProgress >= minScrollProgress &&
        scrollProgress < minScrollProgress + 1:
        setFocusShapeSize({ x: 0, y: 80, width, height: 330 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Une serie de ...
      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setFocusShapeSize({ x: 0, y: 370, width, height: 230 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Prepared and executed by negro ...
      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setFocusShapeSize({ x: 0, y: 550, width: 800, height: 380 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // US map
      case scrollProgress >= minScrollProgress + 3 &&
        scrollProgress < minScrollProgress + 4:
        setFocusShapeSize({ x: 700, y: 550, width: 600, height: 420 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // The university was founded in 1867 ...
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setFocusShapeSize({ x: 0, y: 920, width, height: 210 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // The university has 20 professors ...
      case scrollProgress >= minScrollProgress + 5 &&
        scrollProgress < minScrollProgress + 6:
        setFocusShapeSize({ x: 0, y: 1835, width, height: 228 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Pie chart
      case scrollProgress >= minScrollProgress + 6 &&
        scrollProgress < minScrollProgress + 7:
        setFocusShapeSize({ x: 0, y: 923, width, height: 940 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Pie chart, zoomed in
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
        bgColor="duboisSecondary"
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
          id="scrollytell1"
        >
          <div className="sticky p-8 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className={`max-h-[80vh] max-w-[90%] md:my-16 mx-auto bg-duboisSecondary`}
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
              <g
                className={`transition-opacity origin-center duration-1000  opacity-${
                  hideSensitiveState ? 100 : 0
                }`}
              >
                <rect
                  width={width}
                  height={height}
                  fill="#D9D9D9"
                  strokeWidth={20}
                  className="stroke-duboisPrimary fill-duboisSecondary"
                ></rect>
                <EyeClosed
                  height={800}
                  className="h-screen stroke-brooksPrimary text-5xl scale-150"
                  y="33%"
                />
              </g>
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
                  stroke="#000000"
                  strokeWidth={hideSensitiveState ? 0 : 20}
                  className="transition-all duration-1000"
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
                    className={`p-6 md:p-0 bg-${
                      index == 0 || index == triggers.length - 1
                        ? ""
                        : "duboisSecondary-translucent"
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
