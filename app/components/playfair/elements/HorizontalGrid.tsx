export default function HorizontalGrid(props) {
  return (
    <g>
      <line
        x1={props.innerWidth}
        y1={props.yValue + 3}
        x2="3"
        y2={props.yValue + 3}
        stroke="black"
        opacity={props.opacity ?? "0.4"}
        strokeWidth="0.2"
      ></line>
      <text
        fill="black"
        x={props.innerWidth + 0.5}
        y={props.yValue + 3.4}
        fontFamily="Arial"
        fontSize="1.5"
      >
        {props.text ?? props.yValue}
      </text>
    </g>
  )
}