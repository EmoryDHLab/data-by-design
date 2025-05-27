type Ellipse = {
  cx: number,
  cy: number,
  rx: number,
  ry: number,
}

type Text = {
  text: string,
  x: number,
  y: number
}

interface Props {
  color: string;
  ellipse: Ellipse;
  opacity: number;
  topText: Text;
  midText: Text;
  botText: Text;
}

export default function OvalTitle({ color, ellipse, opacity, topText, midText, botText }: Props) {
  return (
    <g opacity={opacity}>
      <ellipse
        cx={ellipse.cx}
        cy={ellipse.cy}
        rx={ellipse.rx}
        ry={ellipse.ry}
        fill={color}
        stroke="black"
        strokeWidth="0.2"
      >
      </ellipse>
      <text
        fill="black"
        x={topText.x}
        y={topText.y}
        fontFamily="Maranallo"
        fontSize="2.7"
      >
        {topText.text}
      </text>
      <text
        fill="black"
        x={midText.x}
        y={midText.y}
        fontFamily="Chancery Cursive"
        fontSize="2.9"
      >
        {midText.text}
      </text>
      <text
        fill="black"
        x={botText.x}
        y={botText.y}
        fontFamily="Maranallo"
        fontSize="3"
      >
        {botText.text}
      </text>
    </g>
  )
}