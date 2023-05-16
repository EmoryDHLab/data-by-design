import { useContext } from "react";
import { QuizContext } from "./QuizContext";

const InstructionsContent = ({ className, children, ...props }) => {
  return(
    <text
      fontSize={10}
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
      fontFamily="VTC Du Bois Narrow, serif"
      fontStyle="italic"
      className={`transition-all duration-1000 tracking-widest ${className}`}
      {...props}
    >
      {children}
    </text>
  );
};

export default function QuizInstructions() {
  const { currentStepCount } = useContext(QuizContext);

  return (
    <svg
      width={300}
      height={10}
      className={`opacity-${currentStepCount === 0 || currentStepCount === 8 ? "0" : "100"}`}
    >
      <InstructionsContent
        className={`
        ${currentStepCount < 1 ? "translate-x-full" : ""}
        ${currentStepCount > 1 ? "-translate-x-full" : ""}
        `}
      >
        SELECT THE TWO COUNTRIES INVOLVED.
      </InstructionsContent>
      <InstructionsContent
        className={`
        ${currentStepCount < 2 ? "translate-x-full" : ""}
        ${currentStepCount > 2 ? "-translate-x-full" : ""}
        `}
      >
        SELECT THE YEAR 1644
      </InstructionsContent>
      <InstructionsContent
        className={`
        ${currentStepCount < 3 ? "translate-x-full" : ""}
        ${currentStepCount > 6 ? "-translate-x-full" : ""}
        `}
      >
        CATEGORIZE THE EVENT
      </InstructionsContent>
    </svg>
  );
};
