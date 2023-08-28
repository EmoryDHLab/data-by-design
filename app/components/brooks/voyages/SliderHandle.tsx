import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  sliderWidth: Array<number>;
  setSliderWidth: Dispatch<SetStateAction<Array<number>>>;
  maxX: number;
  year: number;
  start?: boolean;
}

interface EventProps {
  x: number;
  key: string;
}

function SliderHandle({ sliderWidth, setSliderWidth, start, maxX, year }: Props) {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const updateStart = (newX: number) => {
      if (newX >= 0 && newX < sliderWidth[1] - 44) {
        setSliderWidth([newX, sliderWidth[1]]);
      } else if (newX < 0) {
        setSliderWidth([0, sliderWidth[1]]);
      }
    };

    const updateEnd = (newX: number) => {
      if (newX <= maxX + 1 && newX > sliderWidth[0] + 44) {
        setSliderWidth([sliderWidth[0], newX]);
      } else {
        setSliderWidth([sliderWidth[0], maxX]);
      }
    };

    const keyDown = ({ key }: EventProps) => {
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

    const drag = ({ x }: EventProps) => {
      if (start) {
        updateStart(x);
      } else {
        updateEnd(x);
      }
    };

    d3.select(circleRef.current)
      .call(
        // @ts-ignore
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
        fontSize={15}
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