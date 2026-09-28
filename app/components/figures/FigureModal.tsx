import { useContext, useLayoutEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { classNames } from "~/utils";
import FigureLightbox from "./FigureLightbox";
import type { TFigure } from "~/types/figureType";
import type { HTMLAttributes, ReactNode } from "react";

interface Props {
  figure: TFigure;
  className?: string;
  children?: ReactNode;
  id: string;
  ignoreColumn: boolean;
}

export default function FigureModal({
  children,
  figure,
  className,
  id,
  ignoreColumn,
}: Props) {
  const { hideSensitiveState } = useContext(ChapterContext);
  const [isOpen, setIsOpen] = useState(false);
  const [inColumn, setInColumn] = useState(false);
  const figureRef = useRef<HTMLDivElement>(null);

  // A figure rendered directly inside a two-up Column layout gets extra
  // left margin. Column marks itself with data-bias-column for this check.
  useLayoutEffect(() => {
    if (ignoreColumn) {
      setInColumn(false);
    } else {
      setInColumn(
        figureRef.current?.parentElement?.hasAttribute("data-bias-column") ??
          false,
      );
    }
  }, []);

  const isInteractive = !(hideSensitiveState && figure.sensitive);
  const interactiveProps: HTMLAttributes<HTMLDivElement> = isInteractive
    ? {
        role: "button",
        tabIndex: 0,
        onClick: (event) => {
          const target = event.target as HTMLElement;
          setIsOpen(!target.classList.contains("modal-backdrop"));
        },
        onKeyDown: (event) => {
          if (event.key === "Enter") setIsOpen(true);
        },
      }
    : {};

  return (
    <div
      ref={figureRef}
      id={id}
      className={classNames(
        className,
        "figure-block md:mx-auto relative flex-shrink",
        inColumn ? "md:ml-24" : "",
      )}
      {...interactiveProps}
    >
      {children}
      <FigureLightbox
        figure={figure}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
