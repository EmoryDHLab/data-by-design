import { useContext } from "react";
import { QuizContext } from "../PeabodyQuiz";
import { getEventXFromIndex, getEventYFromIndex } from "~/components/peabody/peabodyUtils";
import { BottomPolygon, FullPolygon, TopPolygon } from "./QuizPolygons";

export default function QuizEventSquare({ index, size, yearX, yearY }) {
  const x = getEventXFromIndex(index, size) + yearX;
  const y = getEventYFromIndex(index, size) + yearY;

  const {
    focusedCategory,
    setFocusedCategory,
    selectedCategories,
    solvedEvents,
    handleCategoryClick,
  } = useContext(QuizContext);

  return (
    <g
      role="button"
      onClick={() => handleCategoryClick(index)}
      onMouseEnter={() => setFocusedCategory(index)}
      onMouseLeave={() => setFocusedCategory(undefined)}
    >
      <rect
        width={size}
        height={size}
        x={x}
        y={y}
        stroke={"#b3b3b3"}
        strokeWidth={focusedCategory === index ? 0.3 : 0.1}
        fillOpacity={focusedCategory === index ? 1.0 : 0.0}
        fill={solvedEvents.includes(index) ? "" : "gold"}
      ></rect>
      {selectedCategories.includes(index) &&
        <>
          <line x1={x} x2={x + size} y1={y} y2={y + size} className="stroke-red-400" strokeWidth={0.5}/>
          <line x1={x} x2={x + size} y1={y + size} y2={y} className="stroke-red-400" strokeWidth={0.5}/>
        </>
      }
      <text
        x={x + 1.25}
        y={y + 2.75}
        fill="black"
        fillOpacity={1.0}
        fontSize={2}
      >
        {index + 1}
      </text>
      <g>
        {(solvedEvents.includes(index) && (index === 0 || index === 5)) && (
          <>
            <TopPolygon index={index} x={x} y={y} size={size} color="rgb(222,145,49)" />
            <BottomPolygon index={index} x={x} y={y} size={size} color="rgb(119,43,21)" />
          </>
        )}
        {(solvedEvents.includes(index) && index === 1) && (
          <>
            <TopPolygon index={index} x={x} y={y} size={size} color="rgb(119,43,21)" />
            <BottomPolygon index={index} x={x} y={y} size={size} color="rgb(222,145,49)" />
          </>
        )}
        {(solvedEvents.includes(index) && index === 2) && (
          <FullPolygon index={index} x={x} y={y} size={size} color="rgb(222,145,49)" />
        )}
      </g>
    </g>
  );
}
