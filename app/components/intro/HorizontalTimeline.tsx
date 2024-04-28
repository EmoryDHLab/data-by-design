import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

export default function HorizontalTimeline() {
  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <div
      style={{ transform: `translate(-${(scrollProgress - 14.5) * 75}vw)` }}
      className="relative"
    >
      <div className="absolute bottom-2/4 flex items-center w-[120vw] z-10">
        <div className="rounded-full w-6 h-6 bg-black" />
        <div className="bg-black h-2 w-full" />
        <div className="rounded-full w-6 h-6 bg-black" />
      </div>
      <div className="ml-32 w-full flex justify-around items-center">
        <img
          className="z-20 max-w-sm"
          src="/images/intro/tufte-quote-3.png"
          alt=""
        />
        <img
          className="z-20 max-w-sm"
          src="/images/intro/7-1786_Playfair_-_1_Chart_of_all_the_import_and_exports_to_and_from_England_from_the_year_1700_to_1782.jpg"
          alt=""
        />
        <img
          className="z-20 max-w-sm"
          src="/images/playfair/6-snow.webp"
          alt=""
        />
      </div>
    </div>
  );
}
