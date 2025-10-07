import { ChapterContext } from "~/chapterContext";
import { useContext } from "react";
import type { ReactNode } from "react";
import type { HoverState } from "~/chapterContext";

interface Props {
  className?: string;
  children?: ReactNode;
  hoverState: HoverState;
}

export default function HoverText({ className, children, hoverState }: Props) {
  const { setHoverState } = useContext(ChapterContext);
  if (setHoverState) {
    return (
      <>
        <span
          className={`hidden md:inline underline-offset-4
          cursor-pointer font-bold underline decoration-solid decoration-powerPrimary decoration-2 hover:decoration-4 hover-bg-powerSecondary ${
            className ?? ""
          }`}
          onMouseEnter={() => setHoverState(hoverState)}
          onFocus={() => setHoverState(hoverState)}
          onMouseLeave={() => setHoverState(undefined)}
          onBlur={() => setHoverState(undefined)}
          tabIndex={0}
          role="link"
        >
          {children}
        </span>
        <span className="inline md:hidden">{children}</span>{" "}
      </>
    );
  }

  return <></>;
}
