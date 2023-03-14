import scrollama from "scrollama";
import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ClientOnly } from "remix-utils";
import { ChapterNav } from "~/components/ChapterNav";

export default function ChapterBody({ children, anchors }) {
  const scrollerRef = useRef(scrollama());
  const contentRef = useRef();
  const [chapterProgressState, setChapterProgressState] = useState<float>(0.0);
  const { docHeightState } = useContext(ChapterContext);

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

  useEffect(() => {
    console.log("🚀 ~ file: ChapterBody.tsx:31 ~ ChapterBody ~ docHeightState:", docHeightState, scrollerRef.current)
    scrollerRef.current?.resize();
  }, [docHeightState]);

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