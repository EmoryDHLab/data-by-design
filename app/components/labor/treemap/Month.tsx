import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { visWidth, visHeight } from "../data/functions";
import { yearScale } from "./data";
import type { TMontData } from "./monthlyData";
import type { Dispatch, SetStateAction } from "react";
console.log("🚀 ~ d3:", d3);

const yScale = yearScale(visHeight());

const rectColor = (source: string) => {
  switch (source) {
    case "Github":
      return "fill-duboisPrimary";
    case "Figma":
      return "fill-playfairPrimary";
    case "Zotero":
      return "fill-shanawdithitPrimary";
    case "iCalendar":
      return "fill-peabodyPrimary";
    case "Google Drive":
      return "fill-brooksPrimary";
    default:
      return "black";
  }
};

const createScale = (date: Date) => {
  if (date.getMonth() >= 8 && date.getMonth() <= 11) {
    let xScale = d3
      .scaleTime()
      .domain([
        new Date(date.getFullYear(), 8, 1),
        new Date(date.getFullYear() + 1, 7, 31),
      ])
      .range([0, visWidth() * 0.9]);
    return xScale(date);
  } else {
    let xScale = d3
      .scaleTime()
      .domain([
        new Date(date.getFullYear() - 1, 8, 1),
        new Date(date.getFullYear(), 7, 31),
      ])
      .range([0, visWidth() * 0.9]);
    return xScale(date);
  }
};

const calcTransform = (date: Date, treemapHeight: number) => {
  if (date.getMonth() <= 7) {
    return {
      translateX: createScale(date) + 90,
      translateY:
        yScale(new Date(date.getFullYear(), 7, 1)) + treemapHeight / 2,
    };
  }
  return {
    translateX: createScale(date) + 90,
    translateY:
      yScale(new Date(date.getFullYear() + 1, 7, 1)) + treemapHeight / 2,
  };
};

interface Props {
  monthlyData: TMontData;
  width: number | undefined;
  setActiveMonth: Dispatch<SetStateAction<string | undefined>>;
  setBoxSize?: Dispatch<
    SetStateAction<{ height: number; width: number } | undefined>
  >;
}

const Month = ({ monthlyData, width, setActiveMonth, setBoxSize }: Props) => {
  const monthRef = useRef<SVGGElement>(null);
  useEffect(() => {
    const treemapWidth =
      createScale(new Date(2019, 2, 1)) -
      createScale(new Date(2019, 1, 1)) -
      10;
    const treemapHeight =
      yScale(new Date(2019, 1, 1)) - yScale(new Date(2020, 1, 1)) - 20;
    const { translateX, translateY } = calcTransform(
      monthlyData.month,
      treemapHeight
    );
    // const treemapGroup = ;
    // }

    const root = d3
      .stratify()
      .id(({ source }) => source)
      .parentId(({ month }) => month)([
      { source: monthlyData.month },
      ...monthlyData.sources,
    ]);

    root.sum(({ count }) => {
      return count;
    });
    // root.sort((a, b) => b.height - a.height || b.value - a.value);
    if (setBoxSize) {
      setBoxSize({ width: treemapWidth, height: treemapHeight });
    }
    d3.treemap().size([treemapWidth, treemapHeight]).padding(0)(root);

    d3.select(monthRef.current)
      .attr("class", "month")
      .attr("transform", `translate(${translateX + 10}, ${translateY + 12})`)
      .selectAll("rect")
      .data(root.leaves())
      .join("rect")
      .attr("x", (d) => {
        return d.x0;
      })
      .attr("y", (d) => {
        return d.y0;
      })
      .attr("width", (d) => {
        return d.x1 - d.x0;
      })
      .attr("height", (d) => {
        return d.y1 - d.y0;
      })
      .style("stroke", "black")
      // .style("fill", (d) => rectColor(d.data.source))
      .attr("class", (d) => rectColor(d.data.source))
      .on("mouseover", (e, d) => {
        setActiveMonth(
          `m${d.data.month.getMonth()}_${d.data.month.getFullYear()}`
        );
      });

    const refCopy = monthRef.current;

    return () => {
      if (refCopy) {
        refCopy.innerHTML = "";
      }
    };
  }, [monthlyData, width, setActiveMonth, setBoxSize]);

  return (
    <g
      ref={monthRef}
      id={`${monthlyData.month.getFullYear()}-${monthlyData.month.getMonth()}`}
    />
  );
};

export default Month;
