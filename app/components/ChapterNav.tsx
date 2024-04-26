import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import Consent from "~/components/consent/Consent";

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
  const { chapterFigures, visualizations, disclosure } =
    useContext(ChapterContext);
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
        return { offset: 0, offsetPercent: 0 };
      const { top } = element.getBoundingClientRect();
      const offsetPercent: number =
        ((top - (mainContentSize.topOffset || 0) + window.scrollY) /
          mainContentSize.height) *
        100;
      let offset: number =
        (offsetPercent * window.innerWidth) / 100 - iconWidth;
      if (offset < 0) {
        offset = iconWidth / 2;
      }
      return { offset, offsetPercent };
    };

    const anchorPositions: TAnchorPosition[] = [];
    if (chapterFigures) {
      for (const figure of chapterFigures) {
        const offsets = getOffset(`fig-${figure.fileName}`);
        if (offsets.offsetPercent > 0) {
          anchorPositions.push({
            type: "figure",
            hash: `fig-${figure.fileName}`,
            title: figure.title || figure.fileName,
            ...offsets,
          });
        }
      }
    }

    if (visualizations) {
      for (const viz of visualizations) {
        const offsets = getOffset(viz.id);
        anchorPositions.push({
          type: viz.type,
          hash: viz.id,
          title: viz.title,
          ...offsets,
        });
      }
    }

    const sortedAnchors = anchorPositions.sort(function (a, b) {
      return a.offset - b.offset;
    });

    setAnchorMap(sortedAnchors);
  }, [documentSize, mainContentSize, visualizations, chapterFigures]);

  return (
    <div
      className={`w-full z-[15] ${
        fixedNav ? "fixed" : "sticky"
      } top-7 md:top-12 bg-offwhite mx-auto`}
    >
      <nav className="h-8">
        <div
          className={`bg-black relative left-0 top-0 h-full`}
          style={{ width: `${progress * 100}%` }}
        ></div>
        {anchorMap.map((anchor, index) => {
          return (
            <span
              key={anchor.hash}
              className={`absolute max-lg:invisible -top-[0.01rem] transition text-xl text-${
                anchor.offsetPercent > progress * 100 ? "black" : "white"
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
        {disclosure && <Consent />}
      </nav>
    </div>
  );
}
