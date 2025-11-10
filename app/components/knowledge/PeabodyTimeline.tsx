import { useEffect, useState } from "react";
import CenturySelect from "./timeline/CenturySelect";
import { Key } from "./timeline/Key";
import OverlaidSquare from "./timeline/OverlaidSquare";
import { getCenturyEvents } from "./peabodyUtils";
import TimelineContext from "./timeline/TimelineContext";
import BarGraphActors from "./timeline/TimelineActors";
import type { PeabodyEvent, ActivePeabodyEvent } from "~/types/process";

const centuries = [1500, 1600, 1700, 1800];

export const PeabodyTimeline = () => {
  const [currentCentury, setCurrentCentury] = useState(centuries[2]);
  const [currentCenturyEvents, setCurrentCenturyEvents] = useState<
    Array<PeabodyEvent>
  >(getCenturyEvents(1700));
  const [activeEvent, setActiveEvent] = useState<
    ActivePeabodyEvent | undefined
  >(undefined);

  useEffect(() => {
    setCurrentCenturyEvents(getCenturyEvents(currentCentury));
  }, [setCurrentCenturyEvents, currentCentury]);

  return (
    <TimelineContext.Provider
      value={{
        currentCentury,
        setCurrentCentury,
        currentCenturyEvents,
        setCurrentCenturyEvents,
        activeEvent,
        setActiveEvent,
        centuries,
      }}
    >
      <div
        className="hidden md:grid grid-cols-1 md:grid-cols-2 bg-black gap-x-0 md:gap-y-2 text-white text-center w-full p-6 relative z-10"
        id="timeline"
      >
        <div className="w-full my-0 mx-auto col-span-1 md:p-8">
          <OverlaidSquare />
        </div>
        <div className="hidden md:block md:col-span-1 md:p-8 my-0 mx-auto text-left">
          <h3 className="mb-4 font-power text-xl pt-6 md:text-3xl">
            Visualizing Time
          </h3>
          <h4 className="mb-6 font-power font-light text-base md:text-xl">
            The Peabody Chart as Bar Graph
          </h4>
          <CenturySelect />
          <BarGraphActors />
          <Key />
        </div>
      </div>
    </TimelineContext.Provider>
  );
};

export default PeabodyTimeline;
