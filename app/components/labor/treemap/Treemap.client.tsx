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
    return () => {
      setSelectedMonth(undefined);
      setActiveContribution(undefined);
    };
  }, []);

  return (
    <div
      id="contribution-treemap"
      className="bg-offblack px-6  w-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 md:h-screen text-white"
    >
      <div className="col-span-1 md:col-span-2 md:row-span-5">
        {windowSize && (
          <svg
            ref={svgRef}
            className="font-power font-bold text-white h-[95%] m-auto"
            viewBox={`0 0 ${
              ((windowSize?.width || visWidth(windowSize.width)) / 3) * 2
            } ${((windowSize?.height || window.innerHeight) / 6) * 5 + 20}`}
            onClick={() => {
              setSelectedMonth(undefined);
            }}
            aria-description="here is a long description"
          >
            <MonthScale
              year={2023}
              width={width}
              height={(boxSize?.height || 1) / 1.5}
              xOffset={(boxSize?.width || 1) / 2}
            />
            {monthlyData.map((monthlyData) => {
              return (
                <Month
                  key={`month-${monthlyData.month}-${monthlyData.total}`}
                  monthlyData={monthlyData}
                  width={width}
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
                <g key={`year-${year}`} role="presentation">
                  <YearLabel
                    year={year}
                    height={(boxSize?.height || 1) / 1.5}
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
        <div className="text-xl md:text-2xl mx-6 h-1/2">
          <MonthDetail
            selectedMonth={selectedMonth}
            setActiveContribution={setActiveContribution}
          />
        </div>
        <div className="border border-t-1 border-x-0 border-b-0">
          <h4 className="text-2xl font-power font-bold md:ml-6 md:mt-4">
            Contribution Activity
          </h4>
          {activeContribution && (
            <ul className="leading-7 md:text-lg md:mx-6 font-power">
              <li className="pt-3">{activeContribution.user}</li>
              <li className="pt-3">
                <span className="font-power  font-bold">
                  {activeContribution.source}:
                </span>{" "}
                {activeContribution.information}
              </li>
            </ul>
          )}
        </div>
      </div>

 
      <div className="hidden md:block md:col-span-3 pb-4 px-4 text-left w-full ">
              <hr className=" col-span-3 mt-11"></hr>
        <div className="grid grid-cols-2 gap-8 pt-6">
          <div>
            <h3 className="mb-4 font-power text-xl md:text-3xl">
              Contribution Across Time
            </h3>
            <h4 className="mb-6 font-power font-light text-base md:text-xl">
              The Making of DxD, file by file
            </h4>
          </div>
          <div>
            <h3 className="mb-4 font-power small-caps text-large tracking-wide">Key</h3>
            <ul className="font-power text-base md:text-lg grid grid-cols-2 gap-2">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-changePrimary inline-block"></span>
                Github
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-imagePrimary inline-block"></span>
                Figma
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-peoplePrimary inline-block"></span>
                Zotero
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-knowledgePrimary inline-block"></span>
                iCalendar
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-dataPrimary inline-block"></span>
                Google Drive
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treemap;
