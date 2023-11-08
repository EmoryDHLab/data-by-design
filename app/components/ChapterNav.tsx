import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";

type TAnchorPosition = {
  offset: number;
  type: "figure" | "scrollytell" | "visualization";
  hash: string | undefined;
  title?: string;
};

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
  progress: number;
}
export function ChapterNav({ progress }: Props) {
  const { accentColor, accentTextColor, primaryTextColor, backgroundColor, figures, visualizations } = useContext(ChapterContext);
  const { documentSize } = useResizeObserver();
  const [anchorMap, setAnchorMap] = useState<TAnchorPosition[]>([]);

  useEffect(() => {
    if (!documentSize.height) return;
    const getOffset = (id: string) => {
      const element = document.getElementById(id);
      if (!element || !documentSize.height) return 0;
      // @ts-ignore
      const { top } = element.getBoundingClientRect();
      return ((top + window.scrollY) / documentSize.height) * 100;
    };

    const anchorPositions: TAnchorPosition[] = [];
    if (figures) {
      for (const figure of figures) {
        const offset = getOffset(`fig-${figure.fileName}`);
        if (offset > 0) {
          anchorPositions.push({
            offset,
            type: "figure",
            hash: `fig-${figure.fileName}`,
            title: figure.title || figure.fileName
          });
        }
      }
    }
    if (visualizations) {
      for (const viz of visualizations) {
        const offset = getOffset(viz.id);
        anchorPositions.push({
          offset,
          type: viz.type,
          hash: viz.id,
          title: viz.title
        });
      }
    }
    setAnchorMap(anchorPositions);
  }, [visualizations, setAnchorMap, documentSize]);

  return (
    <nav
      className={`w-full z-[15] sticky top-7 md:top-12 border-b-2 border-white bg-${accentColor} mx-auto h-6`}
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
              anchor.offset > progress * 100 ? accentTextColor : primaryTextColor
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
            <Tooltip id={`my-tooltip-${index}`} content={anchor.title} />
          </span>
        );
      })}
    </nav>
  );
}
