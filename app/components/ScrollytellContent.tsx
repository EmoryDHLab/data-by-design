import type { ReactNodeLike } from "prop-types";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  children: ReactNodeLike;
  id: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  isLast: boolean;
}

export default function ScrollytellContent({ children, id, setProgress, isLast }: Props) {
  const trigger = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: trigger.current,
      start: "top 90%",
      end: "top 10%",
      markers: false, // set to true for debugging
      onUpdate: (({progress}) => { setProgress(progress + id)}),
      preventOverlaps: true,
      id,
    });

    return () => {
      st.kill();
    }
  }, [trigger, id, setProgress]);

  return (
    <p
      ref={trigger}
      className="text-white text-2xl content-center"
      style={{ height: isLast ? "50vh" : "80vh" }}
    >
      {children}
    </p>
  )
}
