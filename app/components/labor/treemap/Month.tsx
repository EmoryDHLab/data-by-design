import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { visWidth, visHeight } from "../data/functions";
import { yearScale, rectColor } from "./data";
import type { TMontData } from "./monthlyData";
import type { Dispatch, SetStateAction } from "react";

const yScale = yearScale(visHeight());

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
  activeMonth: string | undefined;
  selectedMonth: string | undefined;
  setSelectedMonth: Dispatch<SetStateAction<string | undefined>>;
}

const Month = ({
  monthlyData,
  width,
  activeMonth,
  setActiveMonth,
  setBoxSize,
  selectedMonth,
  setSelectedMonth,
}: Props) => {
  const monthRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const treemapWidth =
      createScale(new Date(2019, 2, 1)) -
      createScale(new Date(2019, 1, 1)) -
      10;
    const treemapHeight =
      yScale(new Date(2019, 1, 1)) - yScale(new Date(2020, 1, 1)) - 20;
    const boxDimension = Math.min(treemapHeight, treemapWidth);
    const { translateX, translateY } = calcTransform(
      monthlyData.month,
      boxDimension
    );

    const root = d3
      .stratify()
      // @ts-ignore

      .id(({ source }) => source)
      // @ts-ignore
      .parentId(({ month }) => month)([
      { source: monthlyData.month },
      ...monthlyData.sources,
    ]);

    // @ts-ignore
    root.sum(({ count }) => {
      return count;
    });
    // root.sort((a, b) => b.height - a.height || b.value - a.value);
    if (setBoxSize) {
      setBoxSize({ width: boxDimension, height: boxDimension });
    }
    d3.treemap().size([boxDimension, boxDimension]).padding(0)(root);

    d3.select(monthRef.current)
      .attr("transform", `translate(${translateX + 10}, ${translateY + 12})`)
      .selectAll("rect")
      .data(root.leaves())
      .join("rect")
      .attr("x", (d) => {
        // @ts-ignore
        return d.x0;
      })
      .attr("y", (d) => {
        // @ts-ignore
        return d.y0;
      })
      .attr("width", (d) => {
        // @ts-ignore
        return d.x1 - d.x0;
      })
      .attr("height", (d) => {
        // @ts-ignore
        return d.y1 - d.y0;
      })
      .style("stroke", "black")
      // @ts-ignore
      .attr("class", (d) => rectColor(d.data.source));

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
      className="cursor-pointer"
      onMouseEnter={() => {
        if (!selectedMonth) {
          setActiveMonth(
            `m${monthlyData.month.getMonth()}_${monthlyData.month.getFullYear()}`
          );
        }
      }}
      onClick={() => {
        setSelectedMonth(
          `m${monthlyData.month.getMonth()}_${monthlyData.month.getFullYear()}`
        );
      }}
    />
  );
};

export default Month;
