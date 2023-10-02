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
        A STATISTICAL CHART ILLUSTRATING INFORMATION ABOUT THE GRADUATES OF ATLANTA UNIVERSITY
        WHO CONTRIBUTED TO DU BOIS'S RESEARCH.
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
          The original chart visualized the occupations of the 330 Black Americans
          who had graduated from Atlanta University as of 1898.
        </p>
        <p>
          The 1898-1899 Catalogue lists these same graduates by name, along with their
          degree(s) earned, current occupation, and place of residence.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 lg:space-x-24">
        <Legend categories={isDesktop ? studentData.categories.slice(0,4) : studentData.categories.slice(0,3)} />
        <ClientOnly>{() => <PieChart studentData={studentData} className="order-last md:order-none" />}</ClientOnly>
        <Legend categories={isDesktop ? studentData.categories.slice(4) : studentData.categories.slice(3)} reverse />
      </div>
      <div className="mx-4 md:mx-auto font-dubois uppercase text-justify tracking-wider">
        <p>
          This visualization honors the Atlanta University students who helped to create Du Bois's
          original chart, as well as those whose lives were behind the data. The original chart
          depicted the occupations of the graduates of Atlanta University as of 1898 as percentages.
          Here, the name of each graduate is placed in the appropriate area of the chart.
        </p>
        <p>
          Several graduates are positioned outside of the chart, closest to the occupations that they
          would soon take on. These are William Andrew Rogers of the Class of 1899, the only formally
          recognized contributor to the original set of charts; and the four students enrolled in Du
          Bois's advanced sociology course during the 1899-1900 academic year, Henry Napoleon Lee,
          Lula Iola Mack, Edward Lee Simon, and William George Westmoreland, who most likely collected,
          analyzed, and visualized the data depicted in the original charts.
        </p>
      </div>
    </>
  );
}
