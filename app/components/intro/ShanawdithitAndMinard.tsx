import { ScrollytellContext } from "~/scrollytellContext";
import { useContext } from "react";

export default function ShanawdithitAndMinard() {
  const { scrollProgress } = useContext(ScrollytellContext);
  let offset = Math.min(Math.max((scrollProgress - 20) * 25, 0), 22);

  let leftOpacity;
  let rightOpacity;
  if (scrollProgress > 20) {
    leftOpacity = Math.max(100 - (scrollProgress - 20) * 100, 20);
    rightOpacity = Math.max(100 - (scrollProgress - 20) * 100, 20);
  }

  // return (
  //   <div className="relative w-[80vw]">
  //     <img
  //       style={{ left: `${offset}vw`, opacity: leftOpacity }}
  //       className="absolute max-w-lg transition"
  //       src="/images/intro/1-Carte_figurative_des_pertes_successives_Minard_Charles-Joseph.jpeg"
  //       alt=""
  //     />
  //     <img
  //       style={{ right: `${offset}vw`, opacity: rightOpacity }}
  //       className="absolute max-w-lg top-12 transition"
  //       src="/images/shanawdithit/1829-03.webp"
  //       alt=""
  //     />
  //   </div>
  // );

  return (
    <div className="relative flex space-x-12 w-screen items-center justify-center md:-ml-20">
      <img
        className="max-w-lg transition"
        src="/images/intro/1-Carte_figurative_des_pertes_successives_Minard_Charles-Joseph.jpeg"
        alt=""
      />
      <img
        className="max-w-lg top-12 transition"
        src="/images/shanawdithit/1829-03.webp"
        alt=""
      />
    </div>
  );
}
