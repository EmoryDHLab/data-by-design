export default function ColorAreaCovid(props) {
  return (
    <g>
      <path
        d={props.area}
        fill="#3e6620"
        clipPath="url(#covid1)"
        opacity="0.4"
      ></path>
      <clipPath id="covid1">
        <rect width="90" height="50"></rect>
      </clipPath>
    </g>
  )
}