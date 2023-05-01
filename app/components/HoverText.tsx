import type { ReactNodeLike } from "prop-types";
import type { HoverState } from "~/chapterContext";
import { ChapterContext } from "~/chapterContext";
import { useContext } from "react";

interface Props {
  className?: string;
  children?: ReactNodeLike;
  hoverState: HoverState;
}

export default function HoverText({ className, children, hoverState }: Props) {
  const { setHoverState } = useContext(ChapterContext);
  return (
    <span
      className={`cursor-pointer font-medium underline decoration-solid decoration-duboisPrimary decoration-1 hover:decoration-2 hover-bg-duboisSecondary ${
        className ?? ""
      }`}
      onMouseEnter={() => setHoverState(hoverState)}
      onFocus={() => setHoverState(hoverState)}
      onMouseLeave={() => setHoverState(undefined)}
      onBlur={() => setHoverState(undefined)}
      tabIndex={0}
    >
      {children}
    </span>
  );
}
