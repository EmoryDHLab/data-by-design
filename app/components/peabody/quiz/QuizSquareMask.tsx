import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";

function QuizSquareMask({ defaultX, defaultY }) {
  const { currentStepCount } = useContext(QuizContext);
  const { isMobile } = useDeviceContext();
  const [initialMask, setInitialMask] = useState<object>({
    x: defaultX, y: defaultY, h: 125, w: 125
  });

  useEffect(() => {
    if (currentStepCount >= 3 && currentStepCount < 8) {
      setInitialMask({ x: defaultX + 37.6, y: defaultY + 49.25, w: 11.8, h: 11.8 });
    } else if (currentStepCount === 8) {
      setInitialMask({ x: defaultX + 37.6, y: defaultY + 49.25, w: 11.8, h: 4 });
    } else {
      setInitialMask({ x: defaultX, y: defaultY, h: 125, w: 125 });
    }
  }, [currentStepCount, setInitialMask, defaultX, defaultY]);

  return (
    <mask id="quiz-mask">
      <rect
        width={125}
        height={125}
        x={defaultX}
        y={defaultY}
        fill={isMobile && currentStepCount < 8 ? "black" : "white"}
        fillOpacity={isMobile && currentStepCount < 8 ? 1.0 : 0.1}
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
        x={defaultX + 14}
        y={defaultY + 26}
        width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
        height={4}
        fill={currentStepCount >= 8 ? "white" : "none"}
      />
      {/* x={165}
          y={25} */}
      <rect
        className="scrollytell-shape-focus delay-300"
        x={defaultX + 75}
        y={defaultY + 37.75}
        width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
        height={4}
        fill={currentStepCount >= 8 ? "white" : "none"}
      />
      <rect
        className="scrollytell-shape-focus delay-300"
        x={defaultX + 49}
        y={defaultY + 87.25}
        width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
        height={4}
        fill={currentStepCount >= 8 ? "white" : "none"}
      />
      <rect
        className="scrollytell-shape-focus delay-300"
        x={defaultX + 63.5}
        y={defaultY + 87.25}
        width={currentStepCount >= 8 && currentStepCount < 9 ? 11.8 : 0}
        height={4}
        fill={currentStepCount >= 8 ? "white" : "none"}
      />
    </mask>

  );
}

export default QuizSquareMask;