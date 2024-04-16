import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import weeklyData from "./weeklyData";
import { csvData as csv } from "./data";
import WeekBar from "./WeekBar";
import type { TContribution } from "./data";
import type { TWeekData } from "./weeklyData";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  activeMonth: string | undefined;
  setActiveContribution: Dispatch<SetStateAction<TContribution | undefined>>;
}

const MonthDetail = ({ activeMonth, setActiveContribution }: Props) => {
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
            (c) => c.monday.toDateString() == week.week.toDateString()
          )
        );
      }
      setContributions(_contributions);
    };

    fetchCsv();
  }, [weeks]);

  useEffect(() => {
    if (activeMonth) {
      setWeeks(
        weeklyData[activeMonth].sort((a, b) =>
          a.weekNum > b.weekNum ? 1 : b.weekNum > a.weekNum ? -1 : 0
        )
      );
    } else {
      setWeeks(undefined);
    }
  }, [activeMonth]);

  useEffect(() => {
    if (!weeks || !csvData) return;
    const _contributions = [];
    for (const week of weeks) {
      _contributions.push(
        csvData.filter(
          (c) => c.monday.toDateString() == week.week.toDateString()
        )
      );
    }
    setContributions(_contributions);
  }, [weeks, csvData, activeMonth]);

  const monthYear = () => {
    if (!contributions || contributions.length === 0) return "";
    const firstContribution = contributions.find((c) => c.length > 0);
    if (firstContribution)
      return d3.timeFormat("%B %Y")(new Date(firstContribution[0].timestamp));
    return "";
  };

  if (contributions) {
    const total = contributions
      .map((c) => (c.length == 0 ? 1 : c.length))
      .reduce((p, a) => p + a, 0);
    const xScale = d3.scaleLinear().domain([0, total]).range([0, 100]);

    return (
      <svg
        ref={svgRef}
        viewBox="0 0 100 110"
        className="font-dubois mt-2 h-full"
      >
        <g>
          {weeks?.map((week, index) => {
            let accumulatedWidth = 0;
            const barWidth =
              contributions[index] && contributions[index].length > 0
                ? xScale(contributions[index].length)
                : xScale(1);
            accumulatedWidth += 10;
            return (
              <WeekBar
                key={`${week.week.toDateString()}-${accumulatedWidth}`}
                week={week}
                contributions={
                  contributions[index]
                    ? contributions[index].sort((a, b) =>
                        a.source > b.source ? 1 : b.source > a.source ? -1 : 0
                      )
                    : []
                }
                barX={xScale(
                  contributions
                    .slice(0, index)
                    .map((c) => (c.length == 0 ? 1 : c.length))
                    .reduce((p, a) => p + a, 0)
                )}
                width={barWidth}
                // Prop drilling :( - Not worth setting up context here.
                setActiveContribution={setActiveContribution}
              />
            );
          })}
          {activeMonth && (
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

  return null;
};

export default MonthDetail;
