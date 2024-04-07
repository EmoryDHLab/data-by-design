// This is the home page!

import { useState } from "react";
import ChapterCardGrid from "~/components/home/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { TimelineType, timelineImages } from "~/components/home/timelineUtils";
import SelectedImage from "~/components/home/SelectedImage.client";
import type { TFigure } from "~/types/figureType";
import SiteTitle from "~/components/home/SiteTitle";

export default function Index() {
  const [timelineType, setTimelineType] = useState(TimelineType.Draggable);
  const [selectedImage, setSelectedImage] = useState<TFigure>(
    timelineImages()[Math.floor(Math.random() * timelineImages.length)]
  );
  const [shouldShuffle, setShouldShuffle] = useState(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "playfairPrimary",
        primaryTextColor: "white",
        footnotes: [],
      }}
    >
      <main id="main-content" className="bg-black text-white relative">
        <h1 className="sr-only">
          Data by Design: An Interactive History of Data Visualization 1786-1900
        </h1>

        <div
          id="desktop-gradient"
          style={{
            backgroundImage: "url('/images/8-dark@tinypng.7abc66a1.png')",
          }}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
        />
        <div className="md:flex md:items-center md:justify-around md:grid-rows-2 pt-10 md:pt-5 h-full md:h-[600px] z-20 3xl:mx-48">
          <figure
            aria-hidden
            className="my-10 px-5 md:px-0 md:mt-18 md:w-[500px]"
          >
            <SiteTitle />
          </figure>
          <div className="hidden h-96 lg:block">
            <ClientOnly>
              {() => <SelectedImage selectedImage={selectedImage} />}
            </ClientOnly>
          </div>
        </div>
        <div className="hidden lg:block w-screen border-y-2 border-white border-dashed mb-8 pt-10">
          <div className="flex items-center w-full h-96">
            <ClientOnly>
              {() => (
                <Timeline
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  shouldShuffle={shouldShuffle}
                  timelineType={timelineType}
                  setShouldShuffle={setShouldShuffle}
                  setTimelineType={setTimelineType}
                />
              )}
            </ClientOnly>
          </div>
        </div>

        <div className="flex md:items-center w-full flex-col md:flex-row">
          <ChapterCardGrid />
        </div>
      </main>
      <Footer />
    </ChapterContext.Provider>
  );
}
