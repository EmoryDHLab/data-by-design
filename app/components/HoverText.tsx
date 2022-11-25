import type { ReactNodeLike } from "prop-types";
import type { HoverState } from "~/theme";
import { ChapterContext } from "~/theme";
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
      className={className ?? ""}
      onMouseEnter={() => setHoverState(hoverState)}
      onMouseLeave={() => setHoverState(undefined)}
    >
      {children}
    </span>
  );
}
