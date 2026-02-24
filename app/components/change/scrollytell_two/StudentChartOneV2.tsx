import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

interface Props {
  className?: string;
  width: number;
  height: number;
}

const fillOpacity = (row: number, column: number) => {
  switch (true) {
    case row <= 2:
    case row === 3 && column < 22:
    case row === 4 && column > 2:
    case row === 5 && column > 8 && column < 20:
    case row === 6 && (column < 13 || column > 21):
    case row === 7 && column < 3:
    case row === 7 && column < 18:
      return "opacity-50";

    default:
      return "opacity-100";
  }
};

const fillColor = (row: number, column: number) => {
  switch (true) {
    case row <= 3 || (row === 4 && column < 3):
    case row === 7 && column < 18:
      return "fill-red-500";
    case row === 4 && column > 2:
    case row === 5 && column < 9:
      return "fill-blue-500";
    case row === 5:
      return "fill-yellow-500";
    case row === 6:
    case row === 7 && column < 3:
      return "fill-green-800";
    default:
      return "fill-gray-300";
  }
};

const StudentChartOneV2 = ({ className, width, height }: Props) => {
  const largeText = 32;
  const smallText = 22;
  const regularText = 26;
  const top = 50;
  const padding = 90;
  const sectionBreak = padding / 4;
  const mapSectionHeight =
    (largeText + 5) * 3 + // top three lines
    top +
    sectionBreak +
    (smallText / 3 + smallText) * 8 + // Space taking by all lines on the left
    sectionBreak +
    (regularText + 4) * 3 +
    (regularText + 18) * 2;
  const mapTopSpacing = height / 2 - mapSectionHeight / 2;

  const radius = (width / 27) * 0.3;
  const circleSectionHeight = radius * 3 * 12;
  const circleTopSpacing = height / 2 - circleSectionHeight / 2;

  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <g className={`${className} transition-opacity duration-1000`}>
      {/* CHART */}
      <g
        className={`${
          scrollProgress >= 2.25 && scrollProgress <= 3.25
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <rect
          x={0}
          y={mapTopSpacing - largeText / 2}
          width={width}
          height={mapSectionHeight}
          className="fill-offwhite"
        />
        <g>
          <text
            x={width / 2}
            y={mapTopSpacing}
            className={`text-black font-powerWide transition-opacity duration-1000 opacity-100
            }`}
            textAnchor="middle"
            dominantBaseline="hanging"
            fontSize={largeText}
          >
            <tspan x={width / 2}>
              A STATISTICAL CHART ILLUSTRATING INFORMATION
            </tspan>
            <tspan x={width / 2} dy={largeText + 5}>
              ABOUT THE GRADUATES OF ATLANTA UNIVERSITY
            </tspan>
            <tspan x={width / 2} dy={largeText + 5}>
              CONTRIBUTED TO DU BOIS'S RESEARCH.
            </tspan>
          </text>
        </g>
        <g>
          <text
            x={width / 4}
            y={(largeText + 5) * 3 + mapTopSpacing + sectionBreak}
            textAnchor="middle"
            dominantBaseline="hanging"
            fontSize={smallText}
            className={`uppercase font-powerWide tracking-wider transition-opacity duration-1000 opacity-100`}
          >
            <tspan x={width / 4}>Prepared and executed by,</tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              Tanvi Sharma, Anna Mola,
            </tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              Nicholas Yang, Yang Li
            </tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              Jay Varner, and Lauren Klein
            </tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              Under the Auspices of the{" "}
            </tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              Digital Humanities Lab
            </tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              Emory University, Atlanta, GA.
            </tspan>
            <tspan x={width / 4} dy={smallText + smallText / 3}>
              United States of America
            </tspan>
          </text>
        </g>
        <g className={`transition-opacity duration-1000 opacity-100`}>
          <g x={width / 2}></g>
          <image
            // 1.54 is the width height ratio of the original image
            x={
              width / 2 +
              (width / 2 - (smallText + smallText / 3) * 7 * 1.54) / 2
            }
            y={(largeText + 5) * 3 + mapTopSpacing}
            // 1.54 is the width height ratio of the original image
            width={(smallText + smallText / 3) * 7 * 1.54}
            // height={(smallText + smallText / 3) * 7}
            href="/images/change/map.png"
          />
          <path
            d={`M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z`}
            fill="black"
            transform={`translate(${width * 0.75 - smallText * 6.1}, ${
              (largeText + 5) * 3 + // top three lines
              mapTopSpacing +
              sectionBreak +
              (smallText / 3 + smallText) * 7
            }) scale(0.59)`}
          />
          <text
            x={width * 0.75}
            y={
              (largeText + 5) * 3 + // top three lines
              mapTopSpacing +
              sectionBreak +
              (smallText / 3 + smallText) * 7 // Space taking by all but last line on the left
            }
            fill="black"
            fontSize={smallText}
            className="uppercase font-powerWide"
            textAnchor="middle"
            dominantBaseline="hanging"
          >
            Atlanta University
          </text>
        </g>
        <g>
          <text
            x={width / 2}
            y={
              (largeText + 5) * 3 + // top three lines
              mapTopSpacing +
              sectionBreak +
              (smallText / 3 + smallText) * 8 + // Space taking by all lines on the left
              sectionBreak
            }
            textAnchor="middle"
            dominantBaseline="hanging"
            fontSize={regularText}
            className={`uppercase font-powerWide transition-opacity duration-1000 opacity-100`}
          >
            <tspan x={width / 2}>
              The original chart visualized the occupations of the
            </tspan>
            <tspan x={width / 2} dy={regularText + 4}>
              330 Black Americans who had graduated from Atlanta
            </tspan>
            <tspan x={width / 2} dy={regularText + 4}>
              University as of 1898.
            </tspan>
            <tspan x={width / 2} dy={regularText + 16}>
              The 1898-1899 Catalogue lists these same graduates
            </tspan>
            <tspan x={width / 2} dy={regularText + 16}>
              by name, along with their degree(s) earned, current
            </tspan>
            <tspan x={width / 2} dy={regularText + 4}>
              occupation, and place of residence.
            </tspan>
          </text>
        </g>
      </g>
      {/* CIRCLES */}
      <g
        className={`${
          scrollProgress >= 3.25 && scrollProgress <= 5.25
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <rect
          x={0}
          y={circleTopSpacing - radius * 2}
          width={width}
          height={circleSectionHeight + radius}
          className="fill-offwhite"
        />
        <g className="scale-95 origin-center">
          {Array.from({ length: 12 }).map((_, rowIdx) => {
            const y = radius * 3 * rowIdx + circleTopSpacing;
            return (
              <>
                {Array.from({ length: 27 }).map((_, circleIdx) => {
                  const x =
                    (width / 27) * circleIdx + radius + width / (radius * 27);
                  return (
                    <circle
                      r={radius}
                      cx={x}
                      cy={y}
                      className={`stroke-offblack transition-all duration-1000 ${
                        scrollProgress >= 4.25
                          ? fillOpacity(rowIdx, circleIdx)
                          : "opacity-100"
                      }
                          ${
                            scrollProgress >= 4.25
                              ? fillColor(rowIdx, circleIdx)
                              : "fill-offwhite"
                          }`}
                      // stroke="black"
                      // strokeWidth={3}
                    />
                  );
                })}
              </>
            );
          })}
        </g>
      </g>
    </g>
  );
};

export default StudentChartOneV2;
