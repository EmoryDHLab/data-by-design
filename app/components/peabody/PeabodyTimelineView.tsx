import OverlaidPeabodySquare from "~/components/peabody/OverlaidPeabodySquare";
import { useState } from "react";
import RecreatedPeabodySquare from "~/components/peabody/RecreatedPeabodySquare";
import peabodySquareColors from "~/data/peabody/1600Square.json";
import { HighlightedElement } from "~/components/peabody/peabodyUtils";

export default function PeabodyTimelineView() {
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);
  return (
    <div className="flex bg-black w-full pt-20">
      <div className="w-1/2 flex justify-center">
        <div className="w-5/6">
          <OverlaidPeabodySquare
            setHighlightedElement={setHighlightedElement}
            highlightedElement={highlightedElement}
            squareColors={peabodySquareColors}
            overlayImage="/images/peabody/1600s.jpg"
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-5/6">
          <RecreatedPeabodySquare
            setHighlightedElement={setHighlightedElement}
            highlightedElement={highlightedElement}
            squareColors={peabodySquareColors}
          />
        </div>
      </div>
    </div>
  );
}
