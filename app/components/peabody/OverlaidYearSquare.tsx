import { numberRange } from "~/utils";
import OverlaidEventSquare from "~/components/peabody/OverlaidEventSquare";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  HighlightedElement,
  YEAR_WIDTH,
  YearSquare,
} from "~/components/peabody/peabodyUtils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  highlightedElement: HighlightedElement | undefined;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  yearSquareColors: YearSquare | null;
}

export default function OverlaidYearSquare({
  index,
  setHighlightedElement,
  highlightedElement,
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
      {[...numberRange(0, 9)].map((eventIndex) => {
        const absoluteIndex = index * 9 + eventIndex;
        return (
          <OverlaidEventSquare
            highlightedElement={highlightedElement}
            setHighlightedElement={setHighlightedElement}
            eventSquareColors={yearSquareColors?.[eventIndex] ?? null}
            absoluteIndex={absoluteIndex}
            index={eventIndex}
          />
        );
      })}
    </svg>
  );
}
