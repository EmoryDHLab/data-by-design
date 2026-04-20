import { useEffect, useRef, useState } from "react";
import { useResizeObserver } from "~/hooks";
import { monthlyData } from "./monthlyData";
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
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    undefined,
  );
  const [activeContribution, setActiveContribution] = useState<
    TContribution | undefined
  >();
  const [boxSize, setBoxSize] = useState<{ width: number; height: number }>({
    width: 1,
    height: 1,
  });

  useEffect(() => {
    return () => {
      setSelectedMonth(undefined);
      setActiveContribution(undefined);
    };
  }, []);

  const [dims, setDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const w = windowSize?.width ?? 0;
    const h = windowSize?.height ?? 0;
    if (w > 0 && w !== dims.w) {
      setDims({ w, h });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize?.width]);

  const visW = (dims.w / 3) * 2;
  const visH = (dims.h / 7) * 5;
  const svgWidth = visW;
  const rowHeight = (visH + 50) / YEARS.length;
  const svgHeight = visH + 50 + rowHeight * 2;
  const chartWidth = visW * 0.9;
  const isMobile = dims.w < 1024;
  const dividerYOffset = (boxSize?.height || 1) / 1.25 + (isMobile ? 10 : 15);

  return (
    <div
      id="contribution-treemap"
      className="bg-offblack px-4 md:px-6 w-screen grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto] lg:min-h-screen text-white"
    >
      <div className="col-span-1 lg:col-span-2 overflow-hidden min-h-[60vh] lg:min-h-0">
        {dims.w > 0 && (
          <svg
            ref={svgRef}
            className="font-power font-bold text-white m-auto w-full"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            onClick={() => {
              setSelectedMonth(undefined);
            }}
            aria-description="Here is a long description"
          >
            <MonthScale
              year={2025}
              width={chartWidth}
              height={(boxSize?.height || 1) / 1.5}
              xOffset={(boxSize?.width || 1) / 2}
            />
            {monthlyData.map((md) => {
              return (
                <Month
                  key={`month-${md.month}-${md.total}`}
                  monthlyData={md}
                  width={chartWidth}
                  visWidth={visW}
                  visHeight={visH}
                  setSelectedMonth={setSelectedMonth}
                  selectedMonth={selectedMonth}
                  setBoxSize={setBoxSize}
                />
              );
            })}
            {YEARS.map((year, index) => {
              return (
                <g key={`year-${year}`} role="presentation">
                  <YearLabel
                    year={year}
                    height={(boxSize?.height || 1) / 1.5}
                    visHeight={visH}
                  />
                  {index > 0 && (
                    <YearDivider
                      year={year}
                      width={chartWidth}
                      yOffset={dividerYOffset}
                      visHeight={visH}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        )}
      </div>
      <div id="left-pane" className="border-t-[1px] pt-2 lg:border-t-0 lg:border-l-[1px] flex flex-col">
        <div className="text-xl font-power text-center mt-6 lg:mt-0 md:text-2xl mx-4 h-1/2">
          <MonthDetail
            selectedMonth={selectedMonth}
            setActiveContribution={setActiveContribution}
          />
        </div>
        <div className="border border-t-1 border-x-0 border-b-0 h-[180px] overflow-hidden">
          <h4 className="text-lg font-power italic small-caps tracking-wide ml-4 mt-4">
            Contribution Activity
          </h4>
          <ul className="leading-7 md:text-lg mx-4 font-power" style={{ visibility: activeContribution ? 'visible' : 'hidden' }}>
            <li className="pt-3">{activeContribution?.user ?? '\u00A0'}</li>
            <li className="pt-3">
              <span className="font-power font-bold">
                {activeContribution?.source ? `${activeContribution.source}:` : '\u00A0'}
              </span>{" "}
              {activeContribution?.information ?? ''}
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:col-span-3 pb-4 px-4 text-left w-full border-t-[1px]">
        {/* <hr className="col-span-3 mt-11"></hr> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div>
            <h3 className="mb-4 font-power font-bold text-xl md:text-3xl">
              Contribution Across Time
            </h3>
            <h4 className="mb-6 font-power font-light text-base md:text-xl">
              The Making of DxD, file by file
            </h4>
          </div>
          <div>
            <h3 className="mb-4 font-power small-caps text-large tracking-wide">
              Key
            </h3>
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
