import { useCallback, useState } from "react";
import RecreatedPeabodySquare from "~/components/knowledge/recreated/RecreatedPeabodySquare";
import type {
  HighlightedElement,
  SquareData,
} from "~/components/knowledge/peabodyUtils";

interface Props {
  currentColor: { label: string; rgb: string };
}

export function EditablePeabodySquare({ currentColor }: Props) {
  const [squareColors, setSquareColors] = useState<SquareData>(
    Array.from({ length: 100 }, () => null)
  );
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);

  const handleSquareClick = useCallback(
    (index: number) => {
      const yearIndex = Math.floor(index / 9);
      const eventIndex = index % 9;

      setSquareColors((prevSquareColors) => {
        const nextSquareColors = [...prevSquareColors];
        const prevYear = nextSquareColors[yearIndex];
        const nextYear = prevYear ? [...prevYear] : Array.from({ length: 9 }, () => null);
        const eventColors = nextYear[eventIndex];

        nextYear[eventIndex] = eventColors
          ? eventColors.includes(currentColor.rgb)
            ? eventColors.filter((color) => color !== currentColor.rgb)
            : [...eventColors, currentColor.rgb]
          : [currentColor.rgb];

        nextSquareColors[yearIndex] = nextYear;
        return nextSquareColors;
      });
    },
    [currentColor],
  );

  return (
    <RecreatedPeabodySquare
      setHighlightedElement={setHighlightedElement}
      highlightedElement={highlightedElement}
      handleSquareClick={handleSquareClick}
      squareColors={squareColors}
    />
  );
}
