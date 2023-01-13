import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ChapterContext } from "~/theme";

interface Props {
  children?: ReactNodeLike;
  className?: string;
  shouldPin?: boolean;
  id?: number;
}

export default function Column({ children, className, shouldPin, id }: Props) {
  const pin = useRef(null);
  const content = useRef(null);
  const { footnoteState } = useContext(ChapterContext);
  const scrollTrigger = useRef(null);

  useEffect(() => {
    if (shouldPin) {
      gsap.registerPlugin(ScrollTrigger);
      scrollTrigger.current = ScrollTrigger.create({
        trigger: pin.current.parentElement,
        start: "top 60px",
        end: `bottom ${content.current?.clientHeight + 120}px`,
        markers: false, // set to true for debugging
        pin: content.current,
        preventOverlaps: true,
        fastScrollEnd: true,
        anticipatePin: 1,
      });
    }
    return () => {
      scrollTrigger.current?.kill();
    };
  }, [pin, shouldPin, content]);

  useEffect(() => {
    scrollTrigger.current?.refresh();
  }, [footnoteState, scrollTrigger]);

  // The pinned element gets immediately wrapped in a <div> with a fixed width/height to match.
  // A class of "pin-spacer" is added to that wrapper. Think of it like a proxy element that props
  // open the space where the pinned element was in the DOM so that when it flips
  // to position: fixed things don't collapse.
  // This extra layer maintains the layout.
  return (
    <div ref={pin} className={`w-1/2 ${className ?? ""}`}>
      <div ref={content} className="column-grid-wrapper">
        {children}
      </div>
    </div>
  );
}
