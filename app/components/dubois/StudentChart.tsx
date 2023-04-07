import { classNames } from "~/utils";
import React, { useState } from "react";
import StudentChartOne from "~/components/dubois/StudentChartOne";
import StudentChartTwo from "~/components/dubois/StudentChartTwo";
import StudentChartThree from "~/components/dubois/StudentChartThree";
import type { ReactNodeLike } from "prop-types";
import { ClientOnly } from "remix-utils";

enum Chart {
  One,
  Two,
  Three,
}

const charts: { [key in Chart]: () => ReactNodeLike } = {
  [Chart.One]: StudentChartOne,
  [Chart.Two]: StudentChartTwo,
  [Chart.Three]: StudentChartThree,
};

export function StudentChart() {
  const [activeChart, setActiveChart] = useState<Chart>(Chart.Three);
  const ChartComponent = charts[activeChart] || null;
  return (
    <div className="flex flex-col items-center max-w-[800px] ">
      <span>
        <button
          onClick={() => {
            setActiveChart(Chart.One);
          }}
          className={classNames(
            "cut-corners p-2 uppercase font-dubois",
            activeChart === Chart.One ? "bg-duboisSecondary" : "bg-white"
          )}
        >
          Chart One
        </button>{" "}
        <button
          onClick={() => {
            setActiveChart(Chart.Two);
          }}
          className={classNames(
            "cut-corners p-2 uppercase font-dubois",
            activeChart === Chart.Two ? "bg-duboisSecondary" : "bg-white"
          )}
        >
          Chart Two
        </button>{" "}
        <button
          onClick={() => {
            setActiveChart(Chart.Three);
          }}
          className={classNames(
            "cut-corners p-2 uppercase font-dubois",
            activeChart === Chart.Three ? "bg-duboisSecondary" : "bg-white"
          )}
        >
          Chart Three
        </button>
      </span>
      <ClientOnly>{() => <ChartComponent />}</ClientOnly>
    </div>
  );
}
