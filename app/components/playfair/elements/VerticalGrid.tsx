export default function VerticalGrid({ xValue, offset, opacity, text }) {
  return (
    <g>
      <line
        x1={xValue + offset}
        y1="3"
        x2={xValue + offset}
        y2="47"
        opacity={opacity?.toString() ? opacity : "0.4"}
        stroke="black"
        strokeWidth="0.1"
      ></line>
      <text
        fill="black"
        x={xValue + offset - 2}
        y={47 + offset - 1}
        fontFamily="Chancery Cursive"
        fontSize="3"
        >{text ? text : xValue}</text
      >
    </g>
  )
}
