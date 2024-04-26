function VoyageExample() {
  return (
    <svg viewBox="0 0 296.27 274.49" className="w-full h-full">
      <path
        d="m167.49,50.84c0-25.17-22.59-28.16-32.39-50.34h38.89c7.64,16.99,14.5,12.15,14.5,59.15,0,67.4-95.37-3.19-97.5,89.39-2.13,92.57,108.5,17.92,108.5,68.68,0,40.61-43.93,44.3-43.93,46.43l-17.07,1.5c0-16.21,54-2.89,54-43.5,0-29.33-27.59-16.21-58.5-19.5-22.58-2.4-51.37-14.53-50.47-53.61,2.13-92.58,83.97-30.79,83.97-98.2Z"
        fill="#DE003B"
        stroke="black"
      />
      <line
        x1={138}
        x2={138}
        y1={10}
        y2={264}
        stroke="black"
        strokeDasharray={4}
      />
      <g>
        <text
          x={159}
          y={24}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          fontSize={15}
          fontFamily="DxD Icons"
        >
          u
        </text>
        <text
          x={181.5}
          y={24}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          fontSize={15}
          fontFamily="DxD Icons"
        >
          s
        </text>
        <line
          x1={161}
          x2={179}
          y1={23.5}
          y2={23.5}
          stroke="black"
          strokeDasharray={4}
        />
      </g>
      <text
        x={200}
        y={20}
        fontSize={10}
        fontFamily="VTC Du Bois, serif"
        className="font-bold uppercase"
      >
        <tspan>Number of people</tspan>
        <tspan x={200} dy={12}>
          at the beginning.
        </tspan>
      </text>

      <text
        x={200}
        y={250}
        fontSize={10}
        fontFamily="VTC Du Bois, serif"
        className="font-bold uppercase"
      >
        <tspan>Number of people</tspan>
        <tspan x={200} dy={12}>
          at the end.
        </tspan>
      </text>

      <text
        x={10}
        y={140}
        fontSize={10}
        fontFamily="VTC Du Bois, serif"
        className="font-bold uppercase"
      >
        <tspan>If the</tspan>
        <tspan x={10} dy={12}>
          duration of
        </tspan>
        <tspan x={10} dy={12}>
          the voyage is
        </tspan>
        <tspan x={10} dy={12}>
          +++ then the
        </tspan>
        <tspan x={10} dy={12}>
          amplitude
        </tspan>
        <tspan x={10} dy={12}>
          increases
        </tspan>
      </text>

      <g>
        <text
          x={95}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          fontSize={15}
          fontFamily="DxD Icons"
        >
          u
        </text>
        <text
          x={134}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="black"
          fontSize={15}
          fontFamily="DxD Icons"
        >
          s
        </text>
        <line
          x1={98}
          x2={131}
          y1={149.5}
          y2={149.5}
          stroke="black"
          strokeDasharray={4}
        />
      </g>
    </svg>
  );
}

export default VoyageExample;
