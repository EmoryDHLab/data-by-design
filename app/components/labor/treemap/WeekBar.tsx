import { useEffect, useState } from "react";
import { rectColor, rectHoverColor } from "./data";
import type { TContribution } from "./data";
import type { Dispatch, SetStateAction } from "react";
import type { TWeekData } from "./weeklyData";

interface Props {
  contributions: TContribution[] | undefined | Array<undefined>;
  week: TWeekData;
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
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contributions || !contributions.length) return;
    setHeight(80 / contributions.length);
  }, [contributions]);

  return (
    <g>
      <rect
        x={barX}
        y={15}
        width={width}
        height={80}
        strokeWidth={0.3}
        className="fill-offblack stroke-black"
      />
      {contributions && (
        <>
          {contributions.map((contribution, index) => {
            if (contribution) {
              return (
                <rect
                  key={contribution.uuid}
                  id={`${week.week.toISOString()}-${height * index}`}
                  x={barX}
                  y={height * index + 15}
                  width={width}
                  height={height}
                  strokeWidth={0.3}
                  className={`${rectColor(
                    contribution?.source,
                  )} ${rectHoverColor(
                    contribution?.source,
                  )} stroke-black cursor-pointer`}
                  onMouseEnter={() => setActiveContribution(contribution)}
                  onMouseLeave={() => setActiveContribution(undefined)}
                />
              );
            }
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
