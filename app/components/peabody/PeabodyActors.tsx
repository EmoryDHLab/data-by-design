import type { Dispatch, SetStateAction } from "react";
import eventData from "~/data/peabody/eventData.json";

interface Props {
  actor?: string;
  className?: string;
  century?: number;
  handleClick?: Dispatch<SetStateAction<string>>|undefined;
  highlight?: array;
}

export default function PeabodyActors({ actor, className, century, handleClick, highlight }: Props) {
  const textColor = (actorName) => {
    return actorName === "Americas" || actorName === "Sweden" ? "black" : "white";
  };

  // TODO: We might not ever call this with a handleClick prop
  const interactiveOptions = handleClick
    ? {
        role: "button",
        tabIndex: 0,
        onClick: () => handleClick(actor),
        onKeyDown: ({ key }) => { if (key === "Enter") handleClick(actor) },
    }
    : {}

  if (actor) {
    return (
      <span className={`font-normal bg-${actor} text-${textColor(actor)} p-2 border-2 border-black ${className ?? ""}`}>
        {actor}
      </span>
    );
  }

  return (
    <>
      {eventData.actors[century].map((actor, index) => {
        return (
          <span
            key={`actor-${actor}`}
            className={`font-normal bg-${actor} text-${textColor(actor)} p-2 border-2  ${highlight?.includes(actor) ? "border-white": "border-black"}`}
            {...interactiveOptions}
          >
            {actor}
          </span>
        );
      })}
    </>
  );
};