import { useEffect, useState } from "react";
import StudentChartOne from "./StudentChartOne";
import StudentChartThreeV2 from "./StudentChartThree";
import StudentChartTwo from "./StudentChartTwo";
import type { TFigure } from "~/types/figureType";
import FigureObj from "../layout/FigureObj";

const StudentCharts = ({ figure }: { figure: TFigure }) => {
  const [currentChart, setCurrentChart] = useState<string>("original");

  useEffect(() => {
    setCurrentChart("three");
  }, []);

  return (
    <div className="w-screen my-8 md:my-12 relative z-10">
      <div
        className="flex flex-col md:flex-row bg-offblack"
        id="student-charts"
      >
        <div className="sticky p-8 md:p-0 top-0 h-full bias-full w-full md:bias-1/2 md:w-1/2 md:order-last">
          <div className="bg-offblack h-[calc(100vh-80px)] my-auto flex flex-col mr-4">
            {currentChart === "original" && (
              <FigureObj figure={figure} imageClassName="m-auto" />
            )}
            {currentChart === "one" && (
              <StudentChartOne topOffset={-80} leftOffset={16} />
            )}
            {currentChart === "two" && (
              <StudentChartTwo topOffset={-80} leftOffset={16} />
            )}
            {currentChart === "three" && <StudentChartThreeV2 interactive />}
          </div>
        </div>
        <nav className="bias-full w-full md:bias-1/2 md:w-2/5 relative self-center">
          <ul className="my-8 w-9/12">
            <li className="my-4">
              <button
                className={`${
                  currentChart === "original"
                    ? "bg-duboisSecondary"
                    : "bg-white"
                } cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
                onClick={() => setCurrentChart("original")}
              >
                Original Chart
              </button>
            </li>
            <li className="my-4">
              <button
                className={`${
                  currentChart === "one" ? "bg-duboisSecondary" : "bg-white"
                } cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
                onClick={() => setCurrentChart("one")}
              >
                Chart One
              </button>
            </li>
            <li className="my-4">
              <button
                className={`${
                  currentChart === "two" ? "bg-duboisSecondary" : "bg-white"
                } cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
                onClick={() => setCurrentChart("two")}
              >
                Chart Two
              </button>
            </li>
            <li className="my-4">
              <button
                className={`${
                  currentChart === "three" ? "bg-duboisSecondary" : "bg-white"
                } cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
                onClick={() => setCurrentChart("three")}
              >
                Chart Three
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StudentCharts;
