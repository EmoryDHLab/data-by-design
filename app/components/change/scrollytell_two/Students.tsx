import { useContext, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import studentData from "~/data/power/studentChartTwo.json";

const students = studentData.categories
  .map((c) => {
    return c.students;
  })
  .flat();

const fillColor = (count: number) => {
  if (count > students.length) return "fill-offwhite";
  const category = students[count]?.professionCategory;
  switch (category) {
    case "teachers":
      return "fill-[#D92944] stroke-offblack";
    case "ministers":
      return "fill-[#5A7BC3] stroke-offblack";
    case "government":
      return "fill-[#FFD3D3] stroke-offblack";
    case "business":
      return "fill-[#CDCE9D] stroke-offblack";
    case "other":
    case "other professions":
      return "fill-[#2F4F4F] stroke-offblack";
    case "housewives":
      return "fill-[#FEC313] stroke-offblack";
    case "deceased":
      return "fill-[#C4C4C4] stroke-offblack";
    case "unknown":
      return "fill-[#B5CCFF] stroke-offblack";
    default:
      return "fill-offwhite";
  }
};

const Students = ({ width, height }: { width: number; height: number }) => {
  const { scrollProgress } = useContext(ScrollytellContext);
  const columns = 62;
  const rows = 63;
  const total = 3856;
  const radius = 3.967741935483871; // (width / columns) * 0.3
  const circleSectionWidth = 818.3333333333333; // width * (1 - 1 / columns / (radius * 2))
  const margin = 0.013440860215054374; // (width - circleSectionWidth) / (2 * columns)
  const circleSectionHeight = 749.9032258064516; // radius * 3 * rows
  const circleTopSpacing = 137.0483870967742; // (height - circleSectionHeight) / 2
  const smallRadius = (width / 62) * 0.3;

  return (
    <g className="scale-95 origin-center">
      <g
        className={`origin-top-left transition-all ${
          scrollProgress >= 4.25 && scrollProgress <= 7.25
            ? "opacity-100 "
            : "opacity-0"
        } ${
          scrollProgress >= 5.25
            ? "-translate-x-12 -translate-y-[36rem] scale-[5.25]"
            : ""
        } duration-1000`}
      >
        {/* All 3,856 */}
        <g
          className={`transition-opacity duration-1000 ${
            scrollProgress >= 4.25 && scrollProgress <= 5.25
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {Array.from({ length: 63 }).map((_, rowIdx) => {
            const y = radius * 3 * rowIdx + circleTopSpacing;
            return (
              <>
                {Array.from({ length: 62 }).map((_, circleIdx) => {
                  const x =
                    (width / columns) * circleIdx +
                    radius +
                    width / (smallRadius * columns) +
                    margin;
                  const count = columns * rowIdx + circleIdx;
                  if (count < total) {
                    return (
                      <circle
                        r={smallRadius}
                        cx={x}
                        cy={y}
                        className={`stroke-offblack transition-all duration-1000 opacity-100
                            fill-offwhite`}
                      />
                    );
                  }
                })}
              </>
            );
          })}
        </g>
        {/* 163 Students */}
        <g
          className={`transition-opacity duration-1000 ${
            scrollProgress >= 5.25 && scrollProgress <= 6.25
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <>
            {Array.from({ length: 13 }).map((_, rowIdx) => {
              const y = radius * 3 * rowIdx + circleTopSpacing;
              return (
                <>
                  {Array.from({ length: 13 }).map((_, circleIdx) => {
                    const x =
                      (width / columns) * circleIdx +
                      radius +
                      width / (smallRadius * columns) +
                      margin;
                    const count = 13 * rowIdx + circleIdx;
                    if (count < total) {
                      return (
                        <circle
                          r={radius}
                          cx={x}
                          cy={y}
                          strokeOpacity={
                            scrollProgress >= 4.25 && scrollProgress <= 7.25
                              ? 1
                              : 0
                          }
                          className={`transition-all duration-1000 opacity-100
                            ${fillColor(count)}`}
                        />
                      );
                    }
                  })}
                </>
              );
            })}
          </>
        </g>
      </g>
    </g>
  );
};

export default Students;
