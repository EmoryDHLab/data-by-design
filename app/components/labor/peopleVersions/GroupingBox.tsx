import { useRef } from "react";
import { useResizeObserver } from "~/hooks";

import type { TGroupingNode, TPerson } from "./data/types";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  grouping: TGroupingNode;
  index: number;
  boxHeight: number;
  opacity: 0 | 100;
  setActiveNode: Dispatch<SetStateAction<TPerson | TGroupingNode | undefined>>;
}

const GroupingBox = ({
  grouping,
  boxHeight,
  opacity,
  setActiveNode,
}: Props) => {
  const boxRef = useRef<SVGRectElement>(null);
  const { windowSize } = useResizeObserver();
  const boxWidth: number = Math.max(
    (grouping.label.length + 3) * (boxHeight / 5),
    70
  );

  return (
    <g
      className={`grouping opacity-${opacity} transition-opacity duration-700`}
      id={`grouping-${grouping.id}`}
      // onMouseEnter={() => {
      //   if (opacity === 100) {
      //     setActiveNode(grouping);
      //   }
      // }}
      // onMouseLeave={() => setActiveNode(undefined)}
    >
      <rect
        ref={boxRef}
        id={`grouping-box-${grouping.id}`}
        stroke="lightgray"
        strokeWidth={0.5}
        width={boxWidth}
        height={boxHeight}
        fill="#FAF1E9"
        x={grouping.getX(grouping.x, windowSize.width || 0) - boxWidth / 2}
        y={grouping.getY(grouping.y, windowSize.height || 0)}
        rx={22}
      />
      <text
        x={grouping.getX(grouping.x, windowSize.width || 0)}
        y={grouping.getY(grouping.y, windowSize.height || 0) + boxHeight / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="pointer-events-none select-none"
        fill="#1C1817"
        fontSize={boxHeight / 2.25}
      >
        {grouping.label}
      </text>
    </g>
  );
};

export default GroupingBox;
