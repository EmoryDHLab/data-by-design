import scrollama from "scrollama";
import { useContext, useEffect, useRef, useState } from "react";
import ClientOnly from "~/components/ClientOnly";
import { ChapterNav } from "~/components/layout/ChapterNav";
import { useResizeObserver } from "~/hooks";
import FootnoteToggle from "../FootnoteToggle";
import { ChapterContext } from "~/chapterContext";
import type { ReactNode } from "react";
import type { ScrollamaInstance } from "scrollama";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ChapterBody({ children, className }: Props) {
  const scrollerRef = useRef<ScrollamaInstance | undefined>(undefined);
  const containerRef = useRef<HTMLElement>(null);
  const [chapterProgressState, setChapterProgressState] = useState<number>(0.0);
  const [fixedNav, setFixedNav] = useState<boolean>(false);
  const { mainContentSize, windowSize } = useResizeObserver();
  const { backgroundColor } = useContext(ChapterContext);
  const [setupFailed, setSetupFailed] = useState<boolean>(false);
  const [shouldRetry, setShouldRetry] = useState<boolean>(false);

  useEffect(() => {
    if (!windowSize.height) return;

    if (scrollerRef.current) {
      // The Scrollama instance dies when the overall document height changes
      // like when images are lazyloaded. We could, and maybe should, make
      // the image containers the size of the image. Maybe later...
      // https://github.com/russellsamora/scrollama/issues/145
      scrollerRef.current.resize();
    } else if (!scrollerRef.current && containerRef.current) {
      scrollerRef.current = scrollama();
      try {
        scrollerRef.current
          .setup({
            step: `#${containerRef.current.id}`,
            progress: true,
            debug: false,
            // @ts-expect-error Maybe a bug in Scrollama type. String is acceptable.
            offset: `${mainContentSize.topOffset}px`,
          })
          .onStepProgress(({ progress }) => setChapterProgressState(progress));
      } catch {
        scrollerRef.current = undefined;
        setSetupFailed(true);
      }
    }

    return () => {
      scrollerRef.current?.destroy();
      scrollerRef.current = undefined;
    };
  }, [mainContentSize, windowSize, shouldRetry]);

  useEffect(() => {
    // Mostly a bug when navigating from error page.
    setShouldRetry(setupFailed);
  }, [setupFailed]);

  useEffect(() => {
    setFixedNav(chapterProgressState > 0.98);
  }, [chapterProgressState]);

  return (
    <main
      ref={containerRef}
      className={`chapter-body w-screen selection:bg-${backgroundColor} selection:text-white ${
        className ?? ""
      }`}
      id="main-content"
    >
      <ClientOnly>
        <ChapterNav progress={chapterProgressState} fixedNav={fixedNav} />
      </ClientOnly>
      <FootnoteToggle />
      <div className="space-y-24 md:space-y-32">{children}</div>
    </main>
  );
}
