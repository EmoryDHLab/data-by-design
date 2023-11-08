import { useState } from "react";
import StudentChartOne from "./StudentChartOne";
import StudentChartThreeV2 from "./StudentChartThreeV2.client";
import StudentChartTwo from "./StudentChartTwo";
import type { TFigure } from "~/types/figureType";
import FigureObj from "../layout/FigureObj";

const StudentChartV2 = ({ figure }: { figure: TFigure }) => {
  const [currentChart, setCurrentChart] = useState<string>("original");

  return (
    <section className="w-full bg-black grid grid-cols-4 justify-items-center" id="student-charts">
      <nav className="">
        <ul className="my-8">
        <li className="my-4">
            <button
              className={`${currentChart === "original" ? "bg-duboisSecondary" : "bg-white"} cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
              onClick={() => setCurrentChart("original")}
            >
              Original Chart
            </button>
          </li>
          <li className="my-4">
            <button
              className={`${currentChart === "one" ? "bg-duboisSecondary" : "bg-white"} cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
              onClick={() => setCurrentChart("one")}
            >
              Chart One
            </button>
          </li>
          <li className="my-4">
            <button
              className={`${currentChart === "two" ? "bg-duboisSecondary" : "bg-white"} cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
              onClick={() => setCurrentChart("two")}
            >
              Chart Two
            </button>
          </li>
          <li className="my-4">
            <button
              className={`${currentChart === "three" ? "bg-duboisSecondary" : "bg-white"} cut-corners p-2 uppercase font-dubois md:mx-2 text-sm md:text-base w-full`}
              onClick={() => setCurrentChart("three")}
            >
              Chart Three
            </button>
          </li>
        </ul>
      </nav>
      <div className="col-span-3 m-6">
          <div className="bg-offwhite text-black py-2 px-10">
            {currentChart === "original" &&
              <FigureObj figure={figure} imageClassName="m-auto" />
            }
            {currentChart === "one" &&
              <StudentChartOne />
            }
            {currentChart === "two" &&
              <StudentChartTwo />
            }
            {
              currentChart === "three" &&
                <StudentChartThreeV2 />
            }
          </div>

      </div>
    </section>
  );
}

export default StudentChartV2;