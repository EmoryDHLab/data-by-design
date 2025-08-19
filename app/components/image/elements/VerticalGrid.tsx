interface Props {
  xValue: number;
  xOffset: number;
  opacity?: number;
  text: string | number;
  textXOffset?: number;
  textYOffset?: number;
  y1Offset?: number;
  y2Offset?: number;
}

export default function VerticalGrid({
  xValue,
  xOffset,
  opacity,
  text,
  textXOffset = 0,
  textYOffset = 0,
  y1Offset = 0,
  y2Offset = 0,
}: Props) {
  return (
    <g>
      <line
        x1={xValue + xOffset}
        y1={5.5 + y1Offset}
        x2={xValue + xOffset}
        y2={49.5 + y2Offset}
        opacity={opacity ?? "0.4"}
        stroke="black"
        strokeWidth={0.1}
      ></line>
      <text
        fill="black"
        x={xValue + textXOffset}
        y={47 + textYOffset - 0.5}
        fontFamily="Chancery Cursive"
        fontSize={3.5}
      >
        {text ?? xValue}
      </text>
    </g>
  );
}
