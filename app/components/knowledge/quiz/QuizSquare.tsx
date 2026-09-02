import { useContext, useEffect, useRef } from "react";
import { QuizContext } from "./QuizContext";
import QuizYearSquare from "./QuizYearSquare";
import { numberRange } from "~/utils";
import { useDeviceContext } from "~/hooks";
import QuizSquareMask from "./QuizSquareMask";

export default function QuizSquare({
  defaultX,
  defaultY,
}: {
  defaultX: number;
  defaultY: number;
}) {
  const { currentStepCount } = useContext(QuizContext);
  const { isDesktop, isMobile } = useDeviceContext();
  const squareRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // preventScroll: focus() otherwise triggers the browser's default
    // scroll-into-view, which - combined with the step 3-8 zoom transform
    // repositioning this same element - produces an unwanted page jump.
    if (currentStepCount === 2)
      squareRef.current?.focus({ preventScroll: true });
  }, [currentStepCount]);

  const zoomed = currentStepCount >= 3 && currentStepCount < 8;
  const scale = zoomed ? (isMobile ? 10.5 : 7) : 1;
  const translateX = zoomed ? (isMobile ? "160%" : "-78rem") : "0";
  const translateY = zoomed ? (isMobile ? "63%" : "-38rem") : "0";

  return (
    <g
      className={`${
        currentStepCount == 0 ? "hidden" : ""
      } ${isMobile ? "origin-center" : ""} focus:outline focus:outline-1`}
      style={{
        transform: `translate(${translateX}, ${translateY}) scale(${scale})`,
        transition: "transform 2000ms",
      }}
      tabIndex={currentStepCount > 1 ? 0 : -1}
      ref={squareRef}
    >
      {isDesktop && <QuizSquareMask defaultX={defaultX} defaultY={defaultY} />}
      <g
        className="fill-processOrange"
        mask="url(#quiz-mask)"
        width={125}
        height={125}
      >
        <rect width={125} height={125} x={defaultX} y={defaultY} />
        {[...numberRange(1601, 1700)].map((year, index) => {
          return (
            <QuizYearSquare
              key={`quiz-year-${year}`}
              index={index}
              year={year}
              defaultX={defaultX}
              defaultY={defaultY}
            />
          );
        })}
      </g>
    </g>
  );
}
