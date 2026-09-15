import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import weeklyData from "./weeklyData";
import { csvData as csv } from "./data";
import WeekBar from "./WeekBar";
import type { TContribution } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  selectedMonth: string | undefined;
  setActiveContribution: Dispatch<SetStateAction<TContribution | undefined>>;
}

const MonthDetail = ({ selectedMonth, setActiveContribution }: Props) => {
  const [csvData, setCSVData] = useState<TContribution[] | undefined>();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    csv().then(setCSVData);
  }, []);

  const weeks = selectedMonth ? weeklyData[selectedMonth] : undefined;

  const contributions = useMemo(() => {
    if (!weeks || !csvData) return undefined;
    return weeks.map((week) =>
      csvData.filter(
        (c) => c.monday.toDateString() == week.week.toDateString(),
      ),
    );
  }, [weeks, csvData]);

  const monthYear = () => {
    if (!selectedMonth || !contributions || contributions.length === 0)
      return "";

    const parts: number[] = selectedMonth
      .replace("m", "")
      .split("_")
      .map((p) => parseInt(p))
      .reverse();
    return d3.timeFormat("%B %Y")(new Date(...(parts as [number, number])));
  };

  if (selectedMonth && contributions && weeks) {
    const total = contributions
      .map((c) => (c.length == 0 ? 1 : c.length))
      .reduce((p, a) => p + a, 0);
    const xScale = d3.scaleLinear().domain([0, total]).range([0, 100]);

    return (
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="font-power mb-2 h-full font-bold text-center"
      >
        <g>
          {weeks.map((week, index) => {
            let accumulatedWidth = 0;
            const barWidth =
              contributions[index] && contributions[index].length > 0
                ? xScale(contributions[index].length)
                : xScale(1);
            accumulatedWidth += 10;
            return (
              <WeekBar
                key={`${week.week.toDateString()}-${accumulatedWidth}-${
                  week.weekNum
                }`}
                week={week}
                contributions={
                  contributions[index]
                    ? contributions[index].sort((a, b) =>
                        a.source > b.source ? 1 : b.source > a.source ? -1 : 0,
                      )
                    : []
                }
                barX={xScale(
                  contributions
                    .slice(0, index)
                    .map((c) => (c.length == 0 ? 1 : c.length))
                    .reduce((p, a) => p + a, 0),
                )}
                width={barWidth}
                // Prop drilling :( - Not worth setting up context here.
                setActiveContribution={setActiveContribution}
              />
            );
          })}
          {selectedMonth && (
            <>
              <text
                y={5}
                width={100}
                fontSize={5}
                // x={"50%"}
                // textAnchor="middle"
                className="fill-offwhite"
              >
                {monthYear()}
              </text>
            </>
          )}
        </g>
      </svg>
    );
  }

  return (
    <h4 className="text-2xl font-power font-bold md:mt-4">
      Click a treemap for details.
    </h4>
  );
};

export default MonthDetail;
