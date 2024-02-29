import { useEffect, useRef, useState } from "react";
import FancyButton from "../FancyButton";
import ProjectTimeline from "./ProjectTimeline";
import laborSources from "~/data/playfair/laborSources.json";
import type { TLaborSource } from "~/types/laborSourceTypes";

const noSource = laborSources.find((source) => source.label === "flat");

const ProjectTimelineInteractive = () => {
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
    <div>
      <ProjectTimeline selectedSources={selectedSources} />
      <div className="grid grid-cols-3 md:grid-cols-7 space-x-4 mt-6 text-center justify-items-center gap-y-4">
        <div className="font-duboisWide col-span-3 md:col-span-2">
          Select two sources:{" "}
        </div>
        {laborSources.slice(0, 5).map((source) => {
          const isActive = selectedSources
            .map((s) => s?.key)
            .includes(source.key);
          return (
            <FancyButton
              key={source.key}
              action={({ key }) => updateSources(source, key)}
              hoverColor={isActive ? undefined : source.color}
              fillColor={isActive ? source.color : ""}
              outlineColor="black"
              textColor={isActive ? source.activeText : "black"}
            >
              {source.label}
            </FancyButton>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTimelineInteractive;
