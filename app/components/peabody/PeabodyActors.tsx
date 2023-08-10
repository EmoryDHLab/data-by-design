import type { Dispatch, SetStateAction } from "react";
import eventData from "~/data/peabody/eventData.json";
import type { PeabodyActor } from "~/types/peabody";

interface Props {
  actor?: string;
  className?: string;
  century?: number;
  handleClick?: Dispatch<SetStateAction<string>>|undefined;
  highlight?: Array<PeabodyActor>;
}

type CenturyActors = {
  [key: string | number]: Array<PeabodyActor>
}

export default function PeabodyActors({ actor, className, century, handleClick, highlight }: Props) {
  const textColor = (actorName: PeabodyActor) => {
    return actorName === "Americas" || actorName === "Sweden" ? "black" : "white";
  };

  // TODO: We might not ever call this with a handleClick prop
  const interactiveOptions = handleClick && actor
    ? {
        role: "button",
        tabIndex: 0,
        onClick: () => handleClick(actor),
        onKeyDown: ({ key }: {key: string}) => { if (key === "Enter") handleClick(actor) },
    }
    : {}

  if (actor) {
    return (
      <span className={`font-normal bg-${actor} text-${textColor((actor as PeabodyActor))} p-2 border-2 border-black ${className ?? ""}`}>
        {actor}
      </span>
    );
  }

  if (century) {
    return (
      <>
        {(eventData.actors as CenturyActors)[century].map((actor, index) => {
          return (
            <div
              key={`actor-${actor}`}
              className={`font-normal bg-${actor} text-${textColor(actor)} p-2 border-2  ${highlight?.includes(actor) ? "border-white": "border-black"}`}
              {...interactiveOptions}
            >
              {actor}
            </div>
          );
        })}
      </>
    );
  }

  return <></>
}