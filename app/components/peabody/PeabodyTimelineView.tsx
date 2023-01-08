import OverlaidPeabodySquare from "~/components/peabody/OverlaidPeabodySquare";
import { useState } from "react";
import RecreatedPeabodySquare from "~/components/peabody/RecreatedPeabodySquare";

export default function PeabodyTimelineView() {
  const [highlightedEventSquareIndex, setHighlightedEventSquareIndex] =
    useState<number | undefined>(undefined);
  return (
    <div className="flex bg-black w-full pt-20">
      <div className="w-1/2 flex justify-center">
        <div className="w-5/6">
          <OverlaidPeabodySquare
            handleEnterEventSquare={(i) => {
              setHighlightedEventSquareIndex(i);
            }}
            handleLeaveEventSquare={(i) => {
              setHighlightedEventSquareIndex(undefined);
            }}
            highlightedIndex={highlightedEventSquareIndex}
            overlayImage="/images/peabody/1600s.jpg"
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-5/6">
          <RecreatedPeabodySquare
            handleEnterEventSquare={(i) => {
              setHighlightedEventSquareIndex(i);
            }}
            handleLeaveEventSquare={(i) => {
              setHighlightedEventSquareIndex(undefined);
            }}
            highlightedIndex={highlightedEventSquareIndex}
          />
        </div>
      </div>
    </div>
  );
}
