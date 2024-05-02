import { useContext, useEffect, useRef } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import p5 from "p5";
import { useResizeObserver } from "~/hooks";

let anchors = [];

for (let i = 0; i < 10; i++) {
  const strokeWeight = 2 + Math.random() * 3;
  const anchorX = 100 + Math.random() * 100;
  const anchorY = Math.random() * 500 + 50;

  const anchorX2 = 200 + Math.random() * 100;
  const anchorY2 = Math.random() * 400 + 50;
  anchors.push({ anchorX, anchorY, anchorX2, anchorY2, strokeWeight });
}

// Produces random bezier curves that connect the two circles
function randomPaths(p5, scrollProgress) {
  p5.push();

  p5.fill(0, 0, 0);
  p5.rotate(0);
  p5.circle(50, 250, 20);
  p5.circle(500, 250, 20);
  p5.noFill();

  if (scrollProgress >= 1.2) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[9];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }
  if (scrollProgress >= 1.3) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[8];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }
  if (scrollProgress >= 1.4) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[0];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }
  if (scrollProgress >= 1.5) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[1];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 1.6) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[2];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 1.7) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[3];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 1.8) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[4];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 1.9) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[5];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 2) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[6];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  if (scrollProgress >= 2.1) {
    const { anchorX, anchorY, anchorX2, anchorY2, strokeWeight } = anchors[7];
    p5.strokeWeight(strokeWeight);
    p5.bezier(50, 250, anchorX, anchorY, anchorX2, anchorY2, 500, 250);
  }

  p5.pop();
}

export default function RandomPaths() {
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
        p5.createCanvas(windowSize.width * 0.5, windowSize.height * 0.6).parent(
          "paths"
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

    if (scrollProgress < 1.2) {
      p5Ref.current.push();
      p5Ref.current.strokeWeight(2);
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(50, 250, 20);
      p5Ref.current.line(50, 250, 500, 250);
      p5Ref.current.fill(0, 0, 0);
      p5Ref.current.circle(500, 250, 20);
      p5Ref.current.pop();
    } else if (scrollProgress < 2.6) {
      randomPaths(p5Ref.current, scrollProgress);
    }
  }, [scrollProgress]);
  return <div id="paths" />;
}
