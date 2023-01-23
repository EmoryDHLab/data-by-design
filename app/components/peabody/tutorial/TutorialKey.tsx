import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import eventsData from "~/data/peabody/1600sEvents.json";

export default function TutorialKey({ highlightedElement }) {
  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <div
      className={`opacity-${
        scrollProgress > 2 ? "100" : "0"
      } transition-opacity duration-700 pt-5`}
    >
      <div className="pb-4 font-dubois">
        {highlightedElement?.event?.event ?? "Hover over an event."}
      </div>
      <div className="flex flex-row w-full justify-between">
        {Object.keys(eventsData.actorColors).map((actor, index) => {
          return (
            <div key={index} className="flex flex-row text-sm">
              <svg viewBox="0 0 30 30" className="w-4 mr-2">
                <defs>
                  <pattern width="5" height="10" patternUnits="userSpaceOnUse">
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="10"
                      style={{ stroke: "orange", strokeWidth: 4 }}
                    ></line>
                  </pattern>
                </defs>
                <rect
                  stroke="#b3b3b3"
                  strokeWidth="0.5"
                  fillOpacity="1"
                  fill={eventsData.actorColors[actor]}
                  width="30"
                  height="30"
                  className=""
                ></rect>
              </svg>
              <span
                className={`font-${
                  highlightedElement?.event?.actors.includes(actor)
                    ? "extrabold"
                    : "normal"
                }`}
              >
                {actor}
              </span>
            </div>
          );
        })}
      </div>
      <div className="font-sans text-sm small-caps tracking-wide w-full grid grid-cols-3 mt-5">
        {eventsData.keyText.map((text, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row pl-2 border-l-2 ${
                highlightedElement?.eventType == index &&
                highlightedElement?.event?.squares !== "full"
                  ? "border-peabodyOrange"
                  : "border-transparent"
              }`}
            >
              <div className="shrink">{index + 1}</div>
              <div className="cursor-pointer pl-2 border-l-2 border-transparent">
                {text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
