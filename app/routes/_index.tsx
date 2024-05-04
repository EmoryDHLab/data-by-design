// This is the home page!

import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import ChapterCardGrid from "~/components/home/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils/client-only";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { TimelineType, timelineImages } from "~/components/home/timelineUtils";
import SelectedImage from "~/components/home/SelectedImage.client";
import type { TFigure } from "~/types/figureType";
import SiteTitle from "~/components/home/SiteTitle";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  const hostName = "https://dataxdesign.io";
  return [
    { charset: "utf-8" },
    { title: "Data by Design" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "og:title", content: "Data by Design" },
    { name: "twitter:title", content: "Data by Design" },
    { name: "og:url", content: hostName },
    {
      name: "description",
      content: "An interactive history of data visualization 1786-1900.",
    },
    {
      name: "og:description",
      content: "An interactive history of data visualization 1786-1900.",
    },
    {
      name: "twitter:description",
      content: "An interactive history of data visualization 1786-1900.",
    },
    { name: "image", content: `${hostName}/images/dxd.jpg` },
    { name: "og:image", content: `${hostName}/images/dxd.jpg` },
    { name: "og:image:width", content: 565 },
    { name: "og:image:height", content: 389 },
    { name: "twitter:image", content: `${hostName}/images/dxd.jpg` },
    { name: "og:site_name", content: "Data by Design" },
  ];
};

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
      <main id="main-content" className="bg-black pb-32 text-white relative">
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
        <div className="hidden lg:block w-screen my-2 mb-8 pt-10">
          <div className="flex items-center w-full h-96 fancyborder ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 font-neueMontreal my-32 pb-0 md:pb-6">
          <div className="px-6 md:px-28">
            <p>
              Data visualization is not a recent innovation. Even in the
              eighteenth century, activists and economists, as well as educators
              and politicians, were fully aware of the power of visualization to
              produce new knowledge.
            </p>
            <p>
              But who, more precisely, was wielding this power? On whose behalf?
              And for whose benefit? The answers to these questions are what
              this project explores.
            </p>
          </div>
          <div className="px-6 md:px-28">
            <p>
              By retelling the history of data visualization alongside the
              histories of colonialism and slavery, we show how questions of
              ethics and justice have always been present—and continue to offer
              lessons to viewers and designers of data visualizations today.
            </p>
            <p className="pt-6">
              <Link to="/chapters/intro" className="text-xl">
                <span className="font-dubois uppercase">Read more</span>{" "}
                <span className="font-icons">b</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex md:items-center  w-full flex-col md:flex-row">
          <ChapterCardGrid />
        </div>
      </main>
      <Footer />
    </ChapterContext.Provider>
  );
}
