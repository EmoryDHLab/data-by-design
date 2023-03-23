import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../PeabodyQuiz";
import QuizEventSquare from "./QuizEventSquare";
import { getYearXFromIndex, getYearYFromIndex } from "~/components/peabody/peabodyUtils";
import { numberRange } from "~/utils";

const YEAR_WIDTH = 11.6;
const width = YEAR_WIDTH - YEAR_WIDTH / 48;
const height = YEAR_WIDTH - YEAR_WIDTH / 48;

interface Props {
  index: number;
  year: number;
}

export default function QuizYearSquare({
  index,
  year
}: Props) {
  const x = getYearXFromIndex(index, YEAR_WIDTH) + 165;
  const y = getYearYFromIndex(index, YEAR_WIDTH) + 19.5;
  const { stepState, setStepState } = useContext(QuizContext);
  const [focusedYear, setFocusedYear] = useState(undefined);
  const [selected, setSelected] = useState<boolean>(false);
  const [textOpacity, setTextOpacity] = useState<float>(0.5);
  const [fillColor, setFillColor] = useState<number>(200);

  useEffect(() => {
    if (stepState <= 1) {
      setTextOpacity(focusedYear ? 1.0 : 0.5);
    } else {
      setTextOpacity(0.0);
    }
  }, [focusedYear, stepState, setTextOpacity]);

  // TODO: Maybe just an inline ternary in the template?
  useEffect(() => {
    if (stepState >= 2) {
      if (year !== 1644) setFillColor(300);
      if (year === 1644) setFillColor(50);
    }
  }, [setFillColor, stepState, year]);

  const handleClick = () => {
    if (year === 1644 && stepState === 1) {
      setStepState(stepState + 1);
    } else {
      setSelected(true);
    }
  };

  return (
    <g
      onMouseEnter={() => setFocusedYear(year)}
      onMouseLeave={() => setFocusedYear(undefined)}
      role="button"
      onClick={handleClick}
    >
      <rect
        className={`fill-gray-${fillColor}`}
        width={width}
        height={height}
        x={x}
        y={y}
      />
      {(selected && stepState <= 1) &&
        <>
          <line x1={x} x2={x + width} y1={y} y2={y + height} className="stroke-red-400" strokeWidth={0.2}/>
          <line x1={x} x2={x + width} y1={y + height} y2={y} className="stroke-red-400" strokeWidth={0.2}/>
        </>
      }
      <text
        x={x + 2}
        y={y + 6.5}
        fill="black"
        fillOpacity={textOpacity}
        fontSize={3}
      >
        {year}
      </text>

      {(stepState >= 2 && year === 1644) &&
        <>
          {[...numberRange(0, 8)].map((eventIndex) => {
            return (
              <QuizEventSquare
                key={eventIndex}
                size={width / 3}
                index={eventIndex}
                yearX={x}
                yearY={y}
              />
            );
          })}
        </>
      }

    </g>
  );
}
