interface Props {
  xValue: number;
  xOffset: number;
  opacity?: number;
  text: string | number;
  textXOffset?: number;
  textYOffset?: number;
  yOffset?: number;
}

export default function VerticalGrid({
  xValue,
  xOffset,
  opacity,
  text,
  textXOffset = 0,
  textYOffset = 0,
  yOffset = 0,
}: Props) {
  return (
    <g>
      <line
        x1={xValue + xOffset}
        y1={5.5 + yOffset}
        x2={xValue + xOffset}
        y2={49.5 + yOffset}
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
