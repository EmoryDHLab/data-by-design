import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import eventsData from "~/data/peabody/1600sEvents.json";

export default function TutorialKey() {
  const { scrollProgress, highlightedSquare } = useContext(ScrollytellContext);

  return (
    <div
      className={`opacity-${
        scrollProgress > 2 ? "100" : "0"
      } transition-opacity duration-700 pt-5`}
    >
      <div className="pb-4 font-dubois">
        {highlightedSquare?.yearEvent?.event ?? ""}
        {!highlightedSquare?.yearEvent?.event &&
          <span>
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
          </span>
        }
      </div>
      <div className="flex flex-row w-full justify-between">
        {Object.keys(eventsData.actorColors).map((actor, index) => {
          return (
            <div key={index} className="flex flex-row text-sm">
              <svg viewBox="0 0 30 30" className="w-4 mr-2">
                <defs>
                  <pattern width="5" height="10" patternUnits="userSpaceOnUse">
                    <line
                      x1={0}
                      y1={0}
                      x2={0}
                      y2={10}
                      style={{ stroke: "orange", strokeWidth: 4 }}
                    ></line>
                  </pattern>
                </defs>
                <rect
                  stroke="#b3b3b3"
                  strokeWidth={highlightedSquare?.yearEvent?.actors.includes(actor) ? 2 : 0.5}
                  fillOpacity={1}
                  fill={eventsData.actorColors[actor]}
                  width={30}
                  height={30}
                  className=""
                ></rect>
              </svg>
              <span
                className={`font-${
                  highlightedSquare?.yearEvent?.actors.includes(actor)
                    ? "extrabold border-b-2 border-b-peabodyOrange"
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
                highlightedSquare?.square == index + 1 &&
                highlightedSquare?.yearEvent?.squares !== "full"
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
