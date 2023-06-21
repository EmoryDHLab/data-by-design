import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";

const icon = (type) => {
  switch (type) {
    case "scrollytell":
      return "g"
    case "figure":
      return "a"
    case "visualization":
      return "h"
    default:
      return "i"
  };
};

interface Props {
  anchors: object;
  progress: float;
};

export function ChapterNav({ anchors, progress }: Props) {
  const { accentColor, backgroundColor } = useContext(ChapterContext);
  const [ anchorMap, setAnchorMap ] = useState<array>([]);
  const { documentSize } = useResizeObserver();

  useEffect(() => {
    const anchorPositions = [];
    if (anchors) {
      for (const anchor of Object.keys(anchors)) {
        const { top } = anchors[anchor].ref.current.getBoundingClientRect();
        // TODO: This is basing the calculations on the overall document. It
        // would be better to base it on the just the chapter content.
        // TODO: we will need a different calculation for mobile.
        const offset = (top + window.scrollY) / documentSize.height * 100;
        anchorPositions.push({
          offset,
          type: anchors[anchor].type,
          hash: anchors[anchor].ref.current.id,
          title: anchors[anchor].figure?.title,
        });
      }
    }
    setAnchorMap(anchorPositions);
  }, [anchors, setAnchorMap, documentSize]);

  return (
    <nav className={`w-full md:w-[75vw] z-10 sticky top-7 md:top-12 border-b-2 border-white bg-${accentColor} mx-auto h-6`}>
      <div className={`bg-${backgroundColor} relative left-0 top-0 h-full`} style={{width: `${progress * 100}%`}}></div>

      <div className="relative left-0 -top-6 h-full">
        {anchorMap.map((anchor, index) => {
          return (
            <span
              key={index}
              className={`absolute transition text-${anchor.offset > progress * 100 ? "black" : "white"}`}
              style={{left: `${anchor.offset}%`}}>
              <Link to={`#${anchor.hash}`} className="font-icons" data-tooltip-id={`my-tooltip-${index}`}>
                {icon(anchor.type)}
              </Link>
              <Tooltip
                id={`my-tooltip-${index}`}
                content={anchor.title ?? anchor.hash}
              />
            </span>
          )
        })}
      </div>
    </nav>
  )
}
