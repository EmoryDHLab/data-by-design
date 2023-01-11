import { useState } from "react";
import RecreatedPeabodySquare from "~/components/peabody/recreated/RecreatedPeabodySquare";
import type {
  HighlightedElement,
  SquareData,
} from "~/components/peabody/peabodyUtils";

interface Props {
  currentColor: string;
}

export function EditablePeabodySquare({ currentColor }: Props) {
  const [squareColors, setSquareColors] = useState<SquareData>(
    Array.from({ length: 100 }, () => null)
  );
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);

  function handleSquareClick(index: number) {
    const yearIndex = Math.floor(index / 9);
    const eventIndex = index % 9;
    if (!squareColors[yearIndex]) {
      squareColors[yearIndex] = Array.from({ length: 9 }, () => null);
    }
    const eventColors = squareColors[yearIndex][eventIndex];
    if (eventColors) {
      if (eventColors.includes(currentColor)) {
        squareColors[yearIndex][eventIndex] = eventColors.filter(
          (color) => color !== currentColor
        );
      } else {
        squareColors[yearIndex][eventIndex].push(currentColor);
      }
    } else {
      squareColors[yearIndex][eventIndex] = [currentColor];
    }

    setSquareColors([...squareColors]);
  }

  return (
    <RecreatedPeabodySquare
      setHighlightedElement={setHighlightedElement}
      highlightedElement={highlightedElement}
      handleSquareClick={handleSquareClick}
      squareColors={squareColors}
    />
  );
}
