import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function QuizIntro({ className }) {
  const { setCurrentStepCount } = useContext(QuizContext);

  return (
    <g className={className}>
      <foreignObject
        x={50}
        y={20}
        width={200}
        height={100}
      >
        <section className="text-white">
          <h2 className="text-[14px] font-dubois leading-[15px]">Creating historical knowledge</h2>
          <h3 className="text-[7px] font-duboisLightNarrow leading-[8px] mt-[2px]">interacting with Peabody's Pedagogy</h3>
          <p className="text-[8px] leading-[9px] text-offwhite font-thin">
            Peabody intended the process of learning to be interactive.
          </p>
          <p className="text-[8px] leading-[9px] text-offwhite font-[1]">
            Follow the instruction in italics to participate in Peabody's process of knowledge production.
          </p>
        </section>
      </foreignObject>
      <text
        y={120}
        x={50}
        width={20}
        height={20}
        fill="white"
        role="button"
        tabIndex={0}
        onClick={() => setCurrentStepCount(1)}
        onKeyUp={({ key }) => { if (key === "Enter" || key === "Space") setCurrentStepCount(1) }}
        fontSize={10}
        className="font-duboisLightNarrow italic focus:outline-none focus:underline hover:underline"
        tabIndex={0}
      >
        Begin
        <tspan dx={2} className="font-icons">b</tspan>
      </text>
    </g>
  );
}