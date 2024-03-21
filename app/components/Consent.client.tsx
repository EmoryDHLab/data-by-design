import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import Toggle from "./Toggle";

export default function Consent() {
  const {
    hideSensitiveState,
    setHideSensitiveState,
    accentColor,
    backgroundColor,
  } = useContext(ChapterContext);

  const { documentSize } = useResizeObserver();

  const [small, setSmall] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  try {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([record]) => {
          const { intersectionRatio } = record;
          if (intersectionRatio < 1) {
            setSmall(true);
          } else {
            setSmall(false);
          }
        },
        { threshold: [1], root: null, rootMargin: "0px" }
      );

      const observee = document.querySelector(".first-paragraph");

      if (observee) observer.observe(observee);

      return () => {
        observer.disconnect();
      };
    }, [setSmall, documentSize]);
  } catch (error) {
    console.error("file: Consent.tsx:38 ~ useEffect ~ error:", error);
  }

  if (setHideSensitiveState) {
    return (
      <div
        ref={containerRef}
        className={`w-full border-2 border-slate-400 md:top-2 ${
          small ? "pt-0" : "pt-1 md:pt-5"
        } z-10 bg-${accentColor}`}
      >
        <p
          className={`text-center w-full text-sm md:text-base ${
            small ? "hidden" : "block"
          }`}
        >
          <strong>Note:</strong> This chapter deals with images of slavery.
        </p>
        <p
          className={`md:text-center text-xs md:text-lg transition-all duration-1000 md:mx-0 pt-0 my-2 ${
            small ? "md:w-1 mx-3 md:mx-16 md:scale-75" : "md:w-full"
          }`}
          style={{ whiteSpace: "nowrap" }}
        >
          <Toggle
            checked={!hideSensitiveState}
            onChange={() => setHideSensitiveState(!hideSensitiveState)}
            colorOn={backgroundColor}
            colorOff={accentColor}
            screenReaderMsg="This chapter contains graphic images of slavery. "
          >
            Show sensitive images
          </Toggle>
        </p>
      </div>
    );
  }

  return <></>;
}
