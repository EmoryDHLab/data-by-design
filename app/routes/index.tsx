import HomeTitle from "~/components/home/HomeTitle";
import ChapterCardGrid from "~/components/ChapterCardGrid";
import Timeline from "~/components/home/Timeline.client";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/theme";

export default function Index() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "playfairPrimary",
        primaryTextColor: "white",
      }}
    >
      <div className="bg-black">
        <HomeTitle />
        <div className="bg-duboisSecondary flex">
          <div className="w-2/5">
            <img className="p-20 w-full" src="/images/ch4-5.webp" />
          </div>

          <div className="p-20 w-3/5">
            <div className="font-dubois text-4xl p-5">
              Some Words From Lauren
            </div>
            <div className="font-sans text-lg p-5">
              <span>
                Some more text Additional research for this project was
                completed through fellowships from the American Antiquarian
                Society and the Library Company of Philadelphia.
              </span>
            </div>
            <div className="text-lg p-5">Read More -&gt;</div>
          </div>
        </div>
        <ClientOnly>{() => <Timeline />}</ClientOnly>
        <ChapterCardGrid />
        <Footer />
      </div>
    </ChapterContext.Provider>
  );
}
