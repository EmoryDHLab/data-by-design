import { useContext, useEffect, useRef } from "react";
import scrollama from "scrollama";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import type { DecimalType, ScrollamaInstance } from "scrollama";
import type { Dispatch, SetStateAction, ReactNode, MutableRefObject } from "react";

interface Props {
  setScrollProgress: Dispatch<SetStateAction<number>>;
  setCurrentStep?: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  container?: ReactNode;
  parent?: ReactNode | HTMLElement;
  steps: MutableRefObject<any>;
  triggers: Array<ReactNode> | HTMLCollection;
  className?: string;
  stepClassName?: string;
  bgColor?: string;
  debug?: boolean;
  scrollOffset?: DecimalType;
  threshold?: 1|2|3|4;
}

export default function ScrollytellWrapper({
  children,
  container,
  parent,
  steps,
  triggers,
  setScrollProgress,
  setCurrentStep,
  className,
  stepClassName,
  bgColor,
  debug,
  scrollOffset,
  threshold=4,
}: Props) {
  const { accentColor } = useContext(ChapterContext);
  const scrollerRef = useRef<ScrollamaInstance>(scrollama());
  const scrollerElementRef = useRef<HTMLElement>(null);
  const windowSize = useResizeObserver();

  useEffect(() => {
    if (steps?.current?.children.length !== triggers.length) return;
    scrollerRef.current
      .setup({
        // @ts-ignore may be a Scrollama bug. offset does allow strings.
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
  }, [windowSize, scrollerRef, scrollerElementRef]);

  return (
    <section
      ref={scrollerElementRef}
      className={`bg-${bgColor ?? accentColor} ${className ?? ""}`}
    >
      {children }
    </section>
  )
}
