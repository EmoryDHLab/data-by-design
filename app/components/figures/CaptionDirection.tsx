import type { ReactNode } from "react";

/**
 * The directional cue that opens (or pivots) a figure caption — "Left:",
 * "Top right:", "Clockwise from top left:" — set in the Du Bois face so it
 * reads as a label rather than part of the caption prose.
 */
export default function CaptionDirection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-power font-bold uppercase text-sm">{children}</span>
  );
}
