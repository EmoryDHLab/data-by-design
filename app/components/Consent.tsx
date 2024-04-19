import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import EyeClosed from "./icons/EyeClosed";
import EyeOpen from "./icons/EyeOpen";
import { Tooltip } from "react-tooltip";

export default function Consent() {
  const {
    hideSensitiveState,
    setHideSensitiveState,
    accentColor,
    backgroundColor,
  } = useContext(ChapterContext);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { windowSize } = useResizeObserver();

  const renderButton = () => {
    if (hideSensitiveState) {
      return (
        <EyeClosed className={`text-off${isHovered ? "white" : "black"}`} />
      );
    }
    return <EyeOpen className={`text-off${isHovered ? "white" : "black"}`} />;
  };

  if (setHideSensitiveState && windowSize.height) {
    return (
      <div
        className={`absolute z-50 right-0 mr-2 text-offblack pointer-events-auto`}
        style={{ top: `${windowSize.height - 92}px` }}
      >
        <button
          className={`inline-flex items-center justify-center border h-8 w-8 border-offblack rounded-full bg-${accentColor} hover:bg-${backgroundColor}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setHideSensitiveState(!hideSensitiveState)}
          data-tooltip-id="consent-toggle"
          data-tooltip-content={`${
            hideSensitiveState ? "Show" : "Block"
          } sensitive images.`}
        >
          {renderButton()}
        </button>
        <Tooltip id="consent-toggle" />
      </div>
    );
  }

  return <></>;
}
