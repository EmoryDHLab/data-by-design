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
  if (scrollProgress > 6.68) {
    if (isSelected) {
      style = { transform: `translate(${x}vw, ${y}px) rotate(${angle}deg)` };
    } else {
      style = { opacity: 0 };
    }
  }

  return (
    <div
      className={classNames(
        "w-24 h-24 border-4 transition",
        scrollProgress > 6
          ? isSelected
            ? "border-black"
            : "border-neutral-300"
          : "border-black"
      )}
      style={style}
    ></div>
  );
}

export default function RandomImagesIntoGrid() {
  let images = [];
  images.push(<Image isSelected={false} x={40} y={200} angle={30} />);
  images.push(<Image isSelected={true} x={40} y={301} angle={50} />);
  images.push(<Image isSelected={true} x={32} y={210} angle={90} />);
  images.push(<Image isSelected={false} x={10} y={250} angle={75} />);
  images.push(<Image isSelected={true} x={24} y={125} angle={30} />);
  images.push(<Image isSelected={false} x={26} y={100} angle={30} />);
  images.push(<Image isSelected={true} x={28} y={47} angle={34} />);
  images.push(<Image isSelected={false} x={20} y={66} angle={51} />);
  images.push(<Image isSelected={true} x={7} y={200} angle={82} />);
  images.push(<Image isSelected={false} x={-2} y={20} angle={90} />);
  return (
    <div className="flex flex-col items-center w-screen">
      <div className="w-4/5 grid gap-4 grid-cols-10 pb-10">{images}</div>
    </div>
  );
}
