import { useContext, useEffect, useState } from "react";
import BarGraphContext from "./BarGraphContext";
import PeabodyActors from "../PeabodyActors";
import eventData from "~/data/peabody/eventData.json";

export default function BarGraphActors() {
  const { activeEvent, currentCentury } = useContext(BarGraphContext);
  const [currentActors, setCurrentActors] = useState(
    eventData.actors[currentCentury]
  );

  useEffect(() => {
    setCurrentActors(eventData.actors[currentCentury]);
  }, [setCurrentActors, currentCentury]);

  return (
    <div className="flex">
      {currentActors.map((actor, index) => {
        return (
          <PeabodyActors
            key={index}
            actor={actor}
            className={`mr-0 md:mr-4 ${
              activeEvent?.event?.actors?.includes(actor)
                ? "outline outline-white"
                : ""
            }`}
          />
        );
      })}
    </div>
  )
}