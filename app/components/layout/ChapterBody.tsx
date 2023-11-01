import scrollama from "scrollama";
import { useEffect, useRef, useState } from "react";
import { ClientOnly } from "remix-utils";
import { ChapterNav } from "~/components/ChapterNav";
import { useResizeObserver } from "~/hooks";
import type { ReactNode } from "react";
import type { TAnchors } from "~/chapterContext";

interface Props {
  children: ReactNode;
  anchors: TAnchors
}

export default function ChapterBody({ children, anchors }: Props) {
  const scrollerRef = useRef(scrollama());
  const contentRef = useRef<HTMLDivElement>(null);
  const [chapterProgressState, setChapterProgressState] = useState<number>(0.0);
  const { documentSize } = useResizeObserver();

  useEffect(() => {
    if (contentRef.current) {
      scrollerRef.current
        .setup({
          step: ".chapter-body",
          progress: true,
        })
        .onStepProgress(({ progress }) =>
          setChapterProgressState(progress)
        );
    }
    scrollerRef.current?.resize();
  }, [setChapterProgressState, contentRef]);

  // The Scrollama instance dies when the overall document height changes
  // like when images are lazyloaded. We could, and maybe should, make
  // the image containers the size of the image. Maybe later...
  // https://github.com/russellsamora/scrollama/issues/145
  useEffect(() => {
    scrollerRef.current?.resize();
  }, [documentSize]);

  return (
    <>
      <ClientOnly>
        {() => <ChapterNav anchors={anchors} progress={chapterProgressState} />}
      </ClientOnly>
      <div className="chapter-content" ref={contentRef} data-step="z">
        {children}
      </div>
    </>
  )
}