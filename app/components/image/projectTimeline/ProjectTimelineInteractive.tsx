import { useEffect, useState } from "react";
import FancyButton from "../../FancyButton";
import ProjectTimeline from "./ProjectTimeline";
import laborSources from "~/data/image/laborSources.json";
import type { ReactNode } from "react";
import type { TLaborSource } from "~/types/laborSourceTypes";

const noSource = laborSources.find((source) => source.label === "flat");

const ProjectTimelineInteractive = ({ children }: { children: ReactNode }) => {
  const [selectedSources, setSelectedSources] = useState<TLaborSource[]>([
    noSource,
    noSource,
  ]);

  useEffect(() => {
    setSelectedSources([laborSources[0], laborSources[1]]);

    return () => {
      setSelectedSources([noSource, noSource]);
    };
  }, []);

  const updateSources = (selectedSource: TLaborSource, key: string) => {
    if (key && key !== "Enter") return;

    let indexOfSelected = selectedSources.indexOf(selectedSource);

    // If the selected source is currently active, we replace it with the
    // flat source. Otherwise, we replace the flat source with the newly
    // selected source. This makes sure the lines always transition up and
    // down from the baseline.
    if (indexOfSelected >= 0) {
      selectedSource = noSource;
    } else {
      indexOfSelected = selectedSources.indexOf(noSource);
    }

    setSelectedSources(
      selectedSources.toSpliced(indexOfSelected, 1, selectedSource)
    );
  };

  return (
    <div className="hidden min-h-screen md:grid grid-cols-1 md:grid-cols-2 bg-black text-left gap-x-0 md:gap-x-32 md:gap-y-2 text-white w-full relative z-10 md:p-8">
      <div id="viz2" className="col-span-2 p-24 border-b-2">
        <ProjectTimeline selectedSources={selectedSources} />
      </div>
      <div className="grid grid-cols-3 md:flex md:flex-col space-x-4 mt-6 text-center justify-items-center gap-y-4">
        <h3 className="text-2xl font-powerWide text-left md:ms-4">
          Contribution Timeline
        </h3>
        <div className="font-powerWide col-span-5 md:col-span-7 pt-[5px] justify-self-start text-left md:ms-6">
          Select two sources:{" "}
        </div>
        <div className="flex">
          {laborSources.slice(0, 5).map((source) => {
            const isActive = selectedSources
              .map((s) => s?.key)
              .includes(source.key);
            return (
              <figure key={source.key} title={source.label}>
                <FancyButton
                  action={({ key }) => updateSources(source, key)}
                  hoverColor={isActive ? undefined : source.color}
                  fillColor={isActive ? source.color : "offwhite"}
                  outlineColor="black"
                  textColor={isActive ? source.activeText : "black"}
                  shadowColor="229 231 235"
                >
                  {source.label}
                </FancyButton>
              </figure>
            );
          })}
        </div>
      </div>
      <div className="text-sm font-powerWide md:pe-8">{children}</div>
    </div>
  );
};

export default ProjectTimelineInteractive;
