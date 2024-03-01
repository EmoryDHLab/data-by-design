interface Props {
  xValue: number;
  offset: number;
  opacity?: number;
  text: string | number;
  textOffset: number;
}

export default function VerticalGrid({
  xValue,
  offset,
  opacity,
  text,
  textOffset,
}: Props) {
  return (
    <g>
      <line
        x1={xValue + offset}
        y1={5.5}
        x2={xValue + offset}
        y2={49.5}
        opacity={opacity ?? "0.4"}
        stroke="black"
        strokeWidth={0.1}
      ></line>
      <text
        fill="black"
        x={xValue + textOffset}
        y={47 + offset - 0.5}
        fontFamily="Chancery Cursive"
        fontSize={3.5}
      >
        {text ?? xValue}
      </text>
    </g>
  );
}
