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
import { numberRange } from "~/utils";

// Recreated Peabody Square is a square fully recreated using SVG.
export default function QuizPeabodySquare() {
  const { currentCentury } = useContext(QuizContext);

  return (
    <svg className="" viewBox="0 0 99 99">
      <defs>
        <pattern
          id="diagonalHatch"
          width={5}
          height={10}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            style={{stroke: "orange", strokeWidth: 1}}
          />
        </pattern>
      </defs>
      <g>
        <rect className="fill-peabodyOrange" x="0" width="100" height="99" />
        {[...numberRange(currentCentury + 1, currentCentury + 100)].map((year, index) => {
          return (
            <g key={index}>
              <QuizYearSquare
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
