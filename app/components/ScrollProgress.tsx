import { ScrollytellContext } from "~/scrollytellContext";
import { useContext } from "react";

export default function ScrollProgress() {
  const { scrollProgress } = useContext(ScrollytellContext);
  return (
    <div className="fixed bottom-0 left-0 bg-black text-white">
      {scrollProgress.toFixed(2)}
    </div>
  );
}
