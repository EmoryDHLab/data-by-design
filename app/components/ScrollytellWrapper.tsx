import { useContext, useEffect, useRef } from "react";
import scrollama from "scrollama";
import type { ScrollamaInstance } from "scrollama";
import { ChapterContext } from "~/chapterContext";

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
  const { accentColor, docHeightState } = useContext(ChapterContext);
  const scrollerRef = useRef<ScrollamaInstance>(scrollama());
  const scrollerElementRef = useRef<HTMLDivElement | undefined>(undefined);

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
    scrollerRef.current?.resize();
  }, [docHeightState, scrollerRef, scrollerElementRef]);

  return (
    <div
      ref={scrollerElementRef}
      className={`bg-${bgColor ?? accentColor} ${widthClass ?? "w-screen"} ${className ?? ""}`}
      tabIndex={0}
    >
      {children }
    </div>
  )
};
