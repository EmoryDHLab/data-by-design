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
    x: number;
    y: number;
    width: number;
    height: number;
    angle: number;
  }[] = [];
  for (let i = 0; i < 50; i++) {
    const x = Math.random();
    const y = Math.random();

    const { width, height } =
      rectangleTypes[Math.floor(Math.random() * rectangleTypes.length)];

    const angle = Math.random() * Math.PI * 2;
    rectangles.push({
      x,
      y,
      width,
      height,
      angle,
    });
  }

  return rectangles;
}

export default function RandomRectangles() {
  const { windowSize } = useResizeObserver();
  const [rectangles, setRectangles] = useState(generateRectangles());

  return (
    <div className="relative w-[50vw]">
      {rectangles.map((rectangle, index) => {
        return (
          <div
            className="border-black pointer-events-none border-2"
            key={index}
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              width: rectangle.width,
              height: rectangle.height,
              transform: `translate(${
                rectangle.x * windowSize.width * 0.4
              }px, ${rectangle.y * windowSize.height * 0.5}px) rotate(${
                rectangle.angle
              }rad)`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
