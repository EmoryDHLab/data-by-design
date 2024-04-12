import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  height: number;
  width: number;
  innerGridWidth: number;
}

const ProjectTimelineContainer = ({
  children,
  height,
  width,
  innerGridWidth,
}: Props) => {
  return (
    <svg viewBox="0 0 105 55" className="bg-playfairPrimary">
      <rect
        fill="#F3ECCB"
        className="w-full h-full bg-offwhite"
        strokeWidth={0.5}
        stroke="black"
        height={51}
      />

      <rect
        fill="none"
        x={1}
        y={1}
        height={53}
        width={103}
        stroke="black"
        strokeWidth={0.1}
      ></rect>

      <line
        x1={innerGridWidth}
        y1={5.5}
        x2={innerGridWidth}
        y2={49.5}
        stroke="black"
        strokeWidth={0.1}
      ></line>
      {children}
      <rect
        fill="none"
        x={5.5}
        y={5.5}
        height={height}
        width={width - 4.3}
        stroke="black"
        strokeWidth={0.25}
      ></rect>
    </svg>
  );
};

export default ProjectTimelineContainer;
