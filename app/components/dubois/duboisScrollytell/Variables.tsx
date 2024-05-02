const fontSize = 2;
const lineHeight = fontSize + 0.5;
const lineSpacing = fontSize + 1;
const x1 = 0;
const x2 = 30;
const x3 = 60;
const y1 = 3;
const y2 = lineHeight * 3.75;
const y3 = lineHeight * 6.5;
const y4 = lineHeight * 10.5;
const y5 = lineHeight * 17.5;
const y6 = lineHeight * 25.5;
const y7 = lineHeight * 33.5;
const y8 = lineHeight * 38.5;
const y9 = lineHeight * 42.5;

const Variables = () => {
  return (
    <svg
      viewBox={`0 0 90 ${lineHeight * 43}`}
      fontSize={fontSize}
      className="h-full"
    >
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
        Total Embarked [IMP]
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
        Total Disembarked [IMP]
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
        <tspan>
          Derived by subtracting <tspan fontStyle="italic">Total</tspan>
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">Disembarked</tspan> from{" "}
          <tspan fontStyle="italic">Total</tspan>
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">Embarked</tspan> and dividing the
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          result by the <tspan fontStyle="italic">Total Embarked</tspan>.
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
        <tspan>Derived by calculating the</tspan>
        <tspan x={x3} dy={lineHeight}>
          number of days between <tspan fontStyle="italic">Start</tspan>
        </tspan>
        <tspan x={x3} dy={lineHeight}>
          <tspan fontStyle="italic">Date</tspan> and{" "}
          <tspan fontStyle="italic">End Dote</tspan>.
        </tspan>
      </text>
      <line x1={0} x2={90} y1={0.2} y2={0.2} strokeWidth={0.2} stroke="black" />
      <line
        x1={0}
        x2={90}
        y1={y2 - lineSpacing}
        y2={y2 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y3 - lineSpacing}
        y2={y3 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y4 - lineSpacing}
        y2={y4 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y5 - lineSpacing}
        y2={y5 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y6 - lineSpacing}
        y2={y6 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y7 - lineSpacing}
        y2={y7 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y8 - lineSpacing}
        y2={y8 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
      <line
        x1={0}
        x2={90}
        y1={y9 - lineSpacing}
        y2={y9 - lineSpacing}
        strokeWidth={0.2}
        stroke="black"
      />
    </svg>
  );
};

export default Variables;
