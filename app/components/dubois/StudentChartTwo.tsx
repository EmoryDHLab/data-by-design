import { useEffect, useState } from "react";
import { useResizeObserver } from "~/hooks";
import Legend from "~/components/dubois/pieChart/Legend";
import studentData from "~/data/dubois/studentChartTwo.json";
import PieChart from "~/components/dubois/PieChart.client";
import { ClientOnly } from "remix-utils/client-only";

const rowOneOffset = 0.025;
const rowOneSpacing = 0.025;
const rowThreeFontsize = 0.016;
const faded = 10;

interface Props {
  id?: string;
  interactive?: boolean;
  highlightMap?: boolean;
  highlightChart?: boolean;
  activeStudent: any;
  background?: string;
}

export default function StudentChartTwo({
  id,
  interactive = true,
  highlightChart = false,
  highlightMap = false,
  activeStudent,
  background = "offwhite",
}: Props) {
  const { windowSize } = useResizeObserver();
  const [windowWidth, setWindowWidth] = useState<number>(100);
  const [windowHeight, setWindowHeight] = useState<number>(100);
  const [smallText, setSmallText] = useState<number>(10);
  const [regularText, setRegularText] = useState<number>(15);
  const [largeText, setLargeText] = useState<number>(20);

  useEffect(() => {
    if (!windowSize.height || !windowSize.width) return;
    const { width, height } = windowSize;
    setWindowWidth(width / 2);
    setWindowHeight(height - 80);
    setSmallText(Math.max(height * 0.0095, width * 0.0095));
    setRegularText(Math.max(height * 0.012, width * 0.012));
    setLargeText(Math.max(height * 0.014, width * 0.014));
  }, [windowSize]);

  return (
    <div
      className={`bg-${background} h-full w-full relative`}
      style={{ width: `${windowWidth}px` }}
    >
      <svg
        viewBox={`0 0 ${windowWidth} ${windowHeight}`}
        className={`bg-offwhite relative md:scale-95`}
        style={{
          width: `${windowWidth}px`,
          height: `${windowHeight}px`,
        }}
      >
        <g>
          <text
            x="50%"
            y={windowHeight * rowOneOffset}
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
            <tspan x="50%" dy={windowHeight * rowOneSpacing}>
              COLLEGE GRADUATES FROM ACROSS THE UNITED STATES WHO
            </tspan>
            <tspan x="50%" dy={windowHeight * rowOneSpacing}>
              CONTRIBUTED TO DU BOIS'S RESEARCH.
            </tspan>
          </text>
        </g>
        <g>
          <text
            x="25%"
            y={windowHeight * rowOneSpacing * 4}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={smallText}
            className={`uppercase font-duboisWide tracking-wide transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
          >
            <tspan x="25%" dy={largeText}>
              Prepared and executed by,
            </tspan>
            <tspan x="25%" dy={largeText}>
              Tanvi Sharma,Anna Mola, Nicholas Yang,
            </tspan>
            <tspan x="25%" dy={largeText}>
              Yang Li, Jay Varner, and Lauren Klein
            </tspan>
            <tspan x="25%" dy={largeText}>
              Under the Auspices of the{" "}
            </tspan>
            <tspan x="25%" dy={largeText}>
              Digital Humanities Lab
            </tspan>
            <tspan x="25%" dy={largeText}>
              Emory University, Atlanta, GA.
            </tspan>
            <tspan x="25%" dy={largeText}>
              United States of America
            </tspan>
          </text>
        </g>
        <g
          className={`transition-opacity duration-1000 opacity-${
            highlightChart ? faded : 100
          }`}
        >
          <image
            x={windowWidth / 1.75}
            y={windowHeight * rowOneSpacing * 4}
            height={regularText * 8}
            href="/images/dubois/map.png"
          />
          <path
            d={`M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z`}
            fill="black"
            transform={`translate(${windowWidth / 1.75}, ${
              windowHeight * rowOneSpacing * 4.1 + regularText * 8
            }) scale(0.8)`}
            height={largeText}
            width={largeText}
          />
          p
          <text
            x={windowWidth / 1.75 + smallText * 2.5}
            y={windowHeight * rowOneSpacing * 4 + largeText * 8}
            fill="black"
            fontSize={regularText}
            className="uppercase font-duboisWide"
          >
            Atlanta University
          </text>
        </g>
        <g>
          <text
            x="50%"
            y={
              windowHeight * rowOneSpacing * 4 +
              regularText * 6 +
              windowHeight * rowOneOffset * 2 +
              regularText * 2
            }
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={regularText}
            className={`uppercase font-duboisWide transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
          >
            <tspan x="50%" dy={windowHeight * rowOneSpacing}>
              The previous chart visualized graduates of Atlanta University. In
              1910,
            </tspan>
            <tspan x="50%" dy={windowHeight * rowOneSpacing}>
              Du Bois and his students undertook a larger study of Black college
            </tspan>
            <tspan x="50%" dy={windowHeight * rowOneSpacing}>
              graduates across the United States.
            </tspan>
            <tspan x="50%" dy={windowHeight * rowOneSpacing * 2}>
              This chart visualizes information about the graduates of
            </tspan>
            <tspan x="50%" dy={windowHeight * rowOneSpacing}>
              Atlanta University who were included in the 1910 study, American
            </tspan>
            <tspan x="50%" dy={windowHeight * rowOneSpacing} className="italic">
              The College-Bred Negro American
            </tspan>
          </text>
        </g>
        <g
          className={`transition-opacity duration-1000 opacity-${
            highlightMap ? faded : 100
          }`}
        >
          <Legend
            x={windowWidth * 0.035}
            y={windowHeight / 2 + windowHeight * 0.028}
            width={windowWidth}
            radius={windowWidth * 0.018}
            height={windowHeight * rowThreeFontsize}
            catagories={studentData.categories}
          />
        </g>
        <g>
          <text
            y={windowHeight * 0.825}
            x={windowWidth * 0.01}
            fontSize={smallText}
            className={`uppercase font-duboisWide tracking-wide transition-opacity duration-1000 opacity-${
              highlightChart || highlightMap ? faded : 100
            }`}
          >
            <tspan x={windowWidth * 0.01}>
              This visualization honors the 3,856 Black college graduates from
              across the United
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              States whose lives were included as data in the The College-Bred
              Negro American. A
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              subset of these graduates, whose names remain unknown, contributed
              additional
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              research to the study in the form of data collection and analysis.
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.5}>
              In this chart, each graduate of Atlanta University as of 1909,
              with a known occupation, is
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              positioned in the appropriate area of the chart. Additional
              categories represent those
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              with unknown occupations and those recorded as “Deceased.” An
              additional 3,693 dots
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              represent the graduates of the other 140 colleges included in the
              study whose names
            </tspan>
            <tspan x={windowWidth * 0.01} dy={regularText * 1.1}>
              were not recorded as data.
            </tspan>
          </text>
        </g>
      </svg>
      <div
        className="absolute flex flex-col w-full"
        style={{ top: `${windowHeight / 2}px` }}
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
              containerSize={Math.min(windowHeight / 6, windowWidth / 3)}
            />
          )}
        </ClientOnly>
      </div>
    </div>
  );
}
