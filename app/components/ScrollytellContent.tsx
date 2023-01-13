import type { ReactNodeLike } from "prop-types";
import { useContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollytellContext } from "~/scrollytellContext";

interface Props {
  children: ReactNodeLike;
  id: number;
  isLast: boolean;
  color: string;
}

export default function ScrollytellContent({ children, id, isLast, color }: Props) {
  const trigger = useRef();
  const { setScrollProgress } = useContext(ScrollytellContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: trigger.current,
      start: "top 90%",
      end: "top 10%",
      markers: false, // set to true for debugging
      onUpdate: (({progress}) => { setScrollProgress(progress + id)}),
      preventOverlaps: true,
      id,
    });

    return () => {
      st.kill();
    }
  }, [trigger, id, setScrollProgress]);

  return (
    <p
      ref={trigger}
      className={`text-2xl content-center text-${color}`}
      style={{ height: isLast ? "50vh" : "80vh" }}
    >
      {children}
    </p>
  )
}
