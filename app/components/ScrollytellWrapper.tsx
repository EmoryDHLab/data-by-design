import { useContext, useEffect, useRef } from "react";
import scrollama from "scrollama";
import type { ScrollamaInstance } from "scrollama";
import { ChapterContext } from "~/chapterContext";
import { useWindowSize } from "~/hooks";

interface Props {
  scrollProgress : float;
  setScrollProgress: Dispatch<SetStateAction<float>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  children: ReactNodeLike;
  container?: useRef<HTMLDivElement<undefined>>;
  parent?: useRef<HTMLDivElement<undefined>>;
  steps: useRef<HTMLDivElement<undefined>>;
  triggers: Array;
  className?: string;
  stepClassName?: string;
  widthClass?: string;
  bgColor?: string;
  debug?: boolean;
  scrollOffset?: float|string;
  threshold?: number;
}

export default function ScrollytellWrapper({
  children,
  container,
  parent,
  steps,
  triggers,
  scrollProgress,
  setScrollProgress,
  setCurrentStep,
  className,
  stepClassName,
  bgColor,
  debug,
  scrollOffset,
  threshold,
  widthClass
}: Props) {
  const { accentColor } = useContext(ChapterContext);
  const scrollerRef = useRef<ScrollamaInstance>(scrollama());
  const scrollerElementRef = useRef<HTMLDivElement | undefined>(undefined);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (steps.current?.children.length !== triggers.length) return;
    scrollerRef.current
      .setup({
        offset: scrollOffset ?? "60px",
        step: stepClassName ?? ".step",
        progress: true,
        debug,
        parent,
        container,
        threshold
      })
      .onStepProgress(({ index, progress }) => {
        if (setCurrentStep) setCurrentStep(index);
        setScrollProgress(index + progress);
      }
      );

    const scrollerRefCopy = scrollerRef.current;

    return () => scrollerRefCopy?.destroy();
  }, [
    debug,
    container,
    parent,
    scrollOffset,
    setCurrentStep,
    setScrollProgress,
    stepClassName,
    steps,
    threshold,
    triggers,
  ]);

  useEffect(() => {
    console.log("🚀 ~ file: ScrollytellWrapper.tsx:82 ~ useEffect ~ resize:")
    scrollerRef.current?.resize();
  }, [windowSize, scrollerRef, scrollerElementRef]);

  return (
    <div
      ref={scrollerElementRef}
      className={`bg-${bgColor ?? accentColor} ${widthClass ?? "w-screen"} ${className ?? ""}`}
    >
      {children }
    </div>
  )
};
