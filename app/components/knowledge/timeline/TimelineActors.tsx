import { useContext, useMemo } from "react";
import TimelineContext from "./TimelineContext";
import PeabodyActors from "../PeabodyActors";
import eventData from "~/data/process/eventData.json";

export default function BarGraphActors() {
  const { activeEvent, currentCentury } = useContext(TimelineContext);
  const currentActors = useMemo(
    () => (eventData.actors as { [key: string]: Array<string> })[currentCentury],
    [currentCentury],
  );

  return (
    <div className="flex flex-row">
      {currentActors.map((actor) => {
        return (
          <PeabodyActors
            key={`bg-${actor}`}
            actor={actor}
            className={`mr-0 md:mr-4 md:mb-2 flex-1 ${
              activeEvent?.event?.actors?.includes(actor)
                ? "outline outline-white"
                : ""
            }`}
          />
        );
      })}
    </div>
  );
}
