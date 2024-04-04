// Icon created by https://iconoir.com/
interface Props {
  height?: number;
  y?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
const ChevronUp = ({
  height = 24,
  y = 0,
  color = "#000000",
  strokeWidth = 1.5,
  className,
}: Props) => {
  return (
    <svg
      height={`${height}px`}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      className={className ?? "text-offblack"}
      y={y}
    >
      <path
        d="M6 15L12 9L18 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default ChevronUp;
