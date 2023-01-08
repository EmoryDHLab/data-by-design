import { numberRange } from "~/utils";
import OverlaidYearSquare from "~/components/peabody/OverlaidYearSquare";

interface Props {
  overlayImage: string;
  handleEnterEventSquare: (index: number) => void;
  handleLeaveEventSquare: (index: number) => void;
  highlightedIndex?: number;
}

export default function OverlaidPeabodySquare({
  overlayImage,
  handleEnterEventSquare,
  handleLeaveEventSquare,
  highlightedIndex,
}: Props) {
  return (
    <svg className="w-full" viewBox="0 0 99 99">
      <image href={overlayImage} x="-3.5" y="-3.5" width="105.5" height="106" />
      {[...numberRange(0, 99)].map((index) => (
        <OverlaidYearSquare
          highlightedIndex={highlightedIndex}
          handleEnterEventSquare={handleEnterEventSquare}
          handleLeaveEventSquare={handleLeaveEventSquare}
          index={index}
        />
      ))}
    </svg>
  );
}
