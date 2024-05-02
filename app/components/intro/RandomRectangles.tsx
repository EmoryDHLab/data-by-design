import { useContext, useEffect, useRef, useState } from "react";
import { useResizeObserver } from "~/hooks";
import { ScrollytellContext } from "~/scrollytellContext";
import p5 from "p5";
import Shuffle from "~/components/icons/Shuffle";

const rectangleTypes = [
  { width: 80, height: 100 },
  { width: 100, height: 120 },
  { width: 100, height: 100 },
  {
    width: 60,
    height: 120,
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
  for (let i = 0; i < 25; i++) {
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
      <button onClick={() => setRectangles(generateRectangles())}>
        <Shuffle />
      </button>
      {rectangles.map((rectangle, index) => {
        return (
          <div
            className="border-black pointer-events-none border-2 bg-offwhite"
            key={index}
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              width: rectangle.width,
              height: rectangle.height,
              transform: `translate(${
                rectangle.x * windowSize.width * 0.4
              }px, ${
                rectangle.y * windowSize.height * 0.5 - windowSize.height * 0.5
              }px) rotate(${rectangle.angle}rad)`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
