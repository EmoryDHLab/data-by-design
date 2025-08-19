interface Props {
  xValue: number;
  yValue: number;
  color?: string;
  radius?: number;
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
}
export default function ScatterPlot({
  xValue,
  yValue,
  color = "none",
  stroke = "none",
  radius = 0.5,
  strokeWidth = 0,
  strokeOpacity = 1,
}: Props) {
  return (
    <circle
      cx={xValue + 5.5}
      cy={yValue + 5.5}
      r={radius}
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
    ></circle>
  );
}
