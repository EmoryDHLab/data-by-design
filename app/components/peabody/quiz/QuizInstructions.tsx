import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";
import type { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

const InstructionsContent = ({ className, children }: Props) => {
  const { isMobile, isDesktop } = useDeviceContext();

  if (isMobile) {
    return (
      <span className={`duration-1000 transition-opacity w-screen text-center italic ${className}`}>
        {children}
      </span>
    );
  }

  if (isDesktop) {
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
        className={`hidden md:block transition-transform duration-1000 tracking-widest ${className}`}
      >
        {children}
      </text>
    );
  }

  return (
    <section>
      {children}
    </section>
  );

};

export default function QuizInstructions() {
  const { currentStepCount } = useContext(QuizContext);
  const { isMobile } = useDeviceContext();

  if (isMobile) {
    return (
      <>
        <InstructionsContent className={`transition-all duration-1000 ${currentStepCount == 1 ? "opacity-100" : "opacity-0 h-0"}`}>
          SELECT THE TWO COUNTRIES INVOLVED.
        </InstructionsContent>
        <InstructionsContent className={`transition-all duration-1000 ${currentStepCount == 2 ? "opacity-100" : "opacity-0 h-0"}`}>
          SELECT THE YEAR 1644.
        </InstructionsContent>
        <InstructionsContent className={`transition-all duration-1000 ${currentStepCount >= 3 && currentStepCount <= 6 ? "opacity-100" : "opacity-0 h-0"}`}>
          CATEGORIZE THE EVENT.
        </InstructionsContent>
      </>
    );
  }

  return (
    <svg
      width={300}
      height={10}
      className={`hidden md:block opacity-${currentStepCount === 0 || currentStepCount === 8 ? "0" : "100"}`}
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
        SELECT THE YEAR 1644.
      </InstructionsContent>
      <InstructionsContent
        className={`
        ${currentStepCount < 3 ? "translate-x-full" : ""}
        ${currentStepCount > 6 ? "-translate-x-full" : ""}
        `}
      >
        CATEGORIZE THE EVENT.
      </InstructionsContent>
    </svg>
  );
}
