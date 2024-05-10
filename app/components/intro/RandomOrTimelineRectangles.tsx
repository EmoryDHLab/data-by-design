import { useState } from "react";
import { TimelineType } from "~/components/home/timelineUtils";
import RandomRectangles from "~/components/intro/RandomRectangles";
import type { ReactElement } from "react";

export default function RandomOrTimelineRectangles() {
  const [timelineType, setTimelineType] = useState(TimelineType.Draggable);
  return (
    <div className="z-20">
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

let rectangles: ReactElement[] = [];
for (let i = 0; i < 5; i++) {
  const num = Math.floor(Math.random() * 5) + 1;
  let temp = [];
  for (let j = 0; j < num; j++) {
    temp.push(
      <div
        key="86b46923"
        className="absolute border-black border-2 w-8 h-8 lg:w-18 lg:h-18 xl:w-24 xl:h-24 bg-offwhite"
        style={{
          left: `${i * 120 + j * 5}px`,
          marginTop: `${j * 20}px`,
        }}
      ></div>
    );
  }
  rectangles.push(<div className="relative">{temp}</div>);
}

function OrderedRectangles() {
  return (
    <div className="pt-4 w-screen md:w-[50vw] h-screen flex space-x-2">
      {rectangles}
    </div>
  );
}
