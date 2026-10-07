import type { ReactNode } from "react";

/**
 * The directional cue that opens (or pivots) a figure caption — "Left:",
 * "Top right:", "Clockwise from top left:" — set in the Du Bois face so it
 * reads as a label rather than part of the caption prose.
 *
 * Pass `newLine` for the second and later cues in a caption that covers
 * several images, so each one starts its own line, a little below the last.
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
      {/* A block spacer rather than a <br>, which can't take a margin: it
          breaks the line and leaves a little room between one image's text
          and the next. */}
      {newLine && <span className="block h-2" aria-hidden />}
      <span className="font-power font-bold uppercase text-sm">{children}</span>
    </>
  );
}
