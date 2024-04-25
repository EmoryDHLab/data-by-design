import { useState } from "react";
import { TimelineType } from "~/components/home/timelineUtils";
import RandomRectangles from "~/components/intro/RandomRectangles";

export default function RandomOrTimelineRectangles() {
  const [timelineType, setTimelineType] = useState(TimelineType.Draggable);
  return (
    <div>
      <button
        className="rounded bg-black text-white p-2 mx-2"
        onClick={() => setTimelineType(TimelineType.Draggable)}
      >
        Random
      </button>
      <button
        className="rounded bg-black text-white p-2"
        onClick={() => setTimelineType(TimelineType.Ordered)}
      >
        Timeline
      </button>
      {timelineType === TimelineType.Draggable && <RandomRectangles />}
      {timelineType === TimelineType.Ordered && <OrderedRectangles />}
    </div>
  );
}

function OrderedRectangles() {
  let rectangles = [];
  for (let i = 0; i < 50; i++) {
    const num = Math.floor(Math.random() * 10);
    let temp = [];
    for (let j = 0; j < num; j++) {
      temp.push(
        <div className="border-black pointer-events-none border-2"></div>
      );
    }
    rectangles.push(<div className="flex flex-col">{temp}</div>);
  }
  return <div className="flex">{rectangles}</div>;
}
