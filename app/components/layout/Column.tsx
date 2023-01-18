import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ChapterContext } from "~/theme";

interface Props {
  children?: ReactNodeLike;
  className?: string;
  shouldPin?: boolean;
  debug?: boolean;
  id?: number;
}

export default function Column({ children, className, shouldPin, id, debug }: Props) {
  const pin = useRef(null);
  const content = useRef(null);
  const { docHeightState } = useContext(ChapterContext);
  const scrollTrigger = useRef(null);

  useEffect(() => {
    if (shouldPin) {
      gsap.registerPlugin(ScrollTrigger);
      scrollTrigger.current = ScrollTrigger.create({
        trigger: pin.current,
        start: "top 60px",
        end: `bottom ${content.current?.clientHeight + 120}px`,
        markers: debug ?? false, // set to true for debugging
        pin: content.current,
        preventOverlaps: true,
        fastScrollEnd: true,
      });
    }
    return () => {
      scrollTrigger.current?.kill();
    };
  }, [pin, shouldPin, content, debug]);

  useEffect(() => {
    scrollTrigger.current?.refresh();
  }, [docHeightState, scrollTrigger, content, pin]);

  // The pinned element gets immediately wrapped in a <div> with a fixed width/height to match.
  // A class of "pin-spacer" is added to that wrapper. Think of it like a proxy element that props
  // open the space where the pinned element was in the DOM so that when it flips
  // to position: fixed things don't collapse.
  // This extra layer maintains the layout.
  return (
    <div ref={pin} className={`w-1/2 pt-4 ${className ?? ""}`}>
      <div ref={content} className="column-grid-wrapper">
        {children}
      </div>
    </div>
  );
}
