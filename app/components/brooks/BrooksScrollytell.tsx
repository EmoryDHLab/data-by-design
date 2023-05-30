import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import Areas from "./elford/Areas";
import { paths } from "./elford/paths";

const triggers = [
  <span key="07226c6e">Elford's "Plan" divides the ship's hold into six distinct areas.</span>,
  <span key="a400ea46">The largest area, in the bow of the ship, and which occupies the entire right half of the diagram, is labeled the "Men's room," and depicts 120 male bodies in four rows of 30.</span>,
  <span key="e6184ce7">In the middle is a narrow column labeled "Boy's room" and depicts smaller male figures in six rows of 12.</span>,
  <span key="aebd268b">To the left is the larger "Women's room," depicting figures the same size as the men, but with breasts, in four rows of 21 figures representing 84 women total.</span>,
  <span key="b1f566ad">And at the stern, in the center, the "Girls room," the figures shorter and squatter than the boys, arranged in three rows of ten. These "scaled inequalities," as Hortense Spillers describes the layout, represented COMPLETE.</span>,
  <span key="d90523c5">Certain visual features help the plan achieve its impact. Most immediate is how the 297 figures, what Marcus Wood describes as a "mass of black human flesh," are set against the clean lines that indicate the bounds of the ship. The labels of each area, engraved in neat script, underscore the reduction in complexity that is intended by the diagram. Wood describes the design of the Plan in terms of an "awful rigor," underscoring how the "formality" of the figures "appears to deny [their] flesh and blood presence." But for Elford, this abstraction was perhaps part of the point.</span>,
];

export default function BrooksScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<float>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({ x: 510, y: 130, width: 0, height: 0 });
  const steps = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    switch(true) {
      case (scrollProgress  < 0.5):
        setFocusShapeSize({ x: 510, y: 130, width: 0, height: 0 });
        break;
      // Men
      case (scrollProgress >= 0.5 && scrollProgress < 1.5):
        setFocusShapeSize({ x: 380, y: 0, width: 265, height: 291 });
        break;
      // Boys
      case (scrollProgress >= 1.5 && scrollProgress < 2.5):
        setFocusShapeSize({ x: 300, y: 0, width: 85, height: 291 });
        break;
      // Women
      case (scrollProgress >= 2.5 && scrollProgress < 3.5):
         setFocusShapeSize({ x: 155, y: 0, width: 150, height: 291 });
         break;
      // Girls
      case (scrollProgress >= 3.5 && scrollProgress < 4.5):
        setFocusShapeSize({ x: 95, y: 105, width: 62, height: 80 });
        break;
    default:
        setFocusShapeSize({ x: 25, y: 25, width: 618, height: 291 });
    }
  }, [scrollProgress, setFocusShapeSize]);

  return (
    <ScrollytellWrapper scrollProgress={scrollProgress} setScrollProgress={setScrollProgress} triggers={triggers} steps={steps}>
      <div
        className="cursor-pointer sticky pt-16 md:pt-0 top-0 h-screen grid grid-cols-1 md:content-end order-first"
      >
        <div className="text-3xl relative md:top-[calc(100vh-40rem)] ml-4 text-black hidden md:block" tabIndex={-1}>↓</div>
        <div className="mb-6">
          <div className="w-11/12 m-auto"
          >
            <svg viewBox="0 0 713.52 291.12" className="w-full md:h-full">
              <image
                href="/images/brooks/LSF_Volume H_85_Plan_of_an_African_slave_ship.jpg"
                width="2973" height="1213" transform="scale(.24)"
                x={0}
                y={-0.45}
              />
              {(hideSensitiveState) && (
                <g>
                  <path
                    className="transition-opacity duration-1000"
                    fillOpacity={1.0}
                    stroke="rgb(28 24 23)"
                    strokeWidth={scrollProgress > 4.5 ? 3 : 0}
                    fill={scrollProgress > 4.5 ? "#D9D9D9" : "#db882a"}
                    d={paths.outline}
                  />
                    <EyeSlashIcon stroke="rgb(28 24 23)" strokeOpacity={0.75} className="w-1 h-1" height={80} y="33%" />
                </g>
              )}

              <g className={`transition-all duration-1000 opacity-${scrollProgress >= 4.5 ? 0 : 100}`}>
                <mask id="ship">
                  <path d={paths.outline} fill="white" />
                  <rect {...focusShapeSize} fill="black" className="transition-all duration-1000" />
                </mask>
                <path
                  strokeWidth={0}
                  fill="#D9D9D9"
                  mask="url(#ship)"
                  d={paths.outline}
                />
                <path
                  stroke="rgb(28 24 23)"
                  strokeWidth={3}
                  fillOpacity={0}
                  d={paths.outline}
                />
                <Areas strokeOpacity={scrollProgress < 0.25 ? 1.0 : 0.0} />
                <rect {...focusShapeSize} fillOpacity={0} mask="url(#ship)" className="transition-all duration-1000" strokeWidth={3} strokeOpacity={1.0} stroke="rgb(28 24 23)" />
              </g>
            </svg>
            <figcaption></figcaption>
          </div>
        </div>
      </div>
      <div className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96" ref={steps}>
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
          )
        })}
      </div>
    </ScrollytellWrapper>
  )
};
