// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import VerticalGrid from "./elements/VerticalGrid";
import HorizontalGrid from "./elements/HorizontalGrid";
import laborSources from "~/data/playfair/laborSources.json";
import type { TLaborSource, TLaborData } from "~/types/laborSourceTypes";
import FancyButton from "../FancyButton";

const height = 44;
const width = 98;
const dates = Array.from({ length: 12 }, (_, i) => i + 2013);
const yRange = Array.from({ length: 15 }, (_, i) => i * 10);
const innerGridWidth = (width / 11) * 10 + 3;
const noSource = laborSources.find((source) => source.label === "flat");

const xScale = d3.scaleTime(
  [new Date(2013, 0, 1), new Date(2024, 11, 31)],
  [0, innerGridWidth - 3]
);

const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

export default function RecreationCovid() {
  const [selectedSources, setSelectedSources] = useState<TLaborSource[]>([
    noSource,
    noSource,
  ]);
  const [csvData, setCsvData] = useState<TLaborData | undefined>(undefined);
  const [maxY, setMaxY] = useState<number>(0);
  const [yValues, setYValues] = useState<number[]>([0, 100]);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const areaAboveRef = useRef<SVGPathElement>(null);
  const areaBelowRef = useRef<SVGPathElement>(null);
  const clipPathAboveRef = useRef<SVGPathElement>(null);
  const clipPathBelowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const getData = async () => {
      let fetchedCsvData: TLaborData = await d3.csv(
        "/data/playfairSemester.csv"
      );
      fetchedCsvData = fetchedCsvData.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      setCsvData(fetchedCsvData);
    };

    getData();

    setSelectedSources([laborSources[0], laborSources[1]]);

    return () => {
      setSelectedSources([]);
    };
  }, []);

  useEffect(() => {
    if (!csvData) return;
    setMaxY(
      Math.max(
        Math.max(...csvData.map((d) => parseInt(d[selectedSources[0]?.label]))),
        Math.max(...csvData.map((d) => parseInt(d[selectedSources[1]?.label])))
      ) || 100
    );
  }, [selectedSources, csvData]);

  useEffect(() => {
    setYValues(Array.from({ length: maxY / 10 + 1 }, (_, n) => n * 10));
    yScale.domain([0, maxY + 10]);
  }, [maxY]);

  useEffect(() => {
    const path1 = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x((d) => xScale(d3.isoParse(d.date)))
      .y((d) => yScale(d[selectedSources[0]?.label] || height));

    const path2 = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x((d) => xScale(d3.isoParse(d.date)) || height)
      .y((d) => yScale(d[selectedSources[1]?.label]) || height);

    const clipAbove = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x((d) => xScale(d3.isoParse(d.date)) || height)
      .y1((d) => yScale(d[selectedSources[0]?.label]) || height)
      .y0(yScale(maxY) || 0);

    const clipBelow = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x((d) => xScale(d3.isoParse(d.date)) || height)
      .y1((d) => yScale(d[selectedSources[1]?.label]) || height)
      .y0(yScale(maxY));

    const areaAbove = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x((d) => xScale(d3.isoParse(d.date)) || 0)
      .y1((d) => yScale(d[selectedSources[0]?.label]) || height)
      .y0((d) => yScale(d[selectedSources[1]?.label]) || height);

    const areaBelow = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x((d) => xScale(d3.isoParse(d.date)) || 0)
      .y1((d) => yScale(d[selectedSources[0]?.label]) || height)
      .y0((d) => yScale(d[selectedSources[1]?.label]) || height);

    if (maxY > 0) {
      d3.select(clipPathAboveRef.current).attr("d", clipAbove(csvData));

      d3.select(clipPathBelowRef.current).attr("d", clipBelow(csvData));

      d3.select(areaAboveRef.current).attr("d", areaAbove(csvData));

      d3.select(areaBelowRef.current).attr("d", areaBelow(csvData));

      d3.select(line1Ref.current).attr("d", path1(csvData));

      d3.select(line2Ref.current).attr("d", path2(csvData));
    }
  }, [yValues, selectedSources, csvData, maxY]);

  const updateSources = (selectedSource: TLaborSource, key: string) => {
    if (key && key !== "Enter") return;

    let indexOfSelected = selectedSources.indexOf(selectedSource);

    // If the selected source is currently active, we replace it with the
    // flat source. Otherwise, we replace the flat source with the newly
    // selected source. This makes sure the lines always transition up and
    // down from the baseline.
    if (indexOfSelected >= 0) {
      selectedSource = noSource;
    } else {
      indexOfSelected = selectedSources.indexOf(noSource);
    }

    setSelectedSources(
      selectedSources.toSpliced(indexOfSelected, 1, selectedSource)
    );
  };

  return (
    <div>
      <svg viewBox="0 0 100 50">
        <rect fill="#F3ECCB" className="w-full h-full" />
        <svg viewBox="0 0 100 50">
          <g>
            <text
              fill="black"
              x={width / 2}
              y="2.3"
              fontFamily="Times New Roman"
              fontSize="2.3"
            >
              Time
            </text>
            <text
              fill="black"
              y="2"
              fontFamily="Times New Roman"
              fontSize="2.3"
              transform="rotate(-90) translate(-37, 0)"
            >
              Something
            </text>
            <rect
              fill="white"
              x="3"
              y="3"
              height={height}
              width={innerGridWidth - 3}
              opacity="0.2"
            ></rect>
            {dates.map((xValue, index) => {
              return (
                <VerticalGrid
                  key={xValue}
                  xValue={xScale(new Date(dates[index], 0, 1))}
                  offset={3}
                  text={dates[index]}
                />
              );
            })}
            {yRange.map((yValue, index) => {
              if (index > 0) {
                return (
                  <HorizontalGrid
                    key={yValue}
                    yValue={yValues.includes(yValue) ? yScale(yValue) : -1}
                    text={yValue}
                    innerWidth={innerGridWidth}
                    opacity={yValues.includes(yValue) ? 0.2 : 0}
                  />
                );
              }
              return <></>;
            })}

            {csvData && (
              <g>
                <clipPath id="clip-above">
                  <path
                    ref={clipPathAboveRef}
                    className="transition-all duration-700"
                    d=""
                  ></path>
                </clipPath>
                <clipPath id="clip-below">
                  <path
                    ref={clipPathBelowRef}
                    className="transition-all duration-700"
                    d=""
                  ></path>
                </clipPath>
                <path
                  ref={areaBelowRef}
                  className={`fill-${selectedSources[0]?.color} translate-y-[3px] translate-x-[3px] transition-all duration-700`}
                  d=""
                  clipPath="url(#clip-below)"
                  fillOpacity={0.5}
                />
                <path
                  ref={line1Ref}
                  className={`stroke-${selectedSources[0]?.color} translate-y-[3px] translate-x-[3px] fill-${selectedSources[0]?.color} transition-all duration-700`}
                  d=""
                  strokeWidth="0.1"
                />
                <path
                  ref={areaAboveRef}
                  className={`fill-${selectedSources[1]?.color} translate-y-[3px] translate-x-[3px] transition-all duration-700`}
                  d=""
                  clipPath="url(#clip-above)"
                  fillOpacity={0.5}
                />
                <path
                  ref={line2Ref}
                  className={`stroke-${selectedSources[1]?.color} translate-y-[3px] translate-x-[3px] transition-all duration-700`}
                  d=""
                  strokeWidth="0.1"
                />
              </g>
            )}
            <rect
              fill="transparent"
              x="3"
              y="3"
              height={height}
              width={width - 4.3}
              stroke="black"
              strokeWidth="0.25"
            ></rect>
            <line
              x1={innerGridWidth}
              y1="3"
              x2={innerGridWidth}
              y2="47"
              stroke="black"
              strokeWidth="0.1"
            ></line>
          </g>
        </svg>
      </svg>
      <div className="grid grid-cols-3 md:grid-cols-7 space-x-4 mt-6 text-center justify-items-center gap-y-4">
        <div className="font-duboisWide col-span-3 md:col-span-2">
          Select two sources:{" "}
        </div>
        {laborSources.slice(0, 5).map((source) => {
          return (
            <FancyButton
              key={source.key}
              action={({ key }) => updateSources(source, key)}
              className={`fill-${source.color} ${
                selectedSources.map((s) => s.key).includes(source.key)
                  ? "opacity-100 hover:opacity-90 active:opacity-90"
                  : "opacity-50 hover:opacity-60 active:opacity-60"
              }`}
              textColor={
                selectedSources.map((s) => s.key).includes(source.key)
                  ? source.activeText
                  : source.inactiveText
              }
              outlineColor={
                selectedSources.map((s) => s.key).includes(source.key)
                  ? "black"
                  : "white"
              }
            >
              {source.label}
            </FancyButton>
          );
        })}
      </div>
    </div>
  );
}
