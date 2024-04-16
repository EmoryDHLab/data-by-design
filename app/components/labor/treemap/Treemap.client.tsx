import { useEffect, useRef, useState } from "react";
import { useResizeObserver } from "~/hooks";
import { visWidth } from "../data/functions";
import monthlyData from "./monthlyData";
import { YEARS } from "./data";
import MonthScale from "./MonthScale";
import Month from "./Month";
import YearLabel from "./YearLabel";
import YearDivider from "./YearDivider";
import MonthDetail from "./MonthDetail";
import type { TContribution } from "./data";

const Treemap = () => {
  const { windowSize } = useResizeObserver();
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [activeMonth, setActiveMonth] = useState<string | undefined>(undefined);
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    undefined
  );
  const [activeContribution, setActiveContribution] = useState<
    TContribution | undefined
  >();
  const [boxSize, setBoxSize] = useState<
    { width: number; height: number } | undefined
  >(undefined);

  useEffect(() => {
    setWidth(visWidth() * 0.9);
  }, [windowSize]);

  useEffect(() => {
    setActiveMonth(selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    return () => {
      setActiveMonth(undefined);
      setSelectedMonth(undefined);
      setActiveContribution(undefined);
    };
  }, []);

  return (
    <div className="bg-offblack w-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 md:h-screen text-white">
      <div className="col-span-1 md:col-span-2 md:row-span-5">
        {windowSize && (
          <svg
            ref={svgRef}
            className="font-dubois font-bold text-white h-[95%] m-auto"
            viewBox={`0 0 ${
              ((windowSize?.width || visWidth(windowSize.width)) / 3) * 2
            } ${((windowSize?.height || window.innerHeight) / 6) * 5 + 20}`}
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
                  activeMonth={activeMonth}
                  selectedMonth={selectedMonth}
                  setSelectedMonth={setSelectedMonth}
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
        <div className="text-xl md:text-2xl mx-6 uppercase h-1/2">
          <MonthDetail
            activeMonth={activeMonth}
            setActiveContribution={setActiveContribution}
          />
        </div>
        <div className="border border-t-1 border-x-0 border-b-0">
          <h4 className="text-2xl font-duboisLightWide md:ml-6 md:mt-4">
            Contribution Activity
          </h4>
          {activeContribution && (
            <ul className="leading-7 md:text-lg md:mx-6 font-duboisLightWide">
              <li>{activeContribution.user}</li>
              <li>
                <span className="font-duboisWide">
                  {activeContribution.source}:
                </span>{" "}
                {activeContribution.information}
              </li>
            </ul>
          )}
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
