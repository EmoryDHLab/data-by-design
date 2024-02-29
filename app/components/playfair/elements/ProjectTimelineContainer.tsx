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
    <svg viewBox="0 0 100 50">
      <rect fill="#F3ECCB" className="w-full h-full" />
      {children}
      <rect
        fill="transparent"
        x="3"
        y="3"
        height={height}
        width={width - 4.3}
        stroke="black"
        strokeWidth="0.25"
      ></rect>
      <line
        x1={innerGridWidth}
        y1="3"
        x2={innerGridWidth}
        y2="47"
        stroke="black"
        strokeWidth="0.1"
      ></line>
    </svg>
  );
};

export default ProjectTimelineContainer;
