import { useContext, useMemo } from "react";
import TimelineContext from "./TimelineContext";
import { numberRange } from "~/utils";
import OverlaidYearSquare from "./OverlaidYearSquare";

const CENTURY_IMAGES: { [key: number]: string } = {
  1500: "0401-1500s.jpg",
  1600: "0402-1600s.jpg",
  1700: "0403-1700s.jpg",
  1800: "0404-1800s.jpg",
};

// Overlaid Peabody Square is a layer on top of the Peabody square image that
// allows a user to hover over the various squares
export default function OverlaidSquare() {
  const { currentCentury } = useContext(TimelineContext);
  const image = useMemo(
    () => CENTURY_IMAGES[currentCentury] ?? "0403-1700s.jpg",
    [currentCentury],
  );

  return (
    <svg viewBox="0 0 99 99">
      <image
        href={`/images/chapters/${image}`}
        x="-3.5"
        y="-3.5"
        width="105.5"
        height="106"
      />
      {[...numberRange(0, 99)].map((index) => (
        <OverlaidYearSquare
          key={`bg-ol-year-${currentCentury + index + 1}`}
          index={index}
          year={currentCentury + index + 1}
        />
      ))}
    </svg>
  );
}
