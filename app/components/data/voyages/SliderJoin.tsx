import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { useDeviceContext } from "~/hooks";
import type { Dispatch, SetStateAction, ReactNode } from "react";

interface Props {
  sliderWidth: Array<number>;
  maxX: number;
  setSliderWidth: Dispatch<SetStateAction<Array<number>>>;
  children: ReactNode;
  interactive: boolean;
}

interface EventProps {
  x?: number;
  key?: string;
  type?: string;
}

function SliderJoin({
  sliderWidth,
  setSliderWidth,
  maxX,
  children,
  interactive,
}: Props) {
  const rectRef = useRef<SVGRectElement>(null);
  const offset = useRef<number>(0);
  const { isDesktop } = useDeviceContext();

  const keyDown = ({ key, type }: EventProps) => {
    if (!interactive) return;
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

    d3.select(rectRef.current).call(
      // @ts-expect-error: IDK, D3
      d3.drag().on("start", dragRectStart).on("drag", dragRect)
    );
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
          tabIndex={interactive ? 0 : -1}
          onKeyDown={keyDown}
          className={
            interactive
              ? "cursor-grab active:cursor-grabbing transition-[fill,stroke] duration-150 hover:fill-white focus:outline-none focus-visible:stroke-white focus-visible:stroke-2"
              : ""
          }
        />
        {children}
      </>
    );
  }

  return (
    <>
      {/* Background track */}
      <rect
        x={0}
        y={-2}
        height={4}
        width={maxX}
        fill="#E0DCF2"
        opacity={0.35}
        pointerEvents="none"
      />
      {/* Filled range — drag handle for touch */}
      <rect
        ref={rectRef}
        x={sliderWidth[0]}
        y={-14}
        height={28}
        width={Math.max(0, sliderWidth[1] - sliderWidth[0])}
        fill="#E0DCF2"
        fillOpacity={0.7}
        rx={2}
        className={
          interactive ? "cursor-grab active:cursor-grabbing touch-none" : ""
        }
      />
      {/* Edge markers */}
      <circle
        cx={sliderWidth[0]}
        cy={0}
        r={8}
        fill="white"
        stroke="#8C20E1"
        strokeWidth={2}
        pointerEvents="none"
      />
      <circle
        cx={sliderWidth[1]}
        cy={0}
        r={8}
        fill="white"
        stroke="#8C20E1"
        strokeWidth={2}
        pointerEvents="none"
      />
    </>
  );
}

export default SliderJoin;
