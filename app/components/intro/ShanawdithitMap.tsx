import { ScrollytellContext } from "~/scrollytellContext";
import { useContext } from "react";

export default function ShanawdithitMap() {
  const { scrollProgress } = useContext(ScrollytellContext);
  let offset = Math.max(50 - (scrollProgress - 16.5) * 200, 0);
  let zoom;
  if (scrollProgress > 18.5) {
    zoom = 5;
  } else {
    zoom = 1;
  }
  let origin;
  if (scrollProgress > 18.75) {
    origin = "50% 80%";
  } else if (scrollProgress > 18.5) {
    origin = "80% 85%";
  }

  return (
    <div className="max-w-lg overflow-hidden">
      <img
        style={{
          transform: `translate(${offset}vw) scale(${zoom})`,
          transformOrigin: origin,
          transition: "transform 1s, transform-origin 1s, filter .5s ease-out",
        }}
        src="/images/shanawdithit/1829-03.webp"
        alt=""
      />
    </div>
  );
}
