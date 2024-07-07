import scrollama from "scrollama";
import { useContext, useEffect, useRef, useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { ChapterNav } from "~/components/ChapterNav";
import { useResizeObserver } from "~/hooks";
import type { ReactNode } from "react";
import type { ScrollamaInstance } from "scrollama";
import FootnoteToggle from "../FootnoteToggle";
import { ChapterContext } from "~/chapterContext";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ChapterBody({ children, className }: Props) {
  const scrollerRef = useRef<ScrollamaInstance | undefined>(undefined);
  const [chapterProgressState, setChapterProgressState] = useState<number>(0.0);
  const [fixedNav, setFixedNav] = useState<boolean>(false);
  const { mainContentSize, windowSize } = useResizeObserver();
  const { backgroundColor } = useContext(ChapterContext);

  useEffect(() => {
    if (!windowSize.height) return;

    if (scrollerRef.current) {
      // The Scrollama instance dies when the overall document height changes
      // like when images are lazyloaded. We could, and maybe should, make
      // the image containers the size of the image. Maybe later...
      // https://github.com/russellsamora/scrollama/issues/145
      scrollerRef.current.resize();
    } else {
      scrollerRef.current = scrollama();
      scrollerRef.current
        .setup({
          step: ".chapter-body",
          progress: true,
          debug: false,
          // @ts-ignore Maybe a bug in Scrollama type. String is acceptable.
          offset: `${mainContentSize.topOffset}px`,
        })
        .onStepProgress(({ progress }) => setChapterProgressState(progress));
    }

    return () => {
      scrollerRef.current?.destroy();
      scrollerRef.current = undefined;
    };
  }, [mainContentSize, windowSize]);

  useEffect(() => {
    setFixedNav(chapterProgressState > 0.98);
  }, [chapterProgressState]);

  return (
    <main
      className={`chapter-body w-screen selection:bg-${backgroundColor} selection:text-white ${
        className ?? ""
      }`}
      id="main-content"
    >
      <ClientOnly>
        {() => (
          <ChapterNav progress={chapterProgressState} fixedNav={fixedNav} />
        )}
      </ClientOnly>
      <FootnoteToggle />
      {children}
    </main>
  );
}
