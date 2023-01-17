import {
  getYearXFromIndex,
  getYearYFromIndex,
  YEAR_WIDTH,
} from "~/components/peabody/peabodyUtils";

export default function TutorialYearSquare({ year, index, active, setActive, children, textColor }) {

  return (
    <svg
      viewBox="0 0 90 90"
      width={YEAR_WIDTH - YEAR_WIDTH / 48}
      height={YEAR_WIDTH - YEAR_WIDTH / 48}
      x={getYearXFromIndex(index)}
      y={getYearYFromIndex(index)}
      onMouseEnter={() => setActive(year)}
      onMouseLeave={() => setActive(undefined)}
    >
      <g>
        <rect fill="white" width="90" height="90" />
        {children}
      </g>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
        className={`font-william text-2xl fill-current pointer-events-none`}
        style={{color: textColor}}
        opacity={active ? 0 : 0.6}
      >
        {year}
      </text>
    </svg>
  )
}