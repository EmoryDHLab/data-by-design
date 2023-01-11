// RecreatedPeabodySquare represents a Peabody square that is fully recreated in svg and
// not an overlay of a Peabody square image.
import RecreatedYearSquare from "~/components/peabody/recreated/RecreatedYearSquare";
import type {
  HighlightedElement,
  SquareData,
} from "~/components/peabody/peabodyUtils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  highlightedElement?: HighlightedElement;
  handleSquareClick?: (index: number) => void;
  squareColors: SquareData;
}

// Recreated Peabody Square is a square fully recreated using SVG.
export default function RecreatedPeabodySquare({
  setHighlightedElement,
  highlightedElement,
  handleSquareClick,
  squareColors,
}: Props) {
  return (
    <svg className="w-full" viewBox="0 0 99 99">
      <g>
        <rect className="fill-peabodyOrange" x="0" width="100" height="99" />
        {squareColors.map((yearSquareColors, index) => {
          return (
            <g key={index}>
              <RecreatedYearSquare
                handleSquareClick={handleSquareClick}
                yearSquareColors={yearSquareColors}
                highlightedElement={highlightedElement}
                setHighlightedElement={setHighlightedElement}
                index={index}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
