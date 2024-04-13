import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import IntroTriggers from "./IntroTriggers";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { classNames } from "~/utils";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";

export default function IntroScrollytell() {
  const [scrollProgress, setScrollProgress] = useState(0.0);
  const { primaryTextColor } = useContext(ChapterContext);
  const steps = useRef<HTMLDivElement>(null);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
      }}
    >
      <ScrollytellWrapper
        className={`md:flex justify-between w-full`}
        setScrollProgress={setScrollProgress}
        triggers={IntroTriggers}
        steps={steps}
        id="intro"
      >
        <div ref={steps} className="relative z-10">
          {IntroTriggers.map((trigger, index) => {
            return (
              <div
                key={trigger.key}
                data-step={index}
                className={classNames(
                  `step text-xl w-full content-center py-5 px-0 md:px-20 text-${primaryTextColor}`,
                  index == 0 ? "md:h-[60vh]" : "min-h-screen"
                )}
              >
                {trigger}
              </div>
            );
          })}
        </div>
        <div className="sticky top-16 md:top-[200px] h-screen bias-full md:bias-1/2 md:w-1/2 md:mr-24">
          <LinearTimeline />
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

let anchors = [];

for (let i = 0; i < 10; i++) {
  const strokeWeight = 1 + Math.random() * 6;
  const anchorX = 100 + Math.random() * 100;
  const anchorY = Math.random() * 300 + 50;

  const anchorX2 = 200 + Math.random() * 100;
  const anchorY2 = Math.random() * 300 + 50;
  anchors.push({ anchorX, anchorY, anchorX2, anchorY2, strokeWeight });
}

function LinearTimeline() {
  const { scrollProgress } = useContext(ScrollytellContext);
  const { windowSize } = useResizeObserver();
  const p5Ref = useRef<p5 | undefined>();

  useEffect(() => {
    p5Ref.current = new p5((p5) => {
      p5.setup = () => {
        if (!windowSize.width || !windowSize.height) {
          console.error("no window size!");
          return;
        }
        p5.createCanvas(windowSize.width * 0.5, windowSize.height).parent(
          "timeline"
        );
      };

      p5.draw = () => {
        p5.noLoop();
      };
    });

    return () => {
      p5Ref.current?.remove();
    };
  }, [windowSize]);

  useEffect(() => {
    if (!p5Ref.current) {
      console.error("no p5!");
      return;
    }
    p5Ref.current.clear();

    if (scrollProgress >= 0.6 && scrollProgress < 1.5) {
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(50, 250, 20);
      p5Ref.current.line(50, 250, 500, 250);
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(500, 250, 20);
    } else if (scrollProgress >= 2) {
      p5Ref.current.clear();
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(50, 250, 20);
      p5Ref.current.circle(500, 250, 20);
      p5Ref.current.noFill();
      // for (let i = 0; i < 500; i += 25) {
      //   p5Ref.current.bezier(50, 250, 275, i, 275, i, 500, 250);
      // }

      for (const {
        anchorX,
        anchorY,
        anchorX2,
        anchorY2,
        strokeWeight,
      } of anchors) {
        p5Ref.current.strokeWeight(strokeWeight);
        p5Ref.current.bezier(
          50,
          250,
          anchorX,
          anchorY,
          anchorX2,
          anchorY2,
          500,
          250
        );
      }
    }
  }, [scrollProgress]);

  return <div id="timeline" />;
}
