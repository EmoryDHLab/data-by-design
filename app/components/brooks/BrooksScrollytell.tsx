import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import Areas from "./elford/Areas";
import { paths } from "./elford/paths";

const triggers = [
  <span key="07226c6e">
    Elford's "Plan" divides the ship's hold into six distinct areas.
  </span>,
  <span key="a400ea46">
    The largest area, in the bow of the ship, and which occupies the entire
    right half of the diagram, is labeled the "Men's room," and depicts 120 male
    bodies in four rows of 30.
  </span>,
  <span key="e6184ce7">
    In the middle is a narrow column labeled "Boy's room" and depicts smaller
    male figures in six rows of 12.
  </span>,
  <span key="aebd268b">
    To the left is the larger "Women's room," depicting figures the same size as
    the men, but with breasts, in four rows of 21 figures representing 84 women
    total.
  </span>,
  <span key="b1f566ad">
    And at the stern, in the center, the "Girls room," the figures shorter and
    squatter than the boys, arranged in three rows of ten. These "scaled
    inequalities," as Hortense Spillers describes the layout, represented
    COMPLETE.
  </span>,
  <span key="d90523c5">
    Certain visual features help the plan achieve its impact. Most immediate is
    how the 297 figures, what Marcus Wood describes as a "mass of black human
    flesh," are set against the clean lines that indicate the bounds of the
    ship. The labels of each area, engraved in neat script, underscore the
    reduction in complexity that is intended by the diagram. Wood describes the
    design of the Plan in terms of an "awful rigor," underscoring how the
    "formality" of the figures "appears to deny [their] flesh and blood
    presence." But for Elford, this abstraction was perhaps part of the point.
  </span>,
];

export default function BrooksScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({
    x: 645,
    y: 130,
    width: 0,
    height: 0,
  });
  const [fadeShapeSize, setFadeShapeSize] = useState<object>({
    x: 380,
    y: 0,
    width: 0,
    height: 291,
  });
  const [fadeBorder, setFadeBorder] = useState<string>("m380,66 l0,150");
  const [fadeOpacity, setFadeOpacity] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (true) {
      case scrollProgress < 0.5:
        setFocusShapeSize({ x: 645, y: 0, width: 0, height: 291 });
        break;
      // Men
      case scrollProgress >= 0.5 && scrollProgress < 1.5:
        setFocusShapeSize({ x: 380, y: 0, width: 265, height: 291 });
        break;
      // Boys
      case scrollProgress >= 1.5 && scrollProgress < 2.5:
        setFocusShapeSize({ x: 300, y: 0, width: 345, height: 291 });
        break;
      // Women
      case scrollProgress >= 2.5 && scrollProgress < 3.5:
        setFocusShapeSize({ x: 155, y: 0, width: 490, height: 291 });
        break;
      // Girls
      case scrollProgress >= 3.5 && scrollProgress < 4.5:
        setFocusShapeSize({ x: 95, y: 0, width: 550, height: 291 });
        break;
      default:
        setFocusShapeSize({ x: 25, y: 0, width: 618, height: 291 });
    }
  }, [scrollProgress, setFocusShapeSize]);

  useEffect(() => {
    switch (true) {
      // Men
      case scrollProgress < 2.5:
        setFadeShapeSize({ x: 385, y: 0, width: 265, height: 291 });
        setFadeBorder("m385,66 l0,150");
        break;
      // Boys
      case scrollProgress >= 2.5 && scrollProgress < 3.5:
        setFadeShapeSize({ x: 305, y: 0, width: 345, height: 291 });
        setFadeBorder("m305,70 l0,146");
        break;
      // Women
      case scrollProgress >= 3.5 && scrollProgress < 4.5:
        setFadeShapeSize({ x: 160, y: 0, width: 490, height: 291 });
        setFadeBorder("m160,85 l0,122");
        break;
      default:
        setFadeShapeSize({ x: 645, y: 0, width: 0, height: 291 });
        setFadeBorder("m160,85 l0,122");
    }
  }, [scrollProgress, setFadeShapeSize]);

  useEffect(() => {
    if (scrollProgress >= 1.5) {
      if (hideSensitiveState) {
        setFadeOpacity(1.0);
      } else {
        setFadeOpacity(0.7);
      }
    } else {
      setFadeOpacity(0.0);
    }
  }, [scrollProgress, hideSensitiveState, setFadeOpacity]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        bgColor="brooksSecondary"
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        id="scrollytell1"
      >
        <div className="sticky pt-16 md:pt-0 top-0 h-screen grid grid-cols-1 md:content-end order-first">
          <div
            className="text-3xl relative md:top-[calc(100vh-40rem)] ml-4 text-black hidden md:block"
            tabIndex={-1}
          >
            ↓
          </div>
          <div className="mb-6">
            <div className="w-11/12 m-auto">
              <svg viewBox="0 0 713.52 291.12" className="w-full md:h-full">
                <image
                  href="/images/brooks/LSF_Volume-H_85_Plan_of_an_African_slave_ship.jpg"
                  width="2973"
                  height="1213"
                  transform="scale(.24)"
                  x={0}
                  y={-0.45}
                />
                {hideSensitiveState && (
                  <g>
                    <path
                      className="transition-opacity duration-1000"
                      fillOpacity={1.0}
                      stroke="rgb(28 24 23)"
                      strokeWidth={scrollProgress > 4.5 ? 3 : 0}
                      fill={scrollProgress > 4.5 ? "#D9D9D9" : "#db882a"}
                      d={paths.outline}
                    />
                    <EyeSlashIcon
                      stroke="rgb(28 24 23)"
                      strokeOpacity={0.75}
                      className="w-1 h-1"
                      height={80}
                      y="33%"
                    />
                  </g>
                )}
                <g
                  className={`transition-all duration-1000 opacity-${
                    scrollProgress >= 4.5 ? 0 : 100
                  }`}
                >
                  <mask id="focus">
                    <path d={paths.outline} fill="white" />
                    <rect
                      {...focusShapeSize}
                      fill="black"
                      className="transition-all duration-1000"
                    />
                  </mask>
                  <mask id="fade">
                    <path d={paths.outline} fill="white" fillOpacity={0} />
                    <rect
                      {...fadeShapeSize}
                      fill="white"
                      className="transition-all duration-1000"
                    />
                  </mask>

                  <path
                    strokeWidth={0}
                    fill="#D9D9D9"
                    mask="url(#focus)"
                    d={paths.outline}
                  />
                  <rect
                    {...focusShapeSize}
                    fillOpacity={0}
                    mask="url(#focus)"
                    className="transition-all duration-1000"
                    strokeWidth={3}
                    strokeOpacity={1.0}
                    stroke="rgb(28 24 23)"
                  />

                  <path
                    className="transition-all duration-1000"
                    strokeWidth={0}
                    fill={hideSensitiveState ? "#D9D9D9" : "black"}
                    fillOpacity={fadeOpacity}
                    mask="url(#fade)"
                    d={paths.outline}
                  />
                  <rect
                    {...fadeShapeSize}
                    fillOpacity={0}
                    mask="url(#fade)"
                    className="transition-all duration-1000"
                    strokeWidth={0}
                  />
                  <path
                    stroke="rgb(28 24 23)"
                    strokeWidth={3}
                    fillOpacity={0}
                    d={paths.outline}
                  />

                  <path
                    className="transition-all duration-1000"
                    stroke="rgb(28 24 23)"
                    strokeWidth={1.5}
                    strokeOpacity={fadeOpacity}
                    d={fadeBorder}
                  />

                  <Areas strokeOpacity={scrollProgress < 0.25 ? 1.0 : 0.0} />
                </g>
              </svg>
              <figcaption></figcaption>
            </div>
          </div>
        </div>
        <div
          ref={steps}
          className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96"
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={`brooks-trigger-${trigger.key}`}
                data-step={index}
                className={`pointer-events-none step text-xl content-center p-5 md:px-20 relative h-screen text-${accentTextColor}`}
              >
                <p className="bg-brooksSecondary-translucent p-3 md:p-12 w-9/12">
                  {trigger}
                </p>
              </div>
            );
          })}
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}
