import { useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { ReactElement } from "react";
import StudentChartThreeV2 from "../StudentChartThreeV2.client";
import { ClientOnly } from "remix-utils/client-only";

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
          className={`flex flex-col md:flex-row justify-between`}
          id="scrollytell-3"
        >
          <div className="sticky h-min bias-full top-0 w-full md:bias-1/2 md:w-7/12 md:order-last">
            <div className="relative top-0 p-6">
              <ClientOnly>
                {() => (
                  <StudentChartThreeV2
                    scrollProgress={scrollProgress + minScrollProgress}
                  />
                )}
              </ClientOnly>
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
                  className={`pointer-events-none chart-three-step text-xl content-center relative h-screen text-${accentTextColor}`}
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
