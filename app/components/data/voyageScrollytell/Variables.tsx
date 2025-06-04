const fontSize = 11;
const lineHeight = fontSize + 1.2;
const lineSpacing = fontSize + 2.2;
const top = 100;
const end = 300;
const x1 = 0;
const x2 = 100;
const x3 = end - 100;
const y1 = 3 + fontSize;
const y2 = lineHeight * 3.75 + top;
const y3 = lineHeight * 6.5 + top;
const y4 = lineHeight * 10.5 + top;
const y5 = lineHeight * 17.5 + top;
const y6 = lineHeight * 25.5 + top;
const y7 = lineHeight * 33.5 + top;
const y8 = lineHeight * 39.5 + top;
const y9 = lineHeight * 44.5 + top;

const Variables = () => {
  return (
    <g fontSize={fontSize}>
      <text x={x1} y={y1} fontWeight="bold">
        Variable name
      </text>
      <text x={x2} y={y1} fontWeight="bold">
        Description
      </text>
      <text x={x3} y={y1} fontWeight="bold">
        <tspan>
          Derivation <tspan fontStyle="italic">(if</tspan>
        </tspan>{" "}
        <tspan dy={lineHeight} x={x3}>
          <tspan fontStyle="italic">applicable)</tspan>
        </tspan>
      </text>
      <text y={y2} x={x1}>
        Start Date
      </text>{" "}
      .
      <text y={y2} x={x2}>
        <tspan>The date that</tspan>{" "}
        <tspan dy={lineHeight} x={x2}>
          the voyage began
        </tspan>
      </text>
      <text y={y3} x={x1}>
        End Date{" "}
      </text>
      <text>
        <tspan y={y3} x={x2}>
          The date when the
        </tspan>{" "}
        <tspan dy={lineHeight} x={x2}>
          vessel arrived at its
        </tspan>{" "}
        <tspan dy={lineHeight} x={x2}>
          destination.
        </tspan>
      </text>
      <text x={x1} y={y4}>
        <tspan>Total Embarked</tspan>
        <tspan dy={lineHeight + 1} x={x1}>
          [IMP]
        </tspan>
      </text>
      <text y={y4} x={x2}>
        <tspan>The total number of</tspan>
        <tspan dy={lineHeight} x={x2}>
          enslaved individuals
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          who embarked on
        </tspan>{" "}
        <tspan dy={lineHeight} x={x2}>
          the voyage. This
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          variable is an
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          imputed variable.
        </tspan>
      </text>
      <text y={y5} x={x1}>
        <tspan>Total Disembarked</tspan>
        <tspan dy={lineHeight + 1} x={x1}>
          [IMP]
        </tspan>
      </text>
      <text y={y5} x={x2}>
        <tspan>The total number of</tspan>
        <tspan dy={lineHeight} x={x2}>
          enslaved individuals
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          who disembarked at
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          the conclusion of the
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          voyage. This variable{" "}
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          is also an imputed{" "}
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          variable.
        </tspan>
      </text>
      <text x={x1} y={y6}>
        Resistance
      </text>
      <text x={x2} y={y6}>
        <tspan>A binary variable</tspan>
        <tspan dy={lineHeight} x={x2}>
          indicating whether
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          or not a documented
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          act of resistance was
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          recorded, with "1"
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          indicating a record of
        </tspan>
        <tspan dy={lineHeight} x={x2}>
          resistance.
        </tspan>
      </text>
      <text x={x1} y={y7}>
        Mortality Rate
      </text>
      <text x={x2} y={y7}>
        <tspan>The percentage of</tspan>
        <tspan x={x2} dy={lineHeight}>
          individuals who did{" "}
        </tspan>
        <tspan x={x2} dy={lineHeight}>
          not survive the
        </tspan>
        <tspan x={x2} dy={lineHeight}>
          voyage.
        </tspan>
      </text>
      <text x={x3} y={y7}>
        <tspan>Derived by subtracting</tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">Total</tspan>{" "}
          <tspan fontStyle="italic">Disembarked</tspan> from{" "}
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">Total</tspan>{" "}
          <tspan fontStyle="italic">Embarked</tspan> and
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          dividing the result by the
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">Total Embarked</tspan>.
        </tspan>
      </text>
      <text x={x1} y={y8}>
        Duration
      </text>
      <text x={x2} y={y8}>
        <tspan>The duration of a</tspan>
        <tspan x={x2} dy={lineHeight}>
          voyage in days
        </tspan>
      </text>
      <text x={x3} y={y8}>
        <tspan>Derived by calculating</tspan>
        <tspan x={x3} dy={lineHeight}>
          the number of days
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          between <tspan fontStyle="italic">Start Date</tspan> and{" "}
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">End Dote</tspan>.
        </tspan>
      </text>
      <line x1={0} x2={90} y1={0} y2={0} strokeWidth={0.2} stroke="black" />
      <line
        x1={0}
        x2={end}
        y1={y2 - lineSpacing}
        y2={y2 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y3 - lineSpacing}
        y2={y3 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y4 - lineSpacing}
        y2={y4 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y5 - lineSpacing}
        y2={y5 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y6 - lineSpacing}
        y2={y6 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y7 - lineSpacing}
        y2={y7 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y8 - lineSpacing}
        y2={y8 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={end}
        y1={y9 - lineSpacing}
        y2={y9 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
    </g>
  );
};

export default Variables;
