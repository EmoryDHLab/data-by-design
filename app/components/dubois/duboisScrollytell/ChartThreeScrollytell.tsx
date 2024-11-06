import { useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { ReactElement } from "react";
import StudentChartThreeV2 from "../StudentChartThree";

const minScrollProgress = 0;

function ChartThreeScrollytell({ triggers }: { triggers: ReactElement[] }) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="duboisPrimary"
        stepClassName=".chart-three-step"
      >
        <div
          className="flex flex-col md:flex-row justify-between"
          id="scrollytell-3"
        >
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-1/2 md:order-last">
            <div
              className={`bg-duboisPrimary h-[calc(100vh-80px)] mt-20 my-auto flex flex-col mr-4`}
            >
              <StudentChartThreeV2
                scrollProgress={scrollProgress + minScrollProgress}
              />
            </div>
          </div>
          <div
            ref={steps}
            className="bias-full w-full md:bias-1/2 md:w-2/5 relative"
          >
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={`brooks-trigger-${trigger.key}`}
                  data-step={index}
                  className={`pointer-events-none chart-three-step step text-xl content-center relative h-screen text-${accentTextColor}`}
                >
                  <p
                    className={`p-6 md:p-0 bg-${
                      index == 0 || index == triggers.length - 1
                        ? ""
                        : "duboisPrimary-translucent"
                    } w-9/12 text-offwhite`}
                  >
                    {trigger}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

export default ChartThreeScrollytell;
