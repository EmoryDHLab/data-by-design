interface Props {
  xValue: number;
  yValue: number;
  color: string;
}
export default function ScatterPlot({ xValue, yValue, color }: Props) {
  return (
    <circle cx={xValue + 5.5} cy={yValue + 5.5} r="0.5" fill={color}></circle>
  );
}
