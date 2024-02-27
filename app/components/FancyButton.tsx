import type { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  action: Dispatch<SetStateAction<any>>;
  className?: string;
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
  outlineColor,
  textColor,
  children,
  width,
  height,
  fontSize,
  x,
  y,
}: Props) {
  return (
    <svg
      onClick={action}
      type="button"
      width={width ?? 77}
      height={height ?? 32}
      viewBox="0 0 77 32"
      fill="none"
      role="button"
      x={x ?? 0}
      y={y ?? 0}
      className={className ?? ""}
    >
      <path
        d="M70 31H7C4.66 28.66 3.34 27.34 1 25V7C3.34 4.66 4.66 3.34 7 1H70C72.34 3.34 73.66 4.66 76 7V25C73.66 27.34 72.34 28.66 70 31Z"
        stroke={outlineColor ?? "white"}
        strokeWidth={1.5}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-dubois"
        fill={textColor ?? "white"}
        fontSize={fontSize}
      >
        {children}
      </text>
    </svg>
  );
}
