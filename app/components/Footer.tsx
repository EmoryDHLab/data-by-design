import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";

export default function Footer() {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  return (
    <footer className="mt-0 md:mt-8">
      <div
        className={`grid md:grid-cols-12 md:gap-x-6 p-10 pt-20 bg-${backgroundColor} text-${primaryTextColor}`}
      >
        <div className="c md:col-start-3 md:col-end-6 space-y-10">
          <span className="font-dubois text-3xl">Data By Design</span>{" "}
          <div className="py-5">
            <br />
            <address>
              Contact: Lauren Klein <br />
              Email:{" "}
              <a href="mailto:lauren.klein@emory.edu">lauren.klein@emory.edu</a>
              <br />
            </address>
          </div>
        </div>

        <div className=" text-sm md:col-start-6 md:col-end-9 space-y-5">
          <div>
            Designed and developed by the Georgia Tech / Emory Digital
            Humanities Lab in collaboration with Polymode.
          </div>
          <div>
            Data by Design has been generously funded by a 2018-2019 NEH-Mellon
            Fellowship for Digital Publication (FEL-257658-18) and a 2021-2022
            NEH ODH Advancement Grant (HAA-281011-21).
          </div>
          <div>
            Additional research for this project was completed through
            fellowships from the American Antiquarian Society and the Library
            Company of Philadelphia.
          </div>
        </div>
      </div>
      <div className="bg-black">Stanford Footnote Placeholder</div>
    </footer>
  );
}
