import { useEffect, useState } from "react";
import BarGraph from "./barGraph/BarGraph";
import CenturySelect from "./barGraph/CenturySelect";
import { Key } from "./barGraph/Key";
import OverlaidSquare from "./barGraph/OverlaidSquare";
import RecreatedSquare from "./barGraph/RecreatedSquare";
import Timeline from "./barGraph/Timeline";
import { getCenturyEvents } from "./peabodyUtils";
import BarGraphContext from "./barGraph/BarGraphContext";
const centuries = [1500, 1600, 1700, 1800];

export default function PeabodyBarGraph() {
  const [currentCentury, setCurrentCentury] = useState(centuries[2]);
  const [currentCenturyEvents, setCurrentCenturyEvents] = useState(
    getCenturyEvents(centuries[2])
  );
  const [activeEvent, setActiveEvent] = useState<object | undefined>(undefined);

  useEffect(() => {
    setCurrentCenturyEvents(getCenturyEvents(currentCentury));
  }, [setCurrentCenturyEvents, currentCentury]);

  return (
    <BarGraphContext.Provider
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
      <div className="hidden md:grid grid grid-cols-1 md:grid-cols-2 bg-black gap-x-0 md:gap-x-32 md:gap-y-2 text-white text-center w-full p-6">
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
          <h3 className="mb-4 font-dubois text-xl pt-6 md:text-3xl">
            Visualizing Time
          </h3>
          <h4 className="mb-6 font-dubois font-light text-base md:text-xl">
            The Peabody Chart as Bar Graph
          </h4>
          <CenturySelect />
        </div>
        <div>
          <Key />
        </div>
      </div>
    </BarGraphContext.Provider>
  );
}
