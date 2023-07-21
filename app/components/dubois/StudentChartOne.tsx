import PieChart from "~/components/dubois/PieChart.client";
import studentData from "~/data/dubois/studentChartOne.json";
import { ClientOnly } from "remix-utils";
import Legend from "~/components/dubois/Legend";
import USAMap from "./USAMap";

export default function StudentChartOne() {
  return (
    <>
      <p className="font-bold text-lg md:text-xl 2xl:text-2xl text-center font-duboisWide uppercase">
        A series of statistical charts, illustrating information about the
        graduates of atlanta university, and other black college graduates in
        the united states, who contributed data, knowledge, and labor to du
        bois's research.
      </p>
      <section className="flex flex-col md:flex-row font-duboisNarrow">
        <ul className="text-base md:text-xl text-md text-center uppercase my-6 md:my-0">
          <li className="md:mt-3">prepared and executed by</li>
          <li className="md:mt-3">tanvi sharma, anna mola,</li>
          <li className="md:mt-3">nicholas yang, and lauren klein</li>
          <li className="md:mt-3">under the auspices of</li>
          <li className="md:mt-3">the digital humanities lab</li>
          <li className="md:mt-3">emory university, atlanta, ga.</li>
          <li className="md:mt-3">united states of america</li>
        </ul>
        <USAMap />
      </section>
      <section className="mt-6 font-dubois uppercase text-center text-lg">
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
      </section>
      <section className="md:flex md:justify-center md:space-x-16 lg:space-x-24 mt-12">
        <Legend categories={studentData.categories} />
        <ClientOnly>{() => <PieChart studentData={studentData} />}</ClientOnly>
      </section>
      <section className="mt-6 mx-4 md:mx-auto font-dubois uppercase text-justify md:text-lg leading-8">
        <p className="leading-8 tracking-wider">
          This visualization attempts to honor the graduates of Atlanta
          University whose lives were behind the data of Du Bois’s original pie
          chart, as well as the Atlanta University students who themselves
          helped to create the chart. The original chart depicted the
          occupations of the 330 graduates of Atlanta University as of 1898 as
          percentages. Here, each of the 255 graduates with known occupations
          (as determined by the alumni section of the 1898-1899 Atlanta
          University catalog) are placed in the appropriate section of the pie
          chart. Hovering on each dot reveals the graduate’s name, occupation,
          and place of residence. Additional categories represent the 35
          graduates with unknown occupations and the 42 graduates who were
          recorded in the 1898-1899 catalog as “Deceased.” One additional
          graduate, William Andrew Rogers of the Class of 1899, the only
          formally recognized contributor to the original set of charts; and the
          four students enrolled in Du Bois’s advanced sociology course during
          the 1899-1900 academic year, Henry Napoleon Lee, Lula Iola Mack,
          Edward Lee Simon, and William George Westmoreland–the students who
          most likely collected, analyzed, and visualized the data depicted in
          the original charts–are positioned outside of the pie, closest to the
          occupation they would soon take on.
        </p>
      </section>
    </>
  );
}
