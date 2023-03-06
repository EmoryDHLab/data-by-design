import { useContext } from "react";
import BarGraphContext from "./BarGraphContext";
import { numberRange } from "~/utils";
import OverlaidYearSquare from "./OverlaidYearSquare";

// Overlaid Peabody Square is a layer on top of the Peabody square image that
// allows a user to hover over the various squares
export default function OverlaidSquare() {
  const { currentCentury } = useContext(BarGraphContext);

  return (
    <svg viewBox="0 0 99 99">
      <image href={`/images/peabody/${currentCentury}s.jpg`} x="-3.5" y="-3.5" width="105.5" height="106" />
      {[...numberRange(0, 99)].map((index) => (
        <OverlaidYearSquare
          key={index}
          index={index}
          year={currentCentury + index + 1}
        />
      ))}
    </svg>
  );
}
