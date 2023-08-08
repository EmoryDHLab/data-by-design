import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction, ReactNode } from "react";

interface Props {
  sliderWidth: Array<number>;
  maxX: number;
  setSliderWidth: Dispatch<SetStateAction<Array<number>>>;
  yearRange: Array<number>
  children: ReactNode;
}

interface EventProps {
  x?: number;
  key?: string;
  type?: string;
}

function SliderJoin({
  sliderWidth,
  setSliderWidth,
  yearRange,
  maxX,
  children
}: Props) {
  const rectRef = useRef<SVGRectElement>(null);
  const offset = useRef<number>(0);

  const keyDown = ({ key, type }: EventProps) => {
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
    const dragStart = ({ x }: EventProps) => {
      if (!x) return;
      offset.current = x - sliderWidth[0];
    };

    const drag = ({ x }: EventProps) => {
      if (!x) return;
      const previousDiff = sliderWidth[1] - offset.current - sliderWidth[0];
      const newStart = x - offset.current;
      const newEnd = Math.ceil(x + previousDiff);
      if (newStart >= 0 && newEnd <= maxX + 1) {
        setSliderWidth([newStart, newEnd]);
      }
    };

    d3.select(rectRef.current)
      .call(
        // @ts-ignore
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