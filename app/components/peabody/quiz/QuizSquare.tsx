import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";
import QuizYearSquare from "./QuizYearSquare"
import { numberRange } from "~/utils";

export default function QuizSquare() {
  const { currentStepCount } = useContext(QuizContext);

  const [initialMask, setInitialMask] = useState<object>({
    x: 165, y: 25, h: 125, w: 125
  });

  const squareRef = useRef();

  useEffect(() => {
    if (currentStepCount === 2) squareRef.current.focus();

    if (currentStepCount >= 3 && currentStepCount < 8) {
      setInitialMask({ x: 202.6, y: 74.25, w: 11.8, h: 11.8 });
    } else if (currentStepCount === 8) {
      setInitialMask({ x: 202.6, y: 74.25, w: 11.8, h: 4 });
    } else {
      setInitialMask({ x: 165, y: 25, h: 125, w: 125 });
    }
  }, [currentStepCount, setInitialMask]);

  return (
    <g
      className={`${currentStepCount === 0 ? "hidden" : ""} transition-all duration-700 ${currentStepCount >= 3 && currentStepCount < 8 ? "scale-[7] -translate-x-[78rem]  -translate-y-[30rem]" : ""} focus:outline focus:outline-1`}
      tabIndex={currentStepCount > 1 ? 0 : -1}
      ref={squareRef}
    >
      <mask id="quiz-mask">
        <rect
          width={125}
          height={125}
          x={165}
          y={25}
          fill="white"
          fillOpacity={0.1}
        />
        <rect
          className="scrollytell-shape-focus"
          x={initialMask.x}
          y={initialMask.y}
          width={initialMask.w}
          height={initialMask.h}
          fill="white"
          className="duration-500"
        />

        <rect
          className="scrollytell-shape-focus delay-300"
          x={179}
          y={51}
          width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
          height={4}
          fill={currentStepCount >= 8 ? "white" : "none"}
        />
        <rect
          className="scrollytell-shape-focus delay-300"
          // x={currentStepCount >= 8 && currentStepCount < 9 ? 240 : initialMask.x}
          // y={currentStepCount >= 8 && currentStepCount < 9 ? 57 : initialMask.y}
          x={240}
          y={62.75}
          width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
          // height={currentStepCount >= 8 && currentStepCount < 9 ? 4 : initialMask.h}
          height={4}
          fill={currentStepCount >= 8 ? "white" : "none"}
        />
        <rect
          className="scrollytell-shape-focus delay-300"
          // x={currentStepCount >= 8 && currentStepCount < 9 ? 214 : initialMask.x}
          // y={currentStepCount >= 8 && currentStepCount < 9 ? 106.5 : initialMask.y}
          x={214}
          y={112.25}
          width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
          // height={currentStepCount >= 8 && currentStepCount < 9 ? 4 : initialMask.h}
          height={4}
          fill={currentStepCount >= 8 ? "white" : "none"}
        />
        <rect
          className="scrollytell-shape-focus delay-300"
          // x={currentStepCount >= 8 && currentStepCount < 9 ? 228.5 : initialMask.x}
          // y={currentStepCount >= 8 && currentStepCount < 9 ? 106.5 : initialMask.y}
          x={228.5}
          y={112.25}
          width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
          // height={currentStepCount >= 8 && currentStepCount < 9 ? 4 : initialMask.h}
          height={4}
          fill={currentStepCount >= 8 ? "white" : "none"}
        />
      </mask>
      <g className="fill-peabodyOrange" mask="url(#quiz-mask)">
        <rect
          width={125}
          height={125}
          x={165}
          y={25}
        />
        {[...numberRange( 1601,  1700)].map((year, index) => {
          return (
              <QuizYearSquare index={index} year={year} key={index} />
          );
        })}
      </g>
    </g>
  )
}