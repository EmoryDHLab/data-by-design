import { useContext, useEffect, useState } from "react";
import BarGraphContext from "./BarGraphContext";
import PeabodyActors from "../PeabodyActors";
import eventData from "~/data/peabody/eventData.json";

export default function BarGraphActors() {
  const { activeEvent, currentCentury } = useContext(BarGraphContext);
  const [currentActors, setCurrentActors] = useState<Array<string>>(
    (eventData.actors as {[key: string]: Array<string>})[currentCentury]
  );

  useEffect(() => {
    setCurrentActors((eventData.actors as {[key: string]: Array<string>})[currentCentury]);
  }, [setCurrentActors, currentCentury]);

  return (
    <div className="flex">
      {currentActors.map((actor) => {
        return (
          <PeabodyActors
            key={`bg-${actor}`}
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