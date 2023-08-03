import { useEffect, useRef } from "react";
import * as d3 from "d3";

function SliderHandle({ sliderWidth, setSliderWidth, start, maxX, children }) {
  const circleRef = useRef();

  const drag = (event) => {
    if (start) {
      if (event.x >= 0 && event.x < sliderWidth[1] - 44) {
        setSliderWidth([event.x, sliderWidth[1]]);
      }
    } else {
      if (event.x <= maxX + 1 && event.x > sliderWidth[0] + 44) {
        setSliderWidth([sliderWidth[0], event.x]);
      }
    }
  };

  useEffect(() => {
    d3.select(circleRef.current)
      .call(
        d3.drag()
          .on("drag", drag)
      );
  });

  return (
    <g
      ref={circleRef}
      className="cursor-ew-resize"
    >
      <text
        x={start ? sliderWidth[0] - 20 : sliderWidth[1] - 20}
        y={-18}
        fill="white"
        fontSize={20}
      >
        <>
          {children}
        </>
      </text>
      <circle
        cy={0}
        cx={start ? sliderWidth[0] : sliderWidth[1]}
        r={8}
        fill="white"
      />
      <circle
        cy={0}
        cx={start ? sliderWidth[0] : sliderWidth[1]}
        r={6}
        fill="#8C20E1"
      />
    </g>
  );
}

export default SliderHandle;