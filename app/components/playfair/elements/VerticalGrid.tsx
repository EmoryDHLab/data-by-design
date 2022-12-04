export default function VerticalGrid(props) {
  return (
    <g>
      <line
        x1={props.xValue + props.offset}
        y1="3"
        x2={props.xValue + props.offset}
        y2="47"
        opacity={props.opacity ? props.opacity : "0.4"}
        stroke="black"
        strokeWidth="0.1"
      ></line>
      <text
        fill="black"
        x={props.xValue + props.offset - 2}
        y={47 + props.offset - 1}
        fontFamily="Chancery Cursive"
        fontSize="3"
        >{props.text ? props.text : props.xValue}</text
      >
    </g>
  )
}
