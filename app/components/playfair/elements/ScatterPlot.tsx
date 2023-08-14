interface Props {
  xValue: number;
  yValue: number;
  color: string;
}
export default function ScatterPlot({ xValue, yValue, color }: Props) {
  return (
    <circle cx={xValue + 3} cy={yValue + 3} r="0.5" fill={color}></circle>
  )
}