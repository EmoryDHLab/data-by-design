
import { useContext, useEffect, useRef } from "react";
import { QuizContext } from "../PeabodyQuiz";

export default function QuizActorButton({ x, y, actor, selectActor, border, opacity, setActive, fill, disable, active }) {
  const { currentStepCount } = useContext(QuizContext);
  const buttonRef = useRef();

  useEffect(() => {
    if (currentStepCount === 2) buttonRef.current.blur();
  }, [currentStepCount]);

  useEffect(() => {
    if (disable) buttonRef.current.blur();
  }, [disable]);

  return (
    <g
      ref={buttonRef}
      tabIndex={currentStepCount === 1 ? 0 : -1}
      onClick={() => selectActor(actor)}
      onKeyUp={({ key }) => { if (key === "Enter" || key === "Space") selectActor(actor) }}
      onMouseEnter={() => setActive(actor)}
      onMouseLeave={() => setActive(undefined)}
      onFocus={() => setActive(actor)}
      onBlur={() => setActive(undefined)}
      role={currentStepCount === 1 ? "button" : ""}
      className={`focus:outline-none transition-all duration-700 ${currentStepCount > 1 && actor === "Americas" ? "-translate-x-7" : ""}`}
    >
      <svg
        width={24}
        height={12}
        x={x}
        y={y}
        className=""
      >
        <rect
          stroke="white"
          strokeWidth={border}
          fillOpacity={opacity}
          fill={fill}
          width={24}
          height={12}
        >
        </rect>
        <text
          fontSize={5}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fillOpacity={opacity}
          className={active === actor ? "underline" : ""}
          fill={actor === "Americas" || actor === "Sweden" ? "black" : "white"}
        >
          {actor}
        </text>
        {disable &&
          <>
            <line x1={0} x2={24} y1={0} y2={12} stroke="white" strokeWidth={0.5}/>
            <line x1={0} x2={24} y1={12} y2={0} stroke="white" strokeWidth={0.5}/>
          </>
        }
      </svg>
    </g>
  );
}
