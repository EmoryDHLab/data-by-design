// This is the home page!

import ChapterCardGrid from "~/components/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import ImageModal from "~/components/layout/ImageModal";

export default function Index() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "playfairPrimary",
        primaryTextColor: "white",
      }}
    >
      {/* <div className="bg-black flex flex-col sm:flex-row">
        <div className="sm:p-20 sm:w-3/5 w-full">
          <div className="font-dubois text-4xl text-white p-5"></div>
          <div className="font-sans text-white text-xl p-5 px-12">
            <span>
              <p className="font-dubois">
                {" "}
                Data visualization is not a recent innovation.{" "}
              </p>{" "}
              Even in the eighteenth century, activists and educators, as well
              as economists and statisticians, were fully aware of the power of
              visualization to produce the insight that leads to new knowledge.
              But that power is only one half of data visualization's
              double-edged sword. The other has to do with the abstraction
              required to produce this insight, which often comes at the expense
              of the context of the data, and &mdash; at times &mdash; the human
              lives the data claims to represent.
              <p className="py-2">
                Can we tell a story about the rise of modern data visualization
                that takes this tension into account? Is it possible that
                questions of ethics, and of justice, have been present in the
                field of data visualization from its start?
              </p>
            </span>
          </div>
          <div className="font-dubois text-white text-lg p-5">READ MORE → </div>
        </div>
        <div className="sm:w-2/5">
          <ImageModal
            className="sm:p-20 p-10  w-full"
            src="/images/ch4-5.webp"
          />
        </div>
      </div> */}
      <ClientOnly>{() => <Timeline />}</ClientOnly>
      <ChapterCardGrid />
      <Footer />
    </ChapterContext.Provider>
  );
}