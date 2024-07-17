import { useEffect, useRef, useState } from "react";
import { useResizeObserver } from "~/hooks";
import Legend from "~/components/dubois/pieChart/Legend";
import studentData from "~/data/dubois/studentChartTwo.json";
import PieChart from "~/components/dubois/PieChart.client";
import { ClientOnly } from "remix-utils/client-only";
import { map } from "~/utils";

const faded = 10;

const largeText = 22;
const smallText = 15;
const regularText = 15;
const leftMargin = 15;

interface Props {
  id?: string;
  interactive?: boolean;
  highlightMap?: boolean;
  highlightChart?: boolean;
  activeStudent: any;
}

export default function StudentChartTwo({
  id,
  interactive = true,
  highlightChart = false,
  highlightMap = false,
  activeStudent,
}: Props) {
  const { windowSize } = useResizeObserver();
  const [chartWidth, setChartWidth] = useState<number>(800);
  const chartRef = useRef<SVGSVGElement>(null);
  const [pieChartTop, setPieChartTop] = useState<number>(100);
  const [pieChartLeft, setPieChartLeft] = useState<number>(100);
  const [pieChartWidth, setPieChartWidth] = useState<number>(100);

  useEffect(() => {
    if (!windowSize.height || !windowSize.width) return;
    setChartWidth(windowSize.width / 2 - 16);
  }, [windowSize]);

  useEffect(() => {
    if (!windowSize.height) return;
    setPieChartTop(
      map(
        480, // Y value for pie chart
        0,
        1000, // Height of SVG viewbox
        0,
        // Add 80 to account for the navbar.
        windowSize.height + 80
      )
    );
  }, [windowSize, pieChartWidth]);

  useEffect(() => {
    setPieChartLeft(map(250, 0, 800, 0, chartWidth));

    setPieChartWidth(map(350, 0, 1000, 0, chartWidth));
  }, [chartWidth]);

  return (
    <div
      className={`bg-duboisPrimary h-[calc(100vh-80px)] mt-20 my-auto flex flex-col mr-4`}
    >
      <svg
        ref={chartRef}
        viewBox={`0 0 800 1000`}
        className="relative my-auto h-[80vh]"
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
            className={`text-black font-duboisWide transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={largeText}
          >
            <tspan x="50%">
              A STATISTICAL CHART ILLUSTRATING INFORMATION ABOUT THE BLACK
            </tspan>
            <tspan x="50%" dy={largeText + 5}>
              COLLEGE GRADUATES FROM ACROSS THE UNITED STATES WHO
            </tspan>
            <tspan x="50%" dy={largeText + 5}>
              CONTRIBUTED TO DU BOIS'S RESEARCH.
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
            className={`uppercase font-duboisWide tracking-wider transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
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
        <g
          className={`transition-opacity duration-1000 opacity-${
            highlightChart ? faded : 100
          }`}
        >
          <image x={450} y={120} height={160} href="/images/dubois/map.png" />
          <path
            d={`M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z`}
            fill="black"
            transform={`translate(486, 295) scale(0.7)`}
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
            className={`uppercase font-duboisWide transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
          >
            <tspan x="50%">
              The previous chart visualized graduates of Atlanta University. In
              1910, Du Bois
            </tspan>
            <tspan x="50%" dy={regularText + 6}>
              and his students undertook a larger study of Black college
              graduates across
            </tspan>
            <tspan x="50%" dy={regularText + 6}>
              the United States.
            </tspan>
            <tspan x="50%" dy={regularText + 18}>
              This chart visualizes information about the graduates of Atlanta
              University
            </tspan>
            <tspan x="50%" dy={regularText + 6}>
              who were included in the 1910 study,{" "}
              <tspan className="italic">The College-Bred Negro American</tspan>
            </tspan>
          </text>
        </g>
        <g
          className={`transition-opacity duration-1000 opacity-${
            highlightMap ? faded : 100
          }`}
        >
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
          <text
            y={790}
            fontSize={regularText}
            className={`uppercase font-duboisWide tracking-wider transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
          >
            <tspan x={leftMargin}>
              This visualization honors the 3,856 Black college graduates from
              across the United
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              States whose lives were included as data in the The College-Bred
              Negro American. A
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              subset of these graduates, whose names remain unknown, contributed
              additional
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              research to the study in the form of data collection and analysis.
            </tspan>
            <tspan x={leftMargin} dy={largeText * 1.5}>
              In this chart, each graduate of Atlanta University as of 1909,
              with a known occupation,
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              is positioned in the appropriate area of the chart. Additional
              categories represent
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              those with unknown occupations and those recorded as “Deceased.”
              An additional
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              3,693 dots represent the graduates of the other 140 colleges
              included in the study
            </tspan>
            <tspan x={leftMargin} dy={largeText}>
              whose names were not recorded as data.
            </tspan>
          </text>
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
              id={id ?? "student-chart-two"}
              studentData={studentData}
              className={`order-last md:order-none transition-opacity duration-1000 translate-x-6 opacity-${
                highlightMap ? faded : 100
              }`}
              interactive={interactive}
              activeStudent={activeStudent}
              containerSize={pieChartWidth}
            />
          )}
        </ClientOnly>
      </div>
    </div>
  );
}
