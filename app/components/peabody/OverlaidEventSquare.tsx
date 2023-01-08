import {
  getEventXFromIndex,
  getEventYFromIndex,
} from "~/components/peabody/peabodyUtils";

interface Props {
  index: number;
  isHighlighted?: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export default function OverlaidEventSquare({
  index,
  isHighlighted,
  handleMouseEnter,
  handleMouseLeave,
}: Props) {
  return (
    <svg
      width="30"
      height="30"
      x={getEventXFromIndex(index)}
      y={getEventYFromIndex(index)}
      viewBox="0 0 30 30"
    >
      <rect
        width="25"
        height="25"
        x="2.5"
        y="2.5"
        stroke="gold"
        fillOpacity="0"
        strokeWidth={isHighlighted ? "5" : "0"}
      />
      <rect
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        stroke="black"
        strokeWidth={isHighlighted ? "5" : "0"}
        fillOpacity="0"
        width="30"
        height="30"
      />
    </svg>
  );
}
