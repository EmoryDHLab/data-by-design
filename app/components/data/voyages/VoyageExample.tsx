function VoyageExample() {
  return (
    <svg viewBox="0 0 296.27 274.49" className="w-full h-full">
      <path
        d="M167.49,69.7c0-34.6-22.59-38.71-32.39-69.2h38.89c7.64,23.36,14.5,16.7,14.5,81.31,0,92.65-95.37-4.39-97.5,122.88-2.13,127.26,108.5,24.63,108.5,94.41,0,55.83-43.93,60.9-43.93,63.83l-17.07,2.06c0-22.28,54-3.97,54-59.8,0-40.32-27.59-22.28-58.5-26.81-22.58-3.3-51.37-19.97-50.47-73.7,2.13-127.27,83.97-42.33,83.97-134.99h0Z"
        fill="#DE003B"
        stroke="black"
      />
      <line
        x1={138}
        x2={138}
        y1={10}
        y2={364}
        stroke="black"
        strokeDasharray={4}
      />
      <g>
        <text
          x={153}
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
          x={179}
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
          x1={156}
          x2={179}
          y1={23.5}
          y2={23.5}
          stroke="black"
          strokeDasharray={4}
        />
      </g>
      <text
        x={195}
        y={20}
        fontSize={12}
        fontFamily="VTC Du Bois, serif"
        className="font-bold uppercase"
      >
        <tspan>Number of people</tspan>
        <tspan x={195} dy={14}>
          at the beginning.
        </tspan>
      </text>

      <text
        x={195}
        y={340}
        fontSize={12}
        fontFamily="VTC Du Bois, serif"
        className="font-bold uppercase"
      >
        <tspan>Number of people</tspan>
        <tspan x={195} dy={14}>
          at the end.
        </tspan>
      </text>

      <text
        x={5}
        y={140}
        fontSize={15}
        fontFamily="VTC Du Bois, serif"
        className="font-bold uppercase"
      >
        <tspan>If the</tspan>
        <tspan x={5} dy={14}>
          duration
        </tspan>
        <tspan x={5} dy={14}>
          of the
        </tspan>
        <tspan x={5} dy={14}>
          voyage is
        </tspan>
        <tspan x={5} dy={14}>
          +++++++
        </tspan>
        <tspan x={5} dy={14}>
          then the
        </tspan>
        <tspan x={5} dy={14}>
          amplitude
        </tspan>
        <tspan x={5} dy={14}>
          increases
        </tspan>
      </text>

      <g>
        <text
          x={95}
          y={200}
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
          y={200}
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
          y1={199}
          y2={199}
          stroke="black"
          strokeDasharray={4}
        />
      </g>
    </svg>
  );
}

export default VoyageExample;
