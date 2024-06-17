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
    if (currentStepCount === 2) squareRef.current?.focus();
  }, [currentStepCount]);

  return (
    <g
      className={`${
        currentStepCount == 0 ? "hidden" : ""
      } transition-all duration-700 ${isMobile ? "origin-center" : ""} ${
        currentStepCount >= 3 && currentStepCount < 8
          ? "scale-[10.5] md:scale-[7] translate-x-[160%] md:-translate-x-[78rem]  translate-y-[63%] md:-translate-y-[38rem]"
          : ""
      } focus:outline focus:outline-1`}
      tabIndex={currentStepCount > 1 ? 0 : -1}
      ref={squareRef}
    >
      {isDesktop && <QuizSquareMask defaultX={defaultX} defaultY={defaultY} />}
      <g
        className="fill-peabodyOrange"
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
        Q
      </g>
    </g>
  );
}
