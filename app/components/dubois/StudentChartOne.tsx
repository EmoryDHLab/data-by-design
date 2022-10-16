export default function StudentChartOne() {
  return (
    <div className="w-4/5">
      <div className="col-span-8 2xl:col-span-10 col-start-2 2xl:col-start-3 mt-6 flex flex-col font-duboisWide uppercase">
        <p className="font-bold xl:text-2xl 2xl:text-3xl text-xl tracking-wider text-center">
          A series of statistical charts, illustrating information about the
          graduates of atlanta university, and other black college graduates in
          the united states, who contributed data, knowledge, and labor to du
          bois's research.
        </p>
      </div>
      <div className="flex justify-between items-center p-10 font-duboisNarrow">
        <p className="2xl:text-[18px] text-lg text-center uppercase w-96">
          prepared and executed by
          <br />
          tanvi sharma, anna mola,
          <br />
          nicholas yang, and lauren klein
          <br />
          under the auspices of <br />
          the digital humanities lab <br />
          emory university, atlanta, ga. <br />
          united states of america
        </p>
        <div className="w-2/5 flex flex-col items-center">
          <span className="flex items-center space-x-2">
            <svg width="23" height="23" viewBox="0 0 28 28" fill="none">
              <path
                d="M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z"
                fill="black"
              ></path>
            </svg>{" "}
            <p className="font-dubois uppercase">Atlanta University</p>
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col font-dubois uppercase text-center space-y-6">
        <p>
          The original chart visualized the occupations of the 330 black
          americans who had graduated from atlanta university as of 1898,
          including those with college as well as theological and normal school
          degrees.
        </p>{" "}
        <p>
          The 1898-1899 catalogue of the officers and students of Atlanta
          University lists these same graduates by name, along with the type of
          degree(s) earned, their current occupation, and their place of
          residence.
        </p>
      </div>
      <div className="flex justify-center mt-20 mb-20">
        <div className="col-span-3 2xl:col-span-3 col-start-1 col-end-4 2xl:col-start-2 mt-6 flex flex-col justify-center">
          <div className="font-duboisNarrow uppercase">
            <div className="flex flex-col">
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Teachers</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Ministers</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Government Service</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Business</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Other Professions</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>House Wives</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Dead</p>
              </div>
              <div className="flex flex-row mb-6 items-center pl-4">
                <div className="mr-2 rounded-2xl h-8 w-8"></div>
                <p>Unknown</p>
              </div>
            </div>
          </div>
        </div>
        <div id="vue-canvas">
          <canvas
            id="defaultCanvas0"
            className="p5Canvas"
            width="1000"
            height="1000"
          ></canvas>
        </div>
      </div>
      <div className="mt-6 font-dubois font-bold text-center uppercase">
        <p>
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
      </div>
    </div>
  );
}
