interface Props {
  strokeOpacity: float;
}

export default function Areas({ strokeOpacity }: Props) {
  const options = {
    className: "transition-all duration-1000",
    fillOpacity: 0,
    stroke: "rgb(28 24 23)",
    strokeWidth: 3,
    strokeOpacity,
  };

  return (
    <g>
      {/* Men's Area */}
      <path
        {...options}
        d="m383.29,67.26l1.07,147.61c326.39,3.62,357.58-168.16-1.07-147.61Z"
      />

      {/* Boys' Area */}
      <path
        {...options}
        d="m383.29,67.26c-27.7.79-55.54,2.18-79.96,4.02l1.79,143.58c25.37.7,52.29.65,79.43.02l-1.25-147.61Z"
      />

      {/* Women's Area */}
      <path
        {...options}
        d="m305.69,214.43l-1.94-143.34c-46.9,3.04-99.95,7.99-147.1,13.47.13,43.26.24,82.22.36,122.71,44.44,3.8,100.35,6.05,148.68,7.16Z"
      />

      {/* Girls' Area */}
      <polygon
        {...options}
        points="156.65 104.75 94.54 108.98 94.54 181.85 156.65 182.85 156.65 104.75"
      />
    </g>
  );
}
