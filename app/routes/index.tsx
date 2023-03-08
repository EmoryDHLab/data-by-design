// This is the home page!

import HomeTitle from "~/components/home/HomeTitle";
import ChapterCardGrid from "~/components/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/theme";
import ImageModal from "~/components/layout/ImageModal";

export default function Index() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "playfairPrimary",
        primaryTextColor: "white",
      }}
    >
      <HomeTitle />
      <div className="bg-duboisSecondary flex flex-col sm:flex-row">
        <div className="sm:w-2/5">
          <ImageModal
            className="sm:p-20 p-10 pb-5 w-full"
            src="/images/ch4-5.webp"
          />
        </div>

        <div className="sm:p-20 sm:w-3/5 w-full">
          <div className="font-dubois text-4xl p-5">Introduction</div>
          <div className="font-sans text-lg p-5">
            <span>
            Data visualization is not a recent innovation. Even in the eighteenth century, activists and educators, as well as economists and statisticians, were fully aware of the power of visualization to produce the insight that leads to new knowledge. But that power is only one half of data visualization's double-edged sword. The other has to do with the abstraction required to produce this insight, which often comes at the expense of the context of the data, and--at times--the human lives the data claims to represent. Can we tell a story about the rise of modern data visualization that takes this tension into account? Is it possible that questions of ethics, and of justice, have been present in the field of data visualization from its start? 
            </span>
          </div>
          <div className="font-dubois text-lg p-5">READ MORE → </div>
        </div>
      </div>
      <ClientOnly>{() => <Timeline />}</ClientOnly>
      <ChapterCardGrid />
      <Footer />
    </ChapterContext.Provider>
  );
}
