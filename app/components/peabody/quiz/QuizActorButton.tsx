import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";
import type { PeabodyActor } from "~/types/peabody";

interface Props {
  actor: PeabodyActor;
  disable: boolean;
  fillColor: string;
  selectActor: Function;
  selectedActors: PeabodyActor[];
  solvedActors: PeabodyActor[];
  x: number;
  y: number;
}

export default function QuizActorButton({
  actor,
  disable,
  fillColor,
  selectActor,
  selectedActors,
  solvedActors,
  x,
  y,
}: Props) {
  const { currentStepCount } = useContext(QuizContext);
  const buttonRef = useRef<SVGGElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [rectStyle, setRectStyle] = useState<object>({});
  const [textStyle, setTextStyle] = useState<object>({});

  useEffect(() => {
    setSelected(selectedActors.includes(actor) || solvedActors.includes(actor));
  }, [selectedActors, solvedActors, setSelected, actor]);

  useEffect(() => {
    if (currentStepCount >= 2 || currentStepCount < 1) {
      buttonRef.current?.blur();
      setActive(false);
    }
  }, [currentStepCount, setActive]);

  useEffect(() => {
    if (disable) buttonRef.current?.blur();
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
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      role={currentStepCount === 1 ? "button" : ""}
      className={`focus:outline-none transition-all duration-700 ${currentStepCount > 1 && actor === "Americas" ? "-translate-x-7" : ""}`}
    >
      <svg
        width={26}
        height={14}
        x={x}
        y={y}
        className="border border-2 border-white bg-white"
      >
        <filter id={`shadow-${actor}`}>
          <feDropShadow dx={0.2} dy={0.4} stdDeviation={0.2} floodColor="#acacac" />
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
            {...textStyle}
          >
            {actor}
          </text>
        </svg>
      </svg>
    </g>
  );
}
