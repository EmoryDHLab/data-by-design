import { useContext, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import type { HighlightedElement } from "~/components/peabody/peabodyUtils";
import { numberRange } from "~/utils";
import TutorialYearSquare from "./TutorialYearSquare";
import TutorialEventSquare from "./TutorialEventSquare";
import eventsData from "~/data/peabody/1600sEvents.json";

export default function Tutorial() {
  const [highlightedElement, setHighlightedElement] = useState<
    HighlightedElement | undefined
  >(undefined);

  const [activeYear, setActiveYear] = useState<number | undefined>(undefined);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({ cx: 0, cy: 0, rx: 200, ry: 200, x: 0, y: 0, w: 100, h: 100 })
  const { scrollProgress } = useContext(ScrollytellContext);

  useEffect(() => {
    switch (true) {
      case scrollProgress < 0.25 || scrollProgress >= 5.24:
        setFocusShapeSize({ cx: 0, cy: 0, rx: 200, ry: 200, x: 0, y: 0, w: 100, h: 100 });
        break;
      case (scrollProgress > 0.25 && scrollProgress < 1.5) || scrollProgress >= 4.25:
        setFocusShapeSize( { cx: 25.5, cy: 25.5, rx: 20, ry: 20, x: 0, y: 0, w: 50, h: 50 });
        break;
      case scrollProgress > 1.5:
        setFocusShapeSize( { cx: 25.5, cy: 25.5, rx: 8, ry: 8, x: 20.5, y: 20.5, w: 10, h: 10 });
    }
  }, [scrollProgress, setFocusShapeSize]);

  return (
    <div className="grid grid-cols-1 h-[calc(100%-80px)]">
      {/* {scrollProgress} */}
      <div>
        <figure className="my-auto">
          <svg viewBox="0 0 99 99" className="mt-8 mx-8">
            <g mask="url(#tutorial-mask)">
              <rect className="fill-peabodyOrange" x="0" width={99} height={99} />
              {[...numberRange(1601, 1700)].map((year, index) => {
                const yearEvents = eventsData.events.filter(event => event.year === year);
                // const textColor = yearEvents[0]?.squares === "full" && scrollProgress >= 3 ? "white" : "black";
                return (
                  <TutorialYearSquare
                    key={year}
                    year={year}
                    index={index}
                    active={activeYear === year}
                    setActive={setActiveYear}
                    yearEvents={yearEvents}
                  >
                    {[...numberRange(0, 9)].map((eventIndex) => {
                      const yearEvent = yearEvents?.find(event => event.squares.includes(eventIndex + 1) || event.squares === "full")
                      return (
                        <TutorialEventSquare
                          eventIndex={eventIndex}
                          yearEvent={yearEvent}
                          year={year}
                          key={eventIndex}
                          active={activeYear === year}
                          mouseEnter={() => { setHighlightedElement({eventType: eventIndex, event: yearEvent, year})}}
                          mouseLeave={() => { setHighlightedElement(undefined)}}
                          highlightedElement={highlightedElement}
                          shouldHighlight={year === 1623}
                        />
                      )
                    })}
                  </TutorialYearSquare>
                )
              })}
            </g>
            <mask id="tutorial-mask">
              <rect x="0" width={99} height={99} fill="white" fillOpacity={0.1} className="transition-opacity duration-700" />
              <rect className="peabody-focus" x={focusShapeSize.x} y={focusShapeSize.y} width={focusShapeSize.w} height={focusShapeSize.h} fill="white" />
              {/* <ellipse className="peabody-focus" cx={focusShapeSize.cx} cy={focusShapeSize.cy} rx={focusShapeSize.rx} ry={focusShapeSize.ry} fill="white"></ellipse> */}
            </mask>
            {/* <ellipse className="peabody-focus" cx={focusShapeSize.cx} cy={focusShapeSize.cy} rx={focusShapeSize.rx} ry={focusShapeSize.ry} fill="none" stroke="#db882a" strokeWidth="1"></ellipse> */}
            <rect className="peabody-focus" x={focusShapeSize.x} y={focusShapeSize.y} width={focusShapeSize.w} height={focusShapeSize.h} fill="white" fill="none" stroke="#db882a" strokeWidth="1" />
          </svg>
          <figcaption className="text-center p-6">An interactive explanation of the Peabody's Polish-American System {scrollProgress}</figcaption>
        </figure>
      </div>
      <div>
        {/* <TutorialKey highlightedElement={highlightedElement} /> */}
      </div>
    </div>
  )

  /*

    highlight center - <ellipse cx="25" cy="25" rx="20" ry="20" fill="none" stroke="#d90b0b" strokeWidth="1"></ellipse>
    hightlight single square - <ellipse cx="25" cy="25" rx="8" ry="8" fill="none" stroke="#d90b0b" strokeWidth="1"></ellipse>

  */
}