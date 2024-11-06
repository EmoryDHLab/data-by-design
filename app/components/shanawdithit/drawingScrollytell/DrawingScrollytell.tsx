import { useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { TFigure } from "~/types/figureType";
import type { ReactElement } from "react";
import { ClientOnly } from "remix-utils/client-only";
import IIIFViewer from "./IIIFViewer.client";

interface Props {
  figure: TFigure;
  triggers: ReactElement[];
}

function SketchScrollytell({ figure, triggers }: Props) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      triggers={triggers}
      steps={steps}
      className="w-screen"
      bgColor="shanawdithitPrimary"
    >
      <div
        className={`flex flex-col md:flex-row justify-between`}
        id="scrollytell-one"
      >
        <div className="sticky p-8 md:p-0 top-24 h-min mt-16 mr-6 bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
          <ClientOnly>
            {() => (
              <IIIFViewer
                figure={figure.fileName}
                scrollProgress={scrollProgress}
              />
            )}
          </ClientOnly>
        </div>
        <div
          ref={steps}
          className="bias-full w-full md:bias-1/2 md:w-2/5 relative "
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={`sketch-trigger-${trigger.key}`}
                data-step={index}
                className={`pointer-events-none step text-xl content-center relative min-h-screen text-${accentTextColor}`}
              >
                <span className="bg-shanawdithitPrimary/75">{trigger}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollytellWrapper>
  );
}

export default SketchScrollytell;
