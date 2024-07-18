import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { useResizeObserver } from "~/hooks";
import PieChart from "~/components/dubois/PieChart.client";
import studentData from "~/data/dubois/studentChartOne.json";
import Legend from "~/components/dubois/pieChart/Legend";
import { map } from "~/utils";
import type { TFocusShape } from "~/types/scrollytellTypes";

const largeText = 22;
const smallText = 15;
const regularText = 15;
const leftMargin = 15;

interface Props {
  id?: string;
  interactive?: boolean;
  showOriginal?: boolean;
  showDataTable?: boolean;
  showRecreation?: boolean;
  showPieChart?: boolean;
  showCroppedDataTable?: boolean;
  showGoogleSheet?: boolean;
  activeStudent?: string;
  topOffset: number;
  leftOffset?: number;
  focusShape?: TFocusShape;
  highlightNames?: boolean;
}

export default function StudentChartOne({
  id,
  interactive = true,
  showDataTable = false,
  showCroppedDataTable = false,
  showOriginal = false,
  showGoogleSheet = false,
  showRecreation = true,
  showPieChart = true,
  highlightNames = false,
  activeStudent = undefined,
  topOffset,
  leftOffset = 0,
  focusShape,
}: Props) {
  const { windowSize } = useResizeObserver();
  const [chartWidth, setChartWidth] = useState<number>(800);
  const [pieChartTop, setPieChartTop] = useState<number>(100);
  const [pieChartLeft, setPieChartLeft] = useState<number>(100);
  const [pieChartWidth, setPieChartWidth] = useState<number>(100);

  useEffect(() => {
    if (!windowSize.height || !windowSize.width) return;
    setChartWidth(windowSize.width / 2);
  }, [windowSize, activeStudent]);

  useEffect(() => {
    if (!windowSize.height) return;
    setPieChartTop(
      map(
        480, // Y value for pie chart
        0,
        1000, // Height of SVG viewbox
        0,
        windowSize.height + topOffset
      )
    );
  }, [windowSize, pieChartWidth, topOffset]);

  useEffect(() => {
    setPieChartLeft(map(250, 0, 800, 0, chartWidth) - leftOffset);

    setPieChartWidth(map(350, 0, 1000, 0, chartWidth));
  }, [chartWidth, leftOffset]);

  return (
    <>
      <svg viewBox={`0 0 800 1000`} className="my-auto h-[80vh]">
        <g
          id="recreated-chart-1"
          className={`transition-opacity duration-1000 opacity-${
            showRecreation ? 100 : 0
          }`}
        >
          <rect
            x={0}
            y={0}
            height={1000}
            width={800}
            fill="none"
            stroke="black"
            className="fill-offwhite"
          />
          <g>
            <text
              x="50%"
              y={25}
              className={`text-black font-duboisWide transition-opacity duration-1000 opacity-100
            }`}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={largeText}
            >
              <tspan x="50%">
                A STATISTICAL CHART ILLUSTRATING INFORMATION ABOUT THE
              </tspan>
              <tspan x="50%" dy={largeText + 5}>
                GRADUATES OF ATLANTA UNIVERSITY WHO CONTRIBUTED TO
              </tspan>
              <tspan x="50%" dy={largeText + 5}>
                DU BOIS'S RESEARCH.
              </tspan>
            </text>
          </g>
          <g>
            <text
              x="25%"
              y={110}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={smallText}
              className={`uppercase font-duboisWide tracking-wider transition-opacity duration-1000 opacity-100`}
            >
              <tspan x="25%" dy={smallText + 6}>
                Prepared and executed by,
              </tspan>
              <tspan x="25%" dy={smallText + 6}>
                Tanvi Sharma,Anna Mola, Nicholas Yang,
              </tspan>
              <tspan x="25%" dy={smallText + 6}>
                Yang Li, Jay Varner, and Lauren Klein
              </tspan>
              <tspan x="25%" dy={smallText + 6}>
                Under the Auspices of the{" "}
              </tspan>
              <tspan x="25%" dy={smallText + 6}>
                Digital Humanities Lab
              </tspan>
              <tspan x="25%" dy={smallText + 6}>
                Emory University, Atlanta, GA.
              </tspan>
              <tspan x="25%" dy={smallText + 6}>
                United States of America
              </tspan>
            </text>
          </g>
          <g className={`transition-opacity duration-1000 opacity-100`}>
            <image x={450} y={120} height={160} href="/images/dubois/map.png" />
            <path
              d={`M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z`}
              fill="black"
              transform={`translate(491, 295) scale(0.59)`}
            />
            p
            <text
              x={510}
              y={310}
              fill="black"
              fontSize={smallText}
              className="uppercase font-duboisWide"
            >
              Atlanta University
            </text>
          </g>
          <g>
            <text
              x="50%"
              y={360}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={regularText + 2}
              className={`uppercase font-duboisWide transition-opacity duration-1000 opacity-100`}
            >
              <tspan x="50%">
                The original chart visualized the occupations of the 330 Black
                Americans
              </tspan>
              <tspan x="50%" dy={regularText + 6}>
                who had graduated from Atlanta University as of 1898.
              </tspan>
              <tspan x="50%" dy={regularText + 18}>
                The 1898-1899 Catalogue lists these same graduates by name,
                along with
              </tspan>
              <tspan x="50%" dy={regularText + 6}>
                their degree(s) earned, current occupation, and place of
                residence.
              </tspan>
            </text>
          </g>

          <g>
            <text
              y={790}
              fontSize={regularText}
              className={`uppercase font-duboisWide tracking-wider transition-opacity duration-1000 opacity-100`}
            >
              <tspan x={leftMargin} textLength={775}>
                This visualization honors the Atlanta University students who
                helped to create Du
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                Bois's original chart, as well as those whose lives were behind
                the data. The original
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                chart depicted the occupations of the graduates of Atlanta
                University as of 1898 as
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                percentages. Here, the name of each graduate is placed in the
                appropriate area of
              </tspan>
              <tspan x={leftMargin} dy={largeText}>
                the chart.
              </tspan>
              <tspan x={leftMargin} dy={largeText * 1.5} textLength={775}>
                Several graduates are positioned outside of the chart, closest
                to the occupations
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                that they would soon take on. These are William Andrew Rogers of
                the Class of 1899,
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                the only formally recognized contributor to the original set of
                charts; and the four
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                students enrolled in Du Bois's advanced sociology course during
                the 1899-1900
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                academic year, Henry Napoleon Lee, Lula Iola Mack, Edward Lee
                Simon, and William George
              </tspan>
              <tspan x={leftMargin} dy={largeText} textLength={775}>
                Westmoreland, who most likely collected, analyzed, and
                visualized the data depicted
              </tspan>
              <tspan x={leftMargin} dy={largeText}>
                in the original charts. whose names were not recorded as data.
              </tspan>
            </text>
          </g>
        </g>
        <g
          className={`transition-opacity duration-1000 opacity-${
            showRecreation || showPieChart ? 100 : 0
          }`}
        >
          <rect
            y={460}
            x={0}
            width={800}
            height={320}
            className="fill-offwhite"
          />
          <Legend
            x={40}
            y={510}
            maxX={800}
            width={chartWidth}
            radius={largeText / 2}
            height={regularText}
            catagories={studentData.categories}
          />
        </g>

        <g>
          <g
            className={`transition-opacity duration-1000 opacity-${
              showOriginal ? 100 : 0
            }`}
          >
            <mask id="chart1-scrolly-mask">
              {focusShape && (
                <>
                  <rect
                    x={0}
                    y={0}
                    width={800}
                    height={1000}
                    fill="white"
                    stroke="black"
                    fillOpacity={0.1}
                    className="transition-all duration-1000"
                  />
                  <rect
                    {...focusShape}
                    fill="white"
                    className="transition-all duration-1000"
                  />
                </>
              )}
            </mask>

            <image
              mask="url(#chart1-scrolly-mask)"
              href="/images/dubois/ch5-12-series.jpg"
              width={800}
            />
            {focusShape && (
              <rect
                {...focusShape}
                fill="none"
                strokeWidth={10}
                className="transition-all duration-1000 stroke-shanawdithitPrimary"
              />
            )}
          </g>
          <g
            className={`transition-opacity duration-1000 opacity-${
              showCroppedDataTable ? 100 : 0
            }`}
          >
            <rect height={1000} width={800} className="fill-duboisPrimary" />
            <image
              height={1000}
              width={800}
              href="/images/dubois/1898-1899-catalog-data-table-cropped.jpg"
            />
          </g>
          <g
            className={`transition-all duration-1000 ${
              highlightNames
                ? "scale-150 -translate-y-48"
                : "scale-1 translate-y-0"
            } opacity-${showDataTable ? 100 : 0}`}
          >
            <rect height={1000} width={800} className="fill-duboisPrimary" />
            <image
              width={800}
              height={1000}
              href="/images/dubois/1898-1899-catalog-alumni-page.jpg"
            />
            <rect
              x={180}
              y={505}
              width={170}
              height={20}
              className="stroke-black/50"
              strokeWidth={highlightNames ? 1 : 0}
              fill="yellow"
              fillOpacity={highlightNames ? 0.4 : 0}
            />
            <rect
              x={180}
              y={525}
              width={170}
              height={18}
              className="stroke-black/50"
              strokeWidth={highlightNames ? 1 : 0}
              fill="yellow"
              fillOpacity={highlightNames ? 0.4 : 0}
            />
            <rect
              x={180}
              y={555}
              width={170}
              height={20}
              className="stroke-black/50"
              strokeWidth={highlightNames ? 1 : 0}
              fill="yellow"
              fillOpacity={highlightNames ? 0.4 : 0}
            />
          </g>
          <g
            className={`transition-opacity duration-1000 opacity-${
              showGoogleSheet ? 100 : 0
            }`}
          >
            <rect height={1000} width={800} className="fill-duboisPrimary" />
            <image
              width={800}
              height={1000}
              href="/images/dubois/screenshot-grad-google-sheet.jpg"
            />
          </g>
        </g>
      </svg>
      <div
        className="absolute"
        style={{
          top: `${pieChartTop}px`,
          left: `${pieChartLeft}px`,
        }}
      >
        <ClientOnly>
          {() => (
            <PieChart
              id={id ?? "student-chart-one"}
              studentData={studentData}
              className={`order-last md:order-none transition-opacity duration-1000 translate-x-6 opacity-${
                showPieChart ? 100 : 0
              }`}
              interactive={interactive}
              activeStudent={activeStudent}
              containerSize={pieChartWidth}
            />
          )}
        </ClientOnly>
      </div>
    </>
  );
}
