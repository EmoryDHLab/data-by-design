import { useContext } from "react";
import { QuizContext } from "./QuizContext";

interface Props {
  className: string;
}

export default function QuizConclusion({ className }: Props) {
  const { setCurrentStepCount } = useContext(QuizContext);

  return (
    <g className={className}>
      <foreignObject
        x={10}
        y={20}
        width={150}
        height={200}
      >
        <section className="text-white">
          <p className="text-[8px] leading-[9px] text-offwhite font-thin">
            Once you've learned to recognize the Gold and Burgundy triangles as visual representation of Indigenous and colonial conflict.
          </p>
          <p className="text-[8px] leading-[9px] text-offwhite font-[1]">
            You come to see how the 17th century is increasingly dominated by similar conflicts, documenting the devastation brought about by British colonial expansion
          </p>
        </section>
      </foreignObject>
      <text
        y={140}
        x={10}
        width={20}
        height={20}
        fill="white"
        role="button"
        tabIndex={0}
        onClick={() => setCurrentStepCount(9)}
        onKeyUp={({ key }) => { if (key === "Enter" || key === "Space") setCurrentStepCount(9) }}
        fontSize={10}
        className="font-duboisLightNarrow italic focus:outline-none focus:underline hover:underline"
        tabIndex={0}
      >
        Finish
        <tspan dx={2} className="font-icons">b</tspan>
      </text>
    </g>
  )
}