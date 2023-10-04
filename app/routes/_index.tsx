// This is the home page!

import { useState } from "react";
import ChapterCardGrid from "~/components/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { TimelineType } from "~/components/home/timelineUtils";
import timeLineImages from "~/data/figures/timeLine.json";
import type { TFigure } from "~/types/figureType";
import SelectedImage from "~/components/home/SelectedImage.client";

export default function Index() {
  const [timelineType, setTimelineType] = useState(TimelineType.Draggable);
  const [selectedImage, setSelectedImage] = useState<TFigure>(timeLineImages[Math.floor(Math.random()*timeLineImages.length)]);
  const [shouldShuffle, setShouldShuffle] = useState(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "playfairPrimary",
        primaryTextColor: "white",
        footnotes: []
      }}
    >
      <div className="sm:flex bg-black text-white pt-10 sm:pt-5">
        <div className="sm:grid sm:grid-cols-5 sm:4 pl-6 sm:pl-0">
          <div className="pt-20 font-bold text-5xl sm:text-frontTitle font-dubois sm:col-start-1 sm:col-span-4 sm:row-start-2 sm:row-span-1 z-10 leading-veryTight sm:pl-24">
            <span className="sm:hidden">DATA BY DESIGN</span>
            <span className="hidden sm:inline sm:ml-6 sm:pt-10">
              DATA BY
            </span>{" "}
            <span className="hidden sm:ml-24 sm:inline">DESIGN</span>
          </div>
          <div className="sm:text-3xl text-xl font-dubois font-normal sm:font-light sm:col-start-1 col-span-2 pt-3 row-start-3 sm:ml-32">
            An Interactive History
            <br /> of Data Visualization
            <br />
            <span className="pt-5">1786-1900</span>
            <div className="pt-10 hidden md:block">
              <button
                onClick={() => {
                  setTimelineType(TimelineType.Draggable);
                  setShouldShuffle((shouldShuffle) => !shouldShuffle);
                }}
                type="button"
              >
                <img
                  className="w-14 m-2"
                  src={
                    timelineType === TimelineType.Draggable
                      ? "/images/ui/shuffle_click.png"
                      : "/images/ui/shuffle_unclick.png"
                  }
                  alt="Shuffle"
                />
              </button>
              <button
                type="button"
                onClick={() => setTimelineType(TimelineType.Ordered)}
              >
                <img
                  className="w-14 m-2"
                  src={
                    timelineType === TimelineType.Ordered
                      ? "/images/ui/sort_selected.png"
                      : "/images/ui/sort_unselected.png"
                  }
                  alt="Sort"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center p-10 pb-5 pt-20 w-1/4 basis-3/4">
          <ClientOnly>
            {() => (
              <SelectedImage selectedImage={selectedImage} />
            )}
          </ClientOnly>
        </div>
      </div>
      <ClientOnly>
        {() => (
          <Timeline
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            shouldShuffle={shouldShuffle}
            timelineType={timelineType}
          />
        )}
      </ClientOnly>
      <ChapterCardGrid />
      <Footer />
    </ChapterContext.Provider>
  );
}
