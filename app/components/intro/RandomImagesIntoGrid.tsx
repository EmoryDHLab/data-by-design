import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import { classNames } from "~/utils";

interface ImageProps {
  x: number;
  y: number;
  angle: number;
  isSelected: boolean;
}

function Image({ x, y, angle, isSelected }: ImageProps) {
  const { scrollProgress } = useContext(ScrollytellContext);

  let style = {};
  if (scrollProgress > 7.1) {
    if (isSelected) {
      style = { transform: `translate(${x}vw, ${y}px) rotate(${angle}deg)` };
    } else {
      style = { opacity: 0 };
    }
  }

  return (
    <div
      className={classNames(
        "w-6 h-6 sm:w-12 sm:h-12 md:w-24 md:h-24 border-4 transition bg-offwhite",
        scrollProgress > 6.5
          ? isSelected
            ? "border-black"
            : "border-neutral-300"
          : "border-black"
      )}
      style={style}
    ></div>
  );
}

let images = [];
for (let i = 0; i < 100; i++) {
  const isSelected = Math.random() > 0.7;
  const col = i % 10;
  const row = Math.floor(i / 10);
  const x = Math.random() * 100 - col * 10;
  const y = Math.random() * 300 - row * 30;
  const angle = Math.random() * 360;
  images.push({ x, y, angle, isSelected });
}

export default function RandomImagesIntoGrid() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-4/5 grid gap-4 grid-cols-10 pb-10">
        {images.map(({ x, y, angle, isSelected }, idx) => (
          <Image key={idx} x={x} y={y} isSelected={isSelected} angle={angle} />
        ))}
      </div>
      <div className="absolute top-[55vw] -left-2 max-w-lg bg-offwhite p-2">
        Some of the images are referenced only in passing, their deeper
        significance left for other scholars to explore.{" "}
      </div>
    </div>
  );
}
