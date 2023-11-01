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

  const containerRef = useRef<HTMLElement>(null);

  try {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([record]) => {
          const { intersectionRatio } = record;
          if (intersectionRatio < 1) {
            setSmall(true)
          } else {
            setSmall(false)
          }
      }, { threshold: [1], root: null, rootMargin: "0px" });

      const observee = containerRef.current?.nextElementSibling?.firstElementChild;

      if (observee) observer.observe(observee);

      return () => {
        observer.disconnect();
      }

    }, [setSmall, documentSize]);
  } catch (error) {
    console.log("🚀 ~ file: Consent.tsx:38 ~ useEffect ~ error:", error)
  }

  if (setHideSensitiveState) {
    return (
      <section ref={containerRef} className={`w-full border-b-2 border-slate-400 sticky -top-4 mx-12 md:mx-24 md:pt-5 z-10 bg-${accentColor}`}>
        <p className="text-center w-full">
          <strong>Note:</strong> This chapter deals with images of slavery.
        </p>
        <p className={`text-center transition-all duration-1000 mx-0 pt-3 md:pt-0 ${small ? "md:w-1 md:mx-16 md:scale-75" : "md:w-full"}`} style={{ whiteSpace: "nowrap"}}>
          <Toggle
            checked={!hideSensitiveState}
            onChange={() => setHideSensitiveState(!hideSensitiveState)}
            colorOn={backgroundColor}
            colorOff={accentColor}
            screenReaderMsg="Consent to descriptions of images of slavery."
          >
            Show sensitive images
          </Toggle>
        </p>
      </section>
    );
  }

  return <></>
}
