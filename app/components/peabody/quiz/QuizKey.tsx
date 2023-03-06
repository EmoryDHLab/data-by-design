import { useContext, useEffect } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";

export default function QuizKey() {
  const { currentCentury, hoveredEvent } = useContext(QuizContext);

  const location = (position) => {
    switch (position) {
      case 0:
        return [50, 0];
      case 1:
        return [75, 0];
      case 2:
        return [50, 9];
      case 3:
        return [75, 9];
      case 4:
        return [50, 18];
      default:
        return [0, 0];
    }
  }

  return (
    <svg viewBox="0 0 100 25" className="mx-16">
      <g>
        <text
          fill="white"
          fontSize={2}
          x={0}
          y={0}
        >
          {eventData.eventTypes.map((type, index) => {
            return (
              <tspan
                key={index}
                x={0}
                dy={2.75}
                fill={hoveredEvent?.type === index ? "gold" : "white"}
                textDecoration={hoveredEvent?.type === index ? "underline" : ""}
              >
                {index + 1}. {type}
              </tspan>
            );
          })}
        </text>
      </g>
      {eventData.actors[currentCentury].map((actor, index) => {
        const textLocation = location(index);
        return (
          <g key={index}>
            <rect
              x={textLocation[0]}
              y={textLocation[1]}
              stroke="#b3b3b3" strokeWidth={0.25}
              fillOpacity={1}
              fill={eventData.actorColors[actor]}
              width={3}
              height={3}
            >
            </rect>
            <text
              key={index}
              fontSize={3}
              x={textLocation[0]}
              y={textLocation[1] + 6.5}
              textDecoration={hoveredEvent?.event?.actors.includes(actor) ? "underline" : ""}
              fill={hoveredEvent?.event?.actors.includes(actor) ? "gold" : "white"}
            >
              {actor}
            </text>
          </g>
        )
      })}
    </svg>

  );
}
