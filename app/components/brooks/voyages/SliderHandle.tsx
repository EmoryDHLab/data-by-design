import { useEffect, useRef } from "react";
import * as d3 from "d3";

function SliderHandle({ sliderWidth, setSliderWidth, start, maxX, year }) {
  const circleRef = useRef();

  useEffect(() => {
    const updateStart = (newX) => {
      if (newX >= 0 && newX < sliderWidth[1] - 44) {
        setSliderWidth([newX, sliderWidth[1]]);
      } else if (newX < 0) {
        setSliderWidth([0, sliderWidth[1]]);
      }
    };

    const updateEnd = (newX) => {
      if (newX <= maxX + 1 && newX > sliderWidth[0] + 44) {
        setSliderWidth([sliderWidth[0], newX]);
      } else {
        setSliderWidth([sliderWidth[0], maxX]);
      }
    };

    const keyDown = ({ key }) => {
      if (key === "ArrowRight") {
        if (start) {
          updateStart(sliderWidth[0] + 44);
        } else {
          updateEnd(sliderWidth[1] + 44);
        }
      } else if (key === "ArrowLeft") {
        if (start) {
          updateStart(sliderWidth[0] - 44);
        } else {
          updateEnd(sliderWidth[1] - 44);
        }
      }
    };

    const drag = (event) => {
      if (start) {
        updateStart(event.x);
      } else {
        updateEnd(event.x);
      }
    };

    d3.select(circleRef.current)
      .call(
        d3.drag()
          .on("drag", drag)
      )
      .select("circle")
      .on("keydown", keyDown);

    }, [start, setSliderWidth, maxX, sliderWidth]);

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
        {`${year}`}
      </text>
      <circle
        cy={0}
        cx={start ? sliderWidth[0] : sliderWidth[1]}
        r={8}
        tabIndex={0}
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