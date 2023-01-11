import {
  getEventXFromIndex,
  getEventYFromIndex,
  HighlightedElement,
  POLYGONS,
} from "~/components/peabody/peabodyUtils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  absoluteIndex: number;
  index: number;
  highlightedElement: HighlightedElement | undefined;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  eventSquareColors: string[] | null;
}

export default function OverlaidEventSquare({
  absoluteIndex,
  index,
  highlightedElement,
  setHighlightedElement,
  eventSquareColors,
}: Props) {
  if (eventSquareColors && eventSquareColors.length > 1) {
    const polygons = POLYGONS[eventSquareColors.length - 1];
    return (
      <svg
        width="30"
        height="30"
        x={getEventXFromIndex(index)}
        y={getEventYFromIndex(index)}
        viewBox="0 0 30 30"
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
              fillOpacity="0"
              points={p}
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
        onMouseEnter={() => {
          setHighlightedElement({ elementIndex: absoluteIndex });
        }}
        onMouseLeave={() => {
          setHighlightedElement(undefined);
        }}
        stroke="black"
        strokeWidth={isHighlighted ? "5" : "0"}
        fillOpacity="0"
        width="30"
        height="30"
      />
    </svg>
  );
}
