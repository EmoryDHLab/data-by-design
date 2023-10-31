import scrollama from "scrollama";
import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ClientOnly } from "remix-utils";
import { ChapterNav } from "~/components/ChapterNav";
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
  const { docHeightState } = useContext(ChapterContext);

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

  useEffect(() => {
    scrollerRef.current?.resize();
  }, [docHeightState]);

  useEffect(() => {

  }, [chapterProgressState]);

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