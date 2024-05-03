import { useDeviceContext } from "~/hooks";
import USAMap from "~/components/dubois/USAMap";
import Legend from "~/components/dubois/Legend";
import studentData from "~/data/dubois/studentChartTwo.json";
import PieChart from "~/components/dubois/PieChart.client";

export default function StudentChartTwo() {
  const { isDesktop } = useDeviceContext();

  return (
    <>
      <p className="font-bold text-lg md:text-xl 2xl:text-2xl text-center font-duboisWide uppercase">
        A STATISTICAL CHART ILLUSTRATING INFORMATION ABOUT THE BLACK COLLEGE
        GRADUATES FROM ACROSS THE UNITED STATES WHO CONTRIBUTED TO DU BOIS'S
        RESEARCH.
      </p>
      <div className="flex flex-col md:flex-row font-duboisNarrow md:justify-center md:space-x-10">
        <ul className="text-base text-md text-center uppercase my-6 md:my-0">
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
          The previous chart visualized graduates of Atlanta University. In
          1910, Du Bois and his students undertook a larger study of Black
          college graduates across the United States.
        </p>
        <p>
          This chart visualizes information about the graduates of Atlanta
          University who were included in the 1910 study,{" "}
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
          id="student-chart-two"
          studentData={studentData}
          className="order-last md:order-none"
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
          This visualization honors the 3,856 Black college graduates from
          across the United States whose lives were included as data in the The
          College-Bred Negro American. A subset of these graduates, whose names
          remain unknown, contributed additional research to the study in the
          form of data collection and analysis.
        </p>
        <p>
          In this chart, each graduate of Atlanta University as of 1909, with a
          known occupation, is positioned in the appropriate area of the chart.
          Additional categories represent those with unknown occupations and
          those recorded as “Deceased.” An additional 3,693 dots represent the
          graduates of the other 140 colleges included in the study whose names
          were not recorded as data.
        </p>
      </div>
    </>
  );
}
