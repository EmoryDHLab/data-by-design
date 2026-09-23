import { useContext, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import type { TFigure } from "~/types/figureType";
import type { ReactElement } from "react";
import ClientOnly from "~/components/ClientOnly";
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
      bgColor="peopleSecondary"
      id="scrollytell-one"
    >
      <div className={`flex flex-col md:flex-row justify-center`}>
        <div className="sticky top-4 md:top-8 h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] mt-16 mr-6 flex items-center justify-center bias-full w-full md:bias-1/2 md:w-7/12 md:order-last">
          <div className="p-8 md:p-0 w-full rounded-md">
            <ClientOnly>
              <IIIFViewer
                figure={figure.fileName}
                scrollProgress={scrollProgress}
              />
            </ClientOnly>
          </div>
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
                className={`pointer-events-none step text-xl content-center relative min-h-[150vh] text-${accentTextColor}`}
              >
                <span className="bg-peopleSecondary/75 block">{trigger}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollytellWrapper>
  );
}

export default SketchScrollytell;
