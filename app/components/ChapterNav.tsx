import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import type { TAnchors } from "~/chapterContext";

type TAnchorPosition = {
  offset: number,
  type: "figure" | "scrollytell" | "visualization",
  hash: string | undefined,
}

const icon = (type: string) => {
  switch (type) {
    case "scrollytell":
      return "g";
    case "figure":
      return "a";
    case "visualization":
      return "h";
    default:
      return "i";
  }
};

interface Props {
  anchors: TAnchors;
  progress: number;
}
export function ChapterNav({ anchors, progress }: Props) {
  const { accentColor, backgroundColor } =
    useContext(ChapterContext);
  const { documentSize } = useResizeObserver();
  const [anchorMap, setAnchorMap] = useState<TAnchorPosition[]>([]);

  useEffect(() => {
    console.log("🚀 ~ file: ChapterNav.tsx:45 ~ useEffect ~ documentSize.height:", documentSize)
    if (!documentSize.height) return;
    const anchorPositions: TAnchorPosition[] = [];
    if (anchors) {
      for (const anchor of Object.keys(anchors)) {
        // @ts-ignore
        const { top } = anchors[anchor].ref.current.getBoundingClientRect();
        // The 392 is the combined hight of the chapter title (320px),
        // the navbar (48px), and the chapter nax (24px)
        // TODO: we will need a different calculation for mobile.
        const offset = ((top + window.scrollY) / documentSize.height) * 100;
        anchorPositions.push({
          offset,
          type: anchors[anchor].type,
          hash: anchors[anchor].ref?.current?.id || "",
        });
      }
    }
    setAnchorMap(anchorPositions);
  }, [anchors, setAnchorMap, documentSize]);

  return (
    <nav
      className={`w-full z-10 sticky top-7 md:top-12 border-b-2 border-white bg-${accentColor} mx-auto h-6`}
    >
      <div
        className={`bg-${backgroundColor} relative left-0 top-0 h-full`}
        style={{ width: `${progress * 100}%` }}
      ></div>

      {anchorMap.map((anchor, index) => {
        const iconWidth = 13.14;
        const iconOffset = iconWidth * index + "px";
        return (
          <span
            key={index}
            className={`relative max-lg:invisible -top-6 transition text-${
              anchor.offset > progress * 100 ? "black" : "white"
            }`}
            style={{ left: `calc(${anchor.offset}% - ${iconOffset})` }}
          >
            <Link
              to={`#${anchor.hash}`}
              className="font-icons"
              data-tooltip-id={`my-tooltip-${index}`}
            >
              {icon(anchor.type)}
            </Link>
            <Tooltip id={`my-tooltip-${index}`} content="Image Title" />
          </span>
        );
      })}
    </nav>
  );
}
