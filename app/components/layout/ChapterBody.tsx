import { useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import { ClientOnly } from "remix-utils";
import { ChapterNav } from "~/components/ChapterNav";
import { useResizeObserver } from "~/hooks";

export default function ChapterBody({ children }) {
  const scrollerRef = useRef(scrollama());
  const contentRef = useRef();
  const [chapterProgressState, setChapterProgressState] = useState<float>(0.0);
  const viewportSize = useResizeObserver();

  useEffect(() => {
    if (contentRef.current) {
      scrollerRef.current
        .setup({
          step: ".chapter-content",
          progress: true,
          offset: "148px",
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
  }, [viewportSize]);

  return (
    <>
      <ClientOnly>
        {() => <ChapterNav progress={chapterProgressState} />}
      </ClientOnly>
      <div className="chapter-content" ref={contentRef} data-step="z">
        {children}
      </div>
    </>
  )
}