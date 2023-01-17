import { useContext, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";
import { numberRange } from "~/utils";
import TutorialYearSquare from "./TutorialYearSquare";
import TutorialEventSquare from "./TutorialEventSquare";
import eventsData from "~/data/peabody/1600sEvents.json";
import TutorialKey from "./TutorialKey";

export default function Tutorial() {
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);

  const [activeYear, setActiveYear] = useState<number | undefined>(undefined);
  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <div>
      <svg viewBox="0 0 99 99" className="max-h-[calc(60vh-60px)] m-auto">
        <g>
          <rect className="fill-peabodyOrange" x="0" width="100" height="99" />
          {[...numberRange(1601, 1700)].map((year, index) => {
            const yearEvents = eventsData.events.filter(event => event.year === year);
            const textColor = yearEvents[0]?.squares === "full" && scrollProgress >= 3 ? "white" : "black";
            return (
              <TutorialYearSquare
                key={year}
                year={year}
                index={index}
                active={activeYear === year && parseInt(scrollProgress) === 1}
                setActive={setActiveYear}
                textColor={textColor}
              >
                {[...numberRange(0, 9)].map((eventIndex) => {
                  const yearEvent = yearEvents?.find(event => event.squares.includes(eventIndex + 1) || event.squares === "full")
                  return (
                    <TutorialEventSquare
                      eventIndex={eventIndex}
                      yearEvent={yearEvent}
                      year={year}
                      key={eventIndex}
                      active={activeYear === year && parseInt(scrollProgress) === 1}
                      mouseEnter={() => { setHighlightedElement({eventType: eventIndex, event: yearEvent, year})}}
                      mouseLeave={() => { setHighlightedElement(undefined)}}
                      highlightedElement={highlightedElement}
                    />
                  )
                })}
              </TutorialYearSquare>
            )
          })}
        </g>
      </svg>
      <TutorialKey highlightedElement={highlightedElement} />
    </div>
  )
}