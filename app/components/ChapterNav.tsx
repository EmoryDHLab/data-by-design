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
  progress: float;
};

export function ChapterNav({ progress }: Props) {
  const { accentColor, backgroundColor, anchorsState } = useContext(ChapterContext);
  // const [ anchorMap, setAnchorMap ] = useState<array>([]);
  const { documentSize } = useResizeObserver();

  // useEffect(() => {
  //   const anchorPositions = [];
  //   if (anchors) {
  //     for (const anchor of Object.keys(anchors)) {
  //       const { top } = anchors[anchor].ref.current.getBoundingClientRect();
  //       // TODO: This is basing the calculations on the overall document. It
  //       // would be better to base it on the just the chapter content.
  //       // TODO: we will need a different calculation for mobile.
  //       const offset = (top + window.scrollY) / documentSize.height * 100;
  //       anchorPositions.push({
  //         offset,
  //         type: anchors[anchor].type,
  //         hash: anchors[anchor].ref.current.id,
  //         title: anchors[anchor].figure?.title,
  //       });
  //     }
  //   }
  //   setAnchorMap(anchorPositions);
  // }, [anchors, setAnchorMap, documentSize]);

  const calcOffset = (element) => {
    const { top } = element.getBoundingClientRect();
    return (top + window.scrollY) / documentSize.height * 100;
  }

  return (
    <nav className={`w-full md:w-[75vw] z-10 sticky top-7 md:top-12 border-b-2 border-white bg-${accentColor} mx-auto h-6`}>
      <div className={`bg-${backgroundColor} relative left-0 top-0 h-full`} style={{width: `${progress * 100}%`}}></div>

      <div className="relative left-0 -top-6 h-full">
        {anchorsState.map((anchor, index) => {
          // TODO: Break out into component.
          const offset = calcOffset(anchor.ref.current);
          const iconWidth = 13.14;
          const iconOffset = (iconWidth * index) + "px";
          return (
            <span
              key={`nav-link-to-${anchor.figure.fileName}`}
              className={`absolute transition text-${offset > progress * 100 ? "black" : "white"}`}
              style={{left: `calc(${anchor.offset}% - ${iconOffset})`}}>
              <Link to={`#${anchor.figure.fileName}`} className="font-icons" data-tooltip-id={`my-tooltip-${index}`}>
                {icon(anchor.type)}
              </Link>
              <Tooltip
                id={`my-tooltip-${index}`}
                content={anchor.figure.title ?? anchor.figure.fileName}
              />
            </span>
          )
        })}
      </div>
    </nav>
  )
}
