import HomeTitle from "~/components/HomeTitle";

export default function Index() {
  return (
    <div>
      <HomeTitle />
      <div className="bg-dubois_sec flex">
        <div className="w-2/5">
          <img className="p-20 w-full" src="ch4-5.webp" />
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
      <h3 className="text-white font-william font-bold text-center text-3xl mb-7">
        CHAPTERS
      </h3>
    </div>
  );
}
