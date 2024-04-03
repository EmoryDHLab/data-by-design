import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { useResizeObserver } from "~/hooks";
import type { TGroupingNode, TPerson } from "./data/types";
import type { Dispatch, SetStateAction } from "react";

// const boxHeight: number = 10;

interface Props {
  person: TPerson;
  updatePerson: (index: number, x: number, y: number) => void;
  index: number;
  activeNode: TPerson | TGroupingNode | undefined;
  setActiveNode: Dispatch<SetStateAction<TPerson | TGroupingNode | undefined>>;
  boxHeight: number;
  dragging: boolean;
  setDragging: Dispatch<SetStateAction<boolean>>;
  opacity: 0.5 | 1;
  center: { x: number; y: number };
}

interface Position {
  x: number;
  y: number;
}

const PersonBox = ({
  person,
  activeNode,
  updatePerson,
  index,
  setActiveNode,
  boxHeight,
  dragging,
  setDragging,
  opacity,
  center,
}: Props) => {
  const boxRef = useRef<SVGRectElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const offsetX = useRef<number>(0);
  const offsetY = useRef<number>(0);
  const { windowSize } = useResizeObserver();
  const boxWidth: number =
    (person.firstName.length + person.lastName.length + 3) * (boxHeight / 4);

  useEffect(() => {
    const dragStart = ({ x, y }: Position) => {
      setDragging(true);
      offsetX.current = person.getX(person.x, windowSize.width || 0) - x;
      offsetY.current = person.getY(person.y, windowSize.height || 0) - y;
      d3.selectAll(".person")
        .filter(`#box-${person.firstName}`)
        .attr("class", "person cursor-grabbing")
        .raise();
    };

    const drag = ({ x, y }: Position) => {
      updatePerson(index, x + offsetX.current, y + offsetY.current);
    };

    const dragEnd = () => {
      setDragging(false);
      d3.select(`#box-${person.firstName}`).attr("class", "person cursor-grab");
    };

    d3.select(boxRef.current)
      .transition()
      .duration(dragging ? 1 : 700)
      .attr("x", person.getX(person.x, windowSize.width || 0) - boxWidth / 2)
      .attr("y", person.getY(person.y, windowSize.height || 0));

    d3.select(textRef.current)
      .transition()
      .duration(dragging ? 1 : 700)
      .attr("x", person.getX(person.x, windowSize.width || 0))
      .attr("y", person.getY(person.y, windowSize.height || 0) + boxHeight / 2);

    d3.select(boxRef.current).call(
      // @ts-ignore
      d3.drag().on("drag", drag).on("start", dragStart).on("end", dragEnd)
    );

    d3.select(textRef.current).call(
      // @ts-ignore
      d3.drag().on("drag", drag).on("start", dragStart).on("end", dragEnd)
    );
  });

  return (
    <g
      className="person cursor-grab"
      id={`person-${person.firstName}`}
      onClick={() => setActiveNode(person)}
      // onMouseEnter={() => setActiveNode(person)}
      // onMouseLeave={() => setActiveNode(undefined)}
    >
      <rect
        ref={boxRef}
        id={`person-box-${person.firstName}`}
        stroke="lightgray"
        strokeWidth={1.5}
        strokeOpacity={opacity}
        width={boxWidth}
        height={boxHeight}
        fill={person == activeNode ? "#FFD3D3" : "#1C1817"}
        x={center.x - boxWidth / 2}
        y={center.y}
        rx={20}
        className="transition-colors duration-700"
      />
      <text
        ref={textRef}
        x={center.x}
        y={center.y + boxHeight / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={person === activeNode ? "#1C1817" : "#FAF1E9"}
        fillOpacity={opacity}
        fontSize={boxHeight / 2.25}
        className="transition-colors duration-700"
      >
        {person.label}
      </text>
    </g>
  );
};

export default PersonBox;
