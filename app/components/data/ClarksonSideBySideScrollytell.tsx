import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import InlineFootnote from "~/components/InlineFootnote";

type TFocusShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const triggers = [
  <span key="300ed3fc">
    Just as Clarkson’s reintroduction of data to the chart underscored its
    basis in empirical evidence and buttressed its claims to the truth, so
    too did his visual modifications.
  </span>,
  <span key="d38f0a1c">
    He shifted the view of the hold lower down the page.
  </span>,
  <span key="e29b6c4d">
    He also added a series of cross sections that showed additional views of
    the ship from the side.
    <InlineFootnote index={25} />
  </span>,
  <span key="ac19f869">
    Unlike a typical naval diagram, however, Clarkson’s cross sections also
    included people. These represented the captives themselves, whom
    Clarkson included as a way to show from multiple perspectives precisely
    how they were confined.
  </span>,
  <span key="f63d8f0c">
    Here we might recall how Elford’s diagram depicted the captives’ bodies
    with minimal differentiation.
    <InlineFootnote index={26} />In Clarkson’s version, however, the
    captives are shown wearing loincloths, among other additional elements
    of visual detail.
  </span>,
  <span key="b74a2e6f">
    The men are shackled together in pairs, by both their hands and their
    feet.
  </span>,
  <span key="c15d9a3b">
    The women remain unbound, their breasts exposed.
    <InlineFootnote index={27} />
  </span>,
  <span key="a08e4f7c"></span>,
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
                href="/images/data/0104-description.jpg"
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
