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
import { Link } from "@remix-run/react";

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
      <main id="main-content" className="bg-black text-white">
        <div className="md:flex pt-10 md:pt-5">
          <div className="md:grid  md:grid-cols-6 pl-6 md:pl-0 md:gap-x-4 gap-y-0  md:content-start">
            <h1 className="pt-20 font-bold text-5xl md:text-6xl lg:text-frontTitle font-dubois md:col-span-5 lg:col-span-6 md:row-start-2 md:row-span-1 z-10 leading-veryTight md:pl-24">
              <span className="lg:hidden">DATA BY DESIGN</span>
              <span className="hidden lg:inline lg:ml-6 md:pt-10">
                DATA BY
              </span>{" "}
              <span className="hidden lg:ml-24 lg:inline">DESIGN</span>
            </h1>
            <h2 className="hidden lg:inline md:text-lg lg:text-xl xl:text-2xl font-dubois font-normal md:font-light md:col-start-1 md:col-span-4 pt-3 md:pt-0 row-start-3 md:pl-24 lg:ml-24">
              An Interactive History
              <br /> of Data Visualization
              <br />
            </h2>
            <h2 className="hidden lg:inline md:col-start-5 lg:col-start-5 md:row-start-3 text-base lg:text-l xl:text-xl font-dubois font-normal md:font-light">
              1786-1900
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-center ">
            <ClientOnly>
              {() => <SelectedImage selectedImage={selectedImage} />}
            </ClientOnly>
          </div>
        </div>
        <div className=" hidden md:block w-screen border-y-2 border-white border-dashed mb-8">
          <div className="  flex items-center w-full h-96">
            <h2 className="-rotate-90 h-8 w-28 uppercase text-center font-duboisWide text-3xl">
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
        <div className="hidden md:flex border-b-2 border-white border-dashed items-center text-center w-full min-h-80">
          <h2 className="-rotate-90 h-8 w-24 uppercase font-duboisWide text-3xl">
            Introduction
          </h2>
          <div className="flex text-left content-end">
            {" "}
            <div>
              <h3 className="md:col-span-2 text-3xl mb-3 font-bold">
                Data visualization is not a recent innovation.
              </h3>
              <p>
                Even in the eighteenth century, activists and educators, as well
                as economists and statisticians, were fully aware of the power
                of visualization to produce the insights that lead to new
                knowledge.
              </p>
              <p>
                But that power is only one half of data visualization’s
                double-edged sword. The other has to do with the abstraction
                required to produce this insight, which often comes at the
                expense of the context of the data, and—at times—the human lives
                the data claims to represent.
              </p>
            </div>
            <div>
              <p>
                Can we tell a story about the rise of modern data visualization
                that takes this tension into account? Is it possible that
                questions of ethics, and of justice, have been present in the
                field of data visualization from its start?
              </p>
              <Link className="col-start-2" to="/">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:items-center w-full flex-col md:flex-row">
          <h2 className="md:-rotate-90 h-8 w-28 uppercase font-duboisWide text-xl md:text-3xl mt-8 md:mt-0 text-left px-6 md:px-0 ">
            Chapters
          </h2>
          <ChapterCardGrid />
        </div>
      </main>
      <Footer />
    </ChapterContext.Provider>
  );
}
