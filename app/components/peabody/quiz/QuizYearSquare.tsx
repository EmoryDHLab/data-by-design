import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";
import type {
  HighlightedElement,
  YearSquare,
} from "~/components/peabody/peabodyUtils";
import QuizEventSquare from "~/components/peabody/quiz/QuizEventSquare";
import { numberRange } from "~/utils";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  year: number;
}

export default function QuizYearSquare({
  index,
  year,
}: Props) {

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
    >
      <rect className="fill-gray-200" width="90" height="90" />
      {[...numberRange(0, 9)].map((eventIndex) => {
        const absoluteIndex = index * 9 + eventIndex;
        return (
          <QuizEventSquare
            key={eventIndex}
            absoluteIndex={absoluteIndex}
            index={eventIndex}
            year={year}
          />
        );
      })}
    </svg>
  );
}
