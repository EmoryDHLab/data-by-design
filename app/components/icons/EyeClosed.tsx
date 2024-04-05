// Icon created by https://iconoir.com/
interface Props {
  height?: number;
  y?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
const EyeClosed = ({
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
        d="M19.5 16L17.0248 12.6038"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 17.5V14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.5 16L6.96895 12.6124"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 8C6.6 16 17.4 16 21 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default EyeClosed;
