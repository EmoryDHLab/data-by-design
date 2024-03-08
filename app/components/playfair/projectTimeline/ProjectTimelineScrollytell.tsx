import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import ProjectTimeline from "./ProjectTimeline";
import laborSources from "~/data/playfair/laborSources.json";
import type { TLaborSource } from "~/types/laborSourceTypes";
import FancyButton from "~/components/FancyButton";

const noSource = laborSources.find((source) => source.label === "flat");

const triggers = [
  <span key="0dec3ef1"></span>,
  <span key="3d7009ac">
    1. Zotero vs. Github. Shows overall phases of research.
  </span>,
  <span key="6125bb46">1a. Beginning w/ archival research in 2013.</span>,
  <span key="7acf0c9e">
    1b. Gap in work while LK does other things / gets tenure
  </span>,
  <span key="96d84379">
    2. Ical vs. Github. Two data lines reflect differing rhythms of project
    planning (better word here) vs. actual implementation
  </span>,
  <span key="34853e5e">
    2a. Green line, which is iCal, shows rhythmic thrum of weekly team meetings,
    held consistently from 2017 on.
  </span>,
  <span key="242462af">
    2b. Red line and volume underneath shows increasing attention to
    implementation as time, resources, and people were brought to the project
  </span>,
  <span key="3aa2a407">
    3. Figma vs. github. Shows maturation of project when trained designer
    (Tanvi!) was brought on board
  </span>,
  <span key="1ccdb8e8">
    3a. 2021, emergence of Blue line, is when Tanvi arrived on the project and
    introduced a complementary platform—figma—for doing design work in advance
    of implementation
  </span>,
  <span key="f21de6d9">
    3b. After that, we can observe a lead-lag relationship in which Tanvi
    completes design work on a particular component of the project, and others
    implement it after
  </span>,
  <span key="4a1acf89">
    4 — interactive version — other relationships can be discerned by looking at
    other pairs of datasets. Testament to playfair's visualization strategy. But
    as you look consider that not all data is represented. Etc etc etc.
  </span>,
];

const minScrollProgress = 11.25;
const defaultAreaOpacity = 0.5;

const ProjectTimelineScrollytell = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [strokeWidth, setStrokeWidth] = useState<[number, number]>([0.1, 0.1]);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const [selectedSources, setSelectedSources] = useState<TLaborSource[]>([
    noSource,
    noSource,
  ]);
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
          laborSources.find((source) => source.label === "iCal"),
          laborSources.find((source) => source.label === "GitHub"),
        ]);
        setShowMask(false);
        break;
      case scrollProgress >= minScrollProgress + 4 &&
        scrollProgress < minScrollProgress + 5:
        setSelectedSources([
          laborSources.find((source) => source.label === "iCal"),
          noSource,
        ]);
        break;
      case scrollProgress >= minScrollProgress + 5 &&
        scrollProgress < minScrollProgress + 6:
        setSelectedSources([
          laborSources.find((source) => source.label === "GitHub"),
          noSource,
        ]);
        break;
      case scrollProgress >= minScrollProgress + 6 &&
        scrollProgress < minScrollProgress + 7:
        setSelectedSources([
          laborSources.find((source) => source.label === "GitHub"),
          laborSources.find((source) => source.label === "Figma"),
        ]);
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        setStrokeWidth([0.1, 0.1]);
        break;
      case scrollProgress >= minScrollProgress + 7 &&
        scrollProgress < minScrollProgress + 8:
        setAreaOpacity([0.1, 0.8]);
        setStrokeWidth([0.05, 0.1]);
        break;
      case scrollProgress >= minScrollProgress + 8 &&
        scrollProgress < minScrollProgress + 11:
        setAreaOpacity([defaultAreaOpacity, defaultAreaOpacity]);
        setSelectedSources([
          laborSources.find((source) => source.label === "GitHub"),
          laborSources.find((source) => source.label === "Figma"),
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
            <div className="grid grid-cols-3 md:grid-cols-7 space-x-4 mx-3 md:pt-3 md:pb-1 md:ml-6 md:mr-0 text-center justify-items-center gap-y-4 bg-playfairChart border-x-[1px] border-b-[1px] md:border-x-2 md:border-b-2 border-black">
              <div className="col-span-3 md:col-span-2 font-duboisWide pt-[5px]">
                Contribution Sources:
              </div>
              <FancyButton
                fillColor={selectedSources[0]?.color}
                textColor={selectedSources[0]?.activeText}
                outlineColor="black"
                className={`opacity-${
                  selectedSources[0]?.label === "flat" ? 0 : 100
                } transition-opacity duration-700`}
              >
                {selectedSources[0]?.label}
              </FancyButton>
              <FancyButton
                fillColor={selectedSources[1]?.color}
                textColor={selectedSources[1]?.activeText}
                outlineColor="black"
                className={`opacity-${
                  selectedSources[1]?.label === "flat" ? 0 : 100
                } transition-opacity duration-700`}
              >
                {selectedSources[1]?.label}
              </FancyButton>
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
                  index + 1 === triggers.length || index == 0
                    ? `${index !== 0 ? "h-[65vh]" : ""} md:h-[60vh]`
                    : "h-screen"
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
