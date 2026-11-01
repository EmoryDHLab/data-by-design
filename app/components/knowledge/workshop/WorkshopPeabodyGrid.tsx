// WorkshopPeabodyGrid draws one month as a Peabody grid: four week squares in a
// 2×2 block, each split into the participant's nine event types.
import RecreatedEventSquare from "~/components/knowledge/recreated/RecreatedEventSquare";
import { numberRange } from "~/utils";
import { CELLS } from "~/components/knowledge/workshop/parseWorkshopCsv";
import type { Dispatch, SetStateAction } from "react";
import type {
  HighlightedElement,
  SquareData,
} from "~/components/knowledge/peabodyUtils";

const WEEK_SIZE = 90;
const GUTTER = 6;
const LABEL_HEIGHT = 10;
const WIDTH = GUTTER + 2 * (WEEK_SIZE + GUTTER);
const HEIGHT = GUTTER + 2 * (LABEL_HEIGHT + WEEK_SIZE + GUTTER);

interface Props {
  weeks: SquareData;
  highlightedElement?: HighlightedElement;
  setHighlightedElement: Dispatch<
    SetStateAction<HighlightedElement | undefined>
  >;
}

export default function WorkshopPeabodyGrid({
  weeks,
  highlightedElement,
  setHighlightedElement,
}: Props) {
  return (
    <svg
      className="w-full"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="A Peabody grid of four weeks"
    >
      <rect className="fill-processOrange" width={WIDTH} height={HEIGHT} />
      {weeks.map((weekColors, week) => {
        const x = GUTTER + (week % 2) * (WEEK_SIZE + GUTTER);
        const y =
          GUTTER +
          Math.floor(week / 2) * (LABEL_HEIGHT + WEEK_SIZE + GUTTER);
        return (
          <g key={week}>
            <text
              x={x}
              y={y + LABEL_HEIGHT - 3}
              fontSize="7"
              className="font-power"
            >
              Week {week + 1}
            </text>
            <svg
              viewBox={`0 0 ${WEEK_SIZE} ${WEEK_SIZE}`}
              width={WEEK_SIZE}
              height={WEEK_SIZE}
              x={x}
              y={y + LABEL_HEIGHT}
            >
              <rect className="fill-gray-200" width="90" height="90" />
              {[...numberRange(0, CELLS - 1)].map((cell) => (
                <RecreatedEventSquare
                  key={cell}
                  index={cell}
                  absoluteIndex={week * CELLS + cell}
                  eventSquareColors={weekColors?.[cell] ?? null}
                  highlightedElement={highlightedElement}
                  setHighlightedElement={setHighlightedElement}
                  // Tapping a cell selects it on touch screens, which have no hover.
                  handleClick={(elementIndex) =>
                    setHighlightedElement({ elementIndex })
                  }
                />
              ))}
            </svg>
          </g>
        );
      })}
    </svg>
  );
}
