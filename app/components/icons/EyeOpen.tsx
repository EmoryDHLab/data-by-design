// Icon created by https://iconoir.com/
interface Props {
  height?: number;
  y?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
const EyeOpen = ({
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
        d="M3 13C6.6 5 17.4 5 21 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default EyeOpen;
