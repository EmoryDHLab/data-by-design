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
      <span
        className={`duration-1000 transition-opacity w-screen text-center  ${className}`}
      >
        {children}
      </span>
    );
  }

  if (isDesktop) {
    return (
      <div
        className={`transition-transform duration-1000 tracking-widest text-white text-base font-power h-6 flex items-center whitespace-nowrap ${className}`}
      >
        {children}
      </div>
    );
  }

  return <section>{children}</section>;
};

export default function QuizInstructions() {
  const { currentStepCount } = useContext(QuizContext);
  const { isMobile } = useDeviceContext();

  if (isMobile) {
    return (
      <>
        <InstructionsContent
          className={`transition-all duration-1000 ${
            currentStepCount == 1 ? "opacity-100" : "opacity-0 h-0"
          }`}
        >
          SELECT THE TWO COUNTRIES INVOLVED.
        </InstructionsContent>
        <InstructionsContent
          className={`transition-all duration-1000 ${
            currentStepCount == 2 ? "opacity-100" : "opacity-0 h-0"
          }`}
        >
          SELECT THE YEAR 1644.
        </InstructionsContent>
        <InstructionsContent
          className={`transition-all duration-1000 ${
            currentStepCount >= 3 && currentStepCount <= 6
              ? "opacity-100"
              : "opacity-0 h-0"
          }`}
        >
          CATEGORIZE THE EVENT
        </InstructionsContent>
      </>
    );
  }

  return (
    <div
      className={`h-6 relative opacity-${
        currentStepCount === 0 ||
        currentStepCount === 8 ||
        currentStepCount === 9
          ? "0"
          : "100"
      }`}
    >
      <div className="absolute inset-0">
        <InstructionsContent
          className={`
          ${
            currentStepCount === 1
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }
          transition-all duration-700 ease-out
          `}
        >
          SELECT THE TWO COUNTRIES INVOLVED.
        </InstructionsContent>
      </div>
      <div className="absolute inset-0">
        <InstructionsContent
          className={`
          ${
            currentStepCount === 2
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }
          transition-all duration-700 ease-out delay-100
          `}
        >
          SELECT THE YEAR 1644.
        </InstructionsContent>
      </div>
      <div className="absolute inset-0">
        <InstructionsContent
          className={`
          ${
            currentStepCount >= 3 && currentStepCount <= 6
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }
          transition-all duration-700 ease-out delay-200
          `}
        >
          CATEGORIZE THE EVENT.
        </InstructionsContent>
      </div>
    </div>
  );
}
