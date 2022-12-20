export default function OvalTitle({ color, ellipse, opacity, topText, midText, botText }) {
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