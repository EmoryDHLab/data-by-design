import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import ProjectTimeline from "./ProjectTimeline";
import laborSources from "~/data/playfair/laborSources.json";
import type { TLaborSource } from "~/types/laborSourceTypes";

const noSource = laborSources.find((source) => source.label === "flat");

const triggers = [
  <span key="0dec3ef1"></span>,
  <span key="3d7009ac">
    Plotting the Zotero data against the GitHub data over the years between 2013
    and 2024, when this project took place, the immediate impression is of how
    each source dominates its own particular time span.
  </span>,
  <span key="6125bb46">
    The first year of the project is characterized by a profusion of Zotero
    data, corresponding to the beginning of the archival research.
  </span>,
  <span key="7acf0c9e">
    Between 2016 and 2018 is a gap, when my attention was elsewhere. In 2018,
    the implementation work begins, gradually increasing through the project's
    final release.
  </span>,
  <span key="96d84379">
    In 2018, the implementation work begins, gradually increasing through the
    project's final release. Even as this image presents the lifespan of the
    project in a “single view,” it is not the source of the data's most
    generative insights.
  </span>,
  <span key="34853e5e">
    But plotting the iCal data against the GitHub data affirms the value of
    visualization when a particular dataset is aligned with an appropriate
    visual form.
  </span>,
  <span key="242462af">
    Here we see the introduction of the web development team in 2017, and with
    it, the rise in contributions to the project's codebase.
  </span>,
  <span key="3aa2a407">
    This is set against the weekly meetings that also began in 2017, with the
    expansion of the project team.
  </span>,
  <span key="1ccdb8e8">
    The contrast between the cyclical structure of the meetings data and the
    upward slope of the GitHub commits accentuates the two major structuring
    forces of the project: the first the consistency provided by the steady
    rhythm of the weekly meetings, and the second the increasing momentum
    generated as the project progressed.
  </span>,
  <span key="f21de6d9">
    A third comparison, between Figma and GitHub, reflects the further
    maturation of the project, when Tanvi, a trained designer, joined the team.
  </span>,
  <span key="4a1acf89">
    The Figma data begins only in 2019, when Tanvi introduced it into the
    project's workflow, but plotted against the GitHub commits, a lead-lag
    relationship soon begins to emerge.
  </span>,
  <span key="e7256507">
    This reflects the process by which Tanvi would complete the design work for
    a feature and then pass it off to the development team
  </span>,
];

const minScrollProgress = 11.25;
const defaultAreaOpacity = 0.5;

const ProjectTimelineScrollytell = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [strokeWidth, setStrokeWidth] = useState<[number, number]>([0.1, 0.1]);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const [selectedSources, setSelectedSources] = useState<TLaborSource[]>([]);
  const [areaOpacity, setAreaOpacity] = useState<[number, number]>([
    defaultAreaOpacity,
    defaultAreaOpacity,
  ]);
  const [showMask, setShowMask] = useState<boolean>(false);
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedSources([laborSources[0], laborSources[3]]);

    return () => {
      setSelectedSources([noSource, noSource]);
    };
  }, []);

  useEffect(() => {
    switch (true) {
      case scrollProgress >= 0 && scrollProgress < minScrollProgress + 1:
        setSelectedSources([
          laborSources.find((source) => source.label === "Zotero"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        setStrokeWidth([0.1, 0.1]);
        break;

      case scrollProgress >= minScrollProgress + 1 &&
        scrollProgress < minScrollProgress + 2:
        setAreaOpacity([1, 0.1]);
        setStrokeWidth([0.1, 0]);
        setShowMask(false);
        break;

      case scrollProgress >= minScrollProgress + 2 &&
        scrollProgress < minScrollProgress + 3:
        setSelectedSources([
          laborSources.find((source) => source.label === "Zotero"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        setShowMask(true);
        setStrokeWidth([0.1, 0.1]);
        break;

      case scrollProgress >= minScrollProgress + 3 &&
        scrollProgress < minScrollProgress + 4:
        setSelectedSources([
          noSource,
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([0, defaultAreaOpacity]);
        setShowMask(false);
        setStrokeWidth([0.1, 0.1]);
        break;

      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setSelectedSources([
          laborSources.find((source) => source.label === "iCal"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        break;

      case scrollProgress >= minScrollProgress + 5 &&
        scrollProgress < minScrollProgress + 6:
        setSelectedSources([
          noSource,
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([0, defaultAreaOpacity]);
        setShowMask(false);
        setStrokeWidth([0.1, 0.1]);
        break;

      case scrollProgress >= minScrollProgress + 6 &&
        scrollProgress < minScrollProgress + 7:
        setSelectedSources([
          laborSources.find((source) => source.label === "iCal"),
          noSource,
        ]);
        setAreaOpacity([defaultAreaOpacity, 0]);
        break;
      case scrollProgress >= minScrollProgress + 7 &&
        scrollProgress < minScrollProgress + 8:
        setSelectedSources([
          laborSources.find((source) => source.label === "iCal"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        break;

      case scrollProgress >= minScrollProgress + 8 &&
        scrollProgress < minScrollProgress + 9:
        setSelectedSources([
          laborSources.find((source) => source.label === "Figma"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        setStrokeWidth([0.1, 0.1]);
        break;

      case scrollProgress >= minScrollProgress + 9 &&
        scrollProgress < minScrollProgress + 10:
        setAreaOpacity([0.8, 0.1]);
        setStrokeWidth([0.1, 0.05]);
        break;

      case scrollProgress >= minScrollProgress + 10 &&
        scrollProgress < minScrollProgress + 13:
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        setSelectedSources([
          laborSources.find((source) => source.label === "Figma"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setStrokeWidth([0.1, 0.1]);
        break;

      default:
        setSelectedSources([noSource, noSource]);
    }
  }, [scrollProgress]);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      triggers={triggers}
      steps={steps}
    >
      <div className={`bg-${backgroundColor} md:flex justify-between`}>
        <div className="sticky top-16 md:top-0 h-screen mt-16 md:mt-0 md:mr-24 bias-full w-full md:bias-1/2 md:w-3/5 md:order-last md:pb-[60px]">
          <div className="text-3xl relative md:top-[calc(100vh-12rem)] right-[35vw] text-white hidden md:block">
            ↓
          </div>
          <div className="w-full md:h-full flex flex-col justify-center">
            <ProjectTimeline
              selectedSources={selectedSources}
              areaOpacity={areaOpacity}
              showMask={showMask}
              strokeWidth={strokeWidth}
              className=" md:ml-6 p-3 pb-0 md:p-0 pt-10 md:pt-0"
              id="scrollytell"
            />
            <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 md:grid-rows-1 2xl:grid-cols-7 space-x-8 mx-3 py-4 md:pt-3 md:pb-4 md:ml-6 md:mr-0 gap-y-4 bg-playfairChart border-x-[1px] border-b-[1px] md:border-x-2 md:border-b-2 border-black">
              <div className="row-span-2 md:row-span-1 md:col-span-2 font-duboisWide pt-[5px] text-center">
                Contribution Sources:
              </div>
              <div
                id={`chart-legend-${selectedSources[0]?.label}`}
                className={`flex flex-row justify-items-start items-center`}
              >
                <div
                  className={`h-6 min-h-6 w-6 min-w-6 border-2 border-offblack border-opacity-${
                    selectedSources[0]?.label === "flat" ? 0 : 100
                  } rounded-md transition-colors duration-1000 bg-${
                    selectedSources[0]?.color
                  }`}
                >
                  {" "}
                </div>
                <div
                  className={`ml-2 opacity-${
                    selectedSources[0]?.label === "flat" ? 0 : 100
                  } transition-opacity duration-1000`}
                >
                  {selectedSources[0]?.label !== "flat"
                    ? selectedSources[0]?.label
                    : ""}
                </div>
              </div>

              <div
                id={`chart-legend-${selectedSources[1]?.label}`}
                className={`flex flex-row justify-items-start items-center`}
              >
                <div
                  className={`h-6 min-h-6 w-6 min-w-6 border-2 border-offblack border-opacity-${
                    selectedSources[1]?.label === "flat" ? 0 : 100
                  } rounded-md transition-colors duration-1000 bg-${
                    selectedSources[1]?.color
                  }`}
                >
                  {" "}
                </div>
                <div
                  className={`ml-2 opacity-${
                    selectedSources[1]?.label === "flat" ? 0 : 100
                  } transition-opacity duration-1000`}
                >
                  {selectedSources[1]?.label !== "flat"
                    ? selectedSources[1]?.label
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={steps}
          className="bias-full w-full md:bias-1/2 md:w-2/5 relative "
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={trigger.key}
                data-step={index}
                className={`step text-xl content-center p-5 md:px-20 ${
                  index == 0 ? "md:h-[60vh]" : "h-screen"
                } text-${primaryTextColor}`}
              >
                <p
                  className={`${
                    index === 0 ? "" : "bg-[#3b6fe0bf]"
                  } p-3 md:p-0`}
                >
                  {trigger}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollytellWrapper>
  );
};

export default ProjectTimelineScrollytell;
