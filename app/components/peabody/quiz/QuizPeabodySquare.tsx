// RecreatedPeabodySquare represents a Peabody square that is fully recreated in svg and
// not an overlay of a Peabody square image.
import QuizYearSquare from "~/components/peabody/quiz/QuizYearSquare";
import type {
  HighlightedElement,
  SquareData,
} from "~/components/peabody/peabodyUtils";
import type { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import { QuizContext } from "../PeabodyQuiz";

interface Props {
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
  highlightedElement?: HighlightedElement;
  handleSquareClick?: (index: number) => void;
  squareColors: SquareData;
  className?: string;
}

// Recreated Peabody Square is a square fully recreated using SVG.
export default function QuizPeabodySquare({
  setHighlightedElement,
  highlightedElement,
  handleSquareClick,
  squareColors,
  clearSquares,
  className,
}: Props) {
  const { currentCentury } = useContext(QuizContext);

  return (
    <svg className={`w-full ${className ?? ""}`} viewBox="0 0 99 99">
      <defs>
        <pattern
          id="diagonalHatch"
          width="5"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            style={{stroke: "orange", strokeWidth: 4}}
          />
        </pattern>
      </defs>
      <g>
        <rect className="fill-peabodyOrange" x="0" width="100" height="99" />
        {squareColors.map((yearSquareColors, index) => {
          return (
            <g key={index}>
              <QuizYearSquare
                handleSquareClick={handleSquareClick}
                yearSquareColors={yearSquareColors}
                highlightedElement={highlightedElement}
                setHighlightedElement={setHighlightedElement}
                index={index}
                year={currentCentury + index + 1}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
