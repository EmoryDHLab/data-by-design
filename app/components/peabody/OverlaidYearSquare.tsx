import { numberRange } from "~/utils";
import OverlaidEventSquare from "~/components/peabody/OverlaidEventSquare";
import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";

interface Props {
  index: number;
  handleEnterEventSquare: (index: number) => void;
  handleLeaveEventSquare: (index: number) => void;
  highlightedIndex?: number;
}

export default function OverlaidYearSquare({
  index,
  handleEnterEventSquare,
  handleLeaveEventSquare,
  highlightedIndex,
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
            isHighlighted={absoluteIndex === highlightedIndex}
            handleMouseEnter={() => {
              handleEnterEventSquare(absoluteIndex);
            }}
            handleMouseLeave={() => {
              handleLeaveEventSquare(absoluteIndex);
            }}
            index={eventIndex}
          />
        );
      })}
    </svg>
  );
}
