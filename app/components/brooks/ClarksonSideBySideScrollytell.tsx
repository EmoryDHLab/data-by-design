import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import { EyeSlashIcon } from '@heroicons/react/24/outline'

const triggers = [
  <span key="300ed3fc"></span>,
  <span key="ac19f869">Clarkson created a series of cross-sections that showed each deck from above.</span>,
  <span key="f63d8f0c">From the side—cross-sections that, like the Plymouth Committee's "Plan," included human figures intended to indicate how the captives were confined.</span>,
  <span key="a87bda1c">The result was a set of schematics that carried with them the connotations of accuracy and precision that were associated with the naval diagrams of the time, and yet also enlisted what Ian Baucom characterizes as a "sympathetic grammar" intended to draw those who viewed the chart to the antislavery cause.</span>,
  <span key="94a7a3b2">Clarkson's revised chart, entitled "Description of a Slave Ship," was—like the original "Plan,"--accompanied by explanatory text.</span>,
  <span key="63ba9abc">In addition to the text, Clarkson also included a set of tables intended to reinforce the factual nature of the evidence visualized above.</span>,
  <span key="1a7c90eb"> The first table shows measurements of the actual ship, along with a scale that indicated how they corresponded to the image.</span>,
  <span key="5448c43e">There was a small tablet that presented information about the number of captives that had actually been held on the ship.</span>,
  <span key="06e375fc">The final table presented a comparison between the number of actual captives and those pictured on the diagram, making clear that while the image is informed by data, it is not a direct representation of those numbers and lives.</span>,
  <span key="9b862bca"></span>
]

const width = 2000;
const height = 2534;


function ClarksonSideBySideScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({ x: 0, y: 0, width, height });
  const [zoom, setZoom] = useState<number>(1);
  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 6.5;

  useEffect(() => {
    if (hideSensitiveState) return;

    switch(true) {
      // Cross-sections
      case (scrollProgress >= minScrollProgress && scrollProgress < minScrollProgress + 1):
        setFocusShapeSize({ x: 0, y: 650, width, height: 800});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Side Cross-section
      case (scrollProgress >= minScrollProgress + 1 && scrollProgress < minScrollProgress + 2):
        setFocusShapeSize({ x: 0, y: 200, width, height: 600});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Text
      case (scrollProgress >= minScrollProgress + 2 && scrollProgress < minScrollProgress + 3):
        setFocusShapeSize({ x: 0, y: 1550, width, height: 950});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Title
      case (scrollProgress >= minScrollProgress + 3 && scrollProgress < minScrollProgress + 4):
        setFocusShapeSize({ x: 0, y: 10, width, height: 220});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Tables
      case (scrollProgress >= minScrollProgress + 4 && scrollProgress < minScrollProgress + 5):
        setFocusShapeSize({ x: 0, y: 1550, width: 1000, height: 950});
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
        // Table 1
      case (scrollProgress >= minScrollProgress + 5 && scrollProgress < minScrollProgress + 6):
        setFocusShapeSize({ x: 0, y: 50, width, height: 2200});
        setZoom(4);
        setXOffset(-150);
        setYOffset(-6800);
        break;
      // Table 2
      case (scrollProgress >= minScrollProgress + 6 && scrollProgress < minScrollProgress + 7):
        setFocusShapeSize({ x: 0, y: 840, width, height: 450});
        setZoom(5.85);
        setXOffset(-1025);
        setYOffset(-12300);
        break;
      case (scrollProgress >= minScrollProgress + 7 && scrollProgress < minScrollProgress + 8):
        setFocusShapeSize({ x: 0, y: 400, width, height: 1000});
        setZoom(4.9);
        setXOffset(-2875);
        setYOffset(-7550);
        break;
      default:
        setFocusShapeSize({ x: 0, y: 0, width, height});
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
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
        >
          <div className="sticky p-8 md:p-0 top-16 h-min mt-16 bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              // className={`md:my-32 w-full`}
              className="max-h-[80vh] max-w-[90%] md:my-16 mx-auto drop-shadow-2xl"
            >
              <image
                href="/images/brooks/4-description-1789.jpg"
                className={`transition-all origin-center duration-1000  opacity-${hideSensitiveState ? 0 : 100}`}
                width={width * zoom}
                height={height * zoom}
                x={0 + xOffset}
                y={0 + yOffset}
              />
              <g className={`transition-opacity origin-center duration-1000  opacity-${hideSensitiveState ? 100 : 0}`}>
                <rect
                  width={width}
                  height={height}
                  fill="#D9D9D9"
                  strokeWidth={20}
                  className="stroke-brooksPrimary fill-brooksSecondary"
                ></rect>
                <EyeSlashIcon
                  strokeOpacity={0.75}
                  height={800}
                  y="33%"
                  className="w-1 h-1 stroke-brooksPrimary"
                />
              </g>
              <defs>
                <mask id="clarkson-mask">
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
                  strokeWidth={hideSensitiveState ? 0 : 20}
                  className="transition-all duration-1000"
                />
                <rect mask="url(#clarkson-mask)"
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                  className={`transition-opacity duration-700 opacity-${hideSensitiveState ? 0 : 100}`}
                />

              </g>
            </svg>
            <figcaption></figcaption>
            {/* <div className={`text-3xl relative md:bottom-0 ml-4 text-black hidden md:${scrollProgress >= 13.5 ? "hidden" : "block"}`} tabIndex={-1}>↓</div> */}
          </div>
          <div ref={steps} className="bias-full w-full md:bias-1/2 md:w-2/5 relative">
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={`brooks-trigger-${trigger.key}`}
                  data-step={index}
                  className={`pointer-events-none step text-xl content-center relative h-screen text-${accentTextColor}`}
                >
                  <p className={`p-6 md:p-0 bg-${index == 0 || index == triggers.length - 1 ? "" : "brooksSecondary-translucent"} w-9/12`}>
                    {trigger}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  )
}

export default ClarksonSideBySideScrollytell;