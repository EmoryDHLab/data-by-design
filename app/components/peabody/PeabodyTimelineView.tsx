import OverlaidPeabodySquare from "~/components/peabody/OverlaidPeabodySquare";
import type { SetStateAction } from "react";
import { useState } from "react";
import RecreatedPeabodySquare from "~/components/peabody/RecreatedPeabodySquare";
import peabodySquareColors from "~/data/peabody/1600Square.json";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";
import { numberRange } from "~/utils";
import RecreatedEventSquare from "~/components/peabody/RecreatedEventSquare";

export default function PeabodyTimelineView() {
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);
  return (
    <div className="w-full bg-black">
      <div className="flex pt-20">
        <div className="w-1/2 flex justify-center">
          <div className="w-5/6">
            <OverlaidPeabodySquare
              setHighlightedElement={setHighlightedElement}
              highlightedElement={highlightedElement}
              squareColors={peabodySquareColors}
              overlayImage="/images/peabody/1600s.jpg"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-5/6">
            <RecreatedPeabodySquare
              setHighlightedElement={setHighlightedElement}
              highlightedElement={highlightedElement}
              squareColors={peabodySquareColors}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-12 flex justify-center">
        <div className="flex w-3/4">
          {peabodySquareColors.map((yearSquareColors, yearIndex) => (
            <div className="w-6 h-full flex flex-col-reverse border border-transparent">
              {yearSquareColors &&
                yearSquareColors
                  .filter(Boolean)
                  .map((eventSquareColors, eventIndex) => (
                    <RecreatedEventSquare
                      absoluteIndex={yearIndex * 9 + eventIndex}
                      index={eventIndex}
                      highlightedElement={highlightedElement}
                      setHighlightedElement={setHighlightedElement}
                      eventSquareColors={eventSquareColors}
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
            <g>
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
                  {1600 + i}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
