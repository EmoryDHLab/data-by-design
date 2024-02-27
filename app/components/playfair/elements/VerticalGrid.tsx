interface Props {
  xValue: number;
  offset: number;
  opacity?: number;
  text: string | number;
}

export default function VerticalGrid({ xValue, offset, opacity, text }: Props) {
  return (
    <g>
      <line
        x1={xValue + offset}
        y1="3"
        x2={xValue + offset}
        y2="47"
        opacity={opacity ?? "0.4"}
        stroke="black"
        strokeWidth="0.1"
      ></line>
      <text
        fill="black"
        x={xValue + offset - 1}
        y={47 + offset - 1}
        fontFamily="Chancery Cursive"
        fontSize="2"
      >
        {text ?? xValue}
      </text>
    </g>
  );
}
