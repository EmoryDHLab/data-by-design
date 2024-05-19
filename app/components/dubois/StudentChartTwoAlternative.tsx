import { useDeviceContext } from "~/hooks";
import USAMap from "~/components/dubois/USAMap";
import Legend from "~/components/dubois/Legend";
import studentData from "~/data/dubois/studentChartTwo.json";
import PieChart from "~/components/dubois/PieChart.client";

import { useEffect, useRef, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";

export default function StudentChartTwo() {
  const { isDesktop } = useDeviceContext();
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [opacity, setOpacity] = useState<number>(20);
  const steps = useRef<HTMLDivElement>(null);

  const minScrollProgress = 17;

  useEffect(() => {
    switch (true) {
      // A series of statistical charts ...
      case scrollProgress >= minScrollProgress &&
        scrollProgress < minScrollProgress + 1:
        setOpacity(20);
        break;
      // Une serie de ...
      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setOpacity(20);
        break;
      // Une serie de ...
      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setOpacity(20);
        break;
      case scrollProgress >= minScrollProgress + 3 &&
        scrollProgress < minScrollProgress + 4:
        setOpacity(20);
        break;
      default:
        setOpacity(20);
    }
  }, [scrollProgress]);

  const triggers = [
    <span key="300ed3fc1">[PH]</span>,
    <span key="ac19f8691">[PH]</span>,
    <span key="ac19f8621">[PH]</span>,
    <span key="ac123691">[PH]</span>,
    <span key="ac1238691">[PH]</span>,
  ];

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="duboisSecondary"
      >
        <>
          <div
            className={`flex flex-col md:flex-row justify-between`}
            id="scrollytell2"
          >
            <div className="sticky p-3 md:p-0 top-20 h-min bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
              <div>scrollProgress: {scrollProgress}</div>
              <p
                className={`font-bold text-sm md:text-sm xl:text-sm text-center font-duboisWide leading-3 uppercase opacity-${opacity}`}
              >
                A STATISTICAL CHART ILLUSTRATING INFORMATION ABOUT THE BLACK
                COLLEGE GRADUATES FROM ACROSS THE UNITED STATES WHO CONTRIBUTED
                TO DU BOIS'S RESEARCH.
              </p>
              <div className="flex flex-col md:flex-row font-duboisNarrow md:justify-center md:space-x-10">
                <ul className="text-base text-xs text-center my-6 md:my-0">
                  <li>Prepared and executed by, Tanvi Sharma,</li>
                  <li>Anna Mola, Nicholas Yang, and Lauren Klein</li>
                  <li>Under the Auspices of the </li>
                  <li>Digital Humanities Lab</li>
                  <li>Emory University, Atlanta, GA.</li>
                  <li>United States of America</li>
                </ul>
                <USAMap />
              </div>
              <div className="mt-6 font-dubois uppercase text-center">
                <p>
                  The previous chart visualized graduates of Atlanta University.
                  In 1910, Du Bois and his students undertook a larger study of
                  Black college graduates across the United States.
                </p>
                <p>
                  This chart visualizes information about the graduates of
                  Atlanta University who were included in the 1910 study,{" "}
                  <cite>The College-Bred Negro American</cite>.
                </p>
              </div>
              <div className="md:flex md:justify-center md:space-x-16 lg:space-x-24">
                <Legend
                  categories={
                    isDesktop
                      ? studentData.categories.slice(0, 4)
                      : studentData.categories.slice(0, 3)
                  }
                />
                <PieChart
                  studentData={studentData}
                  className="order-last md:order-none"
                  id="student-chart-two-alt"
                />
                <Legend
                  categories={
                    isDesktop
                      ? studentData.categories.slice(4)
                      : studentData.categories.slice(3)
                  }
                  reverse
                />
              </div>
              <div className="mx-4 md:mx-auto font-dubois uppercase text-justify tracking-wider">
                <p>
                  This visualization honors the 3,856 Black college graduates
                  from across the United States whose lives were included as
                  data in the The College-Bred Negro American. A subset of these
                  graduates, whose names remain unknown, contributed additional
                  research to the study in the form of data collection and
                  analysis.
                </p>
                <p>
                  In this chart, each graduate of Atlanta University as of 1909,
                  with a known occupation, is positioned in the appropriate area
                  of the chart. Additional categories represent those with
                  unknown occupations and those recorded as “Deceased.” An
                  additional 3,693 dots represent the graduates of the other 140
                  colleges included in the study whose names were not recorded
                  as data.
                </p>
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
                    className={`pointer-events-none step text-xl content-center relative h-screen`}
                  >
                    <p
                      className={`p-6 md:p-0 bg-${
                        index == 0 || index == triggers.length - 1
                          ? ""
                          : "duboisSecondary-translucent"
                      } w-9/12`}
                    >
                      {trigger}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}
