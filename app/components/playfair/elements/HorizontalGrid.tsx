import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Props {
  innerWidth: number;
  yValue: number;
  text: string | number;
  opacity: number;
}

export default function HorizontalGrid({
  innerWidth,
  yValue,
  text,
  opacity,
}: Props) {
  const lineRef = useRef<SVGLineElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    d3.select(lineRef.current)
      .transition()
      .duration(600)
      .attr("y1", yValue + 4)
      .attr("y2", yValue + 4)
      .attr("opacity", opacity);

    d3.select(textRef.current)
      .transition()
      .duration(600)
      .attr("opacity", opacity > 0 ? 1 : 0)
      .attr("y", yValue + 4.4);
  }, [yValue, innerWidth, text]);

  return (
    <g>
      <line
        ref={lineRef}
        x1={innerWidth}
        x2="3"
        y1={3}
        y2={3}
        stroke="black"
        opacity={0}
        strokeWidth="0.2"
      ></line>
      <text
        ref={textRef}
        fill="black"
        x={innerWidth + 0.5}
        y={3}
        fontFamily="Arial"
        fontSize="1.5"
        opacity={0}
      >
        {text ?? yValue}
      </text>
    </g>
  );
}
