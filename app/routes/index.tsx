import HomeTitle from "~/components/HomeTitle";
import ChapterCardGrid from "~/components/ChapterCardGrid";
import Timeline from "~/components/Timeline";

export default function Index() {
  return (
    <div className="bg-black">
      <HomeTitle />
      <div className="bg-duboisSecondary flex">
        <div className="w-2/5">
          <img className="p-20 w-full" src="/images/ch4-5.webp" />
        </div>

        <div className="p-20 font-william w-3/5">
          <div className="text-4xl p-5">Some Words From Lauren</div>
          <div className="text-lg p-5">
            <span style={{ whitespace: "pre" }}>Some more text </span>
            <span style={{ whitespace: "pre" }}>
              Additional research for this project was completed through
              fellowships from the American Antiquarian Society and the Library
              Company of Philadelphia.
            </span>
          </div>
          <div className="text-lg p-5">Read More -&gt;</div>
        </div>
      </div>
      <Timeline />
      <ChapterCardGrid />
    </div>
  );
}
