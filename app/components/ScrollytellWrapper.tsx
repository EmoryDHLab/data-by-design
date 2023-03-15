import { useContext, useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import type { ScrollamaInstance } from "scrollama";
import { ChapterContext } from "~/chapterContext";

interface Props {
  scrollProgress : float;
  setScrollProgress: Dispatch<SetStateAction<float>>;
  children: ReactNodeLike;
  steps: useRef<HTMLDivElement<undefined>>;
  triggers: Array;
  className?: string;
}

export default function ScrollytellWrapper({ children, steps, triggers, scrollProgress, setScrollProgress, className }: Props) {
  const { accentColor, docHeightState } = useContext(ChapterContext);
  const scrollerRef = useRef<ScrollamaInstance>(scrollama());
  const scrollerElementRef = useRef<HTMLDivElement | undefined>(undefined);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  useEffect(() => {
    if (steps.current?.children.length !== triggers.length) return;
    scrollerRef.current
      .setup({
        offset: "60px",
        step: ".step",
        progress: true,
      })
      .onStepProgress(({ index, progress }) =>
        setScrollProgress(index + progress)
      );

    const scrollerRefCopy = scrollerRef.current;

    return () => scrollerRefCopy?.destroy();
  }, [setScrollProgress, steps, triggers]);

  useEffect(() => {
    scrollerRef.current?.resize();
    setOffsetTop(scrollerElementRef.current?.offsetTop + 60);
  }, [docHeightState, setOffsetTop, scrollerRef, scrollerElementRef]);

  const keyUp = (code) => {
    if (scrollProgress < triggers.length) {
      switch (code) {
        case "ArrowRight":
        case "ArrowDown":
          window.scrollBy({left: 0, top: window.innerHeight, behavior: 'smooth'});
          break;
        case "ArrowLeft":
        case "ArrowUp":
          window.scrollBy({left: 0, top: -Math.abs(window.innerHeight), behavior: 'smooth'});
          break;
        case "Tab":
          window.scrollBy({ left: 0, top: -Math.abs(window.innerHeight * scrollProgress)});
      }
    }
  };

  return (
    <div
      ref={scrollerElementRef}
      className={`bg-${accentColor} max-w-[100vw] top-[90px] ${className ?? ""}`}
      tabIndex={0}
      // onFocus={() => {
      //   window.scrollTo({top: offsetTop, left: 0, block: "start", inline: "nearest"});
      //   setScrollProgress(0);
      // }}
      // onKeyUp={(event) => { event.preventDefault(); keyUp(event.code)}}
      >
      {children }
    </div>
  )
};
