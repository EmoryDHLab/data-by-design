import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";
import RecreatedEventSquare from "~/components/peabody/RecreatedEventSquare";
import { numberRange } from "~/utils";

interface Props {
  index: number;
  handleEnterEventSquare: (index: number) => void;
  handleLeaveEventSquare: (index: number) => void;
  highlightedIndex?: number;
}

export default function RecreatedYearSquare({
  index,
  highlightedIndex,
  handleEnterEventSquare,
  handleLeaveEventSquare,
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
            isHighlighted={absoluteIndex === highlightedIndex}
            index={eventIndex}
            handleMouseEnter={() => {
              handleEnterEventSquare(absoluteIndex);
            }}
            handleMouseLeave={() => {
              handleLeaveEventSquare(absoluteIndex);
            }}
          />
        );
      })}
    </svg>
  );
}
