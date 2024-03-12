import * as d3 from "d3";

import { useEffect, useRef } from "react";
import { visHeight } from "./data/functions";
import { useResizeObserver } from "~/hooks";
import type { TPerson } from "./data/types";

interface Props {
  person: TPerson;
  x2: number;
  y2: number;
  dragging: boolean;
  opacity?: 0 | 100;
}

const Connection = ({ person, x2, y2, dragging, opacity = 100 }: Props) => {
  const { windowSize } = useResizeObserver();
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    d3.select(lineRef.current)
      .transition()
      .duration(dragging ? 1 : 700)
      .delay(dragging ? 1 : 700)
      .attr("x2", x2)
      .attr("y2", y2);
  });

  return (
    <line
      ref={lineRef}
      x1={person.getX(person.x, windowSize.width || 0)}
      x2={person.getX(person.x, windowSize.width || 0)}
      y1={
        person.getY(person.y, windowSize.height || 0) +
        visHeight(windowSize.height) / 40
      }
      y2={
        person.getY(person.y, windowSize.height || 0) +
        visHeight(windowSize.height) / 40
      }
      stroke="#D9D9D9"
      strokeWidth={1.5}
      className={`opacity-${opacity} transition-opacity duration-700`}
    />
  );
};

export default Connection;
