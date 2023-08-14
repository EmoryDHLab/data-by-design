interface Props {
  innerWidth: number;
  yValue: number;
  text: string | number;
  opacity: number
}

export default function HorizontalGrid({ innerWidth, yValue, text, opacity}: Props) {
  return (
    <g>
      <line
        x1={innerWidth}
        y1={yValue + 3}
        x2="3"
        y2={yValue + 3}
        stroke="black"
        opacity={opacity ?? "0.4"}
        strokeWidth="0.2"
      ></line>
      <text
        fill="black"
        x={innerWidth + 0.5}
        y={yValue + 3.4}
        fontFamily="Arial"
        fontSize="1.5"
      >
        {text ?? yValue}
      </text>
    </g>
  )
}