import { useContext, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import { numberRange } from "~/utils";
import TutorialYearSquare from "./TutorialYearSquare";
import TutorialEventSquare from "./TutorialEventSquare";
import eventsData from "~/data/peabody/1600sEvents.json";
import type { PeabodyEvent } from "~/types/peabody";

type Focus = {
  x: number,
  y: number,
  w: number,
  h: number,
  s: number,
}

export default function Tutorial() {
  // const [activeYear, setActiveYear] = useState<number | undefined>(undefined);
  const [focusShapeSize, setFocusShapeSize] = useState<Focus>({ x: 0, y: 0, w: 100, h: 100, s: 1 });
  const { scrollProgress } = useContext(ScrollytellContext);

  useEffect(() => {
    switch (true) {
      case scrollProgress < 0.25 || scrollProgress >= 12.24:
        setFocusShapeSize({ x: 0, y: 0, w: 100, h: 100, s: 1 });
        break;
      case (scrollProgress > 0.25 && scrollProgress < 1.5):
        setFocusShapeSize( { x: 0, y: 0, w: 50, h: 50, s: 1 });
        break;
      case scrollProgress >= 1.25 && scrollProgress < 4.25:
        setFocusShapeSize({ x: 38.5, y: 11.5, w: 10, h: 10, s: 1 });
        break;
      case scrollProgress >= 4.25 && scrollProgress < 5.25:
        setFocusShapeSize({ x: 59.5, y: 2.5, w: 10, h: 10, s: 1 });
        break;
      case scrollProgress >= 5.25 && scrollProgress < 6.25:
        setFocusShapeSize({ x: 86.5, y: 11.5, w: 10, h: 10, s: 1 });
        break;
      case scrollProgress >= 6.25 && scrollProgress < 7.25:
        setFocusShapeSize({ x: 92.75, y: 14.75, w: 3.4, h: 3.4, s: 0.5 });
        break;
      case scrollProgress >= 7.25 && scrollProgress <= 8.25:
        setFocusShapeSize({ x: 11.5, y: 20.5, w: 10, h: 10, s: 1 });
        break;
      case scrollProgress >= 8.25 && scrollProgress <= 9.25:
        setFocusShapeSize({ x: 11.75, y: 20.75, w: 3.4, h: 3.4, s: 0.5 });
        break;
      case scrollProgress >= 9.25 && scrollProgress <= 10.25:
        setFocusShapeSize({ x: 14.75, y: 20.75, w: 3.4, h: 3.4, s: 0.5 });
        break;
      case scrollProgress >= 10.25 && scrollProgress <= 11.25:
        setFocusShapeSize({ x: 17.75, y: 20.75, w: 3.4, h: 3.4, s: 0.5 });
        break;
      case scrollProgress >= 11.25 && scrollProgress <= 12.25:
        setFocusShapeSize({ x: 17.75, y: 26.75, w: 3.4, h: 3.4, s: 0.5 });
        break;
        }
  }, [scrollProgress, setFocusShapeSize]);

  return (
    <div className="grid grid-cols-1 h-[calc(100%-80px)]">
      <div className="my-0 md:my-auto">
        <figure>
          <svg viewBox="0 0 99 99" className="mt-8 mx-8">
            <g mask="url(#tutorial-mask)">
              <rect className="fill-peabodyOrange" x="0" width={99} height={99} />
              {[...numberRange(1601, 1700)].map((year, index) => {
                const yearEvents = eventsData.events.filter(event => event?.year === year);
                return (
                  <TutorialYearSquare
                    key={year}
                    year={year}
                    index={index}
                    // active={activeYear === year}
                    // setActive={setActiveYear}
                    yearEvents={(yearEvents as Array<PeabodyEvent>)}
                  >
                    {yearEvents &&
                      <>
                        {[...numberRange(0, 8)].map((eventIndex) => {
                          const yearEvent = yearEvents?.find(event => (event?.squares as Array<number>).includes(eventIndex + 1) || event?.squares === "full")
                          return (
                            <TutorialEventSquare
                              eventIndex={eventIndex}
                              yearEvent={(yearEvent as PeabodyEvent)}
                              year={year}
                              key={eventIndex}
                              // active={activeYear === year}
                              // shouldHighlight={year === 1615}
                            />
                          )
                        })}
                      </>
                    }
                  </TutorialYearSquare>
                )
              })}
            </g>
            <mask id="tutorial-mask">
              <rect x="0" width={99} height={99} fill="white" fillOpacity={0.1} className="transition-opacity duration-700" />
              <rect className="scrollytell-shape-focus" x={focusShapeSize.x} y={focusShapeSize.y} width={focusShapeSize.w} height={focusShapeSize.h} fill="white" />
            </mask>
            <rect className="scrollytell-shape-focus" x={focusShapeSize.x} y={focusShapeSize.y} width={focusShapeSize.w} height={focusShapeSize.h} fill="none" stroke="#db882a" strokeWidth={focusShapeSize.s} />
          </svg>
          <figcaption className="text-center p-6 opacity-0 md:opacity-100">An interactive explanation of the Peabody's Polish-American System</figcaption>
        </figure>
      </div>
    </div>
  )
}