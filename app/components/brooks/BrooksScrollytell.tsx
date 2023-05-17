import { useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { EyeSlashIcon } from '@heroicons/react/24/outline'

const triggers = [
  <>Elford's "Plan" divides the ship's hold into six distinct areas.</>,
  <>The largest area, in the bow of the ship, and which occupies the entire right half of the diagram, is labeled the "Men's room," and depicts 120 male bodies in four rows of 30.</>,
  <>In the middle is a narrow column labeled "Boy's room" and depicts smaller male figures in six rows of 12.</>,
  <>To the left is the larger "Women's room," depicting figures the same size as the men, but with breasts, in four rows of 21 figures representing 84 women total.</>,
  <>And at the stern, in the center, the "Girls room," the figures shorter and squatter than the boys, arranged in three rows of ten. These "scaled inequalities," as Hortense Spillers describes the layout, represented COMPLETE.</>,
  <>Certain visual features help the plan achieve its impact. Most immediate is how the 297 figures, what Marcus Wood describes as a "mass of black human flesh," are set against the clean lines that indicate the bounds of the ship. The labels of each area, engraved in neat script, underscore the reduction in complexity that is intended by the diagram. Wood describes the design of the Plan in terms of an "awful rigor," underscoring how the "formality" of the figures "appears to deny [their] flesh and blood presence." But for Elford, this abstraction was perhaps part of the point.</>,
];

const strokeColor = "#8C20E1";

export default function BrooksScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<float>(0.0);
  const steps = useRef<HTMLDivElement | undefined>(undefined);

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
                    fillOpacity={1}
                    stroke="rgb(28 24 23)"
                    strokeWidth={3}
                    fill="#D9D9D9"
                    d="m95.9,92.31c-.78.11-1.36.77-1.36,1.56v107.25c0,.33.25.61.58.64,19.3,1.43,509.92,56.12,547.76-64.76,2.1-122.28-516.65-48.81-546.99-44.69Z"
                  />

                    <EyeSlashIcon stroke={strokeColor} strokeOpacity={0.75} className="w-1 h-1" height={80} y="33%" />

                </g>
              )}

              <g className={`transition-opacity duration-1000 opacity-${scrollProgress >= 4.5 ? 0 : 100}`}>
                {/* Ship Outline */}
                <path
                  fillOpacity={1}
                  stroke="rgb(28 24 23)"
                  strokeWidth={3}
                  fill="#D9D9D9"
                  d="m95.9,92.31c-.78.11-1.36.77-1.36,1.56v107.25c0,.33.25.61.58.64,19.3,1.43,509.92,56.12,547.76-64.76,2.1-122.28-516.65-48.81-546.99-44.69Z"
                />

                {/* Men's Area */}
                <path
                  className="transition-all duration-1000"
                  fillOpacity={scrollProgress >= 0.25 && scrollProgress < 1.25 ? 1 : 0}
                  fill="#db882a"
                  stroke="rgb(28 24 23)"
                  strokeWidth={3}
                  strokeOpacity={scrollProgress < 0.25 || (scrollProgress >= 0.25 && scrollProgress < 1.25) ? 1 : 0}
                  d="m383.29,67.26l1.07,147.61c326.39,3.62,357.58-168.16-1.07-147.61Z"
                />

                {/* Boys' Area */}
                <path
                  className="transition-all duration-1000"
                  fillOpacity={scrollProgress >= 1.25 && scrollProgress <= 2.25 ? 1 : 0}
                  fill="#db882a"
                  stroke="rgb(28 24 23)"
                  strokeWidth={3}
                  strokeOpacity={scrollProgress < 0.25 || (scrollProgress >= 1.25 && scrollProgress <= 2.25) ? 1 : 0}
                  d="m383.29,67.26c-27.7.79-55.54,2.18-79.96,4.02l1.79,143.58c25.37.7,52.29.65,79.43.02l-1.25-147.61Z"
                />

                {/* Women's Area */}
                <path
                  className="transition-all duration-1000"
                  fillOpacity={scrollProgress >= 2.25 && scrollProgress <= 3.25 ? 1 : 0}
                  fill="#db882a"
                  stroke="rgb(28 24 23)"
                  strokeWidth={3}
                  strokeOpacity={scrollProgress < 0.25 || (scrollProgress >= 2.25 && scrollProgress <= 3.25) ? 1 : 0}
                  d="m305.69,214.43l-1.94-143.34c-46.9,3.04-99.95,7.99-147.1,13.47.13,43.26.24,82.22.36,122.71,44.44,3.8,100.35,6.05,148.68,7.16Z"
                />

                {/* Girls' Area */}
                <polygon
                  className="transition-all duration-1000"
                  fillOpacity={scrollProgress >= 3.25 && scrollProgress <= 4.25 ? 1 : 0}
                  fill="#db882a"
                  stroke="rgb(28 24 23)"
                  strokeWidth={3}
                  strokeOpacity={scrollProgress < 0.25 || (scrollProgress >= 3.25 && scrollProgress <= 4.25) ? 1 : 0}
                  points="156.65 104.75 94.54 108.98 94.54 181.85 156.65 182.85 156.65 104.75"
                />
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
              key={index}
              data-step={index}
              className={`pointer-events-none step text-xl content-center p-5 md:px-20 relative ${
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
