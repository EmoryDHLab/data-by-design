// This is the home page!

import { useState } from "react";
import ChapterCardGrid from "~/components/home/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import ClientOnly from "~/components/ClientOnly";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import SelectedImage from "~/components/home/SelectedImage.client";
import { Link } from "react-router";
import { chapterMeta } from "~/data/chapterMeta";
import { bookFacts, bookMeta, bookSchema, retailers } from "~/data/bookMeta";
import { trackPreorderClick } from "~/analytics";
import StructuredData from "~/components/StructuredData";
import { classNames, HOST_NAME } from "~/utils";
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
  const hostName = HOST_NAME;
  return [
    { charset: "utf-8" },
    { title: "Data by Design" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "og:title", content: "Data by Design" },
    { name: "twitter:title", content: "Data by Design" },
    { name: "og:url", content: hostName },
    {
      name: "description",
      content: "An interactive history of data visualization 1789-1900.",
    },
    {
      name: "og:description",
      content: "An interactive history of data visualization 1789-1900.",
    },
    {
      name: "twitter:description",
      content: "An interactive history of data visualization 1789-1900.",
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
      <main id="main-content" className="bg-black pb-32 text-black relative">
        <StructuredData data={bookSchema()} />
        <h1 className="sr-only">
          Data by Design: An Interactive History of Data Visualization 1789-1900
        </h1>

        <div />
        <section aria-label="Pre-order" className="bg-offwhite text-black">
          <div className="max-w-6xl mx-auto md:flex md:items-center gap-16 xl:gap-24  md:px-10 py-12 md:py-20">
            <figure className="my-10 px-5 md:px-0 flex-shrink-0 w-full md:w-[380px]">
              <a
                href={retailers[0].url}
                onClick={() =>
                  trackPreorderClick(retailers[0].name, "homepage_cover")
                }
                className="block transition-transform hover:-translate-y-1"
              >
                <img
                  src="/images/bookcover.webp"
                  alt="Data by Design book cover"
                  className="w-full h-auto shadow-xl"
                />
              </a>
            </figure>
            <div className="px-6 md:px-0 flex-1 flex flex-col">
              <p className="order-2 font-power font-bold text-2xl md:text-3xl leading-tight max-w-prose">
                The history of data visualization holds the key to designing a
                more just future.
              </p>
              <div className="order-3 md:order-last mt-8 md:mt-10">
                <div className="flex flex-wrap items-baseline gap-x-4 pb-3">
                  <span className="font-power font-bold tracking-[0.2em] text-sm uppercase">
                    Preorder Now
                  </span>
                  <span className="font-power text-sm text-black/60">
                    On sale {bookMeta.publicationDateDisplay}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {retailers.map((retailer, index) => (
                    <a
                      key={retailer.name}
                      href={retailer.url}
                      onClick={() =>
                        trackPreorderClick(retailer.name, "homepage_hero")
                      }
                      className={classNames(
                        "inline-block font-power uppercase tracking-wide text-base md:text-lg px-6 py-3 border transition-colors",
                        // The publisher is the primary CTA; the rest are
                        // outlined alternatives.
                        index === 0
                          ? "bg-black text-white border-black hover:bg-changePrimary hover:border-changePrimary"
                          : "text-black border-black hover:bg-changePrimary hover:text-white hover:border-changePrimary"
                      )}
                    >
                      {retailer.name}
                    </a>
                  ))}
                </div>
                <div className="mt-5 font-power text-sm text-black/60 space-y-1">
                  {bookFacts.map((line) => (
                    <p key={line[0]}>{line.join(" · ")}</p>
                  ))}
                </div>
              </div>
              <p className="order-4 md:order-3 text-lg leading-relaxed max-w-prose mt-6 md:mt-8">
                From maps of colonial empires to charts of national trade, data
                visualization has long been used to consolidate knowledge and
                power. But just as often, it has been used to uncover oppression
                and bring about change. Data by Design journeys across
                continents and over centuries to expose the power of
                visualization—and to show how it can be wielded back.
              </p>
              <p className="order-5 md:order-4 text-lg leading-relaxed max-w-prose">
                A book for those who love charts and graphs, and for those who
                create them, <cite>Data by Design</cite> offers historical
                grounding, ethical clarity—and the inspiration we need—to
                envision a more just future.
              </p>
            </div>
          </div>
        </section>
        <section
          aria-label="Timeline"
          className="hidden lg:block relative w-screen h-auto  fancyborder pt-4"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-10 pt-6 pb-16 z-20">
            <ClientOnly>
              <SelectedImage selectedImage={selectedImage} />
            </ClientOnly>
          </div>
          <div className="pt-20">
            <div className="flex items-center w-full h-96 xxl:h-[40rem]">
              <ClientOnly>
                <Timeline
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              </ClientOnly>
            </div>
          </div>
        </section>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 font-neueMontreal my-32  md:pb-6">
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
        </div> */}

        <div className="flex md:items-center  w-full flex-col md:flex-row">
          <ChapterCardGrid />
        </div>
      </main>
      <Footer />
    </ChapterContext.Provider>
  );
}
