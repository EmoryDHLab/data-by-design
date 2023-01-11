import { numberRange } from "~/utils";
import OverlaidYearSquare from "~/components/peabody/overlaid/OverlaidYearSquare";
import { Dispatch, SetStateAction } from "react";
import {
  HighlightedElement,
  SquareData,
} from "~/components/peabody/peabodyUtils";

interface Props {
  overlayImage: string;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  highlightedElement: HighlightedElement | undefined;
  squareColors: SquareData;
}

// Overlaid Peabody Square is a layer on top of the Peabody square image that
// allows a user to hover over the various squares
export default function OverlaidPeabodySquare({
  overlayImage,
  setHighlightedElement,
  highlightedElement,
  squareColors,
}: Props) {
  return (
    <svg className="w-full" viewBox="0 0 99 99">
      <image href={overlayImage} x="-3.5" y="-3.5" width="105.5" height="106" />
      {[...numberRange(0, 99)].map((index) => (
        <OverlaidYearSquare
          key={index}
          yearSquareColors={squareColors[index]}
          highlightedElement={highlightedElement}
          setHighlightedElement={setHighlightedElement}
          index={index}
        />
      ))}
    </svg>
  );
}
