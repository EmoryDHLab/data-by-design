import { useContext, useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import { ChapterContext } from "~/chapterContext";
import { useResizeObserver } from "~/hooks";
import type { DecimalType, ScrollamaInstance } from "scrollama";
import type {
  Dispatch,
  SetStateAction,
  ReactNode,
  MutableRefObject,
} from "react";
import { classNames } from "~/utils";

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
  threshold?: 1 | 2 | 3 | 4;
  id?: string;
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
  threshold = 4,
  id,
}: Props) {
  const { backgroundColor } = useContext(ChapterContext);
  const scrollerRef = useRef<ScrollamaInstance | undefined>(undefined);
  const scrollerElementRef = useRef<HTMLDivElement>(null);
  const { documentSize } = useResizeObserver();
  const [setupFailed, setSetupFailed] = useState<boolean>(false);
  const [shouldRetry, setShouldRetry] = useState<boolean>(false);

  useEffect(() => {
    if (
      steps?.current?.children.length !== triggers.length ||
      scrollerRef.current
    )
      return;
    try {
      scrollerRef.current = scrollama();
      scrollerRef.current
        .setup({
          // @ts-ignore may be a Scrollama bug. offset does allow strings.
          offset: "60px",
          step: stepClassName ?? ".step",
          progress: true,
          debug,
          parent,
          container,
          threshold,
        })
        .onStepProgress(({ index, progress }) => {
          if (setCurrentStep) setCurrentStep(index);
          setScrollProgress(index + progress);
        });
      setSetupFailed(false);
    } catch (error) {
      scrollerRef.current = undefined;
      setSetupFailed(true);
    }

    return () => {
      scrollerRef.current?.destroy();
      scrollerRef.current = undefined;
    };
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
    shouldRetry,
  ]);

  useEffect(() => {
    // Mostly a bug when navigating from error page.
    setShouldRetry(setupFailed);
  }, [setupFailed]);

  useEffect(() => {
    try {
      scrollerRef.current?.resize();
    } catch (error) {
      return;
    }
  }, [documentSize]);

  return (
    <div
      id={id}
      ref={scrollerElementRef}
      className={classNames(
        `bg-${bgColor ?? backgroundColor}`,
        className,
        "my-8 md:my-12 relative z-10"
      )}
    >
      {children}
    </div>
  );
}
