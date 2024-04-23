import { useContext, useEffect, useRef, useState } from "react";
import { useResizeObserver } from "~/hooks";
import { ScrollytellContext } from "~/scrollytellContext";
import p5 from "p5";

const rectangleTypes = [
  { width: 40, height: 50 },
  { width: 50, height: 60 },
  { width: 50, height: 50 },
  {
    width: 30,
    height: 60,
  },
];

function generateRectangles() {
  let rectangles: {
    radius: number;
    width: number;
    height: number;
    angle: number;
  }[] = [];
  for (let i = 0; i < 50; i++) {
    const radius = Math.random();

    const { width, height } =
      rectangleTypes[Math.floor(Math.random() * rectangleTypes.length)];

    const angle = Math.random() * Math.PI * 2;
    rectangles.push({
      radius,
      width,
      height,
      angle,
    });
  }

  return rectangles;
}

function drawRectangles(p5, rectangles) {
  p5.clear();
  p5.strokeWeight(2);
  p5.rectMode(p5.CENTER);
  p5.fill(224, 220, 242);

  for (const { radius, width, height, angle } of rectangles) {
    p5.push();
    p5.translate(width / 2, height / 2); // Move the origin to center of the canvas
    p5.rotate(angle); // Rotate by an angle (PI / 10 * i)
    p5.translate(
      Math.cos(angle) * radius * p5.width,
      Math.sin(angle) * radius * p5.width
    );
    p5.rect(0, 0, width, height); // Draw rectangle
    p5.pop();
  }
}

export default function RandomRectangles() {
  const { windowSize } = useResizeObserver();
  const p5Ref = useRef<p5 | undefined>();
  const [rectangles, setRectangles] = useState(generateRectangles());

  useEffect(() => {
    p5Ref.current = new p5((p5) => {
      p5.setup = () => {
        if (!windowSize.width || !windowSize.height) {
          console.error("no window size!");
          return;
        }
        p5.createCanvas(windowSize.width * 0.5, windowSize.height * 0.6).parent(
          "rectangles"
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
    drawRectangles(p5Ref.current, rectangles);
  }, [rectangles, p5Ref]);

  return (
    <div>
      <button
        onClick={() => {
          setRectangles(generateRectangles());
        }}
        type="button"
      >
        <img
          className="w-14 m-2"
          src="/images/ui/shuffle_click.png"
          alt="Shuffle"
        />
      </button>
      <div id="rectangles" />
    </div>
  );
}
