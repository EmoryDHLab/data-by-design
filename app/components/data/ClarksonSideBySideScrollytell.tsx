import { useContext, useMemo, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";

type TFocusShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type TFocusState = {
  highlightSection: string | undefined;
  focusShapeSize: TFocusShape;
  zoom: number;
  xOffset: number;
  yOffset: number;
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

const minScrollProgress = 6.5;

function getFocusState(scrollProgress: number): TFocusState {
  switch (true) {
    // Cross-sections
    case scrollProgress >= minScrollProgress &&
      scrollProgress < minScrollProgress + 1:
      return {
        highlightSection: "cross",
        focusShapeSize: { x: 0, y: 650, width, height: 800 },
        zoom: 1,
        xOffset: 0,
        yOffset: 0,
      };
    // Side Cross-section
    case scrollProgress >= minScrollProgress + 1 &&
      scrollProgress < minScrollProgress + 2:
      return {
        highlightSection: "side",
        focusShapeSize: { x: 0, y: 200, width, height: 600 },
        zoom: 1,
        xOffset: 0,
        yOffset: 0,
      };
    // Text
    case scrollProgress >= minScrollProgress + 2 &&
      scrollProgress < minScrollProgress + 3:
      return {
        highlightSection: "text",
        focusShapeSize: { x: 0, y: 1550, width, height: 950 },
        zoom: 1,
        xOffset: 0,
        yOffset: 0,
      };
    // Title
    case scrollProgress >= minScrollProgress + 3 &&
      scrollProgress < minScrollProgress + 4:
      return {
        highlightSection: "title",
        focusShapeSize: { x: 0, y: 10, width, height: 220 },
        zoom: 1,
        xOffset: 0,
        yOffset: 0,
      };
    // Tables
    case scrollProgress >= minScrollProgress + 4 &&
      scrollProgress < minScrollProgress + 5:
      return {
        highlightSection: "tables",
        focusShapeSize: { x: 0, y: 1550, width: 1000, height: 950 },
        zoom: 1,
        xOffset: 0,
        yOffset: 0,
      };
    // Table 1
    case scrollProgress >= minScrollProgress + 5 &&
      scrollProgress < minScrollProgress + 6:
      return {
        highlightSection: "table1",
        focusShapeSize: { x: 0, y: 50, width, height: 2200 },
        zoom: 4,
        xOffset: -150,
        yOffset: -6800,
      };
    // Table 2
    case scrollProgress >= minScrollProgress + 6 &&
      scrollProgress < minScrollProgress + 7:
      return {
        highlightSection: "table2",
        focusShapeSize: { x: 0, y: 840, width, height: 450 },
        zoom: 5.85,
        xOffset: -1025,
        yOffset: -12300,
      };
    // Table 3
    case scrollProgress >= minScrollProgress + 7 &&
      scrollProgress < minScrollProgress + 8:
      return {
        highlightSection: "table3",
        focusShapeSize: { x: 0, y: 400, width, height: 1000 },
        zoom: 4.9,
        xOffset: -2875,
        yOffset: -7550,
      };
    default:
      return {
        highlightSection: undefined,
        focusShapeSize: { x: 0, y: 0, width, height },
        zoom: 1,
        xOffset: 0,
        yOffset: 0,
      };
  }
}

function ClarksonSideBySideScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  const { highlightSection, focusShapeSize, zoom, xOffset, yOffset } =
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
        bgColor="dataSecondary"
      >
        <div
          className={`flex flex-col my-20 md:flex-row justify-between`}
          id="scrollytell2"
        >
          <div className="sticky p-8 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className={`max-h-[80vh] max-w-[90%] md:my-16 mx-auto bg-dataSecondary transition-all duration-1000`}
            >
              <filter id="clarkson-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
              </filter>
              <image
                filter={hideSensitiveState ? "url(#clarkson-blur)" : ""}
                mask="url(#clarkson-mask)"
                href="/images/chapters/0105-description.jpg"
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
                        : "dataSecondary-translucent"
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
