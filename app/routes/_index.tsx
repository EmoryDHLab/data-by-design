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
          style={{
            backgroundImage: "url('/images/8-dark@tinypng.7abc66a1.png')",
          }}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
        ></div>
        <div className="md:flex md:items-center md:justify-around md:grid-rows-2 pt-10 md:pt-5 h-full md:h-[600px] z-20 3xl:mx-48">
          <figure aria-hidden className="my-10 md:mt-18">
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
        {/* <div className="hidden md:flex border-b-2 border-white border-dashed items-center text-center w-full min-h-80">
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
        </div> */}

        <div className="flex md:items-center w-full flex-col md:flex-row">
          <ChapterCardGrid />
        </div>
      </main>
      <Footer />
    </ChapterContext.Provider>
  );
}
