import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import IntroTriggers from "./IntroTriggers";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { classNames } from "~/utils";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";
import ScrollProgress from "~/components/ScrollProgress";

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
      {process.env.NODE_ENV !== "production" && <ScrollProgress />}
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

// Produces random bezier curves that connect the two circles
function randomPaths(p5, scrollProgress) {
  p5.push();

  if (scrollProgress >= 2.1) {
    const fade = 255 - (scrollProgress - 2.1) * 1000;
    p5.stroke(0, 0, 0, fade);
    p5.fill(0, 0, 0, fade);
  }

  p5.rotate(0);
  p5.circle(50, 250, 20);
  p5.circle(500, 250, 20);
  p5.noFill();

  if (scrollProgress >= 1.5) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[0];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 1.7) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[1];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 1.9) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[2];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 2.1) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[3];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  p5.pop();
}

const rectangleTypes = [
  { width: 80, height: 100 },
  { width: 100, height: 120 },
  { width: 100, height: 100 },
];

let rectangles: {
  anchorX: number;
  anchorY: number;
  anchorX2: number;
  anchorY2: number;
  angle: number;
}[] = [];
for (let i = 0; i < 30; i++) {
  const anchorX = Math.random() * 200 - 200;
  const anchorY = Math.random() * 200 - 500;

  const { width, height } =
    rectangleTypes[Math.floor(Math.random() * rectangleTypes.length)];

  const anchorX2 = anchorX + width;
  const anchorY2 = anchorY + height;
  const angle = Math.random() * Math.PI;
  rectangles.push({
    anchorX,
    anchorY,
    anchorX2,
    anchorY2,
    angle,
  });
}

function randomRectangles(p5) {
  p5.strokeWeight(2);
  p5.rectMode(p5.CENTER);

  for (const { anchorX, anchorY, anchorX2, anchorY2, angle } of rectangles) {
    p5.push();
    p5.fill(224, 220, 242);
    p5.rotate(angle, [anchorX, anchorY]);
    p5.rect(
      anchorX,
      anchorY,
      Math.abs(anchorX2 - anchorX),
      Math.abs(anchorY2 - anchorY)
    );
    p5.pop();
  }
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

    if (scrollProgress < 1.5) {
      p5Ref.current.strokeWeight(2);
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(50, 250, 20);
      p5Ref.current.line(50, 250, 500, 250);
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(500, 250, 20);
    } else if (scrollProgress < 2.6) {
      randomPaths(p5Ref.current, scrollProgress);
    } else if (scrollProgress < 8) {
      randomRectangles(p5Ref.current);
    }
  }, [scrollProgress]);
  console.log(scrollProgress);

  return <div id="timeline" />;
}
