import { useContext, useEffect, useState } from "react";
import TimelineContext from "./TimelineContext";
import { numberRange } from "~/utils";
import OverlaidYearSquare from "./OverlaidYearSquare";

// Overlaid Peabody Square is a layer on top of the Peabody square image that
// allows a user to hover over the various squares
export default function OverlaidSquare() {
  const { currentCentury } = useContext(TimelineContext);
  const [image, setImage] = useState<string>("0403-1700s.jpg");

  useEffect(() => {
    switch (currentCentury) {
      case 1500:
        setImage("0401-1500s.jpg");
        break;
      case 1600:
        setImage("0402-1600s.jpg");
        break;
      case 1700:
        setImage("0403-1700s.jpg");
        break;
      case 1800:
        setImage("0404-1800s.jpg");
        break;
      default:
        break;
    }
  }, [currentCentury]);

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
