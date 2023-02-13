import OverlaidPeabodySquare from "~/components/peabody/overlaid/OverlaidPeabodySquare";
import { useState } from "react";
import RecreatedPeabodySquare from "~/components/peabody/recreated/RecreatedPeabodySquare";
import peabody1500SquareColors from "~/data/peabody/1500SquareColors.json";
import peabody1600SquareColors from "~/data/peabody/1600SquareColors.json";
import peabody1700SquareColors from "~/data/peabody/1700SquareColors.json";
import peabody1800SquareColors from "~/data/peabody/1800SquareColors.json";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";
import { numberRange } from "~/utils";
import RecreatedEventSquare from "~/components/peabody/recreated/RecreatedEventSquare";

export default function PeabodyTimelineView() {
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);
  const [activeYearData, setActiveYearData] = useState({
    squareColors: peabody1700SquareColors,
    year: 1700,
  });
  return (
    <div className="w-full bg-black col-span-full">
      <div className="flex text-white">
        <button
          onClick={() =>
            setActiveYearData({
              squareColors: peabody1500SquareColors,
              year: 1500,
            })
          }
        >
          1500s
        </button>
        <button
          onClick={() =>
            setActiveYearData({
              squareColors: peabody1600SquareColors,
              year: 1600,
            })
          }
        >
          1600s
        </button>
        <button
          onClick={() =>
            setActiveYearData({
              squareColors: peabody1700SquareColors,
              year: 1700,
            })
          }
        >
          1700s
        </button>
        <button
          onClick={() =>
            setActiveYearData({
              squareColors: peabody1800SquareColors,
              year: 1800,
            })
          }
        >
          1800s
        </button>
      </div>
      <div className="flex pt-20">
        <div className="w-1/2 flex justify-center">
          <div className="w-5/6">
            <OverlaidPeabodySquare
              setHighlightedElement={setHighlightedElement}
              highlightedElement={highlightedElement}
              squareColors={activeYearData.squareColors}
              overlayImage={`/images/peabody/${activeYearData.year}s.jpg`}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-5/6">
            <RecreatedPeabodySquare
              setHighlightedElement={setHighlightedElement}
              highlightedElement={highlightedElement}
              squareColors={activeYearData.squareColors}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-12 flex justify-center">
        <div className="flex w-3/4">
          {activeYearData.squareColors.map((yearSquareColors, yearIndex) => (
            <div
              key={yearIndex}
              className="w-6 h-full flex flex-col-reverse border border-transparent"
            >
              {yearSquareColors &&
                yearSquareColors
                  .filter(Boolean)
                  .map((eventSquareColors, eventIndex) => (
                    <RecreatedEventSquare
                      key={eventIndex}
                      absoluteIndex={yearIndex * 9 + eventIndex}
                      index={eventIndex}
                      highlightedElement={highlightedElement}
                      setHighlightedElement={setHighlightedElement}
                      eventSquareColors={eventSquareColors}
                      className="w-full h-auto"
                    />
                  ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-1 pb-6 flex justify-center">
        <svg className="w-3/4" viewBox="0 0 300 10">
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="0"
            stroke="white"
            strokeWidth="0.5"
          />
          {[...numberRange(1, 100)].map((i) => (
            <g key={i}>
              <line
                x1={i * 3 - 1.5}
                y1={0}
                x2={i * 3 - 1.5}
                y2={i % 10 == 0 ? 6 : 4}
                stroke="white"
                strokeWidth="0.5"
              />
              {i % 10 == 0 && (
                <text
                  x={i * 3 - (i == 100 ? 9 : 6)}
                  y={10}
                  textLength={9}
                  fill="white"
                  fontSize="4"
                  fontVariant="small-caps"
                >
                  {activeYearData.year + i}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
