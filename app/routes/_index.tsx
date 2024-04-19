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
        <div className="grid grid-cols-1 md:grid-cols-2 font-neueMontreal border-b-2 border-dashed pb-0 md:pb-6">
          <div className="px-6 md:px-28">
            <p>
              It is often said that “the purpose of data visualization is
              insight: to produce the kind of “ah ha moment” in the mind of the
              viewer when something snaps into focus that was previously too
              difficult, too distributed, or too complex to otherwise see. For
              those who design data visualizations, however, insight comes about
              through a process that is far longer and more hard-won.
            </p>
            <p>
              This lesson came home to our project team in the waning days of
              summer 2021 as we iterated on the design for the front page of
              this site. Ever since the first prototype of Data by Design, there
              had always been a prominently-positioned timeline to welcome
              visitors to the site—first an actual line, then illustrated with
              images, and then a more designerly version that arranged each
              year’s images into artfully arranged stacks.
            </p>
          </div>
          <div className="px-6 md:px-28">
            <p>
              It all made sense: this project has a distinct chronological arc.
              It looks at how ideas from the seventeenth and eighteenth
              centuries, when the concept of data had just begun to crystalize,
              inform today’s world in which we generate data with our every
              waking moment (and sometimes even with our sleeping ones). And it
              explores examples from the eighteenth and nineteenth centuries,
              when the idea of visualizing data was itself an innovation,
              connecting them to the present moment in which anyone with an
              internet connection and an account on any number of software
              platforms can go from data to chart in a series of clicks.
            </p>
            <p className="pt-6">
              <Link to="/chapters/intro" className="text-xl">
                <span className="font-dubois uppercase">Read more</span>{" "}
                <span className="font-icons">b</span>
              </Link>
            </p>
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
