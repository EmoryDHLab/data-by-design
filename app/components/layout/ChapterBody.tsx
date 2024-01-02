import scrollama from "scrollama";
import { useEffect, useRef, useState } from "react";
import { ClientOnly } from "remix-utils";
import { ChapterNav } from "~/components/ChapterNav";
import { useResizeObserver } from "~/hooks";
import type { ReactNode } from "react";
import type { ScrollamaInstance } from "scrollama";

interface Props {
  children: ReactNode;
}

export default function ChapterBody({ children }: Props) {
  const scrollerRef = useRef<ScrollamaInstance | undefined>(undefined);
  const [chapterProgressState, setChapterProgressState] = useState<number>(0.0);
  const [fixedNav, setFixedNav] = useState<boolean>(false);
  const { mainContentSize, windowSize } = useResizeObserver();

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
  }, [mainContentSize]);

  useEffect(() => {
    setFixedNav(chapterProgressState > 0.98);
  }, [chapterProgressState]);


  return (
    <main className="chapter-body w-screen" id="main-content">
      <ClientOnly>
        {() => <ChapterNav progress={chapterProgressState} fixedNav={fixedNav} />}
      </ClientOnly>
      {children}
    </main>
  );
}
