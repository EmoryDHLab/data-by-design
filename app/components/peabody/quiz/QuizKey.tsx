import { useContext } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";

export default function QuizKey() {
  const { currentCentury } = useContext(QuizContext);

  return (
    <div className="grid grid-cols-2 grid-rows-1 text-left pl-12 h-[fit-content]">
      <div className="">
        <ol className="list-decimal">
          {eventData.eventTypes.map((type, index) => {
            return (
              <li key={`type-${index}`}>{type}</li>
            )
          })}
        </ol>
      </div>
      <div className="grid grid-cols-2">
          {eventData.actors[currentCentury].map((actor, index) => {
            return (
              <div key={`actor-${index}`}>
                <svg viewBox="0 0 30 30" className="w-10 mr-2">
                  <defs>
                    <pattern width="5" height="10" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" style={{stroke: "orange", strokeWidth: 4}}></line>
                    </pattern>
                  </defs>
                  <rect stroke="#b3b3b3" strokeWidth="0.5" fillOpacity="1" fill={eventData.actorColors[actor]} width="30" height="30" className=""></rect>
                </svg>
                {actor}
              </div>
            )
          })}
      </div>
    </div>
  );
}
