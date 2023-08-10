import { useState } from "react";
import RecreatedPeabodySquare from "~/components/peabody/recreated/RecreatedPeabodySquare";
import type {
  HighlightedElement,
  SquareData,
} from "~/components/peabody/peabodyUtils";

interface Props {
  currentColor: { label: string, rgb: string};
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
      if (eventColors.includes(currentColor.rgb)) {
        squareColors[yearIndex][eventIndex] = eventColors.filter(
          (color) => color !== currentColor.rgb
        );
      } else {
        squareColors[yearIndex][eventIndex].push(currentColor.rgb);
      }
    } else {
      squareColors[yearIndex][eventIndex] = [currentColor.rgb];
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
