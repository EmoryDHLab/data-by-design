import { useEffect, useRef, useState } from "react";
import { useResizeObserver } from "~/hooks";
import { visWidth } from "../data/functions";
import monthlyData from "./monthlyData";
import weeklyData from "./weeklyData";
import { YEARS, csvData as csv } from "./data";
import MonthScale from "./MonthScale";
import Month from "./Month";
import YearLabel from "./YearLabel";
import YearDivider from "./YearDivider";
import type { TRow } from "./data";

const Treemap = () => {
  const { windowSize } = useResizeObserver();
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [csvData, setCSVData] = useState<TRow[] | undefined>();
  const [activeMonth, setActiveMonth] = useState<string | undefined>(undefined);
  const [boxSize, setBoxSize] = useState<
    { width: number; height: number } | undefined
  >(undefined);
  useEffect(() => {
    setWidth(visWidth() * 0.9);
  }, [windowSize]);

  useEffect(() => {
    if (activeMonth && csvData) {
      const weeks = weeklyData[activeMonth];
      // console.log("🚀 ~ useEffect ~ weeks:", weeks);
      const contributions = [];
      for (const week of weeks) {
        contributions.push(
          csvData.filter((c) => c.dateString == week.week.toDateString())
        );
      }
      // console.log("🚀 ~ useEffect ~ contributions:", contributions);
    } else {
      setActiveMonth(undefined);
    }
  }, [activeMonth, csvData]);

  useEffect(() => {
    const fetchCsv = async () => {
      const data = await csv();
      setCSVData(data);
      // console.log("🚀 ~ fetchCsv ~ data:", data);
    };

    fetchCsv();
  }, []);

  return (
    <div className="bg-offblack w-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 md:h-screen text-white">
      <div className="col-span-1 md:col-span-2 md:row-span-5">
        {/* <div className="grid grid-cols-5 m-12 ml-14 mb-4">
          {laborSources.map((source) => {
            if (source.label !== "flat") {
              return (
                <div
                  key={source.key}
                  className="flex items-center space-x-2 text-2xl font-duboisWide"
                >
                  <div
                    className={`bg-${source.color} w-6 h-6 rounded border border-offwhite`}
                  ></div>
                  <div className="text-offwhite">{source.label}</div>
                </div>
              );
            }
            return null;
          })}
        </div> */}
        {windowSize && (
          <svg
            ref={svgRef}
            className="font-dubois font-bold text-white m-12"
            viewBox={`0 0 ${
              ((windowSize?.width || visWidth(windowSize.width)) / 3) * 2
            } ${((windowSize?.height || window.innerHeight) / 6) * 5}`}
          >
            <MonthScale
              year={2023}
              width={width}
              height={(boxSize?.height || 1) / 2.5}
              xOffset={(boxSize?.width || 1) / 2}
            />
            {monthlyData.map((monthlyData) => {
              return (
                <Month
                  key={`month-${monthlyData.month}-${monthlyData.total}`}
                  monthlyData={monthlyData}
                  width={width}
                  setActiveMonth={setActiveMonth}
                  setBoxSize={
                    monthlyData.month.getFullYear() == 2022
                      ? setBoxSize
                      : undefined
                  }
                />
              );
            })}
            {YEARS.map((year, index) => {
              return (
                <g key={`year-${year}`}>
                  <YearLabel
                    year={year}
                    height={(boxSize?.height || 1) / 2.5}
                  />
                  {index > 0 && (
                    <YearDivider
                      year={year}
                      width={width}
                      yOffset={(boxSize?.height || 1) / 2 + 8}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        )}
      </div>
      <div className="border-l-2 md:row-span-5 flex flex-col">
        <div className="text-xl md:text-2xl p-2 border border-b-1 uppercase h-1/2">
          {/* second vis/detail here? */}
        </div>
        <div className="flex pb-4 md:pb-0 border border-b-1">
          <div></div>
        </div>
        <div className="overflow-y-hidden flex">
          <div className="overflow-y-scroll">
            <div className="p-2 text-xl font-dubois uppercase text-duboisSecondary"></div>
            <div className="grid grid-cols-3 grid-rows-2 mx-4 gap-4"></div>
          </div>
          <div className="p-2">
            <p></p>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-t-2 md:col-span-3 p-4">
        <h3 className="text-4xl font-duboisWide">Contribution treemap</h3>
        <h4 className="text-2xl mt-2 font-duboisLightWide">Tag line?</h4>
      </div>
    </div>
  );
};

export default Treemap;
