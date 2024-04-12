// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import VerticalGrid from "../elements/VerticalGrid";
import HorizontalGrid from "../elements/HorizontalGrid";
import ProjectTimelineContainer from "./ProjectTimelineContainer";
import type { TLaborSource, TLaborData } from "~/types/laborSourceTypes";

const height = 44;
const width = 98;
const dates = Array.from({ length: 12 }, (_, i) => i + 2013);
const yRange = Array.from({ length: 15 }, (_, i) => i * 10);
const innerGridWidth = (width / 11) * 10 + 5.5;

const xScale = d3.scaleTime(
  [new Date(2013, 0, 1), new Date(2024, 11, 31)],
  [0, innerGridWidth - 5.5]
);

const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

interface Props {
  selectedSources: TLaborSource[];
  className?: string;
  areaOpacity?: [number, number];
  useMask?: boolean;
  showMask?: boolean;
  strokeWidth?: [number, number];
  id?: string;
}

export default function ProjectTimeline({
  selectedSources,
  className,
  areaOpacity = [0.5, 0.5],
  showMask = false,
  strokeWidth = [0.1, 0.1],
  id,
}: Props) {
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
  }, []);

  useEffect(() => {
    if (!csvData || !selectedSources) return;
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

  return (
    <div className={className}>
      <ProjectTimelineContainer
        height={height}
        width={width}
        innerGridWidth={innerGridWidth}
      >
        <text
          fill="black"
          x={width / 2}
          y={4}
          fontFamily="Times New Roman"
          fontSize={2.5}
        >
          Time
        </text>
        <text
          fill="black"
          y={4}
          x={-27.5}
          fontFamily="Times New Roman"
          fontSize={2.5}
          transform="rotate(-90)"
          textAnchor="middle"
        >
          Contributions
        </text>
        <rect
          fill="none"
          x={5.5}
          y={5.5}
          height={height}
          width={innerGridWidth - 5.5}
          opacity={0.2}
        ></rect>
        {dates.map((xValue, index) => {
          return (
            <VerticalGrid
              key={`${xValue}-${id}`}
              xValue={xScale(new Date(dates[index], 0, 1))}
              xOffset={5.5}
              textYOffset={5.5}
              text={dates[index]}
              textXOffset={6.5}
            />
          );
        })}
        {yRange.map((yValue, index) => {
          if (index > 0) {
            return (
              <HorizontalGrid
                key={`${yValue}-${id}`}
                yValue={yValues.includes(yValue) ? yScale(yValue) : -1}
                text={yValue}
                innerWidth={innerGridWidth}
                opacity={yValues.includes(yValue) ? 0.2 : 0}
              />
            );
          }
          return null;
        })}

        {csvData && selectedSources && (
          <g>
            <clipPath id={`clip-above-${id}`}>
              <path
                ref={clipPathAboveRef}
                className="transition-all duration-700"
                d=""
              ></path>
            </clipPath>
            <clipPath id={`clip-below-${id}`}>
              <path
                ref={clipPathBelowRef}
                className="transition-all duration-700"
                d=""
              ></path>
            </clipPath>
            <path
              ref={areaBelowRef}
              className={`fill-${selectedSources[0]?.color} translate-y-[5.5px] translate-x-[5.5px] transition-all duration-700`}
              d=""
              clipPath={`url(#clip-below-${id})`}
              fillOpacity={areaOpacity[0] ?? 0.5}
            />
            <path
              ref={line1Ref}
              className={`stroke-${selectedSources[0]?.color} translate-y-[5.5px] translate-x-[5.5px] fill-${selectedSources[0]?.color} transition-all duration-700`}
              d=""
              strokeWidth={strokeWidth[0]}
            />
            <path
              ref={areaAboveRef}
              className={`fill-${selectedSources[1]?.color} translate-y-[5.5px] translate-x-[5.5px] transition-all duration-700`}
              d=""
              clipPath={`url(#clip-above-${id})`}
              fillOpacity={areaOpacity[1] ?? 0.5}
            />
            <path
              ref={line2Ref}
              className={`stroke-${selectedSources[1]?.color} translate-y-[5.5px] translate-x-[5.5px] transition-all duration-700`}
              d=""
              strokeWidth={strokeWidth[1]}
            />
          </g>
        )}
        <g>
          <mask id="focus">
            <rect
              x={5.5}
              y={5.5}
              width={innerGridWidth - 1}
              height={44}
              fill="white"
              fillOpacity={showMask ? 0.6 : 0}
              className="transition-all duration-1000 bg-playfairPrimary"
            />
            <rect x={23.3} y={5.5} width={15} height={44} fill="black" />
          </mask>
          <g>
            <rect
              mask="url(#focus)"
              x={0}
              y={0}
              width={105}
              height={55}
              className="fill-offwhite"
            />
          </g>
        </g>
      </ProjectTimelineContainer>
    </div>
  );
}
