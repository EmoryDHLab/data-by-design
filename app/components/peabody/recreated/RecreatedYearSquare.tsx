import {
  getYearXFromIndex,
  getYearYFromIndex,
  HighlightedElement,
  YEAR_WIDTH,
  YearSquare,
} from "~/components/peabody/peabodyUtils";
import RecreatedEventSquare from "~/components/peabody/recreated/RecreatedEventSquare";
import { numberRange } from "~/utils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  highlightedElement?: HighlightedElement;
  handleSquareClick?: (index: number) => void;
  yearSquareColors: YearSquare | null;
}

export default function RecreatedYearSquare({
  index,
  highlightedElement,
  setHighlightedElement,
  handleSquareClick,
  yearSquareColors,
}: Props) {
  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      <rect className="fill-gray-200" width="90" height="90" />
      {[...numberRange(0, 9)].map((eventIndex) => {
        const absoluteIndex = index * 9 + eventIndex;
        return (
          <RecreatedEventSquare
            key={eventIndex}
            eventSquareColors={yearSquareColors?.[eventIndex] ?? null}
            handleClick={handleSquareClick}
            absoluteIndex={absoluteIndex}
            index={eventIndex}
            highlightedElement={highlightedElement}
            setHighlightedElement={setHighlightedElement}
          />
        );
      })}
    </svg>
  );
}
