import { ClientOnly } from "remix-utils";
import { useDeviceContext } from "~/hooks";
import PieChart from "~/components/dubois/PieChart.client";
import studentData from "~/data/dubois/studentChartOne.json";
import Legend from "~/components/dubois/Legend";
import USAMap from "./USAMap";

export default function StudentChartOne() {
  const { isDesktop } = useDeviceContext();

  return (
    <>
      <p className="font-bold text-lg md:text-xl 2xl:text-2xl text-center font-duboisWide uppercase">
        A series of statistical charts, illustrating information about the
        graduates of atlanta university, and other black college graduates in
        the united states, who contributed data, knowledge, and labor to du
        bois's research.
      </p>
      <div className="flex flex-col md:flex-row font-duboisNarrow md:justify-center md:space-x-10">
        <ul className="text-base text-md text-center uppercase my-6 md:my-0">
          <li>prepared and executed by</li>
          <li>tanvi sharma, anna mola,</li>
          <li>nicholas yang, and lauren klein</li>
          <li>under the auspices of</li>
          <li>the digital humanities lab</li>
          <li>emory university, atlanta, ga.</li>
          <li>united states of america</li>
        </ul>
        <USAMap />
      </div>
      <div className="mt-6 font-dubois uppercase text-center">
        <p>
          The original chart visualized the occupations of the 330 black
          americans who had graduated from atlanta university as of 1898,
          including those with college as well as theological and normal school
          degrees.
        </p>
        <p>
          The 1898-1899 catalogue of the officers and students of Atlanta
          University lists these same graduates by name, along with the type of
          degree(s) earned, their current occupation, and their place of
          residence.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 lg:space-x-24">
        <Legend categories={isDesktop ? studentData.categories.slice(0,4) : studentData.categories.slice(0,3)} />
        <ClientOnly>{() => <PieChart studentData={studentData} className="order-last md:order-none" />}</ClientOnly>
        <Legend categories={isDesktop ? studentData.categories.slice(4) : studentData.categories.slice(3)} reverse />
      </div>
      <div className="mx-4 md:mx-auto font-dubois uppercase text-justify">
        <p className="tracking-wider">
          This visualization attempts to honor the graduates of Atlanta
          University whose lives were behind the data of Du Bois's original pie
          chart, as well as the Atlanta University students who themselves
          helped to create the chart. The original chart depicted the
          occupations of the 330 graduates of Atlanta University as of 1898 as
          percentages. Here, each of the 255 graduates with known occupations
          (as determined by the alumni section of the 1898-1899 Atlanta
          University catalog) are placed in the appropriate section of the pie
          chart. Hovering on each dot reveals the graduate's name, occupation,
          and place of residence. Additional categories represent the 35
          graduates with unknown occupations and the 42 graduates who were
          recorded in the 1898-1899 catalog as “Deceased.” One additional
          graduate, William Andrew Rogers of the Class of 1899, the only
          formally recognized contributor to the original set of charts; and the
          four students enrolled in Du Bois's advanced sociology course during
          the 1899-1900 academic year, Henry Napoleon Lee, Lula Iola Mack,
          Edward Lee Simon, and William George Westmoreland-the students who
          most likely collected, analyzed, and visualized the data depicted in
          the original charts-are positioned outside of the pie, closest to the
          occupation they would soon take on.
        </p>
      </div>
    </>
  );
}
