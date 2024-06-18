import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import { Tooltip } from "react-tooltip";
import ConsentToggle from "./Toggle";

export default function Consent() {
  const { setHideSensitiveState } = useContext(ChapterContext);

  const { windowSize } = useResizeObserver();

  if (setHideSensitiveState && windowSize.height) {
    return (
      <div
        className={`absolute z-50 right-8 mr-2 text-offblack pointer-events-auto`}
        // 48 = offset for navbar
        // 56 = height of icon (h-14, 3.5rem, 56px)
        // 32 = offset to match right-8 (2rem, 32px)
        style={{ top: `${windowSize.height - (48 + 56 + 32)}px` }}
      >
        <ConsentToggle className="h-14 w-14" />
        <Tooltip id="consent-toggle" />
      </div>
    );
  }

  return <></>;
}
