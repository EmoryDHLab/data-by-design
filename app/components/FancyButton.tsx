import { useRef, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  action?: Dispatch<SetStateAction<any>>;
  className?: string;
  fillColor?: string;
  hoverColor?: string | undefined;
  outlineColor?: string;
  textColor?: string;
  children: ReactNode;
  width?: number;
  height?: number;
  fontSize?: number;
  x?: number;
  y?: number;
}

export default function FancyButton({
  action,
  className,
  fillColor,
  hoverColor,
  outlineColor,
  textColor,
  children,
  width,
  height,
  fontSize,
  x,
  y,
}: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleFocus = () => {
    setIsHovered(true);
  };

  const handleBlur = () => {
    svgRef.current?.blur();
    setIsHovered(false);
  };

  return (
    <svg
      ref={svgRef}
      onClick={action}
      onKeyDown={action}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      onFocus={handleFocus}
      onBlur={handleBlur}
      type="button"
      width={width ?? 87}
      height={height ?? 42}
      viewBox="0 0 87 42"
      fill="none"
      role="button"
      x={x ?? 0}
      y={y ?? 0}
      className={`focus:outline-none ${className ?? ""}`}
      tabIndex={0}
    >
      <path
        d="M70 31H7C4.66 28.66 3.34 27.34 1 25V7C3.34 4.66 4.66 3.34 7 1H70C72.34 3.34 73.66 4.66 76 7V25C73.66 27.34 72.34 28.66 70 31Z"
        stroke={outlineColor ?? "white"}
        strokeWidth={isHovered ? 2.5 : 1.5}
        className={`transition-all fill-${fillColor} stroke-${
          isHovered ? hoverColor : outlineColor ?? "black"
        }`}
        style={{
          filter: `drop-shadow(2px 4px 1px rgb(0 0 0 / ${
            isHovered ? 0.1 : 0.3
          }))`,
        }}
      ></path>
      <text
        x={38.5}
        y={16}
        textAnchor="middle"
        dominantBaseline="central"
        className={`font-dubois fill-${
          isHovered && hoverColor ? hoverColor : textColor ?? "white"
        }`}
        fontSize={fontSize}
      >
        {children}
      </text>
    </svg>
  );
}
