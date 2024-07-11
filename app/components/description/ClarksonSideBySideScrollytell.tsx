import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";

type TFocusShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const triggers = [
  <span key="300ed3fc"></span>,
  <span key="ac19f869">
    Clarkson created a series of cross-sections that showed each deck from
    above.
  </span>,
  <span key="f63d8f0c">
    From the side—cross-sections that, like the Plymouth Committee's "Plan,"
    included human figures intended to indicate how the captives were confined.
  </span>,
  <span key="a87bda1c">
    The result was a set of schematics that carried with them the connotations
    of accuracy and precision that were associated with the naval diagrams of
    the time, and yet also enlisted what Ian Baucom characterizes as a
    "sympathetic grammar" intended to draw those who viewed the chart to the
    antislavery cause.
  </span>,
  <span key="94a7a3b2">
    Clarkson's revised chart, entitled "Description of a Slave Ship," was—like
    the original "Plan,"--accompanied by explanatory text.
  </span>,
  <span key="63ba9abc">
    In addition to the text, Clarkson also included a set of tables intended to
    reinforce the factual nature of the evidence visualized above.
  </span>,
  <span key="1a7c90eb">
    {" "}
    The first table shows measurements of the actual ship, along with a scale
    that indicated how they corresponded to the image.
  </span>,
  <span key="5448c43e">
    There was a small tablet that presented information about the number of
    captives that had actually been held on the ship.
  </span>,
  <span key="06e375fc">
    The final table presented a comparison between the number of actual captives
    and those pictured on the diagram, making clear that while the image is
    informed by data, it is not a direct representation of those numbers and
    lives.
  </span>,
  <span key="9b862bca"></span>,
];

const width = 2000;
const height = 2534;

function ClarksonSideBySideScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [highlightSection, setHighlightSection] = useState<string | undefined>(
    undefined
  );
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

  const minScrollProgress = 6.5;

  useEffect(() => {
    switch (true) {
      // Cross-sections
      case scrollProgress >= minScrollProgress &&
        scrollProgress < minScrollProgress + 1:
        setHighlightSection("cross");
        setFocusShapeSize({ x: 0, y: 650, width, height: 800 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Side Cross-section
      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setHighlightSection("side");
        setFocusShapeSize({ x: 0, y: 200, width, height: 600 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Text
      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setHighlightSection("text");
        setFocusShapeSize({ x: 0, y: 1550, width, height: 950 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Title
      case scrollProgress >= minScrollProgress + 3 &&
        scrollProgress < minScrollProgress + 4:
        setHighlightSection("title");
        setFocusShapeSize({ x: 0, y: 10, width, height: 220 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Tables
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setHighlightSection("tables");
        setFocusShapeSize({ x: 0, y: 1550, width: 1000, height: 950 });
        setZoom(1);
        setXOffset(0);
        setYOffset(0);
        break;
      // Table 1
      case scrollProgress >= minScrollProgress + 5 &&
        scrollProgress < minScrollProgress + 6:
        setHighlightSection("table1");
        setFocusShapeSize({ x: 0, y: 50, width, height: 2200 });
        setZoom(4);
        setXOffset(-150);
        setYOffset(-6800);
        break;
      // Table 2
      case scrollProgress >= minScrollProgress + 6 &&
        scrollProgress < minScrollProgress + 7:
        setHighlightSection("table2");
        setFocusShapeSize({ x: 0, y: 840, width, height: 450 });
        setZoom(5.85);
        setXOffset(-1025);
        setYOffset(-12300);
        break;
      // Table 3
      case scrollProgress >= minScrollProgress + 7 &&
        scrollProgress < minScrollProgress + 8:
        setHighlightSection("table3");
        setFocusShapeSize({ x: 0, y: 400, width, height: 1000 });
        setZoom(4.9);
        setXOffset(-2875);
        setYOffset(-7550);
        break;
      default:
        setHighlightSection(undefined);
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
        bgColor="descriptionSecondary"
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
          id="scrollytell2"
        >
          <div className="sticky p-8 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className={`max-h-[80vh] max-w-[90%] md:my-16 mx-auto bg-descriptionSecondary transition-all duration-1000`}
            >
              <filter id="clarkson-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
              </filter>
              <image
                filter={hideSensitiveState ? "url(#clarkson-blur)" : ""}
                mask="url(#clarkson-mask)"
                href="/images/description/4-description-1789.jpg"
                className={`transition-all origin-center duration-1000`}
                width={width * zoom}
                height={height * zoom}
                x={0 + xOffset}
                y={0 + yOffset}
              />
              <g
                className={`transition-aoo origin-center duration-1000  opacity-${
                  hideSensitiveState ? 100 : 0
                }`}
              >
                {/* <rect
                  width={width}
                  height={height}
                  fill="none"
                  strokeWidth={20}
                  className="stroke-brooksPrimary fill-none"
                ></rect> */}
              </g>
              <mask id="clarkson-mask">
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
                  strokeWidth={20}
                  className="transition-all duration-1000 stroke-brooksPrimary"
                />
              </g>

              <g
                className={`transition-opacity duration-1000 opacity-${
                  hideSensitiveState ? 100 : 0
                }`}
              >
                <text
                  x={"50%"}
                  y={1050}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "cross" ? 100 : 0
                  }`}
                >
                  Cross-sections of each deck.
                </text>

                <text
                  x={"50%"}
                  y={525}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "side" ? 100 : 0
                  }`}
                >
                  Side views.
                </text>

                <text
                  x={"50%"}
                  y={2025}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "text" ? 100 : 0
                  }`}
                >
                  Small typescript explanations.
                </text>

                <text
                  x={"50%"}
                  y={140}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "title" ? 100 : 0
                  }`}
                >
                  Title: "Description of a Slave Ship".
                </text>

                <text
                  x={500}
                  y={2025}
                  width={1000}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "tables" ? 100 : 0
                  }`}
                >
                  Data tables.
                </text>

                <text
                  x={"50%"}
                  y={1050}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "table1" ? 100 : 0
                  }`}
                >
                  Ship measurements.
                </text>

                <text
                  x={"50%"}
                  y={1050}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "table2" ? 100 : 0
                  }`}
                >
                  Tabulation of captives held on the ship.
                </text>

                <text
                  x={"50%"}
                  y={800}
                  textAnchor="middle"
                  fontSize={80}
                  className={`font-neueMontreal duration-1000 delay-500 transition-all opacity-${
                    highlightSection === "table3" ? 100 : 0
                  }`}
                >
                  Comparison of actual captives and those pictured.
                </text>
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
                        : "descriptionSecondary-translucent"
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

export default ClarksonSideBySideScrollytell;
