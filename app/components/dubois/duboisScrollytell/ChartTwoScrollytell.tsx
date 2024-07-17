import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { ReactElement } from "react";
import StudentChartTwo from "../StudentChartTwo";

function ChartTwoScrollytell({ triggers }: { triggers: ReactElement[] }) {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [activeStudent, setActiveStudent] = useState<string | undefined>(
    undefined
  );
  const [interactive, setInteractive] = useState<boolean>(false);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 10.5;

  useEffect(() => {
    switch (true) {
      case scrollProgress < minScrollProgress + 4:
        setActiveStudent(undefined);
        break;
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress <= minScrollProgress + 4.25:
        setActiveStudent("Lula Iola");
        break;
      case scrollProgress >= minScrollProgress + 4.25 &&
        scrollProgress <= minScrollProgress + 4.5:
        setActiveStudent("Edward Lee");
        break;
      case scrollProgress >= minScrollProgress + 4.5 &&
        scrollProgress <= minScrollProgress + 4.75:
        setActiveStudent("William George");
        break;
      case scrollProgress >= minScrollProgress + 4.75 &&
        scrollProgress <= minScrollProgress + 5:
        setActiveStudent("Henry Napoleon");
        setInteractive(false);
        break;
      case scrollProgress >= minScrollProgress + 5:
        setInteractive(true);
      default:
        setActiveStudent(undefined);
    }
  }, [scrollProgress, hideSensitiveState]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="duboisPrimary"
      >
        <div
          className={`flex flex-col md:flex-row justify-between`}
          id="scrollytell-2"
        >
          <div className="sticky p-8 md:p-0 top-0 h-full bias-full w-full md:bias-1/2 md:w-1/2 md:order-last">
            <StudentChartTwo
              id="student-chart-two-scrolly"
              interactive={interactive}
              highlightChart={
                scrollProgress >= minScrollProgress + 2 &&
                scrollProgress <= minScrollProgress + 3
              }
              highlightMap={
                scrollProgress >= minScrollProgress + 1 &&
                scrollProgress <= minScrollProgress + 2
              }
              activeStudent={activeStudent}
            />
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
                  className={`pointer-events-none step text-xl content-center relative h-screen text-${accentTextColor}`}
                >
                  <div
                    className={`p-6 m-16 text-offwhite md:p-0 bg-${
                      index == 0 || index == triggers.length - 1
                        ? ""
                        : "duboisPrimary-translucent"
                    } w-9/12`}
                  >
                    {trigger}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

export default ChartTwoScrollytell;
