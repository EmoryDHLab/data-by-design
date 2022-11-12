import type { ReactNodeLike } from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  children: ReactNodeLike;
  className?: string;
  shouldPin?: boolean;
}

export default function Column({ children, className }: Props) {
  return (
    <div className={`column-grid-wrapper w-1/2 space-y-5 ${className ?? ""}`}>
      {children}
    </div>
  );
}
