import { useEffect, useMemo, useState } from "react";
import BarGraph from "./timeline/BarGraph";
import CenturySelect from "./timeline/CenturySelect";
import { Key } from "./timeline/Key";
import OverlaidSquare from "./timeline/OverlaidSquare";
import RecreatedSquare from "./timeline/RecreatedSquare";
import Timeline from "./timeline/Timeline";
import { getCenturyEvents } from "./peabodyUtils";
import TimelineContext from "./timeline/TimelineContext";
import BarGraphActors from "./timeline/TimelineActors";
import type { PeabodyEvent, ActivePeabodyEvent } from "~/types/process";

const centuries = [1500, 1600, 1700, 1800];

export const PeabodyBarGraph = () => {
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

  const contextValue = useMemo(
    () => ({
      currentCentury,
      setCurrentCentury,
      currentCenturyEvents,
      setCurrentCenturyEvents,
      activeEvent,
      setActiveEvent,
      centuries,
    }),
    [currentCentury, currentCenturyEvents, activeEvent],
  );

  return (
    <TimelineContext.Provider value={contextValue}>
      <div
        className="hidden md:grid grid-cols-1 md:grid-cols-2 bg-black gap-x-0 md:gap-x-32 md:gap-y-2 text-white text-center w-full p-6 relative z-10"
        id="timeline"
      >
        <div className="w-full md:w-3/5 my-0 mx-auto">
          <OverlaidSquare />
        </div>
        <div className="hidden md:block md:col-span-1 md:w-3/5 my-0 mx-auto">
          <RecreatedSquare />
        </div>
        <div className="w-full col-span-2 grid grid-cols-1 gap-0 mt-.5 pt-5">
          <div className="flex justify-center">
            <BarGraph />
          </div>
          <div className="flex justify-center">
            <Timeline />
          </div>
          <hr className="mx-6 mt-11"></hr>
        </div>

        <div className="text-left w-full mx-auto col-span-2 md:col-span-1 ml-0 md:ml-6">
          <h3 className="mb-4 font-power text-xl pt-6 md:text-3xl">
            Visualizing Time
          </h3>
          <h4 className="mb-6 font-power font-light text-base md:text-xl">
            The Peabody Chart as Bar Graph
          </h4>
          <CenturySelect />
          <BarGraphActors />
        </div>
        <div>
          <Key />
        </div>
      </div>
    </TimelineContext.Provider>
  );
};

export default PeabodyBarGraph;
