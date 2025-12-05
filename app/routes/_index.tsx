// This is the home page!

import { useState } from "react";
import ChapterCardGrid from "~/components/home/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import ClientOnly from "~/components/ClientOnly";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import SelectedImage from "~/components/home/SelectedImage.client";
import SiteTitle from "~/components/home/SiteTitle";
import { Link } from "react-router";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction, LinksFunction } from "react-router";
import type { TFigure } from "~/types/figureType";
import type { ChapterTitle } from "~/types/chapterMetaTags";

export const links: LinksFunction = () => {
  return Object.keys(chapterMeta).map((chapter) => {
    return {
      rel: "preload",
      href: chapterMeta[chapter as ChapterTitle].bgImage,
    };
  });
};

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
  const [selectedImage, setSelectedImage] = useState<TFigure>();

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "imagePrimary",
        primaryTextColor: "white",
        footnotes: [],
      }}
    >
      <main id="main-content" className="bg-black pb-32 text-white relative">
        <h1 className="sr-only">
          Data by Design: An Interactive History of Data Visualization 1786-1900
        </h1>

        <div />
        <div className="md:flex md:items-center pl-0 md:pl-44 pt-10 md:pt-5 h-full md:h-[500px] z-20 3xl:mx-48">
          <div className="md:flex md:items-start gap-44 xl:gap:72">
            <figure
              aria-hidden
              className="my-10 px-5 md:px-0 md:mt-18 flex-shrink-0 w-full md:w-[500px]"
            >
              <SiteTitle className="pt-20 md:pt-20 w-full" />
            </figure>
            <div className="hidden h-96 lg:block flex-1  flex justify-center">
              <ClientOnly>
                <SelectedImage selectedImage={selectedImage} />
              </ClientOnly>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-screen my-2 mb-8 pt-32 xxl:pt-48">
          <div className="flex items-center w-full h-96 xxl:h-[40rem]  fancyborder ">
            <ClientOnly>
              <Timeline
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
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
                <span className="font-power uppercase">Read more</span>{" "}
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
