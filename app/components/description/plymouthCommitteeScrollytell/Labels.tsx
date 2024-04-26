const Labels = () => {
  return (
    <g>
      <text x={450} y={125} fontSize={12} className="fill-offblack">
        <tspan>120 male bodies in</tspan>
        <tspan x={450} dy={16}>
          4 rows of 30.
        </tspan>
      </text>

      <text x={320} y={115} fontSize={12} className="fill-offblack">
        <tspan>72 boy</tspan>
        <tspan x={320} dy={16}>
          bodies in
        </tspan>
        <tspan x={320} dy={16}>
          in 6 rows
        </tspan>
        <tspan x={320} dy={16}>
          of 12.
        </tspan>
      </text>

      <text x={175} y={125} fontSize={12} className="fill-offblack">
        <tspan>84 female bodies in</tspan>
        <tspan x={175} dy={16}>
          4 rows of 21.
        </tspan>
      </text>

      <text x={105} y={123} fontSize={12} className="fill-offblack">
        <tspan>30 girl</tspan>
        <tspan x={105} dy={16}>
          bodies in
        </tspan>
        <tspan x={105} dy={16}>
          3 rows
        </tspan>
        <tspan x={105} dy={16}>
          of 10.
        </tspan>
      </text>
    </g>
  );
};

export default Labels;
