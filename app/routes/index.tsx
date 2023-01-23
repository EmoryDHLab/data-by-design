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
              Additional research for this project was completed
              through fellowships from the American Antiquarian Society and the
              Library Company of Philadelphia.
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
