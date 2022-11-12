import { useContext } from "react";
import { ThemeContext } from "~/theme";

export default function Footer() {
  const { backgroundColor, primaryTextColor } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`grid grid-cols-12 gap-x-6 p-10 pt-20 bg-${backgroundColor} text-${primaryTextColor}`}
      >
        <div className="col-start-3 col-end-6 space-y-20">
          <span className="font-william text-3xl">Data By Design</span>
          <div className="text-base">
            Designed and developed by the Georgia Tech / Emory Digital
            Humanities Lab in collaboration with Polymode.
          </div>
        </div>
        <div className="text-base col-start-6 col-end-9 space-y-16">
          <div>
            Data by Design has been generously funded by a 2018-2019 NEH-Mellon
            Fellowship for Digital Publication.
          </div>
          <div>
            Additional research for this project was completed through
            fellowships from the American Antiquarian Society and the Library
            Company of Philadelphia.
          </div>
        </div>
        <div className="font-william text-lg col-start-9 col-end-12">
          <p className="text-2xl">Notebook</p>
          <br />
          Email <br />
          Facebook <br />
          Contact <br />
        </div>
      </div>
      <div className="bg-black">Stanford Footnote Placeholder</div>
    </div>
  );
}
