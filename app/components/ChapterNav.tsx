import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";

type TAnchorPosition = {
  offset: number;
  offsetPercent: number;
  type: "figure" | "scrollytell" | "visualization" | "figures";
  hash: string | undefined;
  title?: string;
};

const icon = (type: string) => {
  switch (type) {
    case "scrollytell":
      return "g";
    case "figure":
    case "figures":
      return "a";
    case "visualization":
      return "h";
    default:
      return "i";
  }
};

const iconWidth = 13;

interface Props {
  progress: number;
  fixedNav: boolean;
}
export function ChapterNav({ progress, fixedNav }: Props) {
  const {
    accentColor,
    accentTextColor,
    primaryTextColor,
    backgroundColor,
    figures,
    visualizations,
  } = useContext(ChapterContext);
  const { documentSize, mainContentSize } = useResizeObserver();
  const [anchorMap, setAnchorMap] = useState<TAnchorPosition[]>([]);

  useEffect(() => {
    if (!documentSize.height) return;
    const getOffset = (id: string) => {
      const element = document.getElementById(id);
      const mainElement = document.getElementById("main-content");
      if (
        !element ||
        !documentSize.height ||
        !mainElement ||
        !mainContentSize.height
      )
        return 0;
      // @ts-ignore
      const { top } = element.getBoundingClientRect();
      return (
        ((top - (mainContentSize.topOffset || 0) + window.scrollY) /
          mainContentSize.height) *
        100
      );
    };

    const anchorPositions: TAnchorPosition[] = [];
    if (figures) {
      for (const figure of figures) {
        const offsetPercent = getOffset(`fig-${figure.fileName}`);
        if (offsetPercent > 0) {
          anchorPositions.push({
            offsetPercent,
            offset: (offsetPercent * window.innerWidth) / 100 - iconWidth,
            type: "figure",
            hash: `fig-${figure.fileName}`,
            title: figure.title || figure.fileName,
          });
        }
      }
    }

    if (visualizations) {
      for (const viz of visualizations) {
        const offsetPercent = getOffset(viz.id);
        anchorPositions.push({
          offsetPercent,
          offset: (offsetPercent * window.innerWidth) / 100 - iconWidth,
          type: viz.type,
          hash: viz.id,
          title: viz.title,
        });
      }
    }

    const sortedAnchors = anchorPositions.sort(function (a, b) {
      return a.offset - b.offset;
    });

    setAnchorMap(sortedAnchors);
  }, [visualizations, setAnchorMap, documentSize]);

  return (
    <nav
      className={`w-full z-[15] ${
        fixedNav ? "fixed" : "sticky"
      } top-7 md:top-12 border-b-2 border-white bg-${accentColor} mx-auto h-6`}
    >
      <div
        className={`bg-${backgroundColor} relative left-0 top-0 h-full`}
        style={{ width: `${progress * 100}%` }}
      ></div>

      {anchorMap.map((anchor, index) => {
        return (
          <span
            key={anchor.hash}
            className={`absolute max-lg:invisible -top-[0.01rem] transition text-${
              anchor.offsetPercent > progress * 100
                ? accentTextColor
                : primaryTextColor
            }`}
            style={{ left: `${anchor.offset}px` }}
          >
            <Link
              to={`#${anchor.hash}`}
              className="font-icons"
              data-tooltip-id={`my-tooltip-${index}`}
              data-tooltip-html={anchor.title}
            >
              {icon(anchor.type)}
            </Link>
            <Tooltip id={`my-tooltip-${index}`} />
          </span>
        );
      })}
    </nav>
  );
}
