import { Link } from "react-router";
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

    const computeAnchors = () => {
      const mainElement = document.getElementById("main-content");
      if (!mainElement || !mainElement.offsetHeight) return;

      const offset = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return null;
        const offsetPercent =
          (element.offsetTop / mainElement.offsetHeight) * 100;
        let offsetPx =
          (offsetPercent * document.documentElement.clientWidth) / 100 -
          iconWidth;
        if (offsetPx < 0) offsetPx = iconWidth / 2;
        return { offset: offsetPx, offsetPercent };
      };

      const next: TAnchorPosition[] = [];
      if (chapterFigures) {
        for (const figure of chapterFigures) {
          const offsets = offset(`fig-${figure.fileName}`);
          if (offsets && offsets.offsetPercent > 0) {
            next.push({
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
          const offsets = offset(viz.id);
          if (offsets && offsets.offsetPercent > 0) {
            next.push({
              type: viz.type,
              hash: viz.id,
              title: viz.title,
              ...offsets,
            });
          }
        }
      }
      next.sort((a, b) => a.offset - b.offset);

      setAnchorMap((prev) => {
        if (
          prev.length === next.length &&
          prev.every(
            (p, i) =>
              p.hash === next[i].hash &&
              Math.abs(p.offset - next[i].offset) < 0.5
          )
        ) {
          return prev;
        }
        return next;
      });
    };

    let pending: number | undefined;
    const schedule = () => {
      if (pending !== undefined) cancelAnimationFrame(pending);
      pending = requestAnimationFrame(computeAnchors);
    };

    schedule();

    const mainElement = document.getElementById("main-content");
    const observer =
      mainElement && typeof MutationObserver !== "undefined"
        ? new MutationObserver(schedule)
        : null;
    observer?.observe(mainElement!, {
      childList: true,
      subtree: true,
    });

    const onLoad = () => schedule();
    window.addEventListener("load", onLoad);

    if ("fonts" in document) {
      document.fonts.ready.then(schedule).catch(() => {});
    }

    return () => {
      if (pending !== undefined) cancelAnimationFrame(pending);
      observer?.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [documentSize, mainContentSize, visualizations, chapterFigures]);

  return (
    <div
      className={`w-full z-[15] ${
        fixedNav ? "fixed" : "sticky"
      } top-0 bg-offwhite mx-auto`}
    >
      <nav className="h-4 md:h-8">
        <div
          className={`bg-black relative left-0 top-0 h-full`}
          style={{ width: `${progress * 100}%` }}
        ></div>
        {anchorMap.map((anchor, index) => {
          return (
            <span
              key={anchor.hash}
              className={`absolute max-lg:invisible -top-[0.01rem] transition-all duration-1000 text-xl text-${
                anchor.offsetPercent > progress * 100 ? "black" : "white"
              }`}
              style={{ left: `${anchor.offset}px` }}
            >
              <Link
                to={`#${anchor.hash}`}
                className="font-icons"
                data-tooltip-id={`my-tooltip-${index}`}
                data-tooltip-html={anchor.title}
                data-tooltip-class-name="z-50"
              >
                {icon(anchor.type)}
              </Link>
              <Tooltip id={`my-tooltip-${index}`} />
            </span>
          );
        })}
      </nav>
      {disclosure && <Consent />}
    </div>
  );
}
