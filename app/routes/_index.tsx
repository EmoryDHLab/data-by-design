// This is the home page!

import { useState } from "react";
import ChapterCardGrid from "~/components/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { TimelineType, timelineImages } from "~/components/home/timelineUtils";
import SelectedImage from "~/components/home/SelectedImage.client";
import type { TFigure } from "~/types/figureType";

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
      <main id="main-content">
        <div className="sm:flex bg-black text-white pt-10 sm:pt-5">
          <div className="sm:grid bg-black sm:grid-cols-5 sm:4 pl-6 sm:pl-0  ">
            <h1 className="pt-20 font-bold text-5xl sm:text-frontTitle font-dubois sm:col-start-1 sm:col-span-4 sm:row-start-2 sm:row-span-1 z-10 leading-veryTight sm:pl-24">
              <span className="sm:hidden">DATA BY DESIGN</span>
              <span className="hidden sm:inline sm:ml-6 sm:pt-10">
                DATA BY
              </span>{" "}
              <span className="hidden sm:ml-24 sm:inline">DESIGN</span>
            </h1>
            <div className="sm:text-3xl text-xl font-dubois font-normal sm:font-light sm:col-start-1 col-span-2 pt-3 row-start-3 sm:ml-32">
              <h2>
                An Interactive History
                <br /> of Data Visualization
                <br />
                <span className="pt-5">1786-1900</span>
              </h2>
              <div className="pt-10 hidden md:block"></div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center ">
            <ClientOnly>
              {() => <SelectedImage selectedImage={selectedImage} />}
            </ClientOnly>
          </div>
        </div>
        <div className="bg-black hidden md:block w-screen border-y-2 border-white border-dashed">
          <div className="bg-black text-white flex items-center w-full h-96">
            <h2 className="-rotate-90 h-8 uppercase text-center font-duboisWide text-3xl">
              Timeline
            </h2>
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

        <div className="bg-black text-white text-center flex items-center w-full border-b-2 border-white border-dashed">
          <h2 className="-rotate-90 h-8 uppercase font-duboisWide text-3xl">
            Introduction
          </h2>
          <div className="bg-black p-12">
            <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 3xl:mx-48 text-left gap-x-24 text-lg">
              <div>
                <h3 className="f font-duboisLightWide text-2xl">
                  Data visualization is not a recent innovation.
                </h3>
                <p>
                  Even in the eighteenth century, activists and educators, as
                  well as economists and statisticians, were fully aware of the
                  power of visualization to produce the insights that lead to
                  new knowledge.
                </p>
              </div>
              <div></div>
              <div>
                <p>
                  But that power is only one half of data visualization’s
                  double-edged sword. The other has to do with the abstraction
                  required to produce this insight, which often comes at the
                  expense of the context of the data, and—at times—the human
                  lives the data claims to represent.
                </p>
              </div>
              <div className="">
                <p>
                  Can we tell a story about the rise of modern data
                  visualization that takes this tension into account? Is it
                  possible that questions of ethics, and of justice, have been
                  present in the field of data visualization from its start?
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white text-center flex items-center w-full">
          <h2 className="-rotate-90 h-8 uppercase font-duboisWide text-3xl">
            Chapters
          </h2>
          <ChapterCardGrid />
        </div>
      </main>
      <Footer />
    </ChapterContext.Provider>
  );
}
