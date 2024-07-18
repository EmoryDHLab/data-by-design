import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import StudentChartOne from "../StudentChartOne";
import type { ReactElement } from "react";
import type { TFocusShape } from "~/types/scrollytellTypes";

const chartHeight = 1000;
const chartWidth = 800;

const ChartOneScrollytell = ({ triggers }: { triggers: ReactElement[] }) => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [interactive, setInteractive] = useState<boolean>(false);
  const [showDataTable, setShowDataTable] = useState<boolean>(false);
  const [showCroppedDataTable, setShowCroppedDataTable] =
    useState<boolean>(false);
  const [showOriginal, setShowOriginal] = useState<boolean>(true);
  const [showGoogleSheet, setShowGoogleSheet] = useState<boolean>(false);
  const [showRecreation, setShowRecreation] = useState<boolean>(false);
  const [activeStudent, setActiveStudent] = useState<string | undefined>(
    undefined
  );
  const [showPieChart, setShowPieChart] = useState<boolean>(false);
  const [highlightNames, setHighlightNames] = useState<boolean>(false);

  const steps = useRef<HTMLDivElement>(null);
  const [focusShape, setFocusShape] = useState<TFocusShape>({
    x: 0,
    y: 0,
    width: chartWidth,
    height: chartHeight,
  });

  useEffect(() => {
    switch (true) {
      case scrollProgress >= 0 && scrollProgress <= 0.5:
        setShowOriginal(true);
        setFocusShape({ x: 0, y: 0, width: 800, height: 1000 });

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 0.5 && scrollProgress <= 1.5:
        setShowOriginal(true);
        setFocusShape({ x: 10, y: 230, width: chartWidth - 20, height: 145 });

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 1.5 && scrollProgress <= 2.5:
        setShowOriginal(true);
        setFocusShape({ x: 220, y: 410, width: 350, height: 350 });

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 2.5 && scrollProgress <= 3.5:
        setShowOriginal(true);
        setFocusShape({ x: 10, y: 410, width: chartWidth - 20, height: 350 });

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 3.5 && scrollProgress <= 4.5:
        setShowCroppedDataTable(true);

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 4.5 && scrollProgress <= 5.5:
        setShowDataTable(true);

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 5.5 && scrollProgress <= 6.5:
        setShowDataTable(true);
        setHighlightNames(true);

        setActiveStudent(undefined);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 6.5 && scrollProgress <= 7.5:
        setShowGoogleSheet(true);

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowOriginal(false);
        setShowPieChart(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 7.5 && scrollProgress <= 8.5:
        setShowPieChart(true);

        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 8.5 && scrollProgress <= 9.5:
        setShowPieChart(true);
        setActiveStudent("Henrietta R");

        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowRecreation(false);
        break;
      case scrollProgress >= 9.5 && scrollProgress <= 11:
        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(true);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowPieChart(true);
        setShowRecreation(true);
        break;
      default:
        setActiveStudent(undefined);
        setHighlightNames(false);
        setInteractive(false);
        setShowCroppedDataTable(false);
        setShowDataTable(false);
        setShowGoogleSheet(false);
        setShowOriginal(false);
        setShowPieChart(false);
        setShowRecreation(false);
        setFocusShape({
          x: 0,
          y: 0,
          width: 800,
          height: 1000,
        });
        break;
    }
  }, [scrollProgress]);

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
          className="flex flex-col md:flex-row justify-between"
          id="scrollytell-1"
        >
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-1/2 md:order-last">
            <div
              className={`bg-duboisPrimary h-[calc(100vh-80px)] mt-20 my-auto flex flex-col mr-4`}
            >
              <StudentChartOne
                id="student-chart-one-scrolly"
                interactive={interactive}
                topOffset={80}
                leftOffset={16}
                activeStudent={activeStudent}
                focusShape={focusShape}
                showDataTable={showDataTable}
                showCroppedDataTable={showCroppedDataTable}
                showOriginal={showOriginal}
                showGoogleSheet={showGoogleSheet}
                showRecreation={showRecreation}
                highlightNames={highlightNames}
                showPieChart={showPieChart}
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
};

export default ChartOneScrollytell;
