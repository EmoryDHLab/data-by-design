export default function ScatterPlot({ xValue, yValue, color }) {
  return (
    <circle cx={xValue + 3} cy={yValue + 3} r="0.5" fill={color}></circle>
  )
}