import {
  getEventXFromIndex,
  getEventYFromIndex,
} from "~/components/peabody/peabodyUtils";

interface Props {
  index: number;
  isHighlighted?: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  eventSquareColors: string[] | null;
}

export default function RecreatedEventSquare({
  index,
  isHighlighted,
  handleMouseEnter,
  handleMouseLeave,
  eventSquareColors,
}: Props) {
  if (eventSquareColors?.length === 2) {
    return (
      <svg
        width="30"
        height="30"
        x={getEventXFromIndex(index)}
        y={getEventYFromIndex(index)}
        viewBox="0 0 30 30"
      ></svg>
    );
  }
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
        fill={eventSquareColors?.[0] ?? "white"}
        width="30"
        height="30"
      />
    </svg>
  );
}
