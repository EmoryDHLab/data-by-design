import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import ProjectTimeline from "./ProjectTimeline";
import laborSources from "~/data/playfair/laborSources.json";
import type { TLaborSource } from "~/types/laborSourceTypes";
import type { ReactElement } from "react";

const noSource = laborSources.find((source) => source.label === "flat");

const minScrollProgress = 11.25;
const defaultAreaOpacity = 0.5;

const ProjectTimelineScrollytell = ({
  triggers,
}: {
  triggers: ReactElement[];
}) => {
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
          <div className="text-3xl relative md:top-[calc(100vh-42px)] right-[35vw] text-white hidden md:block">
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
                    index === 0 ? "" : "bg-playfairPrimary-translucent"
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
