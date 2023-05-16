import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function QuizFinal() {
  const { currentStepCount } = useContext(QuizContext);

  return (
    <svg
      y="40%"
      x="20%"
      width={150}
      height={30}
      className={`h-6 transition-opacity duration-1000 ${currentStepCount < 8 ? "hidden" : ""} opacity-${currentStepCount === 9 ? "100" : "0"}`}
    >
      <text
        x="25%"
        y="45%"
        textAnchor="middle"
        fill="#fafbfd"
        fontSize={10}
        fontFamily="VTC Du Bois Narrow, serif"
        fontStyle="italic"
    >
        Continue Reading
      </text>
      <text
        className="motion-safe:animate-[bounce_2.5s_ease-in-out_infinite]"
        height={8}
        y={32}
        x="25%"
        textAnchor="middle"
        fill="#fafbfd"
        fontFamily="DxD Icons"
        fontSize={16}
      >
          t
      </text>
    </svg>
  );
};
