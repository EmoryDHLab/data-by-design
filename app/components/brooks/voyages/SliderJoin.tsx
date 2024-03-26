import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { useDeviceContext } from "~/hooks";
import type { Dispatch, SetStateAction, ReactNode } from "react";

interface Props {
  sliderWidth: Array<number>;
  maxX: number;
  setSliderWidth: Dispatch<SetStateAction<Array<number>>>;
  yearRange: Array<number>;
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
  children,
}: Props) {
  const rectRef = useRef<SVGRectElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const offset = useRef<number>(0);
  const { isDesktop } = useDeviceContext();

  const keyDown = ({ key, type }: EventProps) => {
    if (type !== "keydown") return;

    if (key === "ArrowRight") {
      const newRightX = sliderWidth[1] + (sliderWidth[1] - sliderWidth[0]);
      if (newRightX <= maxX) {
        setSliderWidth([sliderWidth[1], newRightX]);
      } else {
        setSliderWidth([sliderWidth[0] + (maxX - sliderWidth[1]), maxX]);
      }
    } else if (key === "ArrowLeft") {
      const newLeftX = sliderWidth[0] - (sliderWidth[1] - sliderWidth[0]);
      if (newLeftX >= 0) {
        setSliderWidth([newLeftX, sliderWidth[0]]);
      } else {
        setSliderWidth([0, sliderWidth[1] - sliderWidth[0]]);
      }
    }
  };

  useEffect(() => {
    const dragRectStart = ({ x }: EventProps) => {
      if (!x) return;
      offset.current = x - sliderWidth[0];
    };

    const dragRect = ({ x }: EventProps) => {
      if (!x) return;
      const previousDiff = sliderWidth[1] - offset.current - sliderWidth[0];
      const newStart = x - offset.current;
      const newEnd = Math.ceil(x + previousDiff);
      if (newStart >= 0 && newEnd <= maxX + 1) {
        setSliderWidth([newStart, newEnd]);
      }
    };

    const dragCircle = ({ x }: EventProps) => {
      if (!x) return;

      if (x >= 0 && x <= maxX + 1) {
        if (x > sliderWidth[0]) {
          setSliderWidth([Math.floor(sliderWidth[0] + x), x + 10]);
        } else {
          setSliderWidth([Math.floor(sliderWidth[0] - x), x + 10]);
        }
      }
    };

    if (isDesktop) {
      d3.select(rectRef.current).call(
        // @ts-ignore
        d3.drag().on("start", dragRectStart).on("drag", dragRect)
      );
    } else {
      d3.select(circleRef.current).call(
        // @ts-ignore
        d3.drag().on("drag", dragCircle).on("end", dragCircle)
      );
    }
  }, [maxX, sliderWidth, setSliderWidth, isDesktop]);

  if (isDesktop) {
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

  return (
    <>
      <circle ref={circleRef} cy={0} cx={sliderWidth[0]} r={8} fill="white" />
    </>
  );
}

export default SliderJoin;
