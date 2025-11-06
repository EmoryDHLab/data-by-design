import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";
import type { QuizStepCount } from "~/types/process";

const side = 20;

export default function QuizNav() {
  const { currentStepCount, setCurrentStepCount } = useContext(QuizContext);
  const [x, setX] = useState(212);
  const [y, setY] = useState(180);
  const { isMobile } = useDeviceContext();

  useEffect(() => {
    setX(isMobile ? 0 : 212);
    setY(isMobile ? 10 : 180);
  }, [isMobile]);

  return (
    <g role="navigation">
      <rect
        x={x - 2}
        y={y - 2}
        height={side + 2}
        width={side * 4 + 2}
        rx={5}
        fill="#1c1817"
        fillOpacity={0.7}
      />
      
      {/* START button */}
      <g
        className={`cursor-pointer ${
          currentStepCount === 0
            ? "opacity-50 pointer-events-none"
            : "opacity-75 hover:opacity-100"
        }`}
        onClick={() => {
          if (currentStepCount > 0) setCurrentStepCount(0);
        }}
      >
        <rect
          x={x}
          y={y}
          width={side}
          height={side}
          fill="transparent"
        />
        <line stroke="white" strokeWidth={0.75} x1={x + 6} x2={x + 6} y1={y + 3} y2={y + 8} />
        <text
          x={x + side/2}
          y={y + side/4}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
          pointerEvents="none"
        >
          c
        </text>
        <text
          x={x + side/2}
          y={y + side/4 + 8}
          fontSize={4}
          textAnchor="middle"
          fill="#fafbfd"
          fontFamily="neue-haas-unica, sans-serif"
          pointerEvents="none"
        >
          START
        </text>
      </g>

      {/* BACK button */}
      <g
        className={`cursor-pointer ${
          currentStepCount === 0
            ? "opacity-50 pointer-events-none"
            : "opacity-75 hover:opacity-100"
        }`}
        onClick={() => {
          if (currentStepCount > 0)
            setCurrentStepCount((currentStepCount - 1) as QuizStepCount);
        }}
      >
        <rect
          x={x + side}
          y={y}
          width={side}
          height={side}
          fill="transparent"
        />
        <text
          x={x + side + side/2}
          y={y + side/4}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
          pointerEvents="none"
        >
          c
        </text>
        <text
          x={x + side + side/2}
          y={y + side/4 + 8}
          fontSize={4}
          textAnchor="middle"
          fill="#fafbfd"
          fontFamily="neue-haas-unica, sans-serif"
          pointerEvents="none"
        >
          BACK
        </text>
      </g>

      {/* NEXT button */}
      <g
        className={`cursor-pointer ${
          currentStepCount === 9
            ? "opacity-50 pointer-events-none"
            : "opacity-75 hover:opacity-100"
        }`}
        onClick={() => {
          if (currentStepCount < 9)
            setCurrentStepCount((currentStepCount + 1) as QuizStepCount);
        }}
      >
        <rect
          x={x + side * 2}
          y={y}
          width={side}
          height={side}
          fill="transparent"
        />
        <text
          x={x + side * 2 + side/2}
          y={y + side/4}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
          pointerEvents="none"
        >
          b
        </text>
        <text
          x={x + side * 2 + side/2}
          y={y + side/4 + 8}
          fontSize={4}
          textAnchor="middle"
          fill="#fafbfd"
          fontFamily="neue-haas-unica, sans-serif"
          pointerEvents="none"
        >
          NEXT
        </text>
      </g>

      {/* END button */}
      <g
        className={`cursor-pointer ${
          currentStepCount === 9
            ? "opacity-50 pointer-events-none"
            : "opacity-75 hover:opacity-100"
        }`}
        onClick={() => {
          if (currentStepCount < 9) setCurrentStepCount(8);
        }}
      >
        <rect
          x={x + side * 3}
          y={y}
          width={side}
          height={side}
          fill="transparent"
        />
        <line stroke="white" strokeWidth={0.75} x1={x + side * 3 + 14} x2={x + side * 3 + 14} y1={y + 3} y2={y + 8} />
        <text
          x={x + side * 3 + side/2}
          y={y + side/4}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fafbfd"
          fontSize={10}
          fontFamily="DxD Icons"
          pointerEvents="none"
        >
          b
        </text>
        <text
          x={x + side * 3 + side/2}
          y={y + side/4 + 8}
          fontSize={4}
          textAnchor="middle"
          fill="#fafbfd"
          fontFamily="neue-haas-unica, sans-serif"
          pointerEvents="none"
        >
          END
        </text>
      </g>
    </g>
  );
}
