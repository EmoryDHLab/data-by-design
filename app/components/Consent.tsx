import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import Toggle from "./Toggle";

export default function Consent() {
  const {
    hideSensitiveState,
    setHideSensitiveState,
    accentColor,
    backgroundColor,
    docHeightState,
  } = useContext(ChapterContext);

  const [small, setSmall] = useState<boolean>(false);

  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([record]) => {
        const { intersectionRatio } = record;
        if (intersectionRatio < 1) {
          setSmall(true)
        } else {
          setSmall(false)
        }
    }, { threshold: [1] });

    const observee = containerRef.current.nextSibling.firstChild;

    observer.observe(observee);

    return () => {
      observer.disconnect(observee);
    }

  }, [setSmall, docHeightState]);

  return (
    <div ref={containerRef} className={`w-full border-b-2 border-slate-400 sticky -top-4 grid-wrapper mx-12 md:mx-24 md:py-5 text-center z-10 bg-${accentColor}`}>
      <p>
        <strong>Note:</strong> This chapter deals with images of slavery.
      </p>
      <p className={`w-full transition-transform duration-700 ${small ? "-translate-x-3/4 scale-75 h-1" : ""}`}>
        <Toggle
          checked={hideSensitiveState}
          onChange={setHideSensitiveState}
          colorOn={backgroundColor}
          colorOff={accentColor}
          screenReaderMsg="Consent to descriptions of images of slavery."
        />
        <span className="ml-2">Hide sensitive images</span>
      </p>
    </div>
  );
};
