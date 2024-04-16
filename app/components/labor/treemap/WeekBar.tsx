import { useEffect, useRef, useState } from "react";
import { rectColor } from "./data";
import type { TContribution } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  contributions: TContribution[] | undefined | Array<undefined>;
  week: any;
  barX: number;
  width: number;
  setActiveContribution: Dispatch<SetStateAction<TContribution | undefined>>;
}

const WeekBar = ({
  week,
  contributions,
  barX,
  width,
  setActiveContribution,
}: Props) => {
  const ref = useRef<SVGGElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const refCopy = ref.current;
    return () => {
      if (refCopy) {
        refCopy.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    if (!contributions || !contributions.length) return;
    setHeight(80 / contributions.length);
  }, [contributions]);

  return (
    <g ref={ref}>
      <rect
        x={barX}
        y={15}
        width={width}
        height={80}
        className="fill-offwhite"
      />
      {contributions && (
        <>
          {contributions.map((contribution, index) => {
            return (
              <rect
                key={`${contribution?.timestamp}-${contribution?.source}-${contribution?.information}`}
                id={`${week.week.toISOString()}-${height * index}`}
                x={barX}
                y={height * index + 15}
                width={width}
                height={height}
                strokeWidth={0.1}
                className={`${rectColor(
                  contribution?.source
                )} hover:fill-duboisSecondary stroke-offwhite cursor-pointer`}
                onMouseEnter={() => setActiveContribution(contribution)}
                onMouseLeave={() => setActiveContribution(undefined)}
              />
            );
          })}
        </>
      )}
      <text
        className="fill-offwhite"
        y={12}
        x={barX + width / 2 - 1}
        fontSize={3}
      >
        {week.weekNum}
      </text>
    </g>
  );
};

export default WeekBar;
