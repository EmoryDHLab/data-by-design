import { classNames } from "~/utils";
import { useEffect, useRef, useState } from "react";
import { useDeviceContext } from "~/hooks";
import StudentChartOne from "~/components/dubois/StudentChartOne";
import StudentChartTwo from "~/components/dubois/StudentChartTwo";
import StudentChartThree from "~/components/dubois/StudentChartThree";
import type { ReactNodeLike } from "prop-types";

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
  const [activeChart, setActiveChart] = useState<Chart>(Chart.One);
  const [yOffset, setYOffset] = useState<number>(-120);
  const { isMobile } = useDeviceContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const ChartComponent = charts[activeChart] || null;

  useEffect(() => {
    setYOffset(isMobile ? -80 : -120);
  }, [isMobile]);

  const switchChart = (chart: Chart) => {
    setActiveChart(chart);
    const containerOffset = containerRef.current?.getBoundingClientRect().top
    const position = containerOffset ? containerOffset + window.scrollY + yOffset : window.scrollY + yOffset;
    window.scrollTo({ top: position, behavior: 'smooth' });
  }

  return (
    <section className="flex flex-col items-center">
      <nav className="sticky top-9 md:top-12 w-full bg-offwhite text-center py-2 z-10 border-b-4 border-duboisSecondary">
        <button
          onClick={() => {
            switchChart(Chart.One);
          }}
          className={classNames(
            "cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base",
            activeChart === Chart.One ? "bg-duboisSecondary" : "bg-white"
          )}
        >
          Chart One
        </button>
        <button
          onClick={() => {
            switchChart(Chart.Two);
          }}
          className={classNames(
            "cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base",
            activeChart === Chart.Two ? "bg-duboisSecondary" : "bg-white"
          )}
        >
          Chart Two
        </button>{" "}
        <button
          onClick={() => {
            switchChart(Chart.Three);
          }}
          className={classNames(
            "cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base",
            activeChart === Chart.Three ? "bg-duboisSecondary" : "bg-white"
          )}
        >
          Chart Three
        </button>
      </nav>
      <div ref={containerRef}>
        <ChartComponent />
      </div>
    </section>
  );
}
