// RecreatedPeabodySquare represents a Peabody square that is fully recreated in svg and
// not an overlay of a Peabody square image.
import { numberRange } from "~/utils";
import RecreatedYearSquare from "~/components/peabody/RecreatedYearSquare";

interface Props {
  handleEnterEventSquare: (index: number) => void;
  handleLeaveEventSquare: (index: number) => void;
  highlightedIndex?: number;
}

export default function RecreatedPeabodySquare({
  handleEnterEventSquare,
  handleLeaveEventSquare,
  highlightedIndex,
}: Props) {
  return (
    <svg className="w-full" viewBox="0 0 99 99">
      <g>
        <rect className="fill-peabodyOrange" x="0" width="100" height="99" />
        {[...numberRange(0, 99)].map((index) => (
          <g>
            <RecreatedYearSquare
              highlightedIndex={highlightedIndex}
              handleEnterEventSquare={handleEnterEventSquare}
              handleLeaveEventSquare={handleLeaveEventSquare}
              index={index}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
