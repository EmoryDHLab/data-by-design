import eventData from "~/data/peabody/eventData.json";

interface Props {
  actor?: string;
  className?: string;
  century?: number
}

export default function PeabodyActors({ actor, className, century }: Props) {
  const textColor = (actorName) => {
    return actorName === "Americas" || actorName === "Sweden" ? "black" : "white";
  };

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
            key={index}
            className={`font-normal bg-${actor} text-${textColor(actor)} p-2 border-2 border-black`}
          >
            {actor}
          </span>
        );
      })}
    </>
  );
};