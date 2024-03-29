import { useContext } from "react";
import BarGraphContext from "./BarGraphContext";
import eventData from "~/data/peabody/eventData.json";

export function Key() {
  const { activeEvent } = useContext(BarGraphContext);

  return (
    <div className="grid grid-cols-1 gap-6 text-left w-auto mx-auto mt-6 md:mt-0">
      <div className=" text-left">
        <p className="font-dubois text-base italic font-bold small-caps">
          Hover over an event
          <svg viewBox="0 0 30 30" className="w-6 ml-4 inline">
            <rect
              stroke="#b3b3b3"
              strokeWidth={5}
              fillOpacity={1}
              fill="white"
              width={30}
              height={30}
            ></rect>
          </svg>
        </p>
        <p className="font-dubois text-xl min-h-[2rem]">
          {activeEvent?.event && (
            <span>
              {activeEvent.event.year}: {activeEvent?.event.event}
            </span>
          )}
        </p>
      </div>
      <ol className="grid grid-cols-3 text-sm gap-y-2 gap-x-8 list-decimal ml-4 md:mx-auto">
        {eventData.eventTypes.map((type, index) => {
          return (
            <li
              key={`bg-e-type-${type}`}
              className={`text-${
                activeEvent?.type === index + 1 ? "peabodyOrange" : "white"
              }`}
            >
              {type}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
