import type { ReactNode } from "react";

/**
 * The directional cue that opens (or pivots) a figure caption — "Left:",
 * "Top right:", "Clockwise from top left:" — set in the Du Bois face so it
 * reads as a label rather than part of the caption prose.
 *
 * Pass `newLine` for the second and later cues in a caption that covers
 * several images, so each one starts its own line.
 */
export default function CaptionDirection({
  children,
  newLine,
}: {
  children: ReactNode;
  newLine?: boolean;
}) {
  return (
    <>
      {newLine && <br />}
      <span className="font-power font-bold uppercase text-sm">{children}</span>
    </>
  );
}
