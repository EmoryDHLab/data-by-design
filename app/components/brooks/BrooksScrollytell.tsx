import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import FancyButton from "../FancyButton";

const triggers = [
  <>Elford's "Plan" divides the ship's hold into six distinct areas.</>,
  <>The largest area, in the bow of the ship, and which occupies the entire right half of the diagram, is labeled the "Men's room," and depicts 120 male bodies in four rows of 30.</>,
  <>In the middle is a narrow column labeled "Boy's room" and depicts smaller male figures in six rows of 12.</>,
  <>To the left is the larger "Women's room," depicting figures the same size as the men, but with breasts, in four rows of 21 figures representing 84 women total.</>,
  <>And at the stern, in the center, the "Girls room," the figures shorter and squatter than the boys, arranged in three rows of ten. These "scaled inequalities," as Hortense Spillers describes the layout, represented COMPLETE.</>,
  <>Certain visual features help the plan achieve its impact. Most immediate is how the 297 figures, what Marcus Wood describes as a "mass of black human flesh," are set against the clean lines that indicate the bounds of the ship. The labels of each area, engraved in neat script, underscore the reduction in complexity that is intended by the diagram. Wood describes the design of the Plan in terms of an "awful rigor," underscoring how the "formality" of the figures "appears to deny [their] flesh and blood presence." But for Elford, this abstraction was perhaps part of the point.</>,
];

export default function BrooksScrollytell() {
  const { accentTextColor, requireConsentState, setRequireConsentState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<float>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({ x: 0, y: 0, w: 74, h: 30 });
  const steps = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    switch(true) {
      case (scrollProgress >= 0.5 && scrollProgress < 1.5):
        setFocusShapeSize({ x: 39, y: 6, w: 28, h: 18 });
        break;
      case (scrollProgress >= 1.5 && scrollProgress < 2.5):
        setFocusShapeSize({ x: 31, y: 6, w: 9, h: 19 });
        break;
      case (scrollProgress >= 2.5 && scrollProgress < 3.5):
         setFocusShapeSize({ x: 15.75, y: 6.5, w: 16.5, h: 17.5 });
         break;
      case (scrollProgress >= 3.5 && scrollProgress < 4.5):
        setFocusShapeSize({ x: 9, y: 8, w: 8, h: 14 });
        break;
    default:
        setFocusShapeSize({ x: 0, y: 0, w: 74, h: 30 });
    }
  }, [scrollProgress, setFocusShapeSize]);

  return (
    <ScrollytellWrapper scrollProgress={scrollProgress} setScrollProgress={setScrollProgress} triggers={triggers} steps={steps}>
      <div
        className="cursor-pointer sticky pt-16 md:pt-0 top-0 h-screen grid grid-cols-1 md:content-end order-first"
      >
        <div className="text-3xl relative md:top-[calc(100vh-28rem)] ml-4 text-black hidden md:block" tabIndex={-1}>↓</div>
        <div className="mb-6">
          <div className="w-11/12 m-auto"
          >
            <svg viewBox="0 0 74 30" className="w-full md:h-full"

            >
              <defs>
                <filter id="blur" height={15} width={3}>
                  <feGaussianBlur stdDeviation={1} />
                  {/* <feOffset dx={10} dy={5} /> */}
                </filter>
              </defs>
              <g className="">
                <image
                  mask="url(#ship-mask)"
                  // filter={requireConsentState ? "url(#blur)" : ""}
                  href="/images/brooks/LSF_Volume H_85_Plan_of_an_African_slave_ship.jpg"
                  height="100%"
                  width="100%"
                  x={0}
                  y={0}
                  />

                {/* {requireConsentState && (
                  <svg
                    x={9.5} y={2}
                    viewBox="0 0 59.71 16.88"
                    width={58}
                    height={25}
                    role="button"
                    className="cursor-pointer"
                    onClick={(event) => {
                      console.log("🚀 ~ file: BrooksScrollyTell.tsx:79 ~ BrooksScrollytell ~ event:", event)
                      event.preventDefault();
                      setRequireConsentState(false);
                    }}
                  >
                    <path strokeWidth={0.5} fillOpacity={1} fill="#ede6d9" stroke="black" width={55}
                        d="m.5,3.39c11.37-1.12,55.38-8.07,58.66,4.69C52.12,20.69,11.57,16.2.58,15.14c-.03-3.92-.05-7.83-.08-11.75Z" />
                    <EyeSlashIcon className="w-1 h-1" height={5} y={4}/>
/                    <FancyButton
                      y={11}
                      x={23.5}
                      fontSize={12}
                      height={3}
                      width={12}
                      outlineColor="black"
                      action={(e) => e.preventDefault()}
                    >
                      Show Image
                    </FancyButton>
                  </svg>
                )} */}

                <mask id="ship-mask">
                  <rect
                    className="pointer-events-none"
                    x={0}
                    width={74}
                    height={30}
                    fill="white"
                    fillOpacity={0.3}
                    />
                  <rect
                    className="scrollytell-shape-focus pointer-events-none"
                    x={focusShapeSize.x}
                    y={focusShapeSize.y}
                    width={focusShapeSize.w}
                    height={focusShapeSize.h}
                    fill="white"
                  />
                </mask>
                <rect
                  className="scrollytell-shape-focus pointer-events-none"
                  x={focusShapeSize.x}
                  y={focusShapeSize.y}
                  width={focusShapeSize.w}
                  height={focusShapeSize.h}
                  fill="white"
                  fillOpacity={0}
                  stroke="#db882a"
                  strokeWidth={1}
                  // filter="url(#blur)"
                />
              </g>
            </svg>
            <figcaption></figcaption>
          </div>
        </div>
      </div>
      <div className="relative translate-y-[calc(-100vh+120px)] pointer-events-none" ref={steps}>
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
              style={{pointerEvents: "all"}}
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
