import {
  getEventXFromIndex,
  getEventYFromIndex,
  POLYGONS,
} from "~/components/peabody/peabodyUtils";
import type { Dispatch, SetStateAction } from "react";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";

interface Props {
  // Index in total peabody square, so 0..99
  absoluteIndex: number;
  // Index in year square, so 0..8
  index: number;
  highlightedElement: HighlightedElement | undefined;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  handleClick?: (index: number) => void;
  eventSquareColors: string[] | null;
  className?: string | null;
}

export default function RecreatedEventSquare({
  absoluteIndex,
  index,
  highlightedElement,
  setHighlightedElement,
  handleClick,
  eventSquareColors,
  className
}: Props) {
  if (eventSquareColors && eventSquareColors.length > 1) {
    const polygons = POLYGONS[eventSquareColors.length - 1];
    return (
      <svg
        width="30"
        height="30"
        x={getEventXFromIndex(index)}
        y={getEventYFromIndex(index)}
        onClick={() => { if (handleClick) handleClick(absoluteIndex)}}
        viewBox="0 0 30 30"
        className={className ?? ""}
      >
        {polygons.map((p, i) => {
          const isHighlighted =
            highlightedElement?.polygonIndex === i &&
            highlightedElement?.elementIndex === absoluteIndex;
          return (
            <polygon
              key={p}
              stroke="gold"
              onMouseEnter={() =>
                setHighlightedElement({
                  elementIndex: absoluteIndex,
                  polygonIndex: i,
                })
              }
              onMouseLeave={() => setHighlightedElement(undefined)}
              strokeWidth={isHighlighted ? "5" : "0"}
              points={p}
              fill={eventSquareColors[i]}
            />
          );
        })}
      </svg>
    );
  }

  const isHighlighted = highlightedElement?.elementIndex === absoluteIndex;
  return (
    <svg
      width="30"
      height="30"
      onClick={() => { if (handleClick) handleClick(absoluteIndex)}}
      x={getEventXFromIndex(index)}
      y={getEventYFromIndex(index)}
      viewBox="0 0 30 30"
      className={className ?? ""}
    >
      <rect
        width="25"
        height="25"
        x="2.5"
        y="2.5"
        stroke="gold"
        fill={eventSquareColors?.[0] ?? "white"}
        strokeWidth={isHighlighted ? "5" : "0"}
      />
      <rect
        onMouseEnter={() =>
          setHighlightedElement({ elementIndex: absoluteIndex })
        }
        onMouseLeave={() => setHighlightedElement(undefined)}
        stroke="black"
        strokeWidth={isHighlighted ? "5" : "0"}
        fill={eventSquareColors?.[0] ?? "white"}
        fillOpacity={isHighlighted ? "0" : "1"}
        width="30"
        height="30"
      />
    </svg>
  );
}
