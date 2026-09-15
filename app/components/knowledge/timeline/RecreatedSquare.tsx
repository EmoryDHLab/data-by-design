// RecreatedSquare represents a Peabody square that is fully recreated in svg
// and not an overlay of a Peabody square image.
import { useContext } from "react";
import TimelineContext from "./TimelineContext";
import { numberRange } from "~/utils";
import RecreatedYearSquare from "./RecreatedYearSquare";

export default function RecreatedSquare() {
  const { currentCentury } = useContext(TimelineContext);

  return (
    <svg viewBox="0 0 99 99">
      <g>
        <rect className="fill-processOrange" x="0" width="100" height="99" />
        {[...numberRange(currentCentury + 1, currentCentury + 100)].map(
          (year, index) => (
            <g key={`bg-re-year-${currentCentury + index + 1}`}>
              <RecreatedYearSquare
                index={index}
                year={currentCentury + index + 1}
              />
            </g>
          ),
        )}
      </g>
    </svg>
  );
}
