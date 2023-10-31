import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";
import type { Dispatch, SetStateAction } from "react";
import type { PeabodyActor } from "~/types/peabody";

interface Props {
  active: boolean;
  actor: PeabodyActor;
  border: float;
  disable: boolean;
  fillColor: string;
  selectActor: Dispatch<SetStateAction<PeabodyActor>>;
  selectedActors: PeabodyActor[];
  solvedActors: PeabodyActor[];
  x: number;
  y: number;
}

export default function QuizActorButton({
  actor,
  border,
  disable,
  fillColor,
  selectActor,
  selectedActors,
  solvedActors,
  x,
  y,
}: Props) {
  const { currentStepCount } = useContext(QuizContext);
  const buttonRef = useRef();
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [rectStyle, setRectStyle] = useState<object>({});
  const [textStyle, setTextStyle] = useState<object>({});

  useEffect(() => {
    setSelected(selectedActors.includes(actor) || solvedActors.includes(actor));
  }, [selectedActors, solvedActors, setSelected, actor]);

  useEffect(() => {
    if (currentStepCount >= 2 || currentStepCount < 1) {
      buttonRef.current.blur();
      setActive(false);
    }
  }, [currentStepCount, setActive]);

  useEffect(() => {
    if (disable) buttonRef.current.blur();
  }, [disable]);

  useEffect(() => {
    if (selectedActors.includes(actor)) {
      setRectStyle({ fillOpacity: 0.0, strokeWidth: 0.25, strokeOpacity: 0.3, className: "cursor-not-allowed" });
      setTextStyle({ fillOpacity: 0.5, fill: "white", className: "cursor-not-allowed" });
    } else if (solvedActors.includes(actor) || active) {
      setRectStyle({ fillOpacity: 1.0, strokeWidth: 0.75, strokeOpacity: 1.0 });
      setTextStyle({ fill: actor === "Americas" || actor === "Sweden" ? "black" : "white"})
    } else {
      setRectStyle({ fillOpacity: 0.0, strokeWidth: 0.5, strokeOpacity: 0.3 });
      setTextStyle({ fill: "white"})
    }
  }, [active, setRectStyle, solvedActors, actor, selectedActors]);

  return (
    <g
      ref={buttonRef}
      tabIndex={currentStepCount === 1 ? 0 : -1}
      onClick={() => selectActor(actor)}
      onKeyUp={({ key }) => { if (key === "Enter" || key === "Space") selectActor(actor) }}
      onMouseEnter={setActive}
      onMouseLeave={() => setActive(false)}
      onFocus={setActive}
      onBlur={setActive}
      role={currentStepCount === 1 ? "button" : ""}
      className={`focus:outline-none transition-all duration-700 ${currentStepCount > 1 && actor === "Americas" ? "-translate-x-7" : ""}`}
    >
      <svg
        // viewBox="0 0 60 30"
        width={26}
        height={14}
        x={x}
        y={y}
        className="border border-2 border-white bg-white"
      >
        <filter id={`shadow-${actor}`}>
          <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" floodColor="#acacac" />
        </filter>
        <rect
          width={24}
          height={12}
          fillOpacity={1}
          fill="rgb(28 24 23)"
          filter={selected ? "" : `url(#shadow-${actor})`}
        />
        <svg height={12} width={24}>
          <rect
            stroke="white"
            fill={fillColor}
            width={24}
            height={12}
            //
            {...rectStyle}
          >
          </rect>
          <text
            x="50%"
            y="50%"
            fontSize={5}
            textAnchor="middle"
            dominantBaseline="middle"
            // className={active ? "underline" : ""}
            {...textStyle}
          >
            {actor}
          </text>
        </svg>
        {/* {disable &&
          <>
            <line x1={0} x2={24} y1={0} y2={12} stroke="white" strokeWidth={0.5}/>
            <line x1={0} x2={24} y1={12} y2={0} stroke="white" strokeWidth={0.5}/>
          </>
        } */}
      </svg>
    </g>
  );
}
