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
        className={`absolute z-50 right-0 mr-2 text-offblack pointer-events-auto`}
        style={{ top: `${windowSize.height - 92}px` }}
      >
        <ConsentToggle />
        <Tooltip id="consent-toggle" />
      </div>
    );
  }

  return <></>;
}
