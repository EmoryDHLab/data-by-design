import * as d3 from "d3";
import { useEffect, useRef } from "react";
import type { TPerson } from "./data";
import type { Dispatch, SetStateAction } from "react";

const BOX_HEIGHT: number = 10;

interface Props {
  person: TPerson;
  updatePerson: (index: number, x: number, y: number) => void;
  index: number;
  setActivePerson: Dispatch<SetStateAction<TPerson | undefined>>;
}

interface Position {
  x: number;
  y: number;
}

const PersonBox = ({ person, updatePerson, index, setActivePerson }: Props) => {
  const boxRef = useRef<SVGRectElement>(null);
  const offsetX = useRef<number>(0);
  const offsetY = useRef<number>(0);
  const BOX_WIDTH: number = (person.firstName.length + person.lastName.length) * 3.6;

  useEffect(() => {
    const dragStart = ({ x, y }: Position) => {
      if (person.opacity < 1) return;
      offsetX.current = person.x - x;
      offsetY.current = person.y - y;
      d3.selectAll(".person").filter(`#box-${person.firstName}`).attr("class", "person cursor-grabbing").raise();
    };

    const drag = ({ x, y }: Position) => {
      if (person.opacity < 1) return;
      updatePerson(index, x + offsetX.current, y + offsetY.current);
    };

    const dragEnd = () => {
      if (person.opacity < 1) return;
      d3.select(`#box-${person.firstName}`).attr("class", "person cursor-grab");
    }

    d3.select(boxRef.current).call(
      // @ts-ignore
      d3.drag().on("drag", drag).on("start", dragStart).on("end", dragEnd)
    );
  });

  return (
    <g className={`person cursor-${person.opacity === 1 ? "grab" : "not-allowed"} opacity-${person.opacity * 100} transition-opacity duration-700`} id={`box-${person.firstName}`}>
      <rect
        ref={boxRef}
        id={`box-${person.firstName}`}
        stroke="lightgray"
        strokeWidth={0.5}
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        fill="#FAF1E9"
        x={person.x - BOX_WIDTH / 2}
        y={person.y}
        rx={2}
        onMouseEnter={() => { if (person.opacity === 1) setActivePerson(person) }}
        onMouseLeave={() => { if (person.opacity === 1) setActivePerson(undefined) }}
      />
      <text
        x={person.x - BOX_WIDTH / 2 + 2}
        y={person.y + BOX_HEIGHT / 2}
        dominantBaseline="middle"
        // textAnchor="middle"

        fill="#1C1817"
        className="pointer-events-none select-none"
      >
        <tspan fontFamily="DxD Icons" fontSize={BOX_HEIGHT / 2}>
          a
        </tspan>
        <tspan dx={1.5} dy={0.25}  fontSize={BOX_HEIGHT / 2.5}>
          {person.firstName} {person.lastName}
        </tspan>
      </text>
    </g>
  );
};

export default PersonBox;
