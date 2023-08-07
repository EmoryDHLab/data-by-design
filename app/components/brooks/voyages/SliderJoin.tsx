import { useEffect, useRef } from "react";
import * as d3 from "d3";

function SliderJoin({ sliderWidth, setSliderWidth, yearRange, maxX, children }) {
  const rectRef = useRef();
  const offset = useRef(0);

  const keyDown = ({ key, type }) => {
    if (type !== "keydown") return;

    if (key === "ArrowRight") {
      const newRightX = sliderWidth[1] + (sliderWidth[1] - sliderWidth[0]);
      if (newRightX <= maxX) {
        setSliderWidth([
          sliderWidth[1],
          newRightX
        ]);
      } else {
        setSliderWidth([
          sliderWidth[0] + (maxX - sliderWidth[1]),
          maxX
        ]);
      }
    } else if (key === "ArrowLeft") {
      const newLeftX = sliderWidth[0] - (sliderWidth[1] - sliderWidth[0]);
      if (newLeftX >= 0) {
        setSliderWidth([
          newLeftX,
          sliderWidth[0]
        ]);
      } else {
        setSliderWidth([
          0,
          sliderWidth[1] - sliderWidth[0]
        ]);
      }
    }
  };

  useEffect(() => {
    const dragStart = (event) => {
      offset.current = event.x - sliderWidth[0];
    };

    const drag = (event) => {
      const previousDiff = sliderWidth[1] - offset.current - sliderWidth[0];
      const newStart = event.x - offset.current;
      const newEnd = Math.ceil(event.x + previousDiff);
      if (newStart >= 0 && newEnd <= maxX + 1) {
        setSliderWidth([newStart, newEnd]);
      }
    };

    d3.select(rectRef.current)
      .call(
        d3.drag()
          .on("start", dragStart)
          .on("drag", drag)
      );
  }, [maxX, sliderWidth, setSliderWidth]);

  return (
    <>
      <rect
        ref={rectRef}
        x={sliderWidth[0]}
        y={-8}
        height={16}
        width={sliderWidth[1] - sliderWidth[0]}
        fill="#E0DCF2"
        tabIndex={0}
        onKeyDown={keyDown}
      />
      {children}
    </>
  );
}

export default SliderJoin;