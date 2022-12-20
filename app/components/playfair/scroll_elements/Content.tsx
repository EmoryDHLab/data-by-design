import type { ReactNodeLike } from "prop-types";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  children: ReactNodeLike;
  id: number;
  update(): number;
}

export default function Content({ children, id, update }: Props) {
  const trigger = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: trigger.current,
      start: "top 90%",
      end: "top 10%",
      markers: false, // set to true for debugging
      onUpdate: (({progress}) => { update(progress + id)}),
      preventOverlaps: true,
      id
    });

    return () => {
      st.kill();
    }
  }, [trigger, id, update]);

  return (
    <p ref={trigger} className="text-white text-2xl content-center" style={{height: id === 9 ? "auto" : "80vh"}}>
      {children}
    </p>
  )
}
