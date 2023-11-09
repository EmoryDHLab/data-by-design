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
  const { documentSize } = useResizeObserver();

  useEffect(() => {
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
          // @ts-ignore may be a Scrollama bug. offset does allow strings.
          offset: "40px",
        })
        .onStepProgress(({ progress }) => setChapterProgressState(progress));
    }

    return () => {
      scrollerRef.current?.destroy();
      scrollerRef.current = undefined;
    };
  }, [documentSize]);

  return (
    <>
      <ClientOnly>
        {() => <ChapterNav progress={chapterProgressState} />}
      </ClientOnly>
      {children}
    </>
  );
}
