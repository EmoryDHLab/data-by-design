import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/theme";
import ScrollytellWrapper from "../ScrollytellWrapper";

const triggers = [
  <>Elford's "Plan" divides the ship's hold into six distinct areas.</>,
  <>The largest area, in the bow of the ship, and which occupies the entire right half of the diagram, is labeled the "Men's room," and depicts 120 male bodies in four rows of 30.</>,
  <>In the middle is a narrow column labeled "Boy's room" and depicts smaller male figures in six rows of 12.</>,
  <>To the left is the larger "Women's room," depicting figures the same size as the men, but with breasts, in four rows of 21 figures representing 84 women total.</>,
  <>And at the stern, in the center, the "Girls room," the figures shorter and squatter than the boys, arranged in three rows of ten. These "scaled inequalities," as Hortense Spillers describes the layout, represented COMPLETE.</>,
  <>Certain visual features help the plan achieve its impact. Most immediate is how the 297 figures, what Marcus Wood describes as a "mass of black human flesh," are set against the clean lines that indicate the bounds of the ship. The labels of each area, engraved in neat script, underscore the reduction in complexity that is intended by the diagram. Wood describes the design of the Plan in terms of an "awful rigor," underscoring how the "formality" of the figures "appears to deny [their] flesh and blood presence." But for Elford, this abstraction was perhaps part of the point.</>,
];

export default function BrooksScrollytell() {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<float>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({ x: 0, y: 0, w: 100, h: 36 });
  const steps = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    switch(true) {
      case (scrollProgress >= 0.5 && scrollProgress < 1.5):
        setFocusShapeSize({ x: 52, y: 5, w: 43, h: 27 });
        break;
      case (scrollProgress >= 1.5 && scrollProgress < 2.5):
        setFocusShapeSize({ x: 39, y: 5, w: 14, h: 29 });
        break;
      case (scrollProgress >= 2.5 && scrollProgress < 3.5):
         setFocusShapeSize({ x: 15, y: 5, w: 26, h: 29 });
         break;
      case (scrollProgress >= 3.5 && scrollProgress < 4.5):
        setFocusShapeSize({ x: 5, y: 8, w: 11, h: 20 });
        break;
    default:
        setFocusShapeSize({ x: 0, y: 0, w: 100, h: 36 });
    }
  }, [scrollProgress, setFocusShapeSize]);

  return (
    <ScrollytellWrapper scrollProgress={scrollProgress} setScrollProgress={setScrollProgress} triggers={triggers} steps={steps}>
      <div
        className="sticky pt-16 md:pt-0 top-0 h-screen grid grid-cols-1 md:content-end order-first"
      >
        <div className="text-3xl relative md:top-[calc(100vh-21rem)] ml-12 text-black hidden md:block" tabIndex={-1}>↓</div>
        <div className="mb-6">
          <figure className="w-11/12 m-auto">
            <svg viewBox="0 0 100 36" className="w-full md:h-full">
              <g className="">
                <image mask="url(#ship-mask)"
                  href="/images/brooks/slaveship.webp"
                  height={"100%"}
                  width="100%"
                />
                <mask id="ship-mask">
                  <rect x="0" width={100} height={36} fill="white" fillOpacity={0.3} />
                  <rect className="scrollytell-shape-focus z-10" x={focusShapeSize.x} y={focusShapeSize.y} width={focusShapeSize.w} height={focusShapeSize.h} fill="white" />
                </mask>
                <rect
                  className="scrollytell-shape-focus"
                  x={focusShapeSize.x}
                  y={focusShapeSize.y}
                  width={focusShapeSize.w}
                  height={focusShapeSize.h}
                  fill="white"
                  fill="none"
                  stroke="#db882a"
                  strokeWidth={1}
                />
              </g>
            </svg>
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
      <div className="relative translate-y-[calc(-100vh+120px)]" ref={steps}>
        {triggers.map((trigger, index) => {
          return (
            <div
              key={index}
              data-step={index}
              className={`step text-xl content-center p-5 md:px-20 relative z-50 ${
                index + 1 === triggers.length
                  ? "md:h-[50vh]"
                  : "h-screen"
              } text-${accentTextColor}`}
            >
              <p className="bg-brooksSecondary-translucent p-3 md:p-12 w-9/12">
                {trigger}
              </p>
            </div>
          )
        })}
      </div>
    </ScrollytellWrapper>
  )
};
