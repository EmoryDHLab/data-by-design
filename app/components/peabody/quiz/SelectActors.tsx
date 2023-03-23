import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";


export default function SelectActors() {
  const { currentEvent, setStepState } = useContext(QuizContext);
  const [solvedActors, setSolvedActors] = useState<array>([]);
  const [selectedActors, setSelectedActors] = useState<array>([]);
  const [allActorsSelected, setAllActorsSelected] = useState<boolean>(false);

  useEffect(() => {
    setAllActorsSelected(
      currentEvent?.actors.every((actor) => solvedActors.includes(actor))
    );
  }, [currentEvent, solvedActors, setAllActorsSelected]);

  useEffect(() => {
    if (allActorsSelected) setStepState(stepState => stepState + 1);
  }, [setStepState, allActorsSelected]);

  const selectActor = (actor) => {
    if (currentEvent?.actors.includes(actor)) {
      setSolvedActors(solvedActors.concat([actor]));
    } else {
      setSelectedActors(selectedActors.concat([actor]));
    }
  };

  return (
    <g className={`${allActorsSelected ? "-translate-y-3" : ""} transition-all duration-1000`}>
      {eventData.actors["1600"].map((actor, index) => {
        if ((allActorsSelected && currentEvent.actors.includes(actor)) || !allActorsSelected) {
          const x = 85 + (index * 28);
          const y = 66
          return (
            <g
              key={index}
              onClick={() => selectActor(actor)}
              role="button"
              className={`transition-all duration-700 ${allActorsSelected && index === 2 ? "-translate-x-7" : ""}`}
            >
              <rect
                x={x}
                y={y}
                stroke={solvedActors.includes(actor) ? "white" : "black"}
                strokeWidth={0.25}
                fillOpacity={selectedActors.includes(actor) ? 0.5 : 1.0}
                fill={eventData.actorColors[actor]}
                width={24}
                height={12}
              >
              </rect>
              <text
                key={index}
                fontSize={5}
                x={x + 1.5}
                y={y + 7.5}
                fillOpacity={selectedActors.includes(actor) ? 0.5 : 1.0}
                fill={actor === "Americas" || actor === "Sweden" ? "black" : "white"}
              >
                {actor}
              </text>
              {selectedActors.includes(actor) &&
                <>
                  <line x1={x} x2={x + 24} y1={y} y2={y + 12} stroke="white" strokeWidth={0.5}/>
                  <line x1={x} x2={x + 24} y1={y + 12} y2={y} stroke="white" strokeWidth={0.5}/>
                </>
              }
            </g>
          )
        }
        return <g key={index}></g>
      })}
    </g>
  );
}