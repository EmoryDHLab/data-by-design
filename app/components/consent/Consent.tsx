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
        className={`absolute z-50 md:hidden lg:block right-5 md:right-6 lg:right-14 top-[calc(100vh-6rem)] md:top-[calc(100vh-8rem)] lg:top-[calc(100vh-10rem)] text-offblack pointer-events-auto`}
      >
        <ConsentToggle className="h-12 w-12 md:h-16 md:w-16 lg:h-18 lg:w-18 p-1.5" />
        <Tooltip id="consent-toggle" />
      </div>
    );
  }

  return <></>;
}
