import { useContext, useEffect, useRef } from "react";
import scrollama from "scrollama";
import { ChapterContext } from "~/theme";

interface Props {
  setScrollProgress: Dispatch<SetStateAction<float>>;
  children: ReactNodeLike;
  steps: useRef<HTMLDivElement<undefined>>;
  triggers: Array;
  className?: string;
}

export default function ScrollytellWrapper({ children, steps, triggers, setScrollProgress, className }: Props) {
  const { accentColor, docHeightState } = useContext(ChapterContext);
  const scroller = useRef(scrollama());

  useEffect(() => {
    if (steps.current?.children.length !== triggers.length) return;
    scroller.current
      .setup({
        offset: "60px",
        step: ".step",
        progress: true,
      })
      .onStepProgress(({ index, progress }) =>
        setScrollProgress(index + progress)
      );

    const scrollerCopy = scroller.current;

    return () => scrollerCopy?.destroy();
  }, [setScrollProgress, steps, triggers]);

  useEffect(() => {
    scroller.current?.resize();
  }, [docHeightState]);

  return (
    <div className={`bg-${accentColor} ${className ?? ""}`}>
      {children }
    </div>
  )
};
