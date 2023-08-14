import USAMap from "~/components/dubois/USAMap";
import Legend from "~/components/dubois/Legend";
import studentData from "~/data/dubois/studentChartTwo.json";
import PieChart from "~/components/dubois/PieChart.client";

export default function StudentChartTwo() {
  return (
    <>
      <p className="font-bold text-lg md:text-xl 2xl:text-2xl text-center font-duboisWide uppercase">
        a series of statistical charts, illustrating details about the
        graduates of atlanta university, and other black college graduates in
        the united states, who contributed their knowledge, labor, and data to
        du bois's research program.
      </p>
      <div className="flex flex-col md:flex-row font-duboisNarrow">
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
      </div>
      <div className="mt-6 font-dubois uppercase text-center text-lg">
        <p>
          the previous chart visualized all 330 graduates of atlanta university
          as of 1898. in 1910, du bois and his students undertook a larger study
          of black college graduates across the entire united states.
        </p>
        <p>
          this chart visualizes the names, occupations, and present locations
          (when known) of the 163 college graduates of atlanta university who
          were included in the 1910 study, as determined by the 1909-1910
          catalogue of the officers and students of atlanta university.
        </p>
      </div>
      <div className="md:flex md:justify-center md:space-x-16 lg:space-x-24 mt-12">
        <Legend categories={studentData.categories} />
        <PieChart studentData={studentData} />
      </div>
      <div className="mt-6 mx-4 md:mx-auto font-dubois uppercase text-justify md:text-lg leading-8">
      <p className="leading-8 tracking-wider">
          this visualization attempts to honor the 3856 black college graduates
          from across the united states whose lives were behind the data
          included in the 1910 atlanta university study, the college-bred negro
          american. a subset of these graduates, whose names remain unknown,
          contributed research to the study in the form of data collection and
          analysis. in this chart, each of the 133 college graduates of atlanta
          university as of 1909, with known occupations (as determined by the
          alumni div of the 1909-1910 atlanta university catalog), are
          positioned in the appropriate area of the pie chart. hovering on each
          dot reveals the graduate’s name, occupation, and place of residence.
          additional categories represent the 9 college graduates with unknown
          occupations and the 21 graduates who were recorded in the 1909-1910
          catalog as “deceased.” an additional 3693 gray dots represent the
          graduates of the other 140 colleges included in the study whose names
          were not recorded as data.
        </p>
      </div>
    </>
  );
}
