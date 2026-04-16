import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import weeklyData from "./weeklyData";
import { csvData as csv } from "./data";
import WeekBar from "./WeekBar";
import type { TContribution } from "./data";
import type { TWeekData } from "./weeklyData";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  selectedMonth: string | undefined;
  setActiveContribution: Dispatch<SetStateAction<TContribution | undefined>>;
}

const MonthDetail = ({ selectedMonth, setActiveContribution }: Props) => {
  const [weeks, setWeeks] = useState<TWeekData[] | undefined>(undefined);
  const [csvData, setCSVData] = useState<TContribution[] | undefined>();
  const [contributions, setContributions] = useState<
    Array<TContribution[]> | undefined
  >(undefined);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchCsv = async () => {
      if (!weeks) return;
      const data = await csv();
      setCSVData(data);
      const _contributions = [];
      for (const week of weeks) {
        _contributions.push(
          data.filter(
            (c) => c.monday.toDateString() == week.week.toDateString(),
          ),
        );
      }
      setContributions(_contributions);
    };

    fetchCsv();
  }, [weeks]);

  useEffect(() => {
    if (selectedMonth) {
      setWeeks(weeklyData[selectedMonth]);
    } else {
      setWeeks(undefined);
    }
  }, [selectedMonth]);

  useEffect(() => {
    if (!weeks || !csvData) return;
    const _contributions = [];
    for (const week of weeks) {
      _contributions.push(
        csvData.filter(
          (c) => c.monday.toDateString() == week.week.toDateString(),
        ),
      );
    }
    setContributions(_contributions);
  }, [weeks, csvData, selectedMonth]);

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
