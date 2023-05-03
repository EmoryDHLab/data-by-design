import { useContext } from "react";
import { QuizContext } from "../PeabodyQuiz";

const x = 212;
const y = 190;
const side = 20;

export default function QuizNav() {
  const { currentStepCount, setCurrentStepCount } = useContext(QuizContext);
  return (
    <g role="navigation">
      <rect x={x - 2} y={y - 2} height={side + 2} width={side * 4 + 2} rx={5} fill="#1c1817" fillOpacity={0.7} />
      <svg
        y={y}
        x={x}
        width={side}
        height={side}
        className="font-duboisLightNarrow italic focus:outline-none focus:underline hover:underline"

        className={`focus:outline-none ${currentStepCount === 0 ? "opacity-50 cursor-not-allowed" : "opacity-75 hover:opacity-100 focus:opacity-100"}`}
        tabIndex={currentStepCount > 0 ? 0 : -1}
        role={currentStepCount > 0 ? "button" : ""}
        aria-roledescription="Button to restart the quiz."
        onClick={() => setCurrentStepCount(0)}
        onKeyUp={({ key }) => { if (key === "Enter") setCurrentStepCount(0); }}
      >
        <line stroke="white" strokeWidth={0.75} x1={6} x2={6} y1={3} y2={8} />
        <text
          x="50%"
          y="25%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
        >
          c
          <tspan
            dy={8}
            fontSize={4}
            x="50%"
            fontFamily="neue-haas-unica, sans-serif"
          >
            START
          </tspan>
        </text>
      </svg>

      <svg
        y={y}
        x={x + side}
        width={side}
        height={side}
        className={`focus:outline-none ${currentStepCount === 0 ? "opacity-50 cursor-not-allowed" : "opacity-75 hover:opacity-100 focus:opacity-100"}`}
        tabIndex={currentStepCount > 0 ? 0 : -1}
        role={currentStepCount > 0 ? "button" : ""}
        aria-roledescription="Button to restart the quiz."
        onClick={() => {
          if (currentStepCount > 0) setCurrentStepCount( currentStepCount - 1);
        }}
        onKeyUp={({ key }) => {
          if (key === "Enter" && currentStepCount > 0) setCurrentStepCount(0);
        }}
       >
        <text
          x="50%"
          y="25%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
        >
          c
          <tspan
            dy={8}
            fontSize={4}
            x="50%"
            fontFamily="neue-haas-unica, sans-serif"
          >
            BACK
          </tspan>
        </text>
      </svg>

      <svg
        y={y}
        x={x + (side * 2)}
        width={side}
        height={side}
        className={`focus:outline-none ${currentStepCount === 9 ? "opacity-50 cursor-not-allowed" : "opacity-75 hover:opacity-100 focus:opacity-100"}`}
        tabIndex={currentStepCount < 9 ? 0 : -1}
        role={currentStepCount < 9 ? "button" : ""}
        aria-roledescription="Button to restart the quiz."
        onClick={() => {
          if (currentStepCount < 9) setCurrentStepCount( currentStepCount + 1);
        }}
        onKeyUp={({ key }) => {
          if (key === "Enter" && currentStepCount < 9) setCurrentStepCount(0);
        }}
      >
        <text
          x="50%"
          y="25%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
        >
          b
          <tspan
            dy={8}
            fontSize={4}
            x="50%"
            fontFamily="neue-haas-unica, sans-serif"
          >
            NEXT
          </tspan>
        </text>
      </svg>
      <svg
        y={y}
        x={x + (side * 3)}
        width={side}
        height={side}
        className={`focus:outline-none ${currentStepCount === 9 ? "opacity-50 cursor-not-allowed" : "opacity-75 hover:opacity-100 focus:opacity-100"}`}
        tabIndex={currentStepCount < 9 ? 0 : -1}
        role={currentStepCount < 9 ? "button" : ""}
        aria-roledescription="Button to restart the quiz."
        onClick={() => setCurrentStepCount(8)}
        onKeyUp={({ key }) => { if (key === "Enter") setCurrentStepCount(8); }}
      >
        <line stroke="white" strokeWidth={0.75} x1={14} x2={14} y1={3} y2={8} />
        <text
          x="50%"
          y="25%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
        >
          b
          <tspan
            dy={8}
            fontSize={4}
            x="50%"
            fontFamily="neue-haas-unica, sans-serif"
          >
            END
          </tspan>
        </text>
      </svg>
    </g>
  );
};
