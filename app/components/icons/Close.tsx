// Icon created by https://iconoir.com/
interface Props {
  height?: number;
  y?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  fill?: string;
}

const Close = ({
  height = 24,
  y = 0,
  color = "#000000",
  strokeWidth = 1.5,
  className,
  fill = "none",
}: Props) => {
  return (
    <svg
      height={`${height}px`}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      className={className ?? "text-offblack"}
      y={y}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.17218 14.8284L12.0006 12M14.829 9.17157L12.0006 12M12.0006 12L9.17218 9.17157M12.0006 12L14.829 14.8284"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Close;
