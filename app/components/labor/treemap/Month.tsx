import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { visWidth, visHeight } from "../data/functions";
import { yearScale, rectColor } from "./data";
import type { TMontData } from "./monthlyData";
import type { Dispatch, SetStateAction } from "react";

const yScale = yearScale(visHeight());

const createScale = (date: Date) => {
  if (date.getMonth() >= 8 && date.getMonth() <= 11) {
    const xScale = d3
      .scaleTime()
      .domain([
        new Date(date.getFullYear(), 8, 1),
        new Date(date.getFullYear() + 1, 7, 31),
      ])
      .range([0, visWidth() * 0.9]);
    return xScale(date);
  } else {
    const xScale = d3
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
  setBoxSize?: Dispatch<SetStateAction<{ height: number; width: number }>>;
  setSelectedMonth: Dispatch<SetStateAction<string | undefined>>;
  selectedMonth?: string;
}

const Month = ({
  monthlyData,
  width,
  setBoxSize,
  setSelectedMonth,
  selectedMonth,
}: Props) => {
  const monthRef = useRef<SVGGElement>(null);
  const transformRef = useRef<string | undefined>(undefined);
  const dimensionRef = useRef<number | undefined>(undefined);
  const [outline, setOutline] = useState<{
    transform: string;
    dim: number;
  } | null>(null);
  const key = `m${monthlyData.month.getMonth()}_${monthlyData.month.getFullYear()}`;

  useEffect(() => {
    const treemapWidth =
      createScale(new Date(2019, 2, 1)) -
      createScale(new Date(2019, 1, 1)) -
      10;
    const treemapHeight =
      yScale(new Date(2019, 1, 1)) - yScale(new Date(2020, 1, 1)) - 20;
    const boxDimension = Math.min(treemapHeight, treemapWidth);
    dimensionRef.current = boxDimension;
    const { translateX, translateY } = calcTransform(
      monthlyData.month,
      boxDimension,
    );

    transformRef.current = `translate(${translateX + 10}, ${translateY + 12})`;
    setOutline({ transform: transformRef.current, dim: boxDimension });

    const root = d3
      .stratify()
      // @ts-expect-error: IDK, D3 amirite?
      .id(({ source }) => source)
      // @ts-expect-error: IDK, D3 amirite?
      .parentId(({ month }) => month)([
      { source: monthlyData.month },
      ...monthlyData.sources,
    ]);

    // @ts-expect-error: IDK, D3 amirite?
    root.sum(({ count }) => {
      return count;
    });
    // @ts-expect-error: IDK, D3 amirite?
    root.sort((a, b) => b.height - a.height || b.value - a.value);
    if (setBoxSize) {
      setBoxSize({ width: boxDimension, height: boxDimension });
    }
    d3.treemap().size([boxDimension, boxDimension]).padding(0)(root);

    d3.select(monthRef.current)
      .attr("transform", transformRef.current)
      .selectAll("rect")
      .data(root.leaves())
      .join("rect")
      .attr("x", (d) => {
        // @ts-expect-error: IDK, D3 amirite?
        return d.x0;
      })
      .attr("y", (d) => {
        // @ts-expect-error: IDK, D3 amirite?
        return d.y0 + 10;
      })
      .attr("width", (d) => {
        // @ts-expect-error: IDK, D3 amirite?
        return d.x1 - d.x0;
      })
      .attr("height", (d) => {
        // @ts-expect-error: IDK, D3 amirite?
        return d.y1 - d.y0;
      })
      .style("stroke", "black")
      // @ts-expect-error: IDK, D3 amirite?
      .attr("class", (d) => rectColor(d.data.source));

    const refCopy = monthRef.current;

    return () => {
      if (refCopy) {
        refCopy.innerHTML = "";
      }
    };
  }, [monthlyData, width, setBoxSize]);

  const isSelected = selectedMonth === key;

  return (
    <>
      <g
        ref={monthRef}
        id={`${monthlyData.month.getFullYear()}-${monthlyData.month.getMonth()}`}
        className="cursor-pointer"
        onClick={(event) => {
          event.stopPropagation();
          setSelectedMonth(undefined);
          setSelectedMonth(key);
        }}
        aria-description={monthlyData.month.toDateString()}
      ></g>
      {isSelected && outline && (
        <g transform={outline.transform} pointerEvents="none">
          <rect
            x={0}
            y={10}
            width={outline.dim}
            height={outline.dim}
            fill="none"
            stroke="white"
            strokeWidth={2}
          />
        </g>
      )}
    </>
  );
};

export default Month;
